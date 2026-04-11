// Quick script to generate actual URLs based on the exact same logic as productUrl.ts
const fs = require('fs');
const mockDataLines = fs.readFileSync('d:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');

const regex = /id:\s*"([^"]+)",[\s\S]*?brandSlug:\s*"([^"]+)",[\s\S]*?brand:\s*"([^"]+)",[\s\S]*?(?:name:\s*"([^"]+)",[\s\S]*?)?gender:\s*"([^"]+)"/g;

function getUrl(gender, brandSlug, brand, id) {
    const validGender = gender || 'unisex';
    const validBrand = brandSlug || brand.toLowerCase().replace(/\s+/g, '-');
    return `/nuoc-hoa-${validGender}-${validBrand}-${id}`;
}

const targetIds = [
  "rmni-prive-the-yulong", "musk-kashmir", "the-most-wanted-parfum", "gris-charnel-extrait",
  "her-edp", "man-in-black", "byredo-blanche-edp", "byredo-la-tulipe", "bal-dafrique", "ck-obsession"
];

let match;
const results = [];
while ((match = regex.exec(mockDataLines)) !== null) {
    const id = match[1];
    if (targetIds.includes(id)) {
        const brandSlug = match[2];
        const brand = match[3];
        const name = match[4] || '';
        const gender = match[5];
        results.push({ id, name, url: `https://www.maisondeson.com` + getUrl(gender, brandSlug, brand, id) });
    }
}
console.log(JSON.stringify(results, null, 2));
