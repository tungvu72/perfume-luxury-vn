const fs = require('fs');
const filePath = require('path').join(__dirname, 'src/constants/mockData.ts');

let lines = fs.readFileSync(filePath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('vibes: [')) {
    let j = i + 1;
    let endDeleteIdx = -1;
    // scan forward until tags: or sizes: or basePrice:
    while (j < lines.length && !lines[j].includes('tags:') && !lines[j].includes('sizes:') && !lines[j].includes('basePrice:')) {
      if (lines[j].includes('],') || lines[j].includes(']')) {
        endDeleteIdx = j;
      }
      j++;
    }
    
    if (endDeleteIdx !== -1) {
      lines.splice(i + 1, endDeleteIdx - i);
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Cleaned up stray array elements globally.');
