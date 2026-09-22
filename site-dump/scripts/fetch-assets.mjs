import { mkdir, writeFile, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';

const BASE = '/home/user/sfcompute-clone/site-dump';
const ORIGIN = 'https://sfcompute.com';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else out.push(p);
  }
  return out;
}

function discoverFromHtml(html) {
  const urls = new Set();
  const patterns = [
    /<link[^>]+href="([^"]+)"/g, /<script[^>]+src="([^"]+)"/g,
    /<img[^>]+src="([^"]+)"/g, /<source[^>]+src="([^"]+)"/g,
    /<video[^>]+(?:src|poster)="([^"]+)"/g, /<audio[^>]+src="([^"]+)"/g,
    /<meta[^>]+content="(https?:\/\/[^"]+\.(?:jpe?g|png|webp|gif|svg|avif)[^"]*)"/g,
    /url\((['"]?)([^)'"]+)\1\)/g,
  ];
  for (const re of patterns) {
    let m; while ((m = re.exec(html))) { const v = m[2] ?? m[1]; if (v) urls.add(v); }
  }
  // srcset candidates
  let m; const ss = /srcset="([^"]+)"/g;
  while ((m = ss.exec(html))) for (const part of m[1].split(',')) { const u = part.trim().split(/\s+/)[0]; if (u) urls.add(u); }
  return [...urls];
}

function discoverFromCss(css) {
  const urls = new Set();
  let m;
  const re = /url\((['"]?)([^)'"]+)\1\)/g;
  while ((m = re.exec(css))) urls.add(m[2]);
  const imp = /@import\s+(?:url\()?['"]([^'"]+)['"]/g;
  while ((m = imp.exec(css))) urls.add(m[1]);
  return [...urls];
}

function resolve(u, base) {
  if (!u || u.startsWith('data:') || u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('blob:')) return null;
  try { return new URL(u, base).href; } catch { return null; }
}

const SCOPE_HOSTS = new Set(['sfcompute.com']);
const FONT_IMG = /\.(woff2?|ttf|otf|eot|jpe?g|png|webp|gif|svg|avif|ico|mp4|webm)(\?|$)/i;
function inScope(href) {
  const u = new URL(href);
  if (SCOPE_HOSTS.has(u.hostname)) return true;
  return FONT_IMG.test(u.pathname) || u.hostname.includes('fonts.g');
}

function mirrorPath(href) {
  const u = new URL(href);
  let p = decodeURIComponent(u.pathname);
  if (p.endsWith('/')) p += 'index';
  if (u.search) p += '_' + Buffer.from(u.search).toString('hex').slice(0, 10);
  if (!extname(p)) p += '.bin';
  return join('assets', u.hostname, p);
}

const seen = new Set();
const queue = [];
const manifest = [];
const missing = [];

// seed from all fetched HTML pages
for (const f of await walk(join(BASE, 'pages'))) {
  if (!f.endsWith('.html')) continue;
  const html = await readFile(f, 'utf8');
  const pageUrl = ORIGIN + '/' + f.slice(join(BASE, 'pages').length + 1).replace(/\.html$/, '').replace(/^index$/, '');
  for (const u of discoverFromHtml(html)) {
    const abs = resolve(u, pageUrl);
    if (abs && inScope(abs) && !seen.has(abs)) { seen.add(abs); queue.push({ url: abs, depth: 0 }); }
  }
}
console.log(`seeded ${queue.length} assets`);

async function get(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      return { status: res.status, buf: Buffer.from(await res.arrayBuffer()), ct: res.headers.get('content-type') || '' };
    } catch (e) {
      if (i === tries - 1) return { status: 0, buf: Buffer.alloc(0), ct: '', err: String(e) };
      await new Promise(r => setTimeout(r, 800 * 2 ** i));
    }
  }
}

const MAX_DEPTH = 3;
let active = 0, idx = 0;
async function worker() {
  while (idx < queue.length) {
    const item = queue[idx++];
    const { url, depth } = item;
    const { status, buf, ct, err } = await get(url);
    const rel = mirrorPath(url);
    if (status === 200) {
      let dest = join(BASE, rel);
      try { const st = await stat(dest); if (st.isDirectory()) { dest += '.bin'; rel += '.bin'; } } catch {}
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      manifest.push({ url, path: rel, status, bytes: buf.length, content_type: ct });
      if (depth < MAX_DEPTH) {
        const isCss = ct.includes('css') || url.endsWith('.css');
        const isJs = ct.includes('javascript') || url.endsWith('.js');
        if (isCss || isJs) {
          const text = buf.toString('utf8');
          const found = isCss ? discoverFromCss(text) : [];
          // sourcemaps
          const sm = text.match(/\/\/#\s*sourceMappingURL=(\S+)/);
          if (sm && !sm[1].startsWith('data:')) found.push(sm[1]);
          // js asset refs (fonts/images referenced by static path)
          if (isJs) { let m; const re = /["'`](\/[A-Za-z0-9._\/-]+\.(?:woff2?|svg|png|jpe?g|webp|avif|mp4|webm|json))["'`]/g; while ((m = re.exec(text))) found.push(m[1]); }
          for (const u of found) {
            const abs = resolve(u, url);
            if (abs && inScope(abs) && !seen.has(abs)) { seen.add(abs); queue.push({ url: abs, depth: depth + 1 }); }
          }
        }
      }
    } else {
      missing.push({ url, status, err });
    }
    if (manifest.length % 25 === 0) console.log(`  ...${manifest.length} saved, queue ${queue.length}`);
  }
}
await Promise.all(Array.from({ length: 8 }, worker));
await writeFile(join(BASE, 'meta/assets.json'), JSON.stringify({ assets: manifest, missing }, null, 2));
console.log(`done: ${manifest.length} assets, ${missing.length} missing`);
