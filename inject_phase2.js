const fs = require('fs');

const dataPath = 'd:/anti/perfume-luxury-vn/src/constants/mockData.ts';
let mockData = fs.readFileSync(dataPath, 'utf8');
const batch = require('./phase2_batch1.json');

// Find the end of export const MASTER_PERFUMES array
// Assuming the file ends with ] or ];
const lastBracketIndex = mockData.lastIndexOf(']');

let appendedCount = 0;
let updatedCount = 0;

for (const item of batch) {
    if (item.images.length === 0) continue;
    if (item.slug === 'anh-chinh-bo-xung') continue;

    // We try to find the product by ID or simple name matching
    // Some folders have weird names, let's use the slug as ID
    const searchId = item.slug;

    const idRegex = new RegExp(`id:\\s*["']${searchId}["']`, 'i');
    const match = idRegex.exec(mockData);

    const imagesStr = item.images.map(img =>
        `{ url: "${img.url}", source: "owner", caption: "Ảnh thực tế sản phẩm", verified: true }`
    ).join(',\n      ');

    if (match) {
        // Exists, update it
        // Check if images array already exists
        const blockStart = match.index;
        const blockEnd = mockData.indexOf('id: "', blockStart + 10);
        const searchBlock = mockData.substring(blockStart, blockEnd !== -1 ? blockEnd : Math.min(blockStart + 2000, mockData.length));

        if (searchBlock.includes('images: [')) {
            // It has images, append to it
            // Simple replace of 'images: [' with 'images: [\n      ' + imagesStr + ','
            mockData = mockData.replace(
                searchBlock,
                searchBlock.replace('images: [', 'images: [\n      ' + imagesStr + ',')
            );
        } else {
            // Find 'image:' and insert 'images: []' after it
            mockData = mockData.replace(
                searchBlock,
                searchBlock.replace(/image:\s*["'].*?["'],/, `$& \n    images: [\n      ${imagesStr}\n    ],`)
            );
        }
        console.log(`Updated existing product: ${searchId}`);
        updatedCount++;
    } else {
        // Appending a skeleton object
        const brand = item.originalFolder.split(' ')[0] || "Unknown";
        const cleanName = item.originalFolder.replace(brand, '').trim() || item.originalFolder;

        const skeleton = `  {
    id: "${searchId}",
    brand: "${brand}",
    name: "${cleanName}",
    gender: "unisex",
    image: "${item.images[0].url}",
    images: [
      ${imagesStr}
    ],
    description: "Chưa cập nhật.",
    verdict: "Chưa có đánh giá.",
    verdictShort: "Chưa có",
    score: { scent: 8, uniqueness: 8, compliments: 8, value: 8, total: 8 },
    vibes: [],
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: [],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: false
  },
`;
        mockData = mockData.slice(0, lastBracketIndex) + skeleton + mockData.slice(lastBracketIndex);
        console.log(`Appended NEW product: ${searchId}`);
        appendedCount++;
    }
}

fs.writeFileSync(dataPath, mockData);
console.log(`injection finished. Updated: ${updatedCount}, Appended: ${appendedCount}`);
