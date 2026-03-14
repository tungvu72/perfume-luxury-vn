const fs = require('fs');
const s = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = s.split('\n');
const pending = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id:') && lines[i].includes('"')) {
    const m = lines[i].match(/id:\s*"([^"]+)"/);
    if (!m) continue;
    const id = m[1];
    // Look ahead for image field within 15 lines
    for (let j = i; j < Math.min(i + 15, lines.length); j++) {
      if (lines[j].includes('image:') && !lines[j].includes('images:')) {
        if (lines[j].includes('PENDING_IMAGE')) {
          // Get brand and name
          let brand = '', name = '';
          for (let k = i; k < Math.min(i + 10, lines.length); k++) {
            const bm = lines[k].match(/brand:\s*"([^"]+)"/);
            if (bm) brand = bm[1];
            const nm = lines[k].match(/name:\s*"([^"]+)"/);
            if (nm) name = nm[1];
          }
          pending.push({ id, brand, name, line: i + 1 });
        }
        break;
      }
    }
  }
}

console.log(`Total PENDING: ${pending.length}`);
console.log('');
// Show first 20 for ANTI-IMG-02
const batch = pending.slice(0, 20);
console.log('=== ANTI-IMG-02 (next 20) ===');
batch.forEach((p, i) => {
  console.log(`${(i+1).toString().padStart(2)}. ${p.brand} - ${p.name} [${p.id}] (L${p.line})`);
});
