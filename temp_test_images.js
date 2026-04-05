const fs = require('fs');
const path = require('path');
const file = fs.readFileSync('src/constants/searchIndex.ts', 'utf8');
const images = [...file.matchAll(/\"image\":\s*\"([^\"]+)\"/g)].map(m => m[1]);
const missing = [];
for (const img of images) {
    if (img.startsWith('/images/')) {
        const full = path.join('public', img);
        if (!fs.existsSync(full)) {
            missing.push(img);
        }
    }
}
console.log(missing.join('\n'));
