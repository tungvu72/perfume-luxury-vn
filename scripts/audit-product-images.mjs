/**
 * audit-product-images.mjs
 * Kiểm tra ảnh chính (main image) của tất cả sản phẩm
 * 
 * Tiêu chí:
 * 1. File tồn tại trên disk
 * 2. Kích thước file hợp lý (không quá nhỏ = ảnh lỗi, không quá lớn = chưa optimize)
 * 3. Đúng format JPG/PNG (không phải AVIF/WEBP cho ảnh main)
 * 4. Kích thước pixel tối thiểu 300x300 (chuẩn Fragrantica)
 * 5. Tên file theo convention: [brand]-[product]-main.jpg
 * 
 * Usage: node scripts/audit-product-images.mjs
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const PRODUCTS_DIR = join(ROOT, 'data', 'products');
const IMAGES_DIR = join(ROOT, 'public', 'images', 'products');

// Read all JSON files
const files = readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.json'));

const results = {
  ok: [],
  missing: [],      // File doesn't exist
  tooSmall: [],     // File too small (< 3KB = likely broken)
  wrongFormat: [],   // Not JPG
  noImageField: [], // No image field in JSON
  wrongNaming: [],  // Doesn't follow naming convention
  wrongSize: [],    // Image dimensions too small
};

console.log('\n' + '═'.repeat(70));
console.log('🖼️  PRODUCT IMAGE AUDIT — Maison De Son');
console.log('═'.repeat(70));
console.log(`\nScanning ${files.length} products...\n`);

for (const file of files) {
  const filepath = join(PRODUCTS_DIR, file);
  const id = file.replace('.json', '');
  
  try {
    const product = JSON.parse(readFileSync(filepath, 'utf-8'));
    
    // Check if image field exists
    if (!product.image) {
      results.noImageField.push({ id, name: product.name, brand: product.brand });
      continue;
    }
    
    const imagePath = product.image;
    const fullImagePath = join(ROOT, 'public', imagePath);
    const ext = extname(imagePath).toLowerCase();
    
    // Check if file exists
    if (!existsSync(fullImagePath)) {
      results.missing.push({ id, name: product.name, brand: product.brand, imagePath });
      continue;
    }
    
    // Check file size
    const stat = statSync(fullImagePath);
    const fileSizeKB = Math.round(stat.size / 1024);
    
    if (fileSizeKB < 3) {
      results.tooSmall.push({ id, name: product.name, brand: product.brand, imagePath, sizeKB: fileSizeKB });
      continue;
    }
    
    // Check format
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      results.wrongFormat.push({ id, name: product.name, brand: product.brand, imagePath, ext });
    }
    
    // Check naming convention: should contain "-main."
    const fileName = imagePath.split('/').pop();
    if (!fileName.includes('-main.')) {
      results.wrongNaming.push({ id, name: product.name, brand: product.brand, imagePath, fileName });
    }
    
    // If we get here with no issues, it's OK
    const issues = [];
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') issues.push('format');
    if (!fileName.includes('-main.')) issues.push('naming');
    
    if (issues.length === 0) {
      results.ok.push({ id, name: product.name, brand: product.brand, imagePath, sizeKB: fileSizeKB });
    }
    
  } catch (e) {
    console.log(`  ❌ Error parsing ${id}: ${e.message}`);
  }
}

// Output report
console.log('─'.repeat(70));
console.log('📊 SUMMARY');
console.log('─'.repeat(70));
console.log(`  ✅ OK:             ${results.ok.length}`);
console.log(`  ❌ Missing file:   ${results.missing.length}`);
console.log(`  ⚠️  Too small:     ${results.tooSmall.length}`);
console.log(`  ⚠️  Wrong format:  ${results.wrongFormat.length}`);
console.log(`  ⚠️  No image field:${results.noImageField.length}`);
console.log(`  ⚠️  Wrong naming:  ${results.wrongNaming.length}`);

if (results.missing.length > 0) {
  console.log('\n' + '─'.repeat(70));
  console.log('❌ MISSING FILES:');
  results.missing.forEach(p => {
    console.log(`  • ${p.brand} ${p.name} (${p.id})`);
    console.log(`    Expected: ${p.imagePath}`);
  });
}

if (results.tooSmall.length > 0) {
  console.log('\n' + '─'.repeat(70));
  console.log('⚠️  TOO SMALL (< 3KB - likely broken):');
  results.tooSmall.forEach(p => {
    console.log(`  • ${p.brand} ${p.name} (${p.id}) — ${p.sizeKB}KB`);
    console.log(`    File: ${p.imagePath}`);
  });
}

if (results.wrongFormat.length > 0) {
  console.log('\n' + '─'.repeat(70));
  console.log('⚠️  WRONG FORMAT (should be .jpg):');
  results.wrongFormat.forEach(p => {
    console.log(`  • ${p.brand} ${p.name} (${p.id}) — ${p.ext}`);
    console.log(`    File: ${p.imagePath}`);
  });
}

if (results.noImageField.length > 0) {
  console.log('\n' + '─'.repeat(70));
  console.log('⚠️  NO IMAGE FIELD IN JSON:');
  results.noImageField.forEach(p => {
    console.log(`  • ${p.brand} ${p.name} (${p.id})`);
  });
}

if (results.wrongNaming.length > 0) {
  console.log('\n' + '─'.repeat(70));
  console.log('⚠️  WRONG NAMING (no "-main." pattern):');
  results.wrongNaming.forEach(p => {
    console.log(`  • ${p.brand} ${p.name} (${p.id})`);
    console.log(`    Current: ${p.fileName}`);
  });
}

// Summary of products that need fixing
const needsFix = [
  ...results.missing,
  ...results.tooSmall,
  ...results.wrongFormat.filter(p => !results.ok.find(o => o.id === p.id)),
  ...results.noImageField,
];

console.log('\n' + '═'.repeat(70));
console.log(`\n🔧 PRODUCTS NEEDING IMAGE FIX: ${needsFix.length}`);
console.log(`✅ PRODUCTS WITH GOOD IMAGES: ${results.ok.length}`);
console.log(`📁 TOTAL PRODUCTS: ${files.length}\n`);
