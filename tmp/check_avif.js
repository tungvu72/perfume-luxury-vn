const fs = require('fs');
const files = fs.readdirSync('public/images/products').filter(f => f.endsWith('.jpg'));
const badFiles = [];
for (let f of files) {
  const p = 'public/images/products/' + f;
  const stat = fs.statSync(p);
  if (stat.size < 12) continue;
  const b = Buffer.alloc(12);
  const fd = fs.openSync(p, 'r');
  fs.readSync(fd, b, 0, 12, 0);
  fs.closeSync(fd);
  const hex = b.toString('hex');
  if (hex.includes('6674797061766966') || hex.includes('57454250')) {
     badFiles.push(f + ' (Actually AVIF/WEBP)');
  }
}
console.log('Bad files: ', badFiles);
