import fs from 'fs';
import path from 'path';

const mockDataPath = path.resolve('src/constants/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

const imageRegex = /image:\s*"\/images\/products\/([^"]+)"/g;
let match;
const missingImages = [];

while ((match = imageRegex.exec(content)) !== null) {
    const filename = match[1];
    const fullPath = path.resolve('public/images/products', filename);
    if (!fs.existsSync(fullPath)) {
        missingImages.push(filename);
    }
}

console.log("Missing images from mockData.ts:", missingImages);
