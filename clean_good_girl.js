const fs = require('fs');
const filePath = 'src/constants/mockData.ts';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

let ggcStartIdx = lines.findIndex(l => l.includes('id: "good-girl-carolina",'));
let ggcEndIdx = lines.findIndex((l, i) => i > ggcStartIdx && l.includes('isPublished: true'));
let ggcBlock = lines.slice(ggcStartIdx, ggcEndIdx + 2).join('\n');

let ggStartIdx = lines.findIndex(l => l.includes('id: "good-girl",'));
let ggEndIdx = lines.findIndex((l, i) => i > ggStartIdx && l.includes('isPublished: true'));
let ggBlock = lines.slice(ggStartIdx, ggEndIdx + 2).join('\n');

// Find images
let ggcImage = lines.slice(ggcStartIdx, ggcEndIdx).find(l => l.includes('image:'));
let ggImage = lines.slice(ggStartIdx, ggEndIdx).find(l => l.includes('image:'));

console.log("CAROLINA IMAGE: " + ggcImage);
console.log("GOOD GIRL IMAGE: " + ggImage);

// Let's delete the one that does NOT have the high heel main image, and keep the one that does.
// Alternatively, just delete good-girl-carolina entirely.
