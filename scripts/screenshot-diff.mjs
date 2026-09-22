/**
 * Side-by-side verification: screenshots the live site and the local clone at
 * desktop + mobile widths.
 *
 *   node scripts/screenshot-diff.mjs [route ...]
 *
 * Output lands in screenshots/<viewport>/<route>.{original,local}.png.
 * Set LOCAL_ONLY=1 to skip the network fetches.
 */
import { chromium } from "playwright";

// The sandbox ships Chromium at a fixed path that may not match the installed
// playwright build, so launch that binary explicitly rather than downloading.
const CHROME = process.env.CHROME_PATH ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const LAUNCH = { executablePath: CHROME, args: ["--no-sandbox"] };
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = process.env.REFERENCE_ORIGIN ?? "http://localhost:3001";
const LOCAL = process.env.LOCAL_ORIGIN ?? "http://localhost:3000";
const OUT = new URL("../screenshots/", import.meta.url).pathname;

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

const routes = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];

const browser = await chromium.launch(LAUNCH);
try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });

    for (const route of routes) {
      const slug = route === "/" ? "index" : route.replace(/^\//, "").replace(/\//g, "-");
      const targets = process.env.LOCAL_ONLY
        ? [["local", LOCAL]]
        : [["original", ORIGIN], ["local", LOCAL]];

      for (const [label, base] of targets) {
        const dest = join(OUT, vp.name, `${slug}.${label}.png`);
        await mkdir(dirname(dest), { recursive: true });
        const page = await ctx.newPage();
        try {
          await page.goto(base + route, { waitUntil: "networkidle", timeout: 45_000 });
          // Scroll the whole page once: lazy images need to enter the viewport,
          // and the scroll-triggered reveals (resell chart, CLI type-out) only
          // fire on intersection. Without this a full-page shot catches placeholders.
          await page.evaluate(async () => {
            const step = window.innerHeight * 0.8;
            for (let y = 0; y < document.body.scrollHeight; y += step) {
              window.scrollTo(0, y);
              await new Promise((r) => setTimeout(r, 180));
            }
            window.scrollTo(0, 0);
          });
          await page.waitForLoadState("networkidle");
          // let the staggered reveals and type-out finish
          await page.waitForTimeout(6000);
          await page.screenshot({ path: dest, fullPage: true });
          console.log(`${vp.name}/${slug} ${label} ✓`);
        } catch (e) {
          console.warn(`${vp.name}/${slug} ${label} ✗ ${e.message.split("\n")[0]}`);
        } finally {
          await page.close();
        }
      }
    }
    await ctx.close();
  }
} finally {
  await browser.close();
}
