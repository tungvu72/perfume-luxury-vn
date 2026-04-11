const fs = require('fs');
const filePath = require('path').join(__dirname, 'src/constants/mockData.ts');

let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const startIndex = lines.findIndex(l => l.includes('id: "ck-obsession"'));
if (startIndex !== -1) {
  let vibesIdx = -1;
  let endIdx = -1;
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i].includes('vibes: [')) {
      vibesIdx = i;
    }
    if (vibesIdx !== -1 && i > vibesIdx && (lines[i].trim() === '],' || lines[i].trim() === ']')) {
      endIdx = i;
      break;
    }
  }

  if (vibesIdx !== -1 && endIdx !== -1 && (endIdx - vibesIdx) > 1) {
    // Keep vibes line (at vibesIdx), but delete the lines between vibesIdx and endIdx (inclusive of endIdx)
    lines.splice(vibesIdx + 1, endIdx - vibesIdx);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Deleted lines ${vibesIdx + 1} to ${endIdx}`);
  } else {
    console.log("Could not find the range to delete");
  }
} else {
  console.log("ck-obsession not found");
}
