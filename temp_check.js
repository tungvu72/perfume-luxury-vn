const fs = require('fs');

const fileContent = fs.readFileSync('src/constants/mockData.ts', 'utf-8');

const nameMatches = fileContent.match(/name:\s*['"](.*?)['"]/g);
const slugMatches = fileContent.match(/slug:\s*['"](.*?)['"]/g);

if (nameMatches) {
    for(let i=0; i<Math.min(10, nameMatches.length); i++) {
        const name = nameMatches[i] ? nameMatches[i].split(/['"]/)[1] : '';
        const slug = slugMatches && slugMatches[i] ? slugMatches[i].split(/['"]/)[1] : '';
        console.log((i+1), " -> ", name, " | slug:", slug);
    }
}
