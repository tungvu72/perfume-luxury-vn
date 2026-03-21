const fs = require('fs');
const path = require('path');
const file = fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'mockData.ts'), 'utf8');

// Split into product blocks
const blocks = file.split(/\n  \{[\s\r\n]+id:\s*/);
blocks.shift();

const withSeo = [];
for (let i = 0; i < blocks.length; i++) {
  const b = blocks[i];
  const idMatch = b.match(/^['"](.*?)['"]/);
  const id = idMatch ? idMatch[1] : `unknown-${i}`;
  const nameMatch = b.match(/name:\s*['"](.*?)['"]/);
  const name = nameMatch ? nameMatch[1] : '?';
  const brandMatch = b.match(/brand:\s*['"](.*?)['"]/);
  const brand = brandMatch ? brandMatch[1] : '?';
  
  if (/seoTitle:/.test(b)) {
    withSeo.push({ id, name, brand });
  }
}

console.log('Total with SEO: ' + withSeo.length);
console.log('');
for (let i = 0; i < withSeo.length; i++) {
  const p = withSeo[i];
  const batch = Math.floor(i / 4) + 1;
  console.log(`B${batch} | ${i+1}. ${p.id} | ${p.name} | ${p.brand}`);
}
