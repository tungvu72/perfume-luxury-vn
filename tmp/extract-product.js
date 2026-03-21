const fs = require('fs');
const path = require('path');
const file = fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'mockData.ts'), 'utf8');

// Extract the Sauvage Elixir block
const startIdx = file.indexOf("id: 'sauvage-elixir'");
if (startIdx === -1) {
  console.log('Not found');
  process.exit(1);
}

// Find the block boundaries
let braceCount = 0;
let blockStart = file.lastIndexOf('{', startIdx);
let blockEnd = blockStart;

for (let i = blockStart; i < file.length; i++) {
  if (file[i] === '{') braceCount++;
  if (file[i] === '}') braceCount--;
  if (braceCount === 0) {
    blockEnd = i + 1;
    break;
  }
}

console.log(file.substring(blockStart, blockEnd));
