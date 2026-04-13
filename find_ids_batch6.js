const fs = require('fs');
let content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
let items = Array.from(content.matchAll(/id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"/g));
items.forEach(m => {
  let name = m[2].toLowerCase();
  let id = m[1].toLowerCase();
  if (
    name.includes('love in white') || 
    name.includes('silver mountain water') || 
    name.includes('green irish tweed') || 
    name.includes('cool water') || 
    id.includes('miss-dior') || 
    id.includes('addict') ||
    id.includes('ventus')
  ) {
    if (!name.includes('blooming bouquet') && !name.includes('cherie'))
      console.log(m[1], '|||', m[2]);
  }
});
