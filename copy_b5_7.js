const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'fragrantica_cards');
const destDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\1dede222-7c87-467b-b8d4-8bcce97da0c9';

const files = fs.readdirSync(srcDir);

for (let i = 41; i <= 70; i++) {
    const file = files.find(f => f.startsWith(`${i}. `) && f.endsWith('.jpeg'));
    if (file) {
        const srcPath = path.join(srcDir, file);
        const safeName = file.replace(/ /g, '_');
        const destPath = path.join(destDir, safeName);
        fs.copyFileSync(srcPath, destPath);
    }
}
console.log("Copied Batch 5-7 to artifact dir");
