const fs = require('fs');
let content = fs.readFileSync('src/app/thuong-hieu/page.tsx', 'utf8');

// Find and replace the metadata block (lines 7-10)
const lines = content.split('\n');
lines[7] = '    title: "Thương hiệu nước hoa - Maison de SON",';
lines[8] = '    description: "Khám phá các thương hiệu nước hoa cao cấp chính hãng. Đánh giá chuyên sâu từ chuyên gia.",';

content = lines.join('\n');
fs.writeFileSync('src/app/thuong-hieu/page.tsx', content, 'utf8');
console.log('BUG-01 fixed!');
