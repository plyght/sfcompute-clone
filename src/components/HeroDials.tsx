"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setAttr, useRafDriver } from "@/lib/rafDriver";
import {
  ALT_DASH,
  ALT_DASH_OFF,
  ALT_DASH_ON,
  ARTWORK_WIDTH,
  BAND_FILL,
  BLUE_ROWS,
  clamp01,
  createLaneState,
  crossoverX,
  DEFAULT_EXTENDED_WIDTH,
  DIAL_OPACITY,
  DOT_DRIFT,
  DOT_INDICES,
  DOT_RADIUS,
  DOT_SPACING,
  DOTTED_STRINGS,
  FAINT_TRACE_OPACITY,
  FEATURES,
  GRID_LEFT,
  gridRight,
  hashRand,
  isBluePixel,
  KNOB_UNIT,
  KNOT_INDICES,
  LANE_COUNT,
  LANE_RANGE,
  LANE_STEP,
  MEASURE_INDICES,
  MIN_EXTENDED_WIDTH,
  randomWalkStep,
  rowAmplitude,
  rowBaseline,
  ROW_INDICES,
  ROW_PITCH,
  ROW_SPEED_JITTER,
  ROW_WALKS,
  ROW_WAVES,
  rowTone,
  sampleLanes,
  SCROLL_SPEED,
  smoothstep,
  softClamp,
  STRING_DASH_GAP,
  TONE_STROKE,
  WAVE_SATURATION,
  WAVE_TIME_SCALE,
  WOBBLE_AMP,
  WOBBLE_FREQ,
  CLAMP_ABOVE,
  CLAMP_BELOW,
  type LaneState,
} from "@/data/heroDials";

/** `useLayoutEffect` that keeps quiet during SSR. */
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * The dial / oscilloscope half of the hero artwork — the plot to the right of
 * the rack, where each of the 18 rows is a knob whose "string" leaves the rack,
 * crosses over and becomes a scrolling trace on the grid.
 *
 * Everything moves by mutating SVG attributes from inside one rAF callback;
 * React renders this tree exactly once (twice counting the mount gate) and then
 * never again, because 700 attribute writes a frame through state would be a
 * re-render storm.
 *
 * Like the source, the layer is client-only: the server ships an empty
 * `<g data-part="dials">` and the contents appear after mount.
 */
export function HeroDials() {
  const groupRef = useRef<SVGGElement>(null);

  // Live element handles, indexed by row (and by dot/knot/measure within a row).
  const stringRefs = useRef<(SVGPathElement | null)[]>([]);
  const traceRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const knotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const measureRefs = useRef<(SVGLineElement | null)[]>([]);
  const knobRefs = useRef<(SVGLineElement | null)[]>([]);

  // Simulation state that has to survive frames without re-rendering.
  const laneStates = useRef<LaneState[] | null>(null);
  const laneCounter = useRef(0);

  // How far past the artwork's right edge the plot may run, in user units.
  // The traces bleed out of the 706-wide viewBox to the window edge.
  const [extendedWidth, setExtendedWidth] = useState(DEFAULT_EXTENDED_WIDTH);
  const extendedWidthRef = useRef(extendedWidth);
  extendedWidthRef.current = extendedWidth;

  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(isMobile);
  isMobileRef.current = isMobile;

  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const query = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    setMounted(true);
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const svg = groupRef.current?.ownerSVGElement;
    if (!svg) return;
    const measure = () => {
      const rect = svg.getBoundingClientRect();
      if (!rect.width) return;
      // The SVG is scaled to its column; convert the remaining CSS pixels to
      // the right of it back into user units.
      const scale = rect.width / ARTWORK_WIDTH;
      setExtendedWidth(Math.max(MIN_EXTENDED_WIDTH, (window.innerWidth - rect.left) / scale + 24));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(svg);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useRafDriver(groupRef, (elapsed) => {
    const rightEdge = gridRight(isMobileRef.current);
    const crossover = crossoverX(isMobileRef.current);
    const rightBound = extendedWidthRef.current;

    if (!laneStates.current) {
      laneStates.current = ROW_WALKS.map((cfg) => createLaneState(cfg, LANE_RANGE));
    }
    const states = laneStates.current;

    // The plot scrolls right-to-left; every LANE_STEP units travelled, the
    // oldest lane knot is dropped and a fresh random-walk step pushed on.
    const travelled = elapsed * SCROLL_SPEED;
    const steps = Math.floor(travelled / LANE_STEP);
    while (laneCounter.current < steps) {
      laneCounter.current++;
      states.forEach((state, row) => {
        state.lanes.pop();
        state.lanes.unshift(randomWalkStep(state, ROW_WALKS[row], LANE_RANGE));
        state.phases.pop();
        state.phases.unshift(state.rand() * Math.PI * 2);
      });
    }
    const subStep = travelled - LANE_STEP * steps;

    // A slow per-lane sine on top of the walk, so a parked plot still breathes.
    const wobbled = states.map((state, row) => {
      const amp = (0.22 + 0.16 * ROW_WALKS[row].volatility) * WOBBLE_AMP;
      return state.lanes.map((v, i) => v + amp * Math.sin(elapsed * WOBBLE_FREQ + state.phases[i]));
    });

    for (const row of ROW_INDICES) {
      const baseline = rowBaseline(row);
      const amplitude = rowAmplitude(row);
      // Per-row time offset: rows scroll their waveform at slightly different
      // speeds so the rack never looks like one synchronised machine.
      const drift =
        elapsed * (WAVE_TIME_SCALE * (1 - ROW_SPEED_JITTER / 2 + hashRand(5.77 * row) * ROW_SPEED_JITTER));

      const string = stringRefs.current[row];
      if (!string) continue;
      const wave = ROW_WAVES[row];

      /** y of the string at x: synthetic waveform inside the rack, traced plot past the crossover. */
      const stringY = (x: number) => {
        if (x >= crossover && wobbled[row]) {
          const traced =
            33 +
            ROW_PITCH *
              softClamp(
                sampleLanes(wobbled[row], subStep, ROW_WALKS[row], rightEdge, x),
                CLAMP_BELOW,
                CLAMP_ABOVE,
              ) +
            -4;
          return baseline + smoothstep(Math.min(1, (x - crossover) / 80)) * (traced - baseline);
        }
        const rel = x - drift;
        const base =
          (Math.sin(rel * wave.f1 + 1.7 * row) * wave.a1 + Math.sin(rel * wave.f2 + 0.8 * row) * wave.a2) *
          amplitude;
        // One jittered spike per `gap`, Gaussian-shaped, on top of the sines.
        const spacing = wave.gap / Math.max(0.35, amplitude);
        const slot = Math.round(rel / spacing);
        const centre = slot * spacing + (hashRand(7.1 * slot + 13.7 * row) - 0.5) * spacing * 0.4;
        const height = (hashRand(3.3 * slot + 5.1 * row) - 0.3) * wave.spikeAmp * amplitude;
        const falloff = (rel - centre) / wave.spikeW;
        return (
          baseline +
          WAVE_SATURATION *
            Math.tanh((base + height * Math.exp(-falloff * falloff)) / WAVE_SATURATION) *
            // Flatten into the crossover so the string meets the trace level.
            clamp01((crossover - x) / 12)
        );
      };

      // Sampled every 5 units in the *waveform's* frame, so the sample points
      // travel with the wave instead of shimmering against a fixed grid.
      const first = 5 * Math.floor((GRID_LEFT - drift) / 5) + 5;
      let d = `M${GRID_LEFT.toFixed(1)} ${stringY(GRID_LEFT).toFixed(1)}`;
      for (let step = first; step + drift <= crossover; step += 5) {
        const x = step + drift;
        if (x <= GRID_LEFT) continue;
        d += `L${x.toFixed(1)} ${stringY(x).toFixed(1)}`;
      }
      setAttr(string, "d", (d += `L${crossover.toFixed(1)} ${baseline.toFixed(1)}`));

      // Travelling dots: 12 per row, evenly spaced, wrapping every 12 * 212.
      const cycle = DOT_INDICES.length * DOT_SPACING;
      for (const dot of DOT_INDICES) {
        const el = dotRefs.current[DOT_INDICES.length * row + dot];
        if (!el) continue;
        const phase = hashRand(7.19 * row) * DOT_SPACING;
        const along = (((dot * DOT_SPACING + phase + drift * DOT_DRIFT) % cycle) + cycle) % cycle;
        const raw = GRID_LEFT + 6 + along;
        // Past the crossover the dots accelerate away 3.5x, so they shoot off
        // the grid rather than crawling across it.
        const cx = raw <= rightEdge ? raw : rightEdge + (raw - rightEdge) * 3.5;
        setAttr(el, "cx", cx.toFixed(1));
        setAttr(el, "cy", stringY(cx).toFixed(1));
        const shrink = clamp01((cx - rightEdge) / 24);
        setAttr(el, "r", (DOT_RADIUS + (2 - DOT_RADIUS) * shrink).toFixed(2));
        const fade = Math.min(1, along / 10, (cycle - along) / 10) * clamp01((rightBound - cx) / 12);
        setAttr(el, "opacity", Math.max(0, fade).toFixed(2));
      }

      const trace = traceRefs.current[row];
      const lanes = wobbled[row];
      if (!trace || !lanes) continue;

      const walk = ROW_WALKS[row];
      const knobCx = rightEdge + KNOB_UNIT + 4;
      const traceStart = knobCx + KNOB_UNIT; // === crossover

      /** y of any row's grid trace at x — needed cross-row by the measure lines. */
      const traceY = (r: number, x: number) => {
        const rowBase = rowBaseline(r);
        const plotted =
          33 +
          ROW_PITCH *
            softClamp(sampleLanes(wobbled[r], subStep, ROW_WALKS[r], rightEdge, x), CLAMP_BELOW, CLAMP_ABOVE) +
          -4;
        return rowBase + (plotted - rowBase) * smoothstep(Math.min(1, (x - traceStart) / 80));
      };

      let path = `M${traceStart.toFixed(1)} ${baseline.toFixed(1)}`;
      for (let x = traceStart + 4; x <= rightBound; x += 4) {
        path += `L${x.toFixed(1)} ${traceY(row, x).toFixed(1)}`;
      }
      setAttr(trace, "d", path);

      // The knob pointer aims at the trace 34 units downstream of the crossover.
      const knob = knobRefs.current[row];
      if (knob) {
        const aimX = traceStart + 34;
        const angle = Math.atan2(traceY(row, aimX) - baseline, aimX - knobCx);
        setAttr(knob, "transform", `rotate(${((180 * angle) / Math.PI).toFixed(1)} ${knobCx} ${baseline})`);
      }

      // Trace knots ride the lane positions themselves (disabled in the ship
      // config, so these refs are normally empty).
      for (let slot = 0; slot < LANE_COUNT; slot++) {
        const el = knotRefs.current[row * LANE_COUNT + slot];
        if (!el) continue;
        const x = rightEdge - 330 + LANE_STEP * slot + subStep + walk.xOff;
        if (x <= knobCx || x > rightBound + LANE_STEP) {
          setAttr(el, "opacity", "0");
          continue;
        }
        setAttr(el, "cx", x.toFixed(1));
        setAttr(el, "cy", traceY(row, x).toFixed(1));
        setAttr(el, "opacity", "1");
      }

      // Measure lines: dashed callipers from this blue row's trace to the
      // nearest other blue trace above or below. Re-rolled every 2.4s.
      for (const index of MEASURE_INDICES) {
        const el = measureRefs.current[row * MEASURE_INDICES.length + index];
        if (!el) continue;
        const span = rightBound - traceStart - 24;
        if (span < 40) {
          setAttr(el, "opacity", "0");
          continue;
        }
        const roll = Math.floor(elapsed / 2.4 + hashRand(3.1 * row + 17.7 * index));
        const x = traceStart + 12 + 8 * Math.floor((hashRand(131.1 * row + 37.3 * index + 771.7 * roll) * span) / 8);
        const from = traceY(row, x);
        const direction = (roll + index + row) % 2 === 0 ? -1 : 1;
        let target = NaN;
        for (const other of ROW_INDICES) {
          if (other === row || !wobbled[other] || !BLUE_ROWS.has(other)) continue;
          const y = traceY(other, x);
          const onTheRightSide = direction < 0 ? y < from - 2 : y > from + 2;
          if (onTheRightSide && (Number.isNaN(target) || Math.abs(y - from) < Math.abs(target - from))) {
            target = y;
          }
        }
        if (Number.isNaN(target)) {
          setAttr(el, "opacity", "0");
          continue;
        }
        setAttr(el, "x1", x.toFixed(1));
        setAttr(el, "x2", x.toFixed(1));
        setAttr(el, "y1", from.toFixed(1));
        setAttr(el, "y2", target.toFixed(1));
        setAttr(el, "opacity", "1");
      }
    }
  });

  const right = gridRight(isMobile);

  if (!mounted) return <g data-part="dials" ref={groupRef} />;

  return (
    <g data-part="dials" ref={groupRef}>
      <defs>
        <pattern
          id="hd-band-hatch"
          patternUnits="userSpaceOnUse"
          width="3.5"
          height="3.5"
          patternTransform="rotate(45)"
        >
          <rect x="-1" y="-1" width="5.5" height="5.5" fill="#FFFFFF" />
          <line x1="1.75" y1="0" x2="1.75" y2="3.5" stroke="#C4C4C8" strokeWidth="0.7" />
        </pattern>
        <linearGradient id="hd-knob-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F6F6" />
          <stop offset="0.3679" stopColor="#EEE" />
          <stop offset="0.6086" stopColor="#EEE" />
          <stop offset="1" stopColor="#F6F6F6" />
        </linearGradient>
        <linearGradient id="hd-string-fade" gradientUnits="userSpaceOnUse" x1={right - 90} y1="0" x2={right} y2="0">
          <stop offset="0" stopColor="var(--color-dark-200)" />
          <stop offset="1" stopColor="var(--color-dark-200)" />
        </linearGradient>
      </defs>

      {FEATURES.grid && (
        <rect
          data-part="grid-backing"
          x={GRID_LEFT}
          y={21.397}
          width={right - GRID_LEFT}
          height={273.70799999999997}
          fill="#DFDFE2"
        />
      )}

      {ROW_INDICES.map((row) => {
        const y = rowBaseline(row);
        const tone = rowTone(row);
        const blue = BLUE_ROWS.has(row);
        return (
          <g data-dial={row} key={row}>
            {FEATURES.grid && (
              <rect
                data-part="row-band"
                x={GRID_LEFT}
                y={y - 7.103}
                width={right - GRID_LEFT}
                height={14.206}
                fill={BAND_FILL[tone]}
              />
            )}

            {FEATURES.strings && (
              <path
                data-part="string"
                data-ink="line"
                fill="none"
                stroke={TONE_STROKE[tone]}
                strokeWidth={DOTTED_STRINGS ? 1.3 : 1}
                strokeDasharray={
                  DOTTED_STRINGS
                    ? `0.1 ${STRING_DASH_GAP}`
                    : ALT_DASH
                      ? `${ALT_DASH_ON} ${ALT_DASH_OFF}`
                      : undefined
                }
                strokeLinecap={DOTTED_STRINGS ? "round" : undefined}
                opacity={FEATURES.stringsOpacity}
                d={`M${GRID_LEFT} ${y}H${right}`}
                ref={(el) => {
                  stringRefs.current[row] = el;
                }}
              />
            )}

            {FEATURES.traces && (
              <path
                data-part="fan-line"
                data-ink="line"
                fill="none"
                stroke={blue ? "#4067D9" : TONE_STROKE[tone]}
                strokeWidth={1}
                opacity={(blue ? 1 : FAINT_TRACE_OPACITY) * DIAL_OPACITY}
                ref={(el) => {
                  traceRefs.current[row] = el;
                }}
              />
            )}

            {FEATURES.dots && (
              <g data-part="pixels">
                {DOT_INDICES.map((dot) => (
                  <circle
                    key={dot}
                    cx={GRID_LEFT}
                    cy={y}
                    r={DOT_RADIUS}
                    fill={
                      isBluePixel(row, dot) ? "#4C78F5" : blue ? "var(--color-light-100)" : "var(--color-dark-100)"
                    }
                    stroke={isBluePixel(row, dot) ? "#3D64D8" : "var(--color-dark-200)"}
                    strokeWidth="0.5"
                    opacity="0"
                    ref={(el) => {
                      dotRefs.current[DOT_INDICES.length * row + dot] = el;
                    }}
                  />
                ))}
              </g>
            )}

            <text
              data-part="row-num"
              data-ink="line"
              x={307.3}
              y={y + 2.2}
              fontSize={7}
              fill="var(--color-dark-300)"
              className="tabular-nums"
            >
              {String(row + 1).padStart(2, "0")}
            </text>

            {FEATURES.traceDots && (
              <g data-part="trace-knots" fill="var(--color-dark-100)" opacity={(blue ? 1 : 0.2) * DIAL_OPACITY}>
                {KNOT_INDICES.map((slot) => (
                  <circle
                    key={slot}
                    r="3"
                    opacity="0"
                    ref={(el) => {
                      knotRefs.current[row * LANE_COUNT + slot] = el;
                    }}
                  />
                ))}
              </g>
            )}

            {FEATURES.measures && blue && (
              <g
                data-part="trace-measures"
                fill="none"
                stroke="#4C78F5"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity={0.3 * DIAL_OPACITY}
              >
                {MEASURE_INDICES.map((index) => (
                  <line
                    key={index}
                    opacity="0"
                    ref={(el) => {
                      measureRefs.current[row * MEASURE_INDICES.length + index] = el;
                    }}
                  />
                ))}
              </g>
            )}
          </g>
        );
      })}

      {FEATURES.knobs && (
        <g data-part="knobs" opacity={DIAL_OPACITY}>
          {ROW_INDICES.map((row) => {
            const y = rowBaseline(row);
            return (
              <g data-part="knob" key={row}>
                <circle
                  cx={right + KNOB_UNIT + 4}
                  cy={y}
                  r={KNOB_UNIT - 1}
                  fill="url(#hd-knob-fill)"
                  stroke="#D6D6D6"
                  strokeWidth="0.7"
                />
                <line
                  x1={right + KNOB_UNIT + 4}
                  y1={y}
                  x2={right + 2 * KNOB_UNIT + 4}
                  y2={y}
                  stroke="var(--color-dark-500)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity={BLUE_ROWS.has(row) ? 1 : 0.4}
                  ref={(el) => {
                    knobRefs.current[row] = el;
                  }}
                />
              </g>
            );
          })}
        </g>
      )}
    </g>
  );
}
