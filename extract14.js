const fs = require('fs');

const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');

const regex = /id:\s*"([^"]+)"[\s\S]*?images:\s*\[([\s\S]*?)\]/g;
let match;
let count = 0;
const validProducts = [];

while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const imagesStr = match[2];
    const urlMatches = imagesStr.match(/{ url:/g);

    if (urlMatches && urlMatches.length >= 5) {
        validProducts.push(id);
        count++;
    }
}

console.log("Danh sach cac san pham co >= 5 anh:");
validProducts.forEach(p => console.log("- " + p));
console.log("Tong cong: " + count);
