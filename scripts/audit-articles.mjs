import fs from 'fs';
const d = 'data/products';
const files = fs.readdirSync(d).filter(f => f.endsWith('.json'));
const short = [];
const noArticle = [];
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(d + '/' + f, 'utf8'));
  const al = j.article ? j.article.length : 0;
  if (al === 0) noArticle.push(f.replace('.json', ''));
  else if (al < 400) short.push({ slug: f.replace('.json', ''), len: al });
}
console.log('No article:', noArticle.length);
noArticle.forEach(s => console.log('  -', s));
console.log('\nShort article (<400 chars):', short.length);
short.forEach(s => console.log('  -', s.slug, s.len));
console.log('\nTotal files:', files.length);
