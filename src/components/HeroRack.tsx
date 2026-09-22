"use client";

import { useRef } from "react";
import { HeroArtwork } from "./HeroArtwork";
import { HeroDials } from "./HeroDials";
import { useHeroPowerCables } from "./HeroPowerCables";

const EDGE_FADE =
  "linear-gradient(to right, var(--color-page) 0, var(--color-page) 30%, color-mix(in srgb, var(--color-page) 88%, transparent) 45%, color-mix(in srgb, var(--color-page) 68%, transparent) 58%, color-mix(in srgb, var(--color-page) 42%, transparent) 70%, color-mix(in srgb, var(--color-page) 20%, transparent) 80%, transparent 90%)";

/**
 * Hero artwork plus the page-coloured scrims that let the drawing bleed past
 * the reading column and fade out at the viewport edges.
 */
export function HeroRack() {
  // The cables are static markup; only their energy packets move, so the
  // animation reaches them through a ref rather than re-rendering the group.
  const powerRef = useRef<SVGGElement>(null);
  useHeroPowerCables(powerRef);

  return (
    <div className="relative mt-10">
      <div className="relative -z-10 ml-4 w-[calc((100%_-_16px)_*_706_/_736)] translate-x-4 lg:translate-x-0">
        <HeroArtwork dials={<HeroDials />} powerRef={powerRef} />
      </div>

      {/* Vertical seam that hides where the drawing crosses the right rule. */}
      <div
        aria-hidden="true"
        className="-z-20 pointer-events-none absolute -top-[160px] -bottom-[160px] right-0 hidden w-6 translate-x-1/2 lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-page) 40%, var(--color-page) 60%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 180px, black calc(100% - 180px), transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 180px, black calc(100% - 180px), transparent)",
        }}
      />

      {/* Full-bleed side fades. */}
      <div
        aria-hidden="true"
        className="-z-[5] pointer-events-none absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 lg:block"
      >
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: "max(0px, calc((50% - 580px) / 2))", background: EDGE_FADE }}
        />
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: "max(0px, calc((50% - 580px) / 2))",
            background: EDGE_FADE.replace("to right", "to left"),
          }}
        />
      </div>
    </div>
  );
}
