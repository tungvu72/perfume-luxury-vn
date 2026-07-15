/**
 * Capture production brand/category screenshots at 3 breakpoints.
 * Usage: node scripts/capture-brand-visuals.mjs
 */
import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const outDir = "C:\\Projects\\AgentReports\\brand-visual-corrective";
fs.mkdirSync(outDir, { recursive: true });

const pages = [
  { slug: "creed", path: "/creed" },
  { slug: "chanel", path: "/chanel" },
  { slug: "dior", path: "/dior" },
  { slug: "calvin-klein", path: "/calvin-klein" },
  { slug: "thuong-hieu", path: "/thuong-hieu" },
  { slug: "nuoc-hoa-nam", path: "/nuoc-hoa-nam-chinh-hang" },
];

const viewports = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1440", width: 1440, height: 1200 },
];

const BASE = "https://www.maisondeson.com";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36",
    });
    const page = await context.newPage();
    for (const p of pages) {
      const url = BASE + p.path;
      const file = path.join(outDir, `${p.slug}-${vp.name}.png`);
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
        await page.waitForTimeout(1200);
        // scroll to product grid if present
        const grid = page.locator("#danh-sach-san-pham, .nhucau-grid, [data-product-grid-system]").first();
        if (await grid.count()) {
          await grid.scrollIntoViewIfNeeded().catch(() => {});
          await page.waitForTimeout(400);
        }
        await page.screenshot({ path: file, fullPage: false });
        // creed checks
        let creed = null;
        if (p.slug === "creed") {
          const html = await page.content();
          creed = {
            cards: (html.match(/data-product-card-system="canonical-listing"/g) || []).length,
            pids: [...html.matchAll(/data-product-id="([^"]+)"/g)].map((m) => m[1]),
            hasDong: /₫/.test(html) && /\d[\d.,]*\s*₫/.test(html),
            hasNarciso: /narciso/i.test(html),
            shared: html.includes("canonical-listing"),
          };
        }
        results.push({ file, url, viewport: vp.name, ok: true, creed });
        console.log("SHOT", file);
      } catch (e) {
        results.push({ file, url, viewport: vp.name, ok: false, error: String(e) });
        console.error("FAIL", url, e);
      }
    }
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(
    path.join(outDir, "capture-results.json"),
    JSON.stringify(results, null, 2),
  );
  const expected = pages.length * viewports.length;
  const ok = results.filter((r) => r.ok).length;
  console.log(`RESULT ${ok}/${expected}`);
  process.exit(ok === expected ? 0 : 1);
}

main();
