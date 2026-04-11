const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// Extract all id values
const idRegex = /id:\s*"([^"]+)"/g;
let match;
const ids = [];
const idMap = {};

while ((match = idRegex.exec(content)) !== null) {
  const id = match[1];
  const lineNum = content.substring(0, match.index).split('\n').length;
  ids.push({ id, line: lineNum });
  
  if (!idMap[id]) {
    idMap[id] = [];
  }
  idMap[id].push(lineNum);
}

// Extract all name values to cross-check
const nameRegex = /^\s*name:\s*"([^"]+)"/gm;
const names = [];
const nameMap = {};

while ((match = nameRegex.exec(content)) !== null) {
  const name = match[1];
  const lineNum = content.substring(0, match.index).split('\n').length;
  names.push({ name, line: lineNum });
  
  if (!nameMap[name]) {
    nameMap[name] = [];
  }
  nameMap[name].push(lineNum);
}

console.log("=== DUPLICATE IDs ===");
let dupCount = 0;
for (const [id, lines] of Object.entries(idMap)) {
  if (lines.length > 1) {
    console.log(`❌ DUPLICATE ID: "${id}" appears ${lines.length} times at lines: ${lines.join(', ')}`);
    dupCount++;
  }
}
if (dupCount === 0) console.log("✅ No duplicate IDs found.");

console.log("\n=== DUPLICATE NAMES (same product name, different IDs) ===");
let nameIssues = 0;
for (const [name, lines] of Object.entries(nameMap)) {
  if (lines.length > 1) {
    // Find which IDs these names belong to
    const relatedIds = lines.map(line => {
      // Search backwards from this line to find the nearest id:
      const linesArr = content.split('\n');
      for (let i = line - 1; i >= 0; i--) {
        const idMatch = linesArr[i].match(/id:\s*"([^"]+)"/);
        if (idMatch) return idMatch[1];
      }
      return '?';
    });
    
    // Only flag if they have DIFFERENT IDs (same ID same name is fine)
    const uniqueIds = [...new Set(relatedIds)];
    if (uniqueIds.length > 1) {
      console.log(`⚠️  "${name}" appears under ${uniqueIds.length} different IDs: ${uniqueIds.join(', ')}`);
      nameIssues++;
    }
  }
}
if (nameIssues === 0) console.log("✅ No duplicate product names across different IDs.");

console.log(`\nTotal unique products: ${Object.keys(idMap).length}`);
