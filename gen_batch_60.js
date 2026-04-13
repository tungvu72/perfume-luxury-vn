const fs = require('fs');

const data = JSON.parse(fs.readFileSync('auto_id_batch.json', 'utf8'));

// 1. Generate PowerShell script
let psContent = '';
data.forEach(item => {
    let url = `https://fimgs.net/mdimg/perfume/o.${item.fId}.jpg`;
    let dest = `public\\images\\products\\${item.slug}-main.jpg`;
    psContent += `Invoke-WebRequest -Uri "${url}" -OutFile "${dest}" -ErrorAction SilentlyContinue\n`;
});
fs.writeFileSync('download_60_images.ps1', psContent, 'utf8');

// 2. Generate NodeJS patcher
let jsContent = `const fs = require('fs');
const mockPath = 'src/constants/mockData.ts';
let lines = fs.readFileSync(mockPath, 'utf8').split('\\n');
const items = ${JSON.stringify(data)};

items.forEach(item => {
    let startIdx = lines.findIndex(l => l.includes('id: "' + item.slug + '"'));
    if (startIdx === -1) {
        console.log("Missing " + item.slug);
        return;
    }
    let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('isPublished: true'));
    for (let i = startIdx; i <= endIdx; i++) {
        if (lines[i].includes('image: ')) {
             lines[i] = '    image: "/images/products/' + item.slug + '-main.jpg",';
        }
        if (lines[i].includes('images: [')) {
             let replacement = '    images: [{ url: "/images/products/' + item.slug + '-main.jpg", source: "studio", caption: "' + item.name + ' chính hãng", verified: true }]';
             // Check if next lines are part of array
             let j = i;
             while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
             // Replace block
             lines.splice(i, j - i + 1, replacement + ',');
             endIdx -= (j - i); // adjust end index
        }
    }
});
fs.writeFileSync(mockPath, lines.join('\\n'), 'utf8');
console.log('Patched 60 items.');
`;
fs.writeFileSync('patch_60_images.js', jsContent, 'utf8');
console.log('Generation complete.');
