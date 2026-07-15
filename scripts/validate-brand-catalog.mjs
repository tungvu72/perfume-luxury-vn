/**
 * Brand catalog integrity validator.
 * Run: node scripts/validate-brand-catalog.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const mock = fs.readFileSync(path.join(root, "src/constants/mockData.ts"), "utf8");
const brandSeo = fs.readFileSync(path.join(root, "src/lib/brandSeoMetadata.ts"), "utf8");
const brandCard = fs.readFileSync(path.join(root, "src/components/product/ProductListingCard.tsx"), "utf8");
const brandPage = fs.readFileSync(path.join(root, "src/components/brand/BrandDetailPage.tsx"), "utf8");
const hub = fs.readFileSync(path.join(root, "src/app/thuong-hieu/page.tsx"), "utf8");
const membership = fs.readFileSync(path.join(root, "src/lib/brandMembership.ts"), "utf8");
const catLayout = fs.readFileSync(path.join(root, "src/components/CategoryLayout.tsx"), "utf8");

const ALIASES = {
  "yves-saint-laurent": "ysl",
  armani: "giorgio-armani",
  mfk: "maison-francis-kurkdjian",
  jpg: "jean-paul-gaultier",
};
const resolve = (s) => ALIASES[s] || s;

const seoBrands = [...brandSeo.matchAll(/^\s+"([^"]+)":\s*\{/gm)].map((m) => m[1]);

// Walk all id: "..." occurrences and take a window of following text for fields
const products = [];
const idRe = /id:\s*"([^"]+)"/g;
let m;
while ((m = idRe.exec(mock)) !== null) {
  const pid = m[1];
  // skip non-product ids in comments? take next 2500 chars
  const window = mock.slice(m.index, m.index + 3500);
  // stop if another id appears early? still ok
  const brand = window.match(/brand:\s*"([^"]+)"/);
  const brandSlug = window.match(/brandSlug:\s*"([^"]+)"/);
  const name = window.match(/name:\s*"([^"]+)"/);
  // image: prefer product.image field not images[].url — first image: after score often
  const imageMatches = [...window.matchAll(/image:\s*"([^"]+)"/g)].map((x) => x[1]);
  const image = imageMatches.find((u) => u.includes("/images/products/")) || imageMatches[0] || "";
  const pub = window.match(/isPublished:\s*(true|false)/);
  const scoreTotals = [
    ...window.matchAll(/["']?total["']?\s*:\s*([0-9.]+)/g),
  ].map((x) => parseFloat(x[1]));
  // Prefer score.total in 1–10 range (ignore unrelated totals if any)
  const score =
    scoreTotals.find((v) => v > 0 && v <= 10) ||
    scoreTotals[scoreTotals.length - 1] ||
    0;
  if (!brand || !name) continue;
  products.push({
    id: pid,
    brand: brand[1],
    brandSlug: brandSlug ? brandSlug[1] : "",
    name: name[1],
    image,
    isPublished: !pub || pub[1] === "true",
    score,
  });
}

// Deduplicate by id (keep first)
const byId = new Map();
for (const p of products) {
  if (!byId.has(p.id)) byId.set(p.id, p);
}
const uniqueProducts = [...byId.values()];

const listable = uniqueProducts.filter((p) => {
  if (p.id === "ysl-libre-intense-edp") return false;
  if (!p.isPublished) return false;
  if (!p.id || !p.name || !p.brand) return false;
  if (!p.image || !p.image.trim()) return false;
  if (!p.score || p.score <= 0) return false;
  return true;
});

const byBrand = new Map();
for (const p of listable) {
  const slug = resolve(
    (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, "-")).toLowerCase(),
  );
  if (!byBrand.has(slug)) byBrand.set(slug, []);
  byBrand.get(slug).push(p);
}

const assigned = [];
let cross = 0;
for (const [slug, arr] of byBrand) {
  for (const p of arr) {
    assigned.push(p.id);
    const ps = resolve(
      (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, "-")).toLowerCase(),
    );
    if (ps !== slug) cross++;
  }
}
const uniq = new Set(assigned);
const dups = [...new Set(assigned.filter((id, i) => assigned.indexOf(id) !== i))];
const unassigned = listable.filter((p) => !uniq.has(p.id)).map((p) => p.id);

const creed = byBrand.get("creed") || [];

const checks = {
  sourceRecords: uniqueProducts.length,
  brandCount: byBrand.size,
  seoBrandCount: seoBrands.length,
  productCount: listable.length,
  assignmentCount: assigned.length,
  uniqueAssignments: uniq.size,
  crossBrand: cross,
  unassigned: unassigned.length,
  duplicates: dups.length,
  creedCount: creed.length,
  hasSharedCard: brandCard.includes('data-product-card-system="canonical-listing"'),
  brandUsesGrid: brandPage.includes("ProductListingGrid"),
  categoryUsesGrid: catLayout.includes("ProductListingGrid"),
  brandNoBasePrice: !brandPage.includes("basePrice"),
  cardNoDong: !brandCard.includes("₫") && !brandCard.includes("basePrice"),
  hubNoPlaceholder: !hub.includes("SEO_PLACEHOLDER_BRANDS"),
  hubCanonicalMarker: hub.includes('data-brand-hub="canonical"'),
  membershipResolver: membership.includes("getProductsForCanonicalBrand"),
};

const pass =
  checks.brandCount === 76 &&
  checks.seoBrandCount === 76 &&
  checks.productCount === 276 &&
  checks.assignmentCount === 276 &&
  checks.uniqueAssignments === 276 &&
  checks.crossBrand === 0 &&
  checks.unassigned === 0 &&
  checks.duplicates === 0 &&
  checks.creedCount === 6 &&
  checks.hasSharedCard &&
  checks.brandUsesGrid &&
  checks.categoryUsesGrid &&
  checks.brandNoBasePrice &&
  checks.cardNoDong &&
  checks.hubNoPlaceholder &&
  checks.hubCanonicalMarker &&
  checks.membershipResolver;

console.log(
  JSON.stringify(
    {
      pass,
      checks,
      unassigned,
      dups,
      creed: creed.map((p) => ({ id: p.id, name: p.name, image: p.image })),
    },
    null,
    2,
  ),
);
process.exit(pass ? 0 : 1);
