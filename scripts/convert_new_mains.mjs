// Convert new batch of main images from Downloads (AVIF/JPG) to WebP
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const downloadsDir = path.join(process.env.USERPROFILE, 'Downloads');
const productsDir = 'd:/anti/perfume-luxury-vn/public/images/products';

// New files to convert (recently downloaded)
const files = [
  '046-chloe-atelier-des-fleurs-rosa-damascena-main',
  '073-miss-dior-essence-new-2025-main',
  '018-byredo-blanche-edp-main',
  '113-guerlain-aqua-allegoria-forte-rosa-palissandro-edp-main',
  '090-ex-nihilo-blue-talisman-main',
  '249-xerjoff-casamorati-mefisto-main',
];

let ok = 0, fail = 0;

for (const f of files) {
  // Try .jpg first, then .avif
  let src = path.join(downloadsDir, `${f}.jpg`);
  if (!fs.existsSync(src)) {
    src = path.join(downloadsDir, `${f}.avif`);
  }
  if (!fs.existsSync(src)) {
    console.log(`⏭  SKIP: ${f} not found in Downloads`);
    fail++;
    continue;
  }

  const dst = path.join(productsDir, `${f}.webp`);
  try {
    await sharp(src).webp({ quality: 85 }).toFile(dst);
    const size = (fs.statSync(dst).size / 1024).toFixed(1);
    console.log(`✅ ${f}.webp (${size} KB)`);
    ok++;
  } catch (e) {
    console.log(`❌ ${f}: ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} OK, ${fail} failed`);
