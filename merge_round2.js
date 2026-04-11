const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Round 2: 7 more duplicate pairs
const mergePairs = [
  ["aventus", "creed-aventus"],           // Creed Aventus
  ["black-orchid", "tom-ford-black-orchid"], // TF Black Orchid  
  ["bright-crystal", "versace-bright-crystal"], // Versace Bright Crystal
  ["eros-flame", "versace-eros-flame"],    // Versace Eros Flame
  ["toy-boy", "moschino-toy-boy"],         // Moschino Toy Boy
  ["cedrat-boise", "mancera-cedrat-boise"], // Mancera Cedrat Boisé
  ["torino21", "xerjoff-torino"],          // Xerjoff Torino21
];

function findProductBlock(linesArr, id) {
  const startIdx = linesArr.findIndex(l => {
    const m = l.match(/id:\s*"([^"]+)"/);
    return m && m[1] === id;
  });
  if (startIdx === -1) return null;
  
  let blockStart = startIdx;
  while (blockStart > 0 && !linesArr[blockStart].trim().startsWith('{')) blockStart--;
  
  let blockEnd = startIdx;
  for (let i = startIdx; i < linesArr.length; i++) {
    if (linesArr[i].includes('isPublished:')) {
      let j = i + 1;
      while (j < linesArr.length) {
        if (linesArr[j].trim().startsWith('},') || linesArr[j].trim() === '},') {
          blockEnd = j;
          break;
        }
        if (linesArr[j].trim() === '}' && !linesArr[j].includes('{')) {
          blockEnd = j;
          break;
        }
        j++;
      }
      break;
    }
  }
  
  return { start: blockStart, end: blockEnd, lines: linesArr.slice(blockStart, blockEnd + 1) };
}

function extractField(blockLines, fieldName) {
  for (let i = 0; i < blockLines.length; i++) {
    const line = blockLines[i];
    if (line.trim().startsWith(fieldName + ':')) {
      if (fieldName === 'article' && line.includes('`')) {
        let result = [line];
        if (!line.trimEnd().endsWith('`,')) {
          let j = i + 1;
          while (j < blockLines.length && !blockLines[j].includes('`,')) {
            result.push(blockLines[j]);
            j++;
          }
          if (j < blockLines.length) result.push(blockLines[j]);
        }
        return result;
      }
      const arrayFields = ['accords','topNotes','middleNotes','baseNotes','images','vibes','tags','sizes','shopeeOffers'];
      if (arrayFields.includes(fieldName) && line.includes('[')) {
        let result = [line];
        if (!line.includes('],')) {
          let j = i + 1;
          while (j < blockLines.length && !blockLines[j].includes('],')) {
            result.push(blockLines[j]);
            j++;
          }
          if (j < blockLines.length) result.push(blockLines[j]);
        }
        return result;
      }
      return [line];
    }
  }
  return null;
}

function hasField(blockLines, fieldName) {
  return blockLines.some(l => l.trim().startsWith(fieldName + ':'));
}

const fieldsToMerge = [
  'image', 'seoTitle', 'metaDescription', 'description', 'article',
  'verdict', 'verdictShort', 'score', 'vibes',
  'longevity', 'sillage', 'seasons', 'dayNight',
  'topNotes', 'middleNotes', 'baseNotes', 'accords',
  'tags', 'sizes', 'basePrice'
];

mergePairs.forEach(([oldId, newId]) => {
  console.log(`\n=== Merging ${oldId} → ${newId} ===`);
  
  const oldBlock = findProductBlock(lines, oldId);
  const newBlock = findProductBlock(lines, newId);
  
  if (!oldBlock) { console.log(`  ❌ OLD ${oldId} not found!`); return; }
  if (!newBlock) { console.log(`  ❌ NEW ${newId} not found!`); return; }
  
  let insertions = [];
  
  for (const field of fieldsToMerge) {
    const oldField = extractField(oldBlock.lines, field);
    const newHasField = hasField(newBlock.lines, field);
    
    if (oldField && !newHasField) {
      insertions.push(...oldField);
      console.log(`  ✅ Copied: ${field}`);
    } else if (oldField && newHasField) {
      console.log(`  ⏭️  Skip: ${field}`);
    }
  }
  
  // Replace image in new with old's better main image
  const oldImage = extractField(oldBlock.lines, 'image');
  const newHasImage = hasField(newBlock.lines, 'image');
  if (oldImage && newHasImage) {
    const newImageIdx = lines.findIndex((l, i) => i >= newBlock.start && i <= newBlock.end && l.trim().startsWith('image:'));
    if (newImageIdx > -1) {
      lines[newImageIdx] = oldImage[0];
      console.log(`  🔄 Replaced: image`);
    }
  }
  
  if (insertions.length > 0) {
    const newNameIdx = lines.findIndex((l, i) => i >= newBlock.start && i <= newBlock.end && l.trim().startsWith('name:'));
    if (newNameIdx > -1) {
      lines.splice(newNameIdx + 1, 0, ...insertions);
      console.log(`  📦 Injected ${insertions.length} lines`);
    }
  }
  
  // Delete old
  const oldBlockRefresh = findProductBlock(lines, oldId);
  if (oldBlockRefresh) {
    lines.splice(oldBlockRefresh.start, oldBlockRefresh.end - oldBlockRefresh.start + 1);
    console.log(`  🗑️  Deleted: ${oldId}`);
  }
});

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("\n✅ Round 2 merges complete.");
