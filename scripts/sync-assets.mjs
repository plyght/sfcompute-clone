// Copies fonts + images out of site-dump/ into public/, with clean names.
// Regenerate with: node scripts/sync-assets.mjs
import { mkdir, copyFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, basename } from 'node:path';

const DUMP = new URL('../site-dump/assets/sfcompute.com/', import.meta.url).pathname;
const PUB = new URL('../public/', import.meta.url).pathname;
const MEDIA = join(DUMP, 'vc-ap-d5fa6a/_next/static/immutable/media');

// Fonts: strip Next's content hash so the @font-face sheet stays readable.
const FONT_RENAME = {
  'ABCDiatype_Regular': 'ABCDiatype-Regular.woff2',
  'ABCDiatype_Medium': 'ABCDiatype-Medium.woff2',
  'ABCDiatype_Bold': 'ABCDiatype-Bold.woff2',
  'ABCDiatypeMono_Regular': 'ABCDiatypeMono-Regular.woff2',
  'ABCDiatypeMono_Medium': 'ABCDiatypeMono-Medium.woff2',
  'ABCOtto_Regular': 'ABCOtto-Regular.woff2',
};

const map = {};
await mkdir(join(PUB, 'fonts'), { recursive: true });
for (const f of await readdir(MEDIA)) {
  if (!f.endsWith('.woff2') || f.endsWith('.min.woff2')) continue;
  const key = Object.keys(FONT_RENAME).find((k) => f.startsWith(k + '-'));
  if (!key) { console.warn('unmapped font', f); continue; }
  await copyFile(join(MEDIA, f), join(PUB, 'fonts', FONT_RENAME[key]));
  map['/fonts/' + FONT_RENAME[key]] = f;
  console.log('font', FONT_RENAME[key]);
}

// Images keep their original site paths (/home/...) so markup needs no rewriting.
async function walk(dir, rel = '') {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { await walk(join(dir, e.name), join(rel, e.name)); continue; }
    if (!/\.(svg|png|jpe?g|webp|avif|ico)$/i.test(e.name)) continue;
    const dest = join(PUB, rel, e.name);
    await mkdir(dirname(dest), { recursive: true });
    await copyFile(join(dir, e.name), dest);
    map['/' + join(rel, e.name)] = join(rel, e.name);
  }
}
await walk(join(DUMP, 'home'), 'home');
for (const f of await readdir(DUMP, { withFileTypes: true })) {
  if (f.isFile() && /\.(svg|png|jpe?g|ico|webp)$/i.test(f.name)) {
    await copyFile(join(DUMP, f.name), join(PUB, f.name));
    map['/' + f.name] = f.name;
  }
}
await writeFile(join(PUB, '../scripts/asset-map.json'), JSON.stringify(map, null, 2));
console.log(`\n${Object.keys(map).length} assets synced`);
