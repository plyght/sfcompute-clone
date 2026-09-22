#!/usr/bin/env node
/**
 * Regenerates src/data/prices.ts from the captured sfcompute.com homepage dump.
 *
 * The homepage embeds its RSC flight payload in a <script> string literal. The
 * PriceChart props live there as:
 *   "pricesByHardwareType":{"H100":[{"date":"$D2026-09-22T23:59:59.000Z","avg":..,"top":..,"bottom":..}, ...]}
 * `$D` is React's flight marker for a Date; we strip it and keep the ISO string.
 *
 * Usage: node scripts/extract-prices.mjs [--check]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const HTML = resolve(ROOT, "site-dump/pages/index.html");
const OUT = resolve(ROOT, "src/data/prices.ts");
const KEY = '"pricesByHardwareType":';

/** Return the substring of `src` starting at `start` (an opening `{`) through its matching `}`. */
function sliceBalanced(src, start) {
  let depth = 0;
  let inString = false;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (inString) {
      if (ch === "\\") i++;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === "{") depth++;
    else if (ch === "}" && --depth === 0) return src.slice(start, i + 1);
  }
  throw new Error("Unbalanced braces while scanning pricesByHardwareType");
}

function extract(html) {
  const at = html.indexOf(KEY);
  if (at === -1) throw new Error(`Could not find ${KEY} in ${HTML}`);
  const open = html.indexOf("{", at + KEY.length);
  const raw = sliceBalanced(html, open);
  const parsed = JSON.parse(raw);

  const out = {};
  for (const [hardware, rows] of Object.entries(parsed)) {
    out[hardware] = rows.map((row) => {
      const date = String(row.date).startsWith("$D") ? String(row.date).slice(2) : String(row.date);
      return { date, avg: row.avg, top: row.top, bottom: row.bottom };
    });
    // Chronological ascending, matching the order the chart sorts into.
    out[hardware].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }
  return out;
}

function render(data) {
  const snapshot = Object.values(data).flat().reduce((max, p) => (p.date > max ? p.date : max), "");
  const num = (n) => (Object.is(n, -0) ? "0" : String(n));
  const series = Object.entries(data)
    .map(([hardware, rows]) => {
      const body = rows
        .map((p) => `    { date: ${JSON.stringify(p.date)}, avg: ${num(p.avg)}, top: ${num(p.top)}, bottom: ${num(p.bottom)} },`)
        .join("\n");
      return `  ${JSON.stringify(hardware)}: [\n${body}\n  ],`;
    })
    .join("\n");

  return `// AUTO-GENERATED -- do not edit by hand.
// Extracted from the source site's RSC flight payload (sfcompute.com homepage,
// embedded in site-dump/pages/index.html). Snapshot date: ${snapshot.slice(0, 10)}.
// Regenerate with: node scripts/extract-prices.mjs

export type PricePoint = { date: string; avg: number; top: number; bottom: number };

export const PRICES_BY_HARDWARE: Record<string, PricePoint[]> = {
${series}
};
`;
}

const html = readFileSync(HTML, "utf8");
const text = render(extract(html));

if (process.argv.includes("--check")) {
  const current = readFileSync(OUT, "utf8");
  if (current === text) {
    console.log("up to date:", OUT);
  } else {
    console.error("MISMATCH:", OUT);
    process.exit(1);
  }
} else {
  writeFileSync(OUT, text);
  const counts = Object.entries(extract(html)).map(([k, v]) => `${k}=${v.length}`).join(" ");
  console.log(`wrote ${OUT} (${counts})`);
}
