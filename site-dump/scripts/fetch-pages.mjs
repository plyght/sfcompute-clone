import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = 'https://sfcompute.com';
const OUT = new URL('../', import.meta.url).pathname;
const routes = process.argv.slice(2);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

async function get(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' } });
      const buf = Buffer.from(await res.arrayBuffer());
      return { status: res.status, buf, ct: res.headers.get('content-type') || '' };
    } catch (e) {
      if (i === tries - 1) return { status: 0, buf: Buffer.alloc(0), ct: '', err: String(e) };
      await new Promise(r => setTimeout(r, 1000 * 2 ** i));
    }
  }
}

const manifest = [];
for (const r of routes) {
  const url = ROOT + r;
  const rel = r === '/' ? 'pages/index.html' : `pages${r.replace(/\/$/, '')}.html`;
  const dest = join(OUT, rel);
  const { status, buf, ct, err } = await get(url);
  if (status === 200) { await mkdir(dirname(dest), { recursive: true }); await writeFile(dest, buf); }
  manifest.push({ url, path: rel, status, bytes: buf.length, content_type: ct, err });
  console.log(`${status} ${String(buf.length).padStart(8)} ${r}`);
}
await writeFile(join(OUT, 'meta/pages.json'), JSON.stringify(manifest, null, 2));
