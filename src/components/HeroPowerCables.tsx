"use client";

import { useEffect, type RefObject } from "react";
import { setAttr, startRafDriver, prefersReducedMotion } from "@/lib/rafDriver";

/** Energy packets per cable. (`4` in the source's inner loop) */
const PACKETS_PER_CABLE = 4;

/** Base particle speed, scaled per cable so all four take the same time. (`en`) */
const PARTICLE_SPEED = 0.06;

/** Easing exponent on the travel parameter — packets accelerate inward. (`es`) */
const PARTICLE_EASE = 1.8;

/** The cables' own `43758.5453 * sin` hash. (`ei`) */
function hash(x: number) {
  const t = 43758.5453 * Math.sin(x);
  return t - Math.floor(t);
}

interface PathSample {
  step: number;
  xs: number[];
  ys: number[];
}

/**
 * Flattens a path into ~2-unit segments once, up front. `getPointAtLength` is
 * far too slow to call 16 times a frame, and these paths never change.
 */
function samplePath(path: SVGPathElement, length: number): PathSample {
  const steps = Math.max(1, Math.ceil(length / 2));
  const step = length / steps;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const point = path.getPointAtLength(i * step);
    xs.push(point.x);
    ys.push(point.y);
  }
  return { step, xs, ys };
}

/** Linear interpolation into a sampled path at `distance` along it. (`q`) */
function pointAt(sample: PathSample, distance: number) {
  const last = sample.xs.length - 1;
  const u = Math.max(0, Math.min(last, distance / sample.step));
  const i = Math.min(Math.floor(u), last - 1);
  const f = u - i;
  return {
    x: sample.xs[i] + (sample.xs[i + 1] - sample.xs[i]) * f,
    y: sample.ys[i] + (sample.ys[i + 1] - sample.ys[i]) * f,
  };
}

/**
 * Animates the energy packets that crawl in along the four power cables and
 * out through the plug lead into the rack.
 *
 * The cables, the lead and the 16 `r="1.3"` dots are already in the static
 * markup (they are server-rendered on the real site too), so this only needs a
 * handle on the `<g data-part="power">` wrapper: it finds the pieces by
 * `data-part` and drives them by attribute.
 */
export function useHeroPowerCables(groupRef: RefObject<SVGGElement | null>) {
  useEffect(() => {
    const group = groupRef.current;
    const svg = group?.ownerSVGElement;
    if (!group || !svg) return;

    const cables = Array.from(group.querySelectorAll<SVGPathElement>('path[data-part="cable"]'));
    const lead = group.querySelector<SVGPathElement>('path[data-part="plug-lead"]');
    const packets = Array.from(group.querySelectorAll<SVGCircleElement>('circle[data-part="packet"]'));
    if (!cables.length || !lead) return;

    const cableLengths = cables.map((path) => path.getTotalLength());
    const cableSamples = cables.map((path, i) => samplePath(path, cableLengths[i]));
    const leadLength = lead.getTotalLength();
    const leadSample = samplePath(lead, leadLength);
    // Longest run wins the reference time; shorter cables are slowed to match.
    const longest = Math.max(...cableLengths.map((length) => length + leadLength), 1);

    const tick = (elapsed: number) => {
      cables.forEach((_, cable) => {
        const cableLength = cableLengths[cable];
        if (!cableLength || !leadLength) return;
        const total = cableLength + leadLength;
        const speed = (longest / total) * PARTICLE_SPEED;

        for (let k = 0; k < PACKETS_PER_CABLE; k++) {
          const el = packets[PACKETS_PER_CABLE * cable + k];
          if (!el) return;
          // Evenly spaced around the loop, offset by a per-packet hash.
          const progress = (hash(5.3 * cable + 9.1 * k) + k / PACKETS_PER_CABLE + elapsed * speed) % 1;
          const travelled = progress ** PARTICLE_EASE * total;
          // Cables are drawn outward from the plug, so distance counts back.
          const point =
            travelled < cableLength
              ? pointAt(cableSamples[cable], cableLength - travelled)
              : pointAt(leadSample, travelled - cableLength);
          setAttr(el, "cx", point.x.toFixed(1));
          setAttr(el, "cy", point.y.toFixed(1));
          // Fade in over the first 6% of the run, out over the last 4%.
          setAttr(el, "opacity", Math.max(0, Math.min(1, progress / 0.06, (1 - progress) / 0.04)).toFixed(2));
        }
      });
    };

    if (prefersReducedMotion()) {
      tick(0);
      return;
    }
    return startRafDriver(svg, tick);
  }, [groupRef]);
}
