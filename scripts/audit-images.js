const fs = require('fs');
const path = require('path');

const imgDir = 'D:/anti/perfume-luxury-vn/public/images/products';
const dataFile = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';

// Get all image files
const imgFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));
const imgSet = new Set(imgFiles);

// Parse mockData for all products
const content = fs.readFileSync(dataFile, 'utf8');
const idRegex = /id:\s*"([^"]+)"/g;
const products = [];
let m;
while ((m = idRegex.exec(content)) !== null) {
  const id = m[1];
  if (products.find(p => p.id === id)) continue; // skip dupes
  
  const idx = m.index;
  const block = content.substring(idx, idx + 600);
  
  // Check image field
  const imgMatch = block.match(/image:\s*(PENDING_IMAGE|"([^"]*)")/);
  const isPending = imgMatch && imgMatch[1] === 'PENDING_IMAGE';
  const imgPath = imgMatch && imgMatch[2] ? imgMatch[2] : null;
  
  // Check if main file exists (try .jpg, .webp, .png)
  const exts = ['.jpg', '.webp', '.png'];
  const hasMain = exts.some(e => imgSet.has(`${id}-main${e}`));
  const hasBottle = exts.some(e => imgSet.has(`${id}-bottle${e}`));
  
  // Get brand/name
  const brandMatch = block.match(/brand:\s*"([^"]*)"/);
  const nameMatch = block.match(/name:\s*"([^"]*)"/);
  const brand = brandMatch ? brandMatch[1] : '?';
  const name = nameMatch ? nameMatch[1] : '?';
  
  products.push({ id, brand, name, isPending, imgPath, hasMain, hasBottle });
}

// Categorize
const full = products.filter(p => p.hasMain && p.hasBottle);
const oneImg = products.filter(p => (p.hasMain || p.hasBottle) && !(p.hasMain && p.hasBottle));
const noImg = products.filter(p => !p.hasMain && !p.hasBottle);
const pendingInCode = products.filter(p => p.isPending);

console.log(`\n=== PRODUCT IMAGE AUDIT ===`);
console.log(`Total products: ${products.length}`);
console.log(`Full (2 ảnh - main + bottle): ${full.length}`);
console.log(`Partial (1 ảnh): ${oneImg.length}`);
console.log(`No image files: ${noImg.length}`);
console.log(`PENDING_IMAGE in code: ${pendingInCode.length}`);

console.log(`\n--- ĐỦ 2 ẢNH (${full.length} SP) ---`);
full.forEach((p, i) => console.log(`${i+1}. ${p.brand} - ${p.name} (${p.id})`));

console.log(`\n--- CÓ 1 ẢNH (${oneImg.length} SP) ---`);
oneImg.forEach((p, i) => {
  const which = p.hasMain ? 'có main, thiếu bottle' : 'có bottle, thiếu main';
  console.log(`${i+1}. ${p.brand} - ${p.name} (${p.id}) — ${which}`);
});

console.log(`\n--- CHƯA CÓ ẢNH (${noImg.length} SP) ---`);
noImg.forEach((p, i) => console.log(`${i+1}. ${p.brand} - ${p.name} (${p.id})`));

// Also check if code still references PENDING_IMAGE but has files
const codeStillPending = products.filter(p => p.isPending && p.hasMain);
if (codeStillPending.length > 0) {
  console.log(`\n--- CÓ ẢNH NHƯNG CODE VẪN PENDING (${codeStillPending.length}) ---`);
  codeStillPending.forEach(p => console.log(`  ${p.id}`));
}
