/**
 * Pulls large inline SVGs out of the dumped HTML into standalone JSX components,
 * so the hero artwork stays hand-editable instead of being buried in a page file.
 *
 * Usage: node scripts/extract-svgs.mjs <page.html> <index> > src/components/Foo.tsx
 */
import { readFile } from 'node:fs/promises';

export function svgSpans(s) {
  const out = [];
  for (const m of s.matchAll(/<svg\b/g)) {
    const i = m.index;
    let depth = 0, j = i;
    for (;;) {
      const n = /<(\/?)svg\b/.exec(s.slice(j + 1));
      if (!n) break;
      const k = j + 1 + n.index;
      if (n[1]) { if (depth === 0) { out.push([i, s.indexOf('>', k) + 1]); break; } depth--; }
      else depth++;
      j = k;
    }
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [file, idx] = process.argv.slice(2);
  const html = await readFile(file, 'utf8');
  const sp = svgSpans(html);
  if (idx === undefined) {
    sp.forEach(([a, b], i) => console.log(i, b - a, html.slice(a, a + 120).replace(/\s+/g, ' ')));
  } else {
    const [a, b] = sp[Number(idx)];
    process.stdout.write(html.slice(a, b));
  }
}
