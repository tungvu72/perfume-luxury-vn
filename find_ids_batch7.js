const fs = require('fs');
let content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
let items = Array.from(content.matchAll(/id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"/g));
items.forEach(m => {
  let name = m[2].toLowerCase();
  let id = m[1].toLowerCase();
  if (
    id.includes('homme-cologne') ||
    id.includes('homme-parfum') || 
    id.includes('homme-sport') || 
    id.includes('diorissimo') || 
    id.includes('dolce-vita') || 
    id.includes('dune') || 
    name.includes('eau sauvage') ||
    id.includes('fahrenheit')
  ) {
    console.log(m[1], '|||', m[2]);
  }
});
