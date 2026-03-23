import fs from 'fs';
import path from 'path';

const d = 'data/products';
const files = fs.readdirSync(d).filter(f => f.endsWith('.json'));

console.log('=== CHECK 1: All product URLs using new format ===\n');

let allUrls = [];
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
  const g = j.gender || 'unisex';
  const b = j.brandSlug || j.brand.toLowerCase().replace(/\s+/g, '-');
  const newUrl = `/nuoc-hoa-${g}-${b}-${j.id}`;
  allUrls.push({ id: j.id, file: f, newUrl, gender: g, brand: b });
}

// Show first 5 as sample
console.log('Sample URLs (first 5):');
allUrls.slice(0, 5).forEach(u => console.log(`  ${u.id} -> ${u.newUrl}`));
console.log(`\nTotal products: ${allUrls.length}\n`);

// Check if slug router (page.tsx) uses getProductUrl
console.log('=== CHECK 2: Files referencing old URL patterns ===\n');

const oldPatternFiles = [];
const searchDirs = ['src', 'content', 'memory', 'SOUL.md'];

function searchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    fs.readdirSync(filePath).forEach(child => {
      searchFile(path.join(filePath, child));
    });
    return;
  }
  if (!/\.(ts|tsx|js|jsx|md|json)$/.test(filePath)) return;
  if (filePath.includes('node_modules')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for old URL pattern: /[product-slug] without nuoc-hoa- prefix in links
  // Skip productUrl.ts itself and next.config.ts (those handle the conversion)
  if (filePath.includes('productUrl.ts') || filePath.includes('next.config.ts')) return;
  if (filePath.includes('mockData.ts')) return;
  
  // Look for markdown links like [text](/product-id) that should be [text](/nuoc-hoa-...)
  const oldLinks = content.match(/\]\(\/(?!nuoc-hoa-|bang-xep-hang|thuong-hieu|images|kien-thuc|tac-gia|so-sanh|theo-|ve-chung|#|http)[a-z0-9-]+\)/g);
  if (oldLinks && oldLinks.length > 0) {
    oldPatternFiles.push({ file: filePath, links: oldLinks.slice(0, 5) });
  }
}

searchFile('src');
searchFile('content');

if (oldPatternFiles.length === 0) {
  console.log('No old URL patterns found!');
} else {
  console.log(`Found ${oldPatternFiles.length} files with old URL patterns:`);
  oldPatternFiles.forEach(f => {
    console.log(`\n  ${f.file}:`);
    f.links.forEach(l => console.log(`    ${l}`));
  });
}

// Check KI/memory files with old rules
console.log('\n=== CHECK 3: Memory/doc files with old URL rules ===\n');
['memory/URL_AND_KEYWORD_STRUCTURE.md', 'SOUL.md'].forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes('/[product-slug]') && !content.includes('nuoc-hoa-')) {
      console.log(`OLD RULE in ${f}: still references /[product-slug]`);
    } else if (content.includes('nuoc-hoa-')) {
      console.log(`OK: ${f} has new URL format`);
    } else {
      console.log(`CHECK: ${f}`);
    }
  }
});
