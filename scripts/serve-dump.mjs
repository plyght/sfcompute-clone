/**
 * Serves the captured site-dump as a local reference site, so screenshot
 * comparison doesn't depend on the network (or on the sandbox trusting the
 * egress proxy's CA).
 *
 *   node scripts/serve-dump.mjs [port]      # default 3001
 *
 * Routes map to site-dump/pages/*.html; everything else is looked up under
 * site-dump/assets/sfcompute.com/, which mirrors the original URL paths.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = new URL("../site-dump/", import.meta.url).pathname;
const PORT = Number(process.argv[2] ?? 3001);

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".woff2": "font/woff2", ".ico": "image/x-icon", ".json": "application/json",
  ".xml": "application/xml", ".txt": "text/plain",
};

const exists = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let path = decodeURIComponent(url.pathname);

  const candidates = [];
  // A bare route is a page.
  const page = path === "/" ? "pages/index.html" : `pages${path.replace(/\/$/, "")}.html`;
  candidates.push(join(ROOT, page));
  // Next's image optimizer: serve the underlying file instead.
  if (path.startsWith("/_next/image") || path.includes("/_next/image")) {
    const inner = url.searchParams.get("url");
    if (inner) candidates.push(join(ROOT, "assets/sfcompute.com", decodeURIComponent(inner)));
  }
  candidates.push(join(ROOT, "assets/sfcompute.com", path));

  for (const file of candidates) {
    if (!(await exists(file))) continue;
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": TYPES[extname(file)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
    return;
  }
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("not in dump: " + path);
}).listen(PORT, () => console.log(`dump served at http://localhost:${PORT}`));
