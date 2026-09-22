/**
 * Loads every route headless and reports console errors, failed requests, and
 * whether the key sections actually rendered.
 *
 *   node scripts/smoke-check.mjs [route ...]
 */
import { chromium } from "playwright";

// The sandbox ships Chromium at a fixed path that may not match the installed
// playwright build, so launch that binary explicitly rather than downloading.
const CHROME = process.env.CHROME_PATH ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const LAUNCH = { executablePath: CHROME, args: ["--no-sandbox"] };

const LOCAL = process.env.LOCAL_ORIGIN ?? "http://localhost:3000";
const routes = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];
const EXPECT = { "/": ["#introduction", "#partners", "#resell", "#prices", "#cli", "#careers"] };

const browser = await chromium.launch(LAUNCH);
const page = await (await browser.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
let failures = 0;

for (const route of routes) {
  const errors = [];
  const failed = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("requestfailed", (r) => failed.push(`${r.url()} ${r.failure()?.errorText}`));
  page.on("response", (r) => r.status() >= 400 && failed.push(`${r.url()} -> ${r.status()}`));

  await page.goto(LOCAL + route, { waitUntil: "networkidle", timeout: 45_000 });
  await page.waitForTimeout(2500);

  const missing = [];
  for (const sel of EXPECT[route] ?? []) {
    if (!(await page.locator(sel).count())) missing.push(sel);
  }

  const bad = errors.length + failed.length + missing.length;
  failures += bad;
  console.log(`${bad ? "✗" : "✓"} ${route}`);
  for (const e of errors) console.log(`   console: ${e}`);
  for (const f of failed) console.log(`   request: ${f}`);
  for (const m of missing) console.log(`   missing: ${m}`);
  page.removeAllListeners();
}

await browser.close();
process.exit(failures ? 1 : 0);
