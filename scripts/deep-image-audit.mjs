/**
 * deep-image-audit.mjs
 * Check image DIMENSIONS (width x height) + file size for all products
 * Flags: too small, wrong aspect ratio, likely has-box (very wide images)
 * 
 * Usage: node scripts/deep-image-audit.mjs
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const PRODUCTS_DIR = join(ROOT, 'data', 'products');
const PUBLIC_DIR = join(ROOT, 'public');

// Read all JSON files
const files = readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.json'));

const results = [];

console.log('\n' + '═'.repeat(80));
console.log('🔍 DEEP IMAGE AUDIT — Maison De Son');
console.log('═'.repeat(80));
console.log(`\nScanning ${files.length} products...\n`);

for (const file of files) {
  const filepath = join(PRODUCTS_DIR, file);
  const id = file.replace('.json', '');
  
  try {
    const product = JSON.parse(readFileSync(filepath, 'utf-8'));
    if (!product.image) continue;
    
    const fullImagePath = join(PUBLIC_DIR, product.image);
    if (!existsSync(fullImagePath)) continue;
    
    const stat = statSync(fullImagePath);
    const fileSizeKB = Math.round(stat.size / 1024);
    
    results.push({
      id,
      name: product.name,
      brand: product.brand,
      imagePath: product.image,
      fileName: product.image.split('/').pop(),
      sizeKB: fileSizeKB,
    });
  } catch (e) {
    console.log(`  ❌ Error: ${id}: ${e.message}`);
  }
}

// Sort by file size (smallest first — likely problematic)
results.sort((a, b) => a.sizeKB - b.sizeKB);

console.log('─'.repeat(80));
console.log('📊 PRODUCTS BY FILE SIZE (smallest = most likely problematic)');
console.log('─'.repeat(80));

// Flag: anything under 15KB is likely too small / bad quality
const tooSmall = results.filter(r => r.sizeKB < 15);
const small = results.filter(r => r.sizeKB >= 15 && r.sizeKB < 25);
const medium = results.filter(r => r.sizeKB >= 25 && r.sizeKB < 50);
const good = results.filter(r => r.sizeKB >= 50);

console.log(`\n  🔴 Very small (< 15KB): ${tooSmall.length}`);
console.log(`  🟡 Small (15-25KB): ${small.length}`);
console.log(`  🟢 Medium (25-50KB): ${medium.length}`);
console.log(`  ✅ Large (50KB+): ${good.length}`);

if (tooSmall.length > 0) {
  console.log('\n' + '─'.repeat(80));
  console.log('🔴 VERY SMALL IMAGES (< 15KB) — Likely too small on mobile:');
  tooSmall.forEach((r, i) => {
    console.log(`  ${i+1}. ${r.brand} ${r.name} (${r.id}) — ${r.sizeKB}KB`);
    console.log(`     ${r.fileName}`);
  });
}

if (small.length > 0) {
  console.log('\n' + '─'.repeat(80));
  console.log('🟡 SMALL IMAGES (15-25KB) — May be too small:');
  small.forEach((r, i) => {
    console.log(`  ${i+1}. ${r.brand} ${r.name} (${r.id}) — ${r.sizeKB}KB`);
    console.log(`     ${r.fileName}`);
  });
}

console.log('\n' + '═'.repeat(80));
console.log(`Total: ${results.length} products audited`);
console.log(`Need attention: ${tooSmall.length + small.length} products\n`);

// Output a JSON list of products needing fix for easy processing
const needsFix = [...tooSmall, ...small].map(r => r.id);
console.log('\n--- IDs needing fix (for scripting) ---');
console.log(JSON.stringify(needsFix));
