const fs = require('fs');
const path = require('path');

const mockDataContent = fs.readFileSync('src/constants/mockData.ts', 'utf8');

const regex = /image:\s*"\/images\/products\/([^"]+)"/g;
let match;
let missing = [];
let total = 0;

while ((match = regex.exec(mockDataContent)) !== null) {
    total++;
    const filename = match[1];
    const imagePath = path.join('public', 'images', 'products', filename);
    if (!fs.existsSync(imagePath)) {
        missing.push(filename);
    }
}

if (missing.length === 0) {
    console.log(`PASS: Tất cả ${total} sản phẩm đều có đủ ảnh trên ổ cứng (downloaded from Fragrantica).`);
} else {
    console.log(`FAIL: Thiếu ${missing.length} ảnh trong tổng số ${total} sản phẩm:`);
    missing.forEach(m => console.log(' - ' + m));
}
