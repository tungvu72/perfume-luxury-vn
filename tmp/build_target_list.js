const fs = require('fs');
const path = require('path');

const dir = 'public/images/products';
const files = fs.readdirSync(dir);

const crashingJpegs = [
  'azzaro-the-most-wanted-parfum-main.jpg',
  'creed-absolu-aventus-main.jpg',
  'mugler-alien-edp-main.jpg',
  'parfums-de-marly-althair-main.jpg',
  'mugler-angel-main.jpg'
];

function detectMimeSync(p) {
  try {
    const b = Buffer.alloc(32);
    const fd = fs.openSync(p, 'r');
    fs.readSync(fd, b, 0, 32, 0);
    fs.closeSync(fd);
    const hex = b.toString('hex');
    if (hex.startsWith('ffd8ff')) return 'jpeg';
    if (hex.startsWith('89504e47')) return 'png';
    if (hex.startsWith('52494646') && hex.substring(16,24) === '57454250') return 'webp';
    if (hex.includes('66747970') && (hex.includes('61766966') || hex.includes('6d696631'))) return 'avif';
    return 'unknown';
  } catch (e) {
    return 'error';
  }
}

const targets = new Set();
const categories = {
  avif: [],
  png: [],
  crashing_jpeg: [],
  mismatch_ext: []
};

for (const f of files) {
  if (f.endsWith('.tmp') || f === 'ref' || f === 'bleuchanel edp') continue;
  
  const fullPath = path.join(dir, f);
  const stat = fs.statSync(fullPath);
  if (stat.isDirectory()) continue;
  
  const mime = detectMimeSync(fullPath);
  const ext = path.extname(f).toLowerCase();
  
  let needsProcessing = false;
  
  // 1. Not a native JPEG OR
  if (mime !== 'jpeg') {
    needsProcessing = true;
    if (mime === 'avif') categories.avif.push(f);
    else if (mime === 'png') categories.png.push(f);
  }
  
  // 2. Is one of the known crashing JPEGs
  if (crashingJpegs.includes(f)) {
    needsProcessing = true;
    if (!categories.crashing_jpeg.includes(f)) categories.crashing_jpeg.push(f);
  }
  
  // 3. Extension doesn't match MIME (e.g. .png file but is AVIF or JPEG) - wait, if we process them we will output to .jpg, so we need to process to fix their format.
  const expectedFormat = ext === '.jpg' || ext === '.jpeg' ? 'jpeg' : ext === '.png' ? 'png' : ext === '.avif' ? 'avif' : 'other';
  if (mime !== expectedFormat && mime === 'jpeg') {
    // It's a JPEG but named .png or .avif. Should we process it? Yes, we should probably standardize the name as well, or just re-encode.
    needsProcessing = true;
    categories.mismatch_ext.push(f);
  }

  if (needsProcessing) {
    targets.add(f);
  }
}

console.log(`=== BATCH TARGET LIST ===`);
console.log(`Tổng file union chốt sổ: ${targets.size}`);
console.log(`\nPhân loại:`);
console.log(`- AVIF (nền đen chực chờ): ${categories.avif.length}`);
console.log(`- PNG thật: ${categories.png.length}`);
console.log(`- Lỗi render 400 (Native JPEG nhưng sập): ${categories.crashing_jpeg.length}`);
console.log(`- Lệch Extension nhưng là JPEG: ${categories.mismatch_ext.length}`);

console.log(`\nDanh sách chi tiết (${targets.size} files):`);
const sorted = Array.from(targets).sort();
sorted.forEach(t => console.log(t));
