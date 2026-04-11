const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Pairs: [oldId, newId] — merge old content INTO new, then delete old
const mergePairs = [
  ["baccarat-rouge-540", "mfk-baccarat-54-edp"],
  ["encre-noire", "lalique-encre-noir-edt"],
  ["for-her-edp", "narciso-rodriguez-for-her-eau-de-parfum"],
  ["my-way", "my-way-edp"],
  ["y-edp", "ysl-y-eau-de-parfum"]
];

// Fields to copy from old to new (only if new is missing/empty)
const fieldsToMerge = [
  'image', 'seoTitle', 'metaDescription', 'description', 'article',
  'verdict', 'verdictShort', 'score', 'vibes',
  'longevity', 'sillage', 'seasons', 'dayNight',
  'topNotes', 'middleNotes', 'baseNotes', 'accords',
  'tags', 'sizes', 'basePrice'
];

function findProductBlock(linesArr, id) {
  const startIdx = linesArr.findIndex(l => l.includes(`id: "${id}"`));
  if (startIdx === -1) return null;
  
  // Walk backwards to find the opening `{`
  let blockStart = startIdx;
  while (blockStart > 0 && !linesArr[blockStart].trim().startsWith('{')) blockStart--;
  
  // Walk forward to find the closing `},`
  let blockEnd = startIdx;
  let braceCount = 0;
  let foundStart = false;
  for (let i = blockStart; i < linesArr.length; i++) {
    const line = linesArr[i];
    if (line.includes('{')) { braceCount++; foundStart = true; }
    if (line.includes('}')) braceCount--;
    // We need to be smarter - find isPublished then the next `},` or `}`
    if (i > startIdx && line.includes('isPublished:')) {
      // Find the closing of this object
      let j = i + 1;
      while (j < linesArr.length) {
        if (linesArr[j].trim().startsWith('},') || linesArr[j].trim() === '},') {
          blockEnd = j;
          break;
        }
        if (linesArr[j].trim().startsWith('}') && !linesArr[j].includes('{')) {
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
      // Check if it's a multi-line field (arrays, template literals)
      if (fieldName === 'article' && line.includes('`')) {
        // Collect until closing backtick
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
      if ((fieldName === 'accords' || fieldName === 'topNotes' || fieldName === 'middleNotes' || 
           fieldName === 'baseNotes' || fieldName === 'images' || fieldName === 'vibes' || 
           fieldName === 'tags' || fieldName === 'sizes' || fieldName === 'shopeeOffers') && line.includes('[')) {
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

mergePairs.forEach(([oldId, newId]) => {
  console.log(`\n=== Merging ${oldId} → ${newId} ===`);
  
  const oldBlock = findProductBlock(lines, oldId);
  const newBlock = findProductBlock(lines, newId);
  
  if (!oldBlock) { console.log(`  OLD ${oldId} not found!`); return; }
  if (!newBlock) { console.log(`  NEW ${newId} not found!`); return; }
  
  // For each field, if new doesn't have it but old does, inject it
  let insertions = [];
  
  for (const field of fieldsToMerge) {
    const oldField = extractField(oldBlock.lines, field);
    const newHasField = hasField(newBlock.lines, field);
    
    if (oldField && !newHasField) {
      insertions.push(...oldField);
      console.log(`  ✅ Copied: ${field}`);
    } else if (oldField && newHasField) {
      console.log(`  ⏭️  Skipped: ${field} (new already has it)`);
    } else {
      console.log(`  ⚠️  Missing in both: ${field}`);
    }
  }
  
  // Also merge 'image' field from old (main product image)
  const oldImage = extractField(oldBlock.lines, 'image');
  const newHasImage = hasField(newBlock.lines, 'image');
  if (oldImage && newHasImage) {
    // Replace new's image with old's (old has better main image)
    const newImageIdx = lines.findIndex((l, i) => i >= newBlock.start && i <= newBlock.end && l.trim().startsWith('image:'));
    if (newImageIdx > -1) {
      lines[newImageIdx] = oldImage[0];
      console.log(`  🔄 Replaced: image (using old's main image)`);
    }
  }
  
  // Insert collected fields into new block (after name: line)
  if (insertions.length > 0) {
    const newNameIdx = lines.findIndex((l, i) => i >= newBlock.start && i <= newBlock.end && l.trim().startsWith('name:'));
    if (newNameIdx > -1) {
      lines.splice(newNameIdx + 1, 0, ...insertions);
      console.log(`  📦 Injected ${insertions.length} lines into ${newId}`);
    }
  }
  
  // Re-find and DELETE old block (indices shifted after insertion)
  const oldBlockRefresh = findProductBlock(lines, oldId);
  if (oldBlockRefresh) {
    lines.splice(oldBlockRefresh.start, oldBlockRefresh.end - oldBlockRefresh.start + 1);
    console.log(`  🗑️  Deleted old: ${oldId} (${oldBlockRefresh.end - oldBlockRefresh.start + 1} lines)`);
  }
});

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("\n✅ All merges complete. File saved.");
