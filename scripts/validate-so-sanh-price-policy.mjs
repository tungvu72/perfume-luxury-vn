/**
 * Validate /so-sanh price + crawl policy in source.
 * Exit 0 if:
 * - no basePrice.toLocaleString / numeric ₫ rendering on so-sanh page
 * - noindex robots metadata present
 * - no Offer/price JSON-LD on so-sanh
 * - sitemap does not list /so-sanh
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const page = fs.readFileSync(path.join(root, "src/app/so-sanh/page.tsx"), "utf8");
const layout = fs.readFileSync(path.join(root, "src/app/so-sanh/layout.tsx"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "src/app/sitemap.ts"), "utf8");
const robots = fs.readFileSync(path.join(root, "src/app/robots.ts"), "utf8");

const failures = [];

if (/basePrice\.toLocaleString/.test(page)) {
  failures.push("so-sanh page still formats basePrice with toLocaleString");
}
if (/\.basePrice\s*[)}\]]/.test(page) && /toLocaleString|₫|VND|\}$\{/.test(page)) {
  // soft: any remaining basePrice numeric display patterns
  if (/basePrice\s*[\?\.]?\s*toLocaleString|basePrice\s*\|\||\{\s*p\.basePrice/.test(page)) {
    failures.push("so-sanh page appears to render basePrice numerically");
  }
}
if (!/Chưa có giá đối tác được xác minh/.test(page)) {
  failures.push("neutral verified-price placeholder text missing on so-sanh page");
}
if (!/index:\s*false/.test(layout) || !/follow:\s*true/.test(layout)) {
  failures.push("so-sanh layout missing robots noindex,follow");
}
if (/@type['\"]:\s*['\"]Offer|offers\s*:/.test(page + layout)) {
  failures.push("so-sanh must not define Offer/price schema");
}
if (/so-sanh/.test(sitemap) && !/\/\/.*so-sanh/.test(sitemap)) {
  // only fail if so-sanh is actively listed as a URL string
  if (/['"`][^'"`]*so-sanh/.test(sitemap)) {
    failures.push("sitemap must not list /so-sanh");
  }
}

// Googlebot must be allowed to crawl site root (so it can see noindex)
if (!/userAgent:\s*['\"]Googlebot['\"]/.test(robots)) {
  failures.push("robots.ts missing Googlebot rule");
}

// Production must not import puppeteer from app src
function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx|js|mjs|cjs)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}
const srcFiles = walk(path.join(root, "src"));
for (const f of srcFiles) {
  const t = fs.readFileSync(f, "utf8");
  if (/from\s+['\"]puppeteer|require\(['\"]puppeteer/.test(t)) {
    failures.push(`production import of puppeteer in ${path.relative(root, f)}`);
  }
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (pkg.dependencies?.puppeteer || pkg.dependencies?.["puppeteer-core"]) {
  failures.push("puppeteer still listed in production dependencies");
}

if (failures.length) {
  console.error("FAIL validate-so-sanh-price-policy");
  for (const f of failures) console.error(" -", f);
  process.exit(1);
}
console.log("PASS validate-so-sanh-price-policy");
console.log("  no basePrice numeric render on /so-sanh");
console.log("  noindex,follow present");
console.log("  no Offer schema on so-sanh");
console.log("  puppeteer not in production deps/src");
