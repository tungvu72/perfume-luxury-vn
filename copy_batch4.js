const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'fragrantica_cards');
const destDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\1dede222-7c87-467b-b8d4-8bcce97da0c9';

const files = fs.readdirSync(srcDir);
const batchFiles = [];

for (let i = 31; i <= 40; i++) {
    const file = files.find(f => f.startsWith(`${i}. `) && f.endsWith('.jpeg'));
    if (file) {
        const srcPath = path.join(srcDir, file);
        // Rename slightly to ensure safe filename
        const safeName = file.replace(/ /g, '_');
        const destPath = path.join(destDir, safeName);
        fs.copyFileSync(srcPath, destPath);
        batchFiles.push({ num: i, fileName: safeName, absolutePath: destPath.replace(/\\/g, '/') });
    }
}

console.log(JSON.stringify(batchFiles, null, 2));
