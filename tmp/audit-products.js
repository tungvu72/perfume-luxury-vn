const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'mockData.ts'), 'utf8');

// Better approach: split by product blocks
// Each product starts with {  id: or { id:
const blocks = file.split(/\n  \{[\s\r\n]+id:\s*/);
blocks.shift(); // remove the part before first product

const results = [];
let stats = {
  total: blocks.length,
  hasGallery: 0,
  galleryEmpty: 0, 
  gallery1: 0,
  gallery2plus: 0,
  hasNotes: 0,
  hasAccords: 0,
  hasScores: 0,
  hasPerformance: 0,
  hasSeoTitle: 0,
  hasMetaDesc: 0,
  hasArticle: 0,
  hasProductCopy: 0,
  hasNewFormat: 0,
  noArticle: 0,
  missingFields: []
};

for (let i = 0; i < blocks.length; i++) {
  const b = blocks[i];
  
  // Extract id
  const idMatch = b.match(/^['"](.*?)['"]/);
  const id = idMatch ? idMatch[1] : `unknown-${i}`;
  
  // Extract name
  const nameMatch = b.match(/name:\s*['"](.*?)['"]/);
  const name = nameMatch ? nameMatch[1] : '?';
  
  const hasGallery = /gallery:\s*\[/.test(b);
  const galleryCount = hasGallery ? (b.match(/gallery:\s*\[([\s\S]*?)\]/)?.[1]?.match(/http/g)?.length || 0) : 0;
  const hasNotes = /notes:\s*\{/.test(b);
  const hasAccords = /accords:\s*\[/.test(b);
  const hasScores = /scores:\s*\{/.test(b);
  const hasPerf = /performance:\s*\{/.test(b);
  const hasSeo = /seoTitle:/.test(b);
  const hasMeta = /metaDescription:/.test(b);
  const hasArticle = /article:/.test(b);
  const hasCopy = /productCopy:/.test(b);
  const hasNew = /kh\u00f4ng n\u00ean mua/i.test(b);
  
  if (hasGallery) stats.hasGallery++;
  if (galleryCount === 0) stats.galleryEmpty++;
  if (galleryCount === 1) stats.gallery1++;
  if (galleryCount >= 2) stats.gallery2plus++;
  if (hasNotes) stats.hasNotes++;
  if (hasAccords) stats.hasAccords++;
  if (hasScores) stats.hasScores++;
  if (hasPerf) stats.hasPerformance++;
  if (hasSeo) stats.hasSeoTitle++;
  if (hasMeta) stats.hasMetaDesc++;
  if (hasArticle) stats.hasArticle++;
  if (hasCopy) stats.hasProductCopy++;
  if (hasNew) stats.hasNewFormat++;
  if (!hasArticle) stats.noArticle++;
  
  // Check completeness
  const missing = [];
  if (!hasGallery || galleryCount < 2) missing.push('gallery<2');
  if (!hasNotes) missing.push('notes');
  if (!hasAccords) missing.push('accords');
  if (!hasScores) missing.push('scores');
  if (!hasPerf) missing.push('performance');
  if (!hasSeo) missing.push('seoTitle');
  if (!hasMeta) missing.push('metaDesc');
  if (!hasNew) missing.push('article-v2');
  
  if (missing.length > 0) {
    stats.missingFields.push({ id, name, missing, count: missing.length });
  }
}

// Sort by most missing
stats.missingFields.sort((a, b) => b.count - a.count);

console.log('=== PRODUCT AUDIT (block-based) ===');
console.log('Total: ' + stats.total);
console.log('');
console.log('--- SUMMARY ---');
console.log('Gallery (has field): ' + stats.hasGallery);
console.log('Gallery >=2 images: ' + stats.gallery2plus);  
console.log('Gallery 1 image: ' + stats.gallery1);
console.log('Notes pyramid: ' + stats.hasNotes);
console.log('Accords: ' + stats.hasAccords);
console.log('Scores: ' + stats.hasScores);
console.log('Performance: ' + stats.hasPerformance);
console.log('SEO Title: ' + stats.hasSeoTitle);
console.log('Meta Desc: ' + stats.hasMetaDesc);
console.log('Article (any): ' + stats.hasArticle);
console.log('productCopy (old): ' + stats.hasProductCopy);
console.log('Article v2 (3-section): ' + stats.hasNewFormat);
console.log('');

// Completeness tiers
const complete = stats.missingFields.filter(p => p.count === 0).length;
const almost = stats.missingFields.filter(p => p.count <= 2).length;
const partial = stats.missingFields.filter(p => p.count > 2 && p.count <= 5).length;
const bare = stats.missingFields.filter(p => p.count > 5).length;

const fullyComplete = stats.total - stats.missingFields.length;

console.log('--- COMPLETENESS ---');
console.log('Full (0 missing): ' + fullyComplete);
console.log('Almost (1-2 missing): ' + almost);
console.log('Partial (3-5 missing): ' + partial);
console.log('Bare (6+ missing): ' + bare);
console.log('');

// Show the products with new format
console.log('--- DA UPDATE FORMAT MOI ---');
for (const p of stats.missingFields) {
  if (!p.missing.includes('article-v2')) {
    console.log('  OK: ' + p.id + ' (' + p.name + ')');
  }
}
// Also products not in missing list at all
console.log('');

// Show top 20 most incomplete
console.log('--- TOP 20 THIEU NHIEU NHAT ---');
for (let i = 0; i < Math.min(20, stats.missingFields.length); i++) {
  const p = stats.missingFields[i];
  console.log('  ' + p.id + ' | ' + p.name + ' | Missing: ' + p.missing.join(', '));
}

// Count by missing field
console.log('');
console.log('--- COUNT BY FIELD ---');
const fieldCounts = {};
for (const p of stats.missingFields) {
  for (const f of p.missing) {
    fieldCounts[f] = (fieldCounts[f] || 0) + 1;
  }
}
for (const [field, cnt] of Object.entries(fieldCounts).sort((a,b) => b[1] - a[1])) {
  console.log('  ' + field + ': ' + cnt + ' SP thieu');
}
