/**
 * validate-product.mjs
 * Validate 1 product JSON file theo format chuẩn
 * Usage: node scripts/validate-product.mjs <product-id>
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const PRODUCTS_DIR = join(ROOT, 'data', 'products');

const productId = process.argv[2];
if (!productId) {
  console.error('Usage: node scripts/validate-product.mjs <product-id>');
  process.exit(1);
}

const filepath = join(PRODUCTS_DIR, `${productId}.json`);
let product;
try {
  product = JSON.parse(readFileSync(filepath, 'utf-8'));
} catch (e) {
  console.error(`❌ Cannot read ${productId}.json: ${e.message}`);
  process.exit(1);
}

const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

function checkString(field, minLen = 1) {
  check(typeof product[field] === 'string' && product[field].length >= minLen,
    `${field}: phải là string, ít nhất ${minLen} ký tự`);
}

function checkNumber(field, min, max) {
  check(typeof product[field] === 'number' && product[field] >= min && product[field] <= max,
    `${field}: phải là number từ ${min} đến ${max} (hiện tại: ${product[field]})`);
}

function checkArray(field, minLen = 1) {
  check(Array.isArray(product[field]) && product[field].length >= minLen,
    `${field}: phải là array, ít nhất ${minLen} phần tử`);
}

// Required string fields
checkString('id');
checkString('brandSlug');
checkString('brand');
checkString('name');
checkString('gender');
checkString('image');

// Description: 1-3 câu, không phải đoạn dài
checkString('description', 10);
if (typeof product.description === 'string' && product.description.length > 500) {
  errors.push('description: quá dài (>500 chars), nên 1-3 câu ngắn');
}

// Article: phải có 3 heading bắt buộc
checkString('article', 100);
if (typeof product.article === 'string') {
  const article = product.article;
  check(article.includes('### Ai không nên mua?'), 'article: thiếu heading "### Ai không nên mua?"');
  check(article.includes('### Có đáng tiền không?'), 'article: thiếu heading "### Có đáng tiền không?"');
  check(article.includes('### Nên dùng khi nào?'), 'article: thiếu heading "### Nên dùng khi nào?"');
}

// Verdict
checkString('verdict', 10);

// VerdictShort: 3-7 từ IN HOA
if (typeof product.verdictShort === 'string') {
  const words = product.verdictShort.split(/[\s,]+/).filter(w => w.length > 0);
  check(words.length >= 3 && words.length <= 10,
    `verdictShort: nên 3-7 từ (hiện tại: ${words.length} từ)`);
  check(product.verdictShort === product.verdictShort.toUpperCase(),
    `verdictShort: phải IN HOA toàn bộ (hiện tại: "${product.verdictShort}")`);
} else {
  errors.push('verdictShort: phải là string');
}

// Score
check(product.score && typeof product.score === 'object', 'score: phải là object');
if (product.score) {
  for (const key of ['scent', 'uniqueness', 'compliments', 'value', 'total']) {
    check(typeof product.score[key] === 'number' && product.score[key] >= 0 && product.score[key] <= 10,
      `score.${key}: phải là number 0-10 (hiện tại: ${product.score[key]})`);
  }
}

// Vibes: 3 items, mỗi item có label + icon
checkArray('vibes', 3);
if (Array.isArray(product.vibes)) {
  product.vibes.forEach((v, i) => {
    check(v && typeof v.label === 'string' && v.label.length > 0,
      `vibes[${i}]: thiếu label`);
    check(v && typeof v.icon === 'string' && v.icon.length > 0,
      `vibes[${i}]: thiếu icon emoji`);
  });
}

// Longevity & Sillage
checkNumber('longevity', 1, 10);
checkNumber('sillage', 1, 10);

// Seasons
check(product.seasons && typeof product.seasons === 'object', 'seasons: phải là object');
if (product.seasons) {
  for (const key of ['spring', 'summer', 'fall', 'winter']) {
    check(typeof product.seasons[key] === 'number' && product.seasons[key] >= 0 && product.seasons[key] <= 100,
      `seasons.${key}: phải là number 0-100 (hiện tại: ${product.seasons[key]})`);
  }
}

// DayNight
check(product.dayNight && typeof product.dayNight === 'object', 'dayNight: phải là object');
if (product.dayNight) {
  for (const key of ['day', 'night']) {
    check(typeof product.dayNight[key] === 'number' && product.dayNight[key] >= 0 && product.dayNight[key] <= 100,
      `dayNight.${key}: phải là number 0-100 (hiện tại: ${product.dayNight[key]})`);
  }
}

// Notes
for (const field of ['topNotes', 'middleNotes', 'baseNotes']) {
  checkArray(field, 1);
  if (Array.isArray(product[field])) {
    product[field].forEach((note, i) => {
      check(note && typeof note.name === 'string' && note.name.length > 0,
        `${field}[${i}]: thiếu name`);
    });
  }
}

// Accords
checkArray('accords', 1);
if (Array.isArray(product.accords)) {
  product.accords.forEach((accord, i) => {
    check(accord && typeof accord.name === 'string', `accords[${i}]: thiếu name`);
    check(accord && typeof accord.value === 'number', `accords[${i}]: thiếu value`);
    check(accord && typeof accord.color === 'string', `accords[${i}]: thiếu color`);
  });
}

// Tags
checkArray('tags', 3);

// Sizes
checkArray('sizes', 1);

// BasePrice
check(typeof product.basePrice === 'number' && product.basePrice > 0,
  `basePrice: phải là number > 0 (hiện tại: ${product.basePrice})`);

// SEO
checkString('seoTitle', 10);
if (typeof product.seoTitle === 'string') {
  check(product.seoTitle.includes('chính hãng'),
    'seoTitle: phải chứa "chính hãng"');
  check(product.seoTitle.includes('2026'),
    'seoTitle: phải chứa "2026"');
}

checkString('metaDescription', 10);
if (typeof product.metaDescription === 'string') {
  check(product.metaDescription.length <= 160,
    `metaDescription: quá dài (${product.metaDescription.length} > 160 chars)`);
}

// KHÔNG có productCopy
check(!('productCopy' in product),
  'productCopy: phải XÓA field này (format mới không dùng)');

// Output
console.log(`\n📋 Validate: ${productId}`);
console.log('─'.repeat(50));

if (errors.length === 0) {
  console.log('✅ PASS — Tất cả fields đạt chuẩn!\n');
  process.exit(0);
} else {
  console.log(`❌ FAIL — ${errors.length} lỗi:\n`);
  errors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
  console.log('');
  process.exit(1);
}
