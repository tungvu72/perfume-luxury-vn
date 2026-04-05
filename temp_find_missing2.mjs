import fs from 'fs';
import path from 'path';

const searchIndexPath = path.resolve('src/constants/searchIndex.ts');
let content2 = fs.readFileSync(searchIndexPath, 'utf8');

const imageRegex2 = /"image":\s*"\/images\/products\/([^"]+)"/g;
let match2;
const missingImages2 = [];

while ((match2 = imageRegex2.exec(content2)) !== null) {
    const filename = match2[1];
    const fullPath = path.resolve('public/images/products', filename);
    if (!fs.existsSync(fullPath)) {
        missingImages2.push(filename);
    }
}

console.log("Missing images from searchIndex.ts:", missingImages2);
