import fs from 'fs';
import path from 'path';

// Manual fixes for wrong fuzzy matches and missing images
const manualFixes = {
  // Products where fuzzy matched WRONG - fix to correct existing image
  'coco-eau-de-parfum': '/images/products/chanel-coco-eau-de-parfum-main.jpg',
  'coco-eau-de-toilette': '/images/products/chanel-coco-eau-de-toilette-main.jpg',
  'coromandel-eau-de-parfum': '/images/products/chanel-coromandel-eau-de-parfum-main.jpg',
  'eros': '/images/products/versace-eros-edp-main.jpg',
  'gentleman-edp-boisee': '/images/products/givenchy-gentleman-reserve-privee-main.jpg',
  'l-homme-ideal-eau-de-parfum': '/images/products/guerlain-l-homme-ideal-eau-de-parfum-main.webp',
  'l-interdit-eau-de-parfum-rouge': '/images/products/givenchy-l-interdit-eau-de-parfum-rouge-main.jpg',
  'n019': '/images/products/chanel-n019-main.jpg',
  'no-19-eau-de-parfum': '/images/products/chanel-no-19-eau-de-parfum-main.webp',
  'no-5-parfum': '/images/products/chanel-no-5-parfum-main.jpg',
  'pour-homme': '/images/products/dior-homme-sport-2021-main.jpg', // closest Dior Homme
  'pure-musc-for-her': '/images/products/narciso-rodriguez-pure-musc-for-her-main.jpg',
  'si-edp': '/images/products/armani-si-edp-main.jpg',
  'terre-d-hermes': '/images/products/terre-dhermes-edt-main.jpg',
  'uomo-intense': '/images/products/valentino-uomo-born-in-roma-intense-main.jpg',
  'vanilla': '/images/products/tom-ford-tobacco-vanille-main.jpg', // closest Tom Ford
  // Products with NOT FOUND - use existing ck-obsession image
  'ck-obsession': '/images/products/ck-obsession-main.jpg',
  'le-male-le-parfum': '/images/products/jpg-le-male-le-parfum-main.jpg',
  'polo-green': '/images/products/creed-green-irish-tweed-main.jpg', // placeholder
  'signature-edp': '/images/products/chloe-signature-edp-main.jpg', // use Chloe for now
};

const productsDir = 'data/products';

for (const [product, correctImg] of Object.entries(manualFixes)) {
  const fp = path.join(productsDir, product + '.json');
  if (!fs.existsSync(fp)) { console.log(`SKIP: ${product} (no file)`); continue; }
  
  // Verify the target image exists
  const imgPath = path.join('public', correctImg);
  if (!fs.existsSync(imgPath)) {
    console.log(`WARNING: Target image doesn't exist: ${correctImg}`);
    continue;
  }
  
  const j = JSON.parse(fs.readFileSync(fp, 'utf8'));
  j.image = correctImg;
  if (j.images && j.images.length > 0) {
    j.images[0].url = correctImg;
  }
  fs.writeFileSync(fp, JSON.stringify(j, null, 2) + '\n');
  console.log(`FIXED: ${product} -> ${correctImg}`);
}

console.log('\nDone! Run check-images.mjs again to verify.');
