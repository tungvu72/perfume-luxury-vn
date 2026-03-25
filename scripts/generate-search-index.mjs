/**
 * generate-search-index.mjs
 * Run: node scripts/generate-search-index.mjs
 * Generates src/constants/searchIndex.ts — a lightweight client-side search index
 * (~30KB vs 687KB full mockData). Import this in client components instead of MASTER_PERFUMES.
 */
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

const rootDir = resolve(process.cwd());

// Extract the MASTER_PERFUMES array from mockData.ts using regex
// (avoids TypeScript compilation complexity)
const mockDataText = readFileSync(resolve(rootDir, 'src/constants/mockData.ts'), 'utf-8');

// Parse key fields needed for search using regex
const productBlocks = [];
const idRe = /id:\s*"([^"]+)"/g;
const nameRe = /name:\s*"([^"]+)"/;
const brandRe = /brand:\s*"([^"]+)"/;
const subNameRe = /subName:\s*"([^"]+)"/;
const imageRe = /image:\s*"([^"]+)"/;
const genderRe = /gender:\s*"([^"]+)"/;
const brandSlugRe = /brandSlug:\s*"([^"]+)"/;
const isPublishedRe = /isPublished:\s*(true|false)/;
const tagsRe = /tags:\s*\[([^\]]*)\]/s;

// Split by product blocks (each starts with a { id: entry)
const blocks = mockDataText.split(/\n\s*\{\s*\n/);

for (const block of blocks) {
  const idMatch = block.match(/^\s*id:\s*"([^"]+)"/m);
  if (!idMatch) continue;

  const nameMatch = block.match(nameRe);
  const brandMatch = block.match(brandRe);
  const subNameMatch = block.match(subNameRe);
  const imageMatch = block.match(imageRe);
  const genderMatch = block.match(genderRe);
  const brandSlugMatch = block.match(brandSlugRe);
  const isPublishedMatch = block.match(isPublishedRe);
  const tagsMatch = block.match(tagsRe);

  if (!idMatch || !nameMatch || !brandMatch) continue;

  // Parse tags array
  let tags = [];
  if (tagsMatch) {
    tags = tagsMatch[1]
      .split(',')
      .map(t => t.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }

  productBlocks.push({
    id: idMatch[1],
    name: nameMatch[1],
    brand: brandMatch[1],
    subName: subNameMatch ? subNameMatch[1] : undefined,
    image: imageMatch ? imageMatch[1] : undefined,
    gender: genderMatch ? genderMatch[1] : undefined,
    brandSlug: brandSlugMatch ? brandSlugMatch[1] : undefined,
    isPublished: isPublishedMatch ? isPublishedMatch[1] === 'true' : true,
    tags,
  });
}

const outputTs = `// AUTO-GENERATED — do not edit manually
// Run: node scripts/generate-search-index.mjs to regenerate
// Lightweight search index: ~30KB vs 687KB full mockData
// Only contains fields needed for client-side search: id, name, brand, subName, image, gender, brandSlug, tags

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

export const SEARCH_INDEX: SearchProduct[] = ${JSON.stringify(productBlocks, null, 2)};
`;

writeFileSync(resolve(rootDir, 'src/constants/searchIndex.ts'), outputTs, 'utf-8');
console.log(`✅ Generated searchIndex.ts with ${productBlocks.length} products`);
const sizeKB = Math.round(Buffer.byteLength(outputTs, 'utf-8') / 1024);
console.log(`   Size: ${sizeKB}KB (vs 687KB full mockData)`);
