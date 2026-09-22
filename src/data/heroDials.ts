/**
 * Every constant and pure function behind the hero's dial/oscilloscope layer,
 * lifted verbatim from the source bundle's `V()` (module 969917). The original
 * names were single letters; the literal is noted next to each rename so the
 * two can still be diffed.
 *
 * Nothing here touches the DOM — HeroDials.tsx owns that.
 */

/** Cheap hash-to-[0,1). Same `sin` trick the LED twinkle and cables use. (`h`) */
export function hashRand(x: number) {
  const t = 43758.5453 * Math.sin(x);
  return t - Math.floor(t);
}

/* ---------------------------------------------------------------- geometry */

/** Left edge of the plot. (`ed` / `r`) */
export const GRID_LEFT = 325.3;

/** Row pitch; also the height a row band is drawn at. */
export const ROW_PITCH = 15.206;

/** Knob radius unit — `15.206 / 3 + 1` = 6.068666666666667. (`i`) */
export const KNOB_UNIT = ROW_PITCH / 3 + 1;

/** Baseline y of a row: the source wrote it as `33 + 15.206 * row + -4`. */
export function rowBaseline(row: number) {
  return 33 + ROW_PITCH * row + -4;
}

/**
 * Right edge of the plot in user units. 726 on desktop, 604 under the
 * `(max-width: 1023px)` branch. (`eu` / `s`)
 */
export function gridRight(isMobile: boolean) {
  return 736 - (isMobile ? 132 : 10);
}

/** Where the strings hand over to the grid traces: `s + 2i + 4`. (`j` / `l`) */
export function crossoverX(isMobile: boolean) {
  return gridRight(isMobile) + 2 * KNOB_UNIT + 4;
}

/** Initial `extendedWidth` before the first measurement. */
export const DEFAULT_EXTENDED_WIDTH = 1044;

/** Floor for the measured extended width. */
export const MIN_EXTENDED_WIDTH = 856;

/** The SVG's authored width; the resize maths divides by it to get a scale. */
export const ARTWORK_WIDTH = 706;

/* -------------------------------------------------------------- row tables */

/** 18 dial rows. (`u`) */
export const ROW_INDICES = Array.from({ length: 18 }, (_, i) => i);

/** 12 travelling dots per row. (`l`) */
export const DOT_INDICES = Array.from({ length: 12 }, (_, i) => i);

/** Rows drawn in blue — the same set the rack LEDs use. (`x`) */
export const BLUE_ROWS = new Set([2, 5, 7, 9, 12, 14]);

/** Band fills by tone. (`c`) */
export const BAND_FILL = {
  gray: "#FFFFFF",
  hatch: "url(#hd-band-hatch)",
  blue: "#9DBAEE",
} as const;

/** String/trace strokes by tone. (`d`) */
export const TONE_STROKE = {
  gray: "var(--color-dark-200)",
  hatch: "var(--color-dark-200)",
  blue: "#4C78F5",
} as const;

export type Tone = keyof typeof BAND_FILL;

/** Which band a row gets: blue rows first, then a 65/35 gray/hatch split. */
export function rowTone(row: number): Tone {
  if (BLUE_ROWS.has(row)) return "blue";
  return 0.65 > hashRand(4.73 * row + 1.7) ? "gray" : "hatch";
}

/** A dot is "lit" (blue) when its hash clears 0.8. (`o`) */
export function isBluePixel(row: number, dot: number) {
  return hashRand(13.1 * row + 5.7 * dot) > 0.8;
}

/** Per-row waveform shape, picked from four presets by hash. (`f`) */
export interface RowWave {
  a1: number;
  f1: number;
  a2: number;
  f2: number;
  gap: number;
  spikeAmp: number;
  spikeW: number;
}

export const ROW_WAVES: RowWave[] = ROW_INDICES.map((row) => {
  const salt = (k: number) => hashRand(17.7 * row + k);
  switch (Math.floor(4 * hashRand(9.13 * row))) {
    case 0:
      return { a1: 0.8, f1: 0.03, a2: 0.5, f2: 0.013, gap: 55 + 35 * salt(1), spikeAmp: 15, spikeW: 3.5 };
    case 1:
      return { a1: 4.4, f1: 0.026 + 0.012 * salt(2), a2: 2.6, f2: 0.011, gap: 280, spikeAmp: 5, spikeW: 9 };
    case 2:
      return { a1: 1.6, f1: 0.07 + 0.02 * salt(3), a2: 2.1, f2: 0.016, gap: 150, spikeAmp: 9, spikeW: 4.5 };
    default:
      return { a1: 1.7, f1: 0.009, a2: 0.9, f2: 0.021, gap: 300, spikeAmp: 6, spikeW: 11 };
  }
});

/** Per-row random-walk configuration. (`p`) */
export interface RowWalk {
  seed: number;
  base: number;
  volatility: number;
  spring: number;
  xOff: number;
}

export const ROW_WALKS: RowWalk[] = ROW_INDICES.map((row) => ({
  seed: Math.floor(0x80000000 * hashRand(12.9 * row + 4.7)),
  base: row,
  volatility: 1.1 + hashRand(6.13 * row),
  spring: 1.1 + 0.4 * hashRand(2.9 * row),
  xOff: 110 * hashRand(11.3 * row),
}));

/* ------------------------------------------------------------ lane scrolling */

/** Horizontal distance between two lane knots. */
export const LANE_STEP = 110;

/** Lanes buffered per row: `Math.ceil(14.545454545454545) + 8` = 23. (`m`) */
export const LANE_COUNT = Math.ceil(14.545454545454545) + 8;

/** Trace-knot slots, one per buffered lane. (`U`) */
export const KNOT_INDICES = Array.from({ length: LANE_COUNT }, (_, i) => i);

/** Measure lines per blue row. (`H`) */
export const MEASURE_INDICES = [0, 1, 2];

/** Plot scroll speed in user units per second. (`R`) */
export const SCROLL_SPEED = 6.5;

/** Lane wobble frequency and amplitude scale. (`W`, `A`) */
export const WOBBLE_FREQ = 1;
export const WOBBLE_AMP = 1;

/** Random-walk range, in rows, around the row's base. (`P`) */
export const LANE_RANGE = 2.3;

/** Soft-clamp factors for excursions below row 0 / above row 17. (`T`, `I`) */
export const CLAMP_BELOW = 0.8;
export const CLAMP_ABOVE = 0.2;

/**
 * Lets a trace overshoot the first and last row, but compressed — so the plot
 * never hard-clips yet never escapes the artwork either. (`z`)
 */
export function softClamp(v: number, below: number, above: number) {
  return v < 0 ? v * below : v > 17 ? 17 + (v - 17) * above : v;
}

/* -------------------------------------------------------- waveform scalars */

/** Amplitude tiers `[F, L, N]`: quiet / normal / loud rows. */
export const AMPLITUDE_TIERS = [0.45, 1, 1.9];

/** Tier thresholds and the salt mixed into the tier hash. (`O`, `E`, `C`) */
export const TIER_LOW_THRESHOLD = 0.4;
export const TIER_HIGH_THRESHOLD = 0.25;
export const TIER_SALT = 1;

/** Picks a row's amplitude tier. */
export function rowAmplitude(row: number) {
  const roll = hashRand(23.9 * row + 71.3 * TIER_SALT);
  return AMPLITUDE_TIERS[
    roll < TIER_LOW_THRESHOLD ? 0 : roll > 1 - TIER_HIGH_THRESHOLD ? 2 : 1
  ];
}

/** Dot radius at rest, and dot spacing along a string. (`g`, `v`) */
export const DOT_RADIUS = 3.5;
export const DOT_SPACING = 212;

/** How strongly the dots inherit the row's time offset. (`y`) */
export const DOT_DRIFT = 0.78;

/** Waveform time scale and the per-row speed jitter amount. (`j`, `b`) */
export const WAVE_TIME_SCALE = 20.4;
export const ROW_SPEED_JITTER = 0.6;

/** Dotted-string styling. (`k`, `w`) and the unused alt pattern (`M`, `_`, `$`) */
export const DOTTED_STRINGS = true;
export const STRING_DASH_GAP = 3.5;
export const ALT_DASH = false;
export const ALT_DASH_ON = 4;
export const ALT_DASH_OFF = 3;

/** Opacity of a non-blue grid trace, and of the whole dial layer. (`B`, `D`) */
export const FAINT_TRACE_OPACITY = 0.3;
export const DIAL_OPACITY = 1;

/** The saturation knee the waveform is squashed through, verbatim. */
export const WAVE_SATURATION = 2.0029999999999997;

/** Feature flags, exactly as shipped — `traceDots` is off. (`S`) */
export const FEATURES: {
  grid: boolean;
  strings: boolean;
  stringsOpacity: number;
  dots: boolean;
  traces: boolean;
  traceDots: boolean;
  measures: boolean;
  knobs: boolean;
} = {
  grid: true,
  strings: true,
  stringsOpacity: 0.5,
  dots: true,
  traces: true,
  traceDots: false,
  measures: true,
  knobs: true,
};

/* ------------------------------------------------------------- random walk */

/** PRNG the walk is driven by, so every reload draws the same plot. */
export function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 0x100000000;
  };
}

export interface LaneState {
  rand: () => number;
  dir: number;
  lanes: number[];
  phases: number[];
}

/**
 * One step of the row's random walk. `dir` flips most of the time (0.62), and
 * downward steps are slightly longer than upward ones, which is what gives the
 * traces their sawtooth-ish feel. (`K`)
 */
export function randomWalkStep(state: LaneState, cfg: RowWalk, range: number) {
  if (0.62 > state.rand()) state.dir = -state.dir;
  const magnitude = cfg.volatility * (0.55 + 0.75 * state.rand());
  const bias = state.dir < 0 ? 0.85 : 0.7;
  return cfg.base + range * Math.tanh((state.dir * magnitude * bias) / range);
}

/** Seeds a row's lane buffer plus one wobble phase per lane. */
export function createLaneState(cfg: RowWalk, range: number): LaneState {
  const state: LaneState = { rand: mulberry32(cfg.seed), dir: 1, lanes: [], phases: [] };
  for (let i = 0; i < LANE_COUNT; i++) {
    state.lanes.push(i === 0 ? cfg.base : randomWalkStep(state, cfg, range));
    state.phases.push(state.rand() * Math.PI * 2);
  }
  return state;
}

/**
 * Catmull-Rom-style cubic through the lane knots, evaluated at `x`. `spring`
 * is the per-row tangent scale, so stiffer rows overshoot less. (`G`)
 */
export function sampleLanes(
  lanes: number[],
  offset: number,
  cfg: RowWalk,
  gridRightEdge: number,
  x: number,
) {
  const u = (x - (gridRightEdge - 330 + offset + cfg.xOff)) / LANE_STEP;
  const i = Math.min(lanes.length - 2, Math.max(1, Math.floor(u)));
  const f = Math.max(0, Math.min(1, u - i));
  const p0 = lanes[Math.max(0, i - 1)];
  const p1 = lanes[i];
  const p2 = lanes[i + 1];
  const p3 = lanes[Math.min(lanes.length - 1, i + 2)];
  const c1 = p1 + (cfg.spring * (p2 - p0)) / 6;
  const c2 = p2 - (cfg.spring * (p3 - p1)) / 6;
  const m = 1 - f;
  return m * m * m * p1 + 3 * m * m * f * c1 + 3 * m * f * f * c2 + f * f * f * p2;
}

/* --------------------------------------------------------------- shared ease */

/** Smoothstep, used to blend a string into its grid trace over 80 units. */
export function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}
