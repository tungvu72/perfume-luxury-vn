const fs = require('fs');
let content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
let items = Array.from(content.matchAll(/id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"/g));
items.forEach(m => {
  let name = m[2].toLowerCase();
  if (name.includes('no 19') || name.includes('n°19') || name.includes('no 5') || name.includes('n°5') || name.includes('chlo') || name.includes('coach') || name.includes('aventus') || m[1].includes('poudre') || m[1].includes('santalum') || m[1].includes('damascena') || m[1].includes('nomade')) {
    console.log(m[1], '|||', m[2]);
  }
});
