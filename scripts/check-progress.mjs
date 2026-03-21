/**
 * check-progress.mjs
 * Kiểm tra tiến độ update: bao nhiêu product đã pass validate
 * Usage: node scripts/check-progress.mjs
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const PRODUCTS_DIR = join(ROOT, 'data', 'products');

// Read all JSON files
const files = readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.json'));
const total = files.length;

const done = [];
const pending = [];
const errors = [];

for (const file of files) {
  const filepath = join(PRODUCTS_DIR, file);
  const id = file.replace('.json', '');
  
  try {
    const product = JSON.parse(readFileSync(filepath, 'utf-8'));
    
    // Quick validation checks for "done" status
    const hasNewArticle = typeof product.article === 'string' && 
      product.article.includes('### Ai không nên mua?') &&
      product.article.includes('### Có đáng tiền không?') &&
      product.article.includes('### Nên dùng khi nào?');
    
    const hasNoProductCopy = !('productCopy' in product);
    
    const hasSeoTitle = typeof product.seoTitle === 'string' && 
      product.seoTitle.includes('chính hãng') &&
      product.seoTitle.includes('2026');
    
    const hasMetaDesc = typeof product.metaDescription === 'string' && 
      product.metaDescription.length > 0 &&
      product.metaDescription.length <= 160;
    
    const hasVerdictShort = typeof product.verdictShort === 'string' &&
      product.verdictShort === product.verdictShort.toUpperCase();
    
    const hasDescription = typeof product.description === 'string' && 
      product.description.length >= 10 &&
      product.description.length <= 500;
    
    if (hasNewArticle && hasNoProductCopy && hasSeoTitle && hasMetaDesc && hasVerdictShort && hasDescription) {
      done.push(id);
    } else {
      const issues = [];
      if (!hasNewArticle) issues.push('article format cũ');
      if (!hasNoProductCopy) issues.push('còn productCopy');
      if (!hasSeoTitle) issues.push('thiếu/sai seoTitle');
      if (!hasMetaDesc) issues.push('thiếu/sai metaDescription');
      if (!hasVerdictShort) issues.push('verdictShort chưa IN HOA');
      if (!hasDescription) issues.push('description chưa chuẩn');
      pending.push({ id, issues });
    }
  } catch (e) {
    errors.push({ id, error: e.message });
  }
}

// Output
console.log('\n' + '═'.repeat(60));
console.log('📊 PROGRESS REPORT — Maison De Son Product Update');
console.log('═'.repeat(60));
console.log(`\n  📁 Tổng files: ${total}`);
console.log(`  ✅ Done (pass):  ${done.length}`);
console.log(`  ⏳ Pending:      ${pending.length}`);
if (errors.length > 0) {
  console.log(`  ❌ Errors:       ${errors.length}`);
}
console.log(`\n  Progress: [${('█'.repeat(Math.round(done.length / total * 30)))}${('░'.repeat(30 - Math.round(done.length / total * 30)))}] ${Math.round(done.length / total * 100)}%`);
console.log('');

if (done.length > 0) {
  console.log('─'.repeat(60));
  console.log('✅ DONE:');
  done.forEach(id => console.log(`  • ${id}`));
}

if (pending.length > 0) {
  console.log('');
  console.log('─'.repeat(60));
  console.log('⏳ PENDING:');
  pending.forEach(({ id, issues }) => {
    console.log(`  • ${id} — ${issues.join(', ')}`);
  });
}

if (errors.length > 0) {
  console.log('');
  console.log('─'.repeat(60));
  console.log('❌ ERRORS:');
  errors.forEach(({ id, error }) => {
    console.log(`  • ${id}: ${error}`);
  });
}

console.log('\n' + '═'.repeat(60));
console.log(`\n  ${done.length}/${total} completed\n`);
