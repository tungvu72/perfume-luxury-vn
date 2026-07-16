/**
 * generate-search-index.mjs
 *
 * Source of truth: src/constants/mockData.ts (MASTER_PERFUMES)
 * Output:          src/constants/searchIndex.ts
 *
 * Usage:
 *   node scripts/generate-search-index.mjs           # regenerate
 *   node scripts/generate-search-index.mjs --check   # validate only (exit 1 if drift)
 *
 * Policy:
 * - only isPublished !== false products are indexed
 * - exclude deprecated product entity aliases (see src/lib/productEntity.ts)
 * - expected catalog search count: 276 (277 source - 1 deprecated)
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const rootDir = resolve(process.cwd());
const mockPath = resolve(rootDir, "src/constants/mockData.ts");
const outPath = resolve(rootDir, "src/constants/searchIndex.ts");
const checkOnly = process.argv.includes("--check");

/** Keep in sync with src/lib/productEntity.ts PRODUCT_ID_ALIASES keys */
const DEPRECATED_PRODUCT_IDS = new Set(["ysl-libre-intense-edp"]);

const mockDataText = readFileSync(mockPath, "utf-8");

/**
 * Extract each top-level product object from MASTER_PERFUMES using brace depth.
 * Avoids splitting on nested `{ seasons / score / images }` which dropped late fields like image.
 */
function extractProductObjects(text) {
  const marker = "export const MASTER_PERFUMES";
  const mStart = text.indexOf(marker);
  if (mStart < 0) throw new Error("MASTER_PERFUMES not found in mockData.ts");
  // Skip TypeScript type brackets (Perfume[]) — find the value array after '='
  const eq = text.indexOf("=", mStart);
  if (eq < 0) throw new Error("MASTER_PERFUMES assignment not found");
  const arrStart = text.indexOf("[", eq);
  if (arrStart < 0) throw new Error("MASTER_PERFUMES array start not found");

  const objects = [];
  let i = arrStart + 1;
  const n = text.length;

  while (i < n) {
    // skip whitespace and commas
    while (i < n && /[\s,]/.test(text[i])) i++;
    if (text[i] === "]") break;
    if (text[i] !== "{") {
      i++;
      continue;
    }

    const objStart = i;
    let depth = 0;
    let inString = false;
    let escaped = false;
    let quote = null;

    for (; i < n; i++) {
      const ch = text[i];
      if (inString) {
        if (escaped) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === quote) {
          inString = false;
          quote = null;
        }
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        inString = true;
        quote = ch;
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          objects.push(text.slice(objStart, i + 1));
          i++;
          break;
        }
      }
    }
  }

  return objects;
}

function fieldString(block, name) {
  const re = new RegExp(
    "(?:^|\\n)\\s*" + name + ":\\s*\"([^\"]*)\"",
    "m"
  );
  const m = block.match(re);
  return m ? m[1] : undefined;
}

function fieldBool(block, name) {
  const re = new RegExp(
    "(?:^|\\n)\\s*" + name + ":\\s*(true|false)",
    "m"
  );
  const m = block.match(re);
  if (!m) return undefined;
  return m[1] === "true";
}

function fieldTags(block) {
  const m = block.match(/(?:^|\n)\s*tags:\s*\[([^\]]*)\]/ms);
  if (!m) return [];
  return m[1]
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function parseProductsFromMock(text) {
  const objects = extractProductObjects(text);
  const products = [];
  const seen = new Set();

  for (const block of objects) {
    const id = fieldString(block, "id");
    const name = fieldString(block, "name");
    const brand = fieldString(block, "brand");
    if (!id || !name || !brand) continue;

    if (seen.has(id)) {
      throw new Error(`Duplicate product id in mockData: ${id}`);
    }
    seen.add(id);

    const isPublishedRaw = fieldBool(block, "isPublished");
    const isPublished = isPublishedRaw === undefined ? true : isPublishedRaw;

    products.push({
      id,
      name,
      brand,
      subName: fieldString(block, "subName"),
      image: fieldString(block, "image"),
      gender: fieldString(block, "gender"),
      brandSlug: fieldString(block, "brandSlug"),
      isPublished,
      tags: fieldTags(block),
    });
  }

  return products;
}

function toSearchItem(p) {
  const item = {
    id: p.id,
    name: p.name,
    brand: p.brand,
  };
  if (p.subName !== undefined) item.subName = p.subName;
  if (p.image !== undefined) item.image = p.image;
  if (p.gender !== undefined) item.gender = p.gender;
  if (p.brandSlug !== undefined) item.brandSlug = p.brandSlug;
  item.isPublished = p.isPublished;
  if (p.tags && p.tags.length) item.tags = p.tags;
  return item;
}

function buildOutput(items) {
  return `// AUTO-GENERATED — do not edit manually
// Run: node scripts/generate-search-index.mjs to regenerate
// Source of truth: src/constants/mockData.ts (published products only)
// Fields: id, name, brand, subName, image, gender, brandSlug, isPublished, tags

export type SearchProduct = {
  id: string;
  name: string;
  brand: string;
  subName?: string;
  image?: string;
  gender?: string;
  brandSlug?: string;
  isPublished?: boolean;
  tags?: string[];
};

export const SEARCH_INDEX: SearchProduct[] = ${JSON.stringify(items, null, 2)};
`;
}

function parseSearchIndexFile(text) {
  const marker = "export const SEARCH_INDEX";
  const start = text.indexOf(marker);
  if (start < 0) throw new Error("SEARCH_INDEX export not found");
  const eq = text.indexOf("=", start);
  if (eq < 0) throw new Error("SEARCH_INDEX assignment not found");
  const arrStart = text.indexOf("[", eq);
  const end = text.lastIndexOf("];");
  if (arrStart < 0 || end < 0) throw new Error("SEARCH_INDEX array bounds not found");
  return JSON.parse(text.slice(arrStart, end + 1));
}

function compare(expected, actual) {
  const report = {
    expectedCount: expected.length,
    actualCount: actual.length,
    onlyExpected: [],
    onlyActual: [],
    fieldMismatches: [],
    imageMismatches: [],
    missingRequired: [],
    unpublishedInIndex: [],
    duplicateActual: 0,
    missingImages: [],
  };

  const expMap = new Map(expected.map((p) => [p.id, p]));
  const actMap = new Map();
  for (const p of actual) {
    if (actMap.has(p.id)) report.duplicateActual += 1;
    actMap.set(p.id, p);
  }

  for (const id of expMap.keys()) {
    if (!actMap.has(id)) report.onlyExpected.push(id);
  }
  for (const id of actMap.keys()) {
    if (!expMap.has(id)) report.onlyActual.push(id);
  }

  const fields = ["name", "brand", "subName", "image", "gender", "brandSlug", "isPublished"];
  for (const [id, exp] of expMap) {
    const act = actMap.get(id);
    if (!act) continue;
    if (!act.id || !act.name || !act.brand) report.missingRequired.push(id);
    if (!act.image) report.missingImages.push(id);

    const diffs = [];
    for (const f of fields) {
      const eNorm = exp[f] === undefined ? null : exp[f];
      const aNorm = act[f] === undefined ? null : act[f];
      if (JSON.stringify(eNorm) !== JSON.stringify(aNorm)) {
        diffs.push(f);
        if (f === "image") {
          report.imageMismatches.push({
            id,
            expected: exp.image,
            actual: act.image,
          });
        }
      }
    }
    const et = JSON.stringify(exp.tags || []);
    const at = JSON.stringify(act.tags || []);
    if (et !== at) diffs.push("tags");
    if (diffs.length) report.fieldMismatches.push({ id, diffs });
  }

  for (const p of actual) {
    if (p.isPublished === false) report.unpublishedInIndex.push(p.id);
  }

  report.ok =
    report.onlyExpected.length === 0 &&
    report.onlyActual.length === 0 &&
    report.fieldMismatches.length === 0 &&
    report.missingRequired.length === 0 &&
    report.unpublishedInIndex.length === 0 &&
    report.duplicateActual === 0;

  return report;
}

// ── main ─────────────────────────────────────────────────────
const all = parseProductsFromMock(mockDataText);
const published = all.filter(
  (p) => p.isPublished !== false && !DEPRECATED_PRODUCT_IDS.has(p.id),
);
const searchItems = published.map(toSearchItem);
const output = buildOutput(searchItems);

const withImage = searchItems.filter((p) => p.image).length;
console.log(`mockData products: ${all.length}`);
console.log(`published:         ${published.length}`);
console.log(`search items:      ${searchItems.length}`);
console.log(`with image:        ${withImage}`);

if (checkOnly) {
  if (!existsSync(outPath)) {
    console.error("FAIL: searchIndex.ts missing");
    process.exit(1);
  }
  const current = readFileSync(outPath, "utf-8");
  const actual = parseSearchIndexFile(current);
  const report = compare(searchItems, actual);
  console.log(
    "validation:",
    JSON.stringify(
      {
        ok: report.ok,
        expectedCount: report.expectedCount,
        actualCount: report.actualCount,
        onlyExpected: report.onlyExpected.length,
        onlyActual: report.onlyActual.length,
        fieldMismatches: report.fieldMismatches.length,
        imageMismatches: report.imageMismatches.length,
        missingRequired: report.missingRequired.length,
        missingImages: report.missingImages.length,
        unpublishedInIndex: report.unpublishedInIndex.length,
        duplicateActual: report.duplicateActual,
        imageMismatchSample: report.imageMismatches.slice(0, 8),
        missingImageSample: report.missingImages.slice(0, 8),
      },
      null,
      2
    )
  );
  if (!report.ok) {
    console.error("FAIL: searchIndex drift from mockData");
    process.exit(1);
  }
  if (current.replace(/\r\n/g, "\n") !== output.replace(/\r\n/g, "\n")) {
    console.error(
      "FAIL: searchIndex formatting differs from generator output (rerun generate)"
    );
    process.exit(1);
  }
  console.log("OK: searchIndex matches mockData (published catalog)");
  process.exit(0);
}

writeFileSync(outPath, output, "utf-8");
const sizeKB = Math.round(Buffer.byteLength(output, "utf-8") / 1024);
console.log(`Wrote ${outPath}`);
console.log(`Size: ${sizeKB}KB`);

const written = parseSearchIndexFile(readFileSync(outPath, "utf-8"));
const report = compare(searchItems, written);
if (!report.ok) {
  console.error("FAIL: post-write validation", report);
  process.exit(1);
}
console.log("OK: generated searchIndex validated");
