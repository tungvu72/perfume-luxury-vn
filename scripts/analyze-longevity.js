const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data', 'products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const stats = {};
const examples = {};
files.forEach(f => {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  const v = j.longevity || 0;
  stats[v] = (stats[v] || 0) + 1;
  if (!examples[v]) examples[v] = [];
  if (examples[v].length < 3) examples[v].push(j.name);
});
console.log('=== Phan bo longevity (score 1-10) ===');
Object.keys(stats).sort((a,b) => a-b).forEach(k => {
  console.log(`Score ${k}: ${stats[k]} san pham  (VD: ${examples[k].join(', ')})`);
});
console.log('\nTotal:', files.length);
