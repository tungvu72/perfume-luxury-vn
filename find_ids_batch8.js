const fs = require('fs');
let content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
let items = Array.from(content.matchAll(/id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"/g));
items.forEach(m => {
  let name = m[2].toLowerCase();
  let id = m[1].toLowerCase();
  if (
    id.includes('homme-intense') ||
    id.includes('hypnotic') ||
    id.includes('jadore') ||
    id.includes('midnight-poison') ||
    id.includes('miss-dior-blooming') ||
    id.includes('miss-dior-cherie') ||
    id.includes('poison') ||
    id.includes('pure-poison') ||
    id.includes('sauvage')
  ) {
    console.log(m[1], '|||', m[2]);
  }
});
