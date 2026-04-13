const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = content.split('\n');

const fixes = [
  ['dubai-musk', '006-dubai-musk-main.webp'],
  ['odyssey-limoni', '009-odyssey-limoni-main.webp'],
  ['odyssey-mandarin-sky', '010-odyssey-mandarin-sky-main.webp'],
  ['rmni-prive-the-yulong', '011-rmni-prive-the-yulong-main.webp'],
  ['byredo-la-tulipe', '019-byredo-la-tulipe-main.webp'],
  ['creed-silver-moutain-water', '054-creed-silver-moutain-water-main.webp'],
  ['miss-dior-parfum-new-2024', '074-miss-dior-parfum-new-2024-main.webp'],
  ['diptyque-doson-edp', '079-diptyque-doson-edp-main.webp'],
  ['diptyque-fleur-de-peau', '080-diptyque-fleur-de-peau-main.webp'],
  ['elizabeth-arden-white-tea-edt', '087-elizabeth-arden-white-tea-edt-main.webp'],
  ['ella-k-pluie-sur-ha-long', '088-ella-k-pluie-sur-ha-long-main.webp'],
  ['deliah-blanc', '175-deliah-blanc-main.webp'],
  ['mfk-a-la-rose', '176-mfk-a-la-rose-main.webp'],
  ['narciso-ambree', '198-narciso-ambree-main.webp'],
];

let count = 0;
for (let i = 0; i < lines.length; i++) {
  for (const [slug, newMain] of fixes) {
    if (lines[i].includes(`id: "${slug}"`)) {
      for (let j = i; j < Math.min(i + 25, lines.length); j++) {
        const imgMatch = lines[j].match(/image:\s*"([^"]+)"/);
        if (imgMatch) {
          const newPath = `/images/products/${newMain}`;
          lines[j] = lines[j].replace(imgMatch[1], newPath);
          count++;
          break;
        }
      }
    }
  }
}

fs.writeFileSync('src/constants/mockData.ts', lines.join('\n'));
console.log(`Updated ${count} main image references`);
