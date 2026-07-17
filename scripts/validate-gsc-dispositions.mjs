/**
 * Validate GSC noindex disposition map against product/brand SEO maps.
 * Run: node scripts/validate-gsc-dispositions.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const disp = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/legacyUrlDispositions.json"), "utf8"),
);
const prodSeo = fs.readFileSync(
  path.join(root, "src/lib/productSeoMetadata.ts"),
  "utf8",
);
const brandSeo = fs.readFileSync(
  path.join(root, "src/lib/brandSeoMetadata.ts"),
  "utf8",
);
const articleSeo = fs.readFileSync(
  path.join(root, "src/lib/articleSeoMetadata.ts"),
  "utf8",
);

const productPaths = new Set(
  [...prodSeo.matchAll(/urlPath:\s*`(\/[^`]+)`/g)].map((m) => m[1]),
);
const brandSlugs = new Set(
  [...brandSeo.matchAll(/^\s+"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]),
);
const articleSlugs = new Set(
  [...articleSeo.matchAll(/^\s+"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]),
);

function targetOk(dest) {
  if (!dest) return false;
  if (productPaths.has(dest)) return true;
  const slug = dest.replace(/^\//, "");
  if (brandSlugs.has(slug)) return true;
  if (articleSlugs.has(slug)) return true;
  if (
    [
      "/gioi-thieu",
      "/tac-gia/maison-editorial",
      "/kien-thuc",
      "/thuong-hieu",
      "/",
    ].includes(dest)
  )
    return true;
  return false;
}

const bad = [];
for (const r of disp.redirects) {
  if (!targetOk(r.destination)) bad.push(r);
}

// brandLegacyRedirects source: only brand slugs
const brandRedirectSources = getKnownBrandSlugsFromSeo(brandSeo);
const invalidBrandGen = brandRedirectSources.filter((s) => !brandSlugs.has(s));

function getKnownBrandSlugsFromSeo(text) {
  return [...text.matchAll(/^\s+"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]);
}

const checks = {
  redirectCount: disp.redirects.length,
  goneCount: disp.gone.length,
  badTargets: bad.length,
  productMap: productPaths.size,
  brandMap: brandSlugs.size,
  articleMap: articleSlugs.size,
  invalidBrandGen: invalidBrandGen.length,
};

const pass =
  checks.badTargets === 0 &&
  checks.productMap === 276 &&
  checks.brandMap === 76 &&
  // 14 production baseline + 1 Week-1 D01 owner preview article
  checks.articleMap === 15 &&
  checks.invalidBrandGen === 0 &&
  checks.redirectCount + checks.goneCount >= 64;

console.log(JSON.stringify({ pass, checks, badSample: bad.slice(0, 10) }, null, 2));
process.exit(pass ? 0 : 1);
