/**
 * Constants for the homepage "Resell" calculator, recovered verbatim from the
 * source site's bundle (chunk 2x2mv6t33ponx.js, module 126500 `ResellChart`).
 *
 * The financial constants and the chart geometry are independent hardcodes in
 * the original — USED_GPU_HOURS is NOT derivable from USAGE. Kept literal.
 */

/** x-axis ticks: [label, weekIndex]. */
export const TICKS: [string, number][] = [
  ["", 0],
  ["Wk 2", 2],
  ["Wk 4", 4],
  ["Wk 6", 6],
  ["Wk 8", 8],
  ["Wk 10", 10],
  ["Wk 12", 12],
];

/** Per-week utilization height, in grid rows, across 12 weeks. */
export const USAGE = [3, 3, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1];

export type TierKey = "burst15" | "burst45" | "spot05";

export type Block = {
  /** Top row of the block. */
  r0: number;
  segs: { w0: number; w1: number; r1: number }[];
  tier: TierKey;
  label: string;
};

/** The five resold rectangles drawn over the idle area. */
export const BLOCKS: Block[] = [
  { r0: 0, segs: [{ w0: 0, w1: 4, r1: 2 }], tier: "burst15", label: "Resold at 1.5x rate" },
  {
    r0: 0,
    segs: [
      { w0: 4, w1: 8, r1: 4 },
      { w0: 8, w1: 10, r1: 3 },
    ],
    tier: "burst45",
    label: "Resold at 4.5x rate",
  },
  { r0: 2, segs: [{ w0: 0, w1: 2, r1: 3 }], tier: "spot05", label: "Resold" },
  { r0: 4, segs: [{ w0: 6, w1: 8, r1: 5 }], tier: "spot05", label: "Resold" },
  { r0: 0, segs: [{ w0: 10, w1: 12, r1: 1 }], tier: "spot05", label: "Resold" },
];

export const RESERVED_COST = 302_400;
export const USED_GPU_HOURS = 70_560;
export const BASE_PRICE = RESERVED_COST / USED_GPU_HOURS; // 4.2857… -> "$4.29"
/** Hardcoded as a string upstream; the badge divides by 3 numerically. */
export const RESERVED_PRICE = "3.00";

export const TIERS: { key: TierKey; label: string; rev: number }[] = [
  { key: "burst15", label: "Burst at 1.5x", rev: 15_120 },
  { key: "burst45", label: "Burst at 4.5x", rev: 124_740 },
  { key: "spot05", label: "Spot at 0.5x", rev: 3_780 },
];

export const EASE = "cubic-bezier(0.3, 0.9, 0.4, 1)";
export const FADE = `opacity 0.7s ${EASE}`;
/** easeOutCubic — the tween curve for price, revenue and each row value. */
export const easeOut = (t: number) => 1 - (1 - t) ** 3;
export const TWEEN_MS = 700;
/** Staggered reveal: 100ms, 1000ms, 1900ms. */
export const revealDelay = (i: number) => 100 + 900 * i;

export const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
