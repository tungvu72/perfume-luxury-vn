/**
 * split-products.mjs
 * Tách file mockData.ts → 210 file JSON riêng trong data/products/
 * Giữ lại file data/product-order.json chứa thứ tự gốc
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const MOCK_DATA_PATH = join(ROOT, 'src', 'constants', 'mockData.ts');
const PRODUCTS_DIR = join(ROOT, 'data', 'products');
const ORDER_FILE = join(ROOT, 'data', 'product-order.json');

// Ensure output directory exists
if (!existsSync(PRODUCTS_DIR)) {
  mkdirSync(PRODUCTS_DIR, { recursive: true });
}

// Read the raw TypeScript file
const raw = readFileSync(MOCK_DATA_PATH, 'utf-8');

// Strategy: We'll parse the TypeScript by finding each top-level object in the array.
// The array starts after "export const MASTER_PERFUMES: Perfume[] = [" and ends with "];"

// Find the start of the array content
const arrayStartMatch = raw.match(/export\s+const\s+MASTER_PERFUMES:\s*Perfume\[\]\s*=\s*\[/);
if (!arrayStartMatch) {
  console.error('ERROR: Could not find MASTER_PERFUMES array in mockData.ts');
  process.exit(1);
}

const arrayStartIndex = arrayStartMatch.index + arrayStartMatch[0].length;

// Find the closing "];" of the array
// We need to match brackets properly
let depth = 1; // We're inside the outer [
let i = arrayStartIndex;
let arrayEndIndex = -1;

while (i < raw.length && depth > 0) {
  const ch = raw[i];
  
  // Skip template literals (backticks)
  if (ch === '`') {
    i++;
    while (i < raw.length && raw[i] !== '`') {
      if (raw[i] === '\\') i++; // skip escaped chars
      i++;
    }
    i++;
    continue;
  }
  
  // Skip regular strings
  if (ch === '"' || ch === "'") {
    const quote = ch;
    i++;
    while (i < raw.length && raw[i] !== quote) {
      if (raw[i] === '\\') i++;
      i++;
    }
    i++;
    continue;
  }
  
  // Skip line comments
  if (ch === '/' && raw[i + 1] === '/') {
    while (i < raw.length && raw[i] !== '\n') i++;
    i++;
    continue;
  }
  
  // Skip block comments
  if (ch === '/' && raw[i + 1] === '*') {
    i += 2;
    while (i < raw.length - 1 && !(raw[i] === '*' && raw[i + 1] === '/')) i++;
    i += 2;
    continue;
  }
  
  if (ch === '[') depth++;
  else if (ch === ']') {
    depth--;
    if (depth === 0) {
      arrayEndIndex = i;
      break;
    }
  }
  i++;
}

if (arrayEndIndex === -1) {
  console.error('ERROR: Could not find end of MASTER_PERFUMES array');
  process.exit(1);
}

const arrayContent = raw.substring(arrayStartIndex, arrayEndIndex);

// Now split arrayContent into individual objects at depth 0
// Each object starts with { and ends with } at depth 0
const objects = [];
let objStart = -1;
depth = 0;
i = 0;

while (i < arrayContent.length) {
  const ch = arrayContent[i];
  
  // Skip template literals
  if (ch === '`') {
    i++;
    while (i < arrayContent.length && arrayContent[i] !== '`') {
      if (arrayContent[i] === '\\') i++;
      i++;
    }
    i++;
    continue;
  }
  
  // Skip strings
  if (ch === '"' || ch === "'") {
    const quote = ch;
    i++;
    while (i < arrayContent.length && arrayContent[i] !== quote) {
      if (arrayContent[i] === '\\') i++;
      i++;
    }
    i++;
    continue;
  }
  
  // Skip line comments
  if (ch === '/' && arrayContent[i + 1] === '/') {
    while (i < arrayContent.length && arrayContent[i] !== '\n') i++;
    i++;
    continue;
  }
  
  // Skip block comments
  if (ch === '/' && arrayContent[i + 1] === '*') {
    i += 2;
    while (i < arrayContent.length - 1 && !(arrayContent[i] === '*' && arrayContent[i + 1] === '/')) i++;
    i += 2;
    continue;
  }
  
  if (ch === '{') {
    if (depth === 0) objStart = i;
    depth++;
  } else if (ch === '}') {
    depth--;
    if (depth === 0 && objStart !== -1) {
      objects.push(arrayContent.substring(objStart, i + 1));
      objStart = -1;
    }
  }
  i++;
}

console.log(`Found ${objects.length} product objects in mockData.ts`);

// Parse each object string into a JS object
// We need to convert TS object literal syntax to JSON-compatible
function parseProductObject(objStr) {
  // The object uses unquoted keys and template literals
  // Strategy: use Function constructor to evaluate as JS (safe since we control the file)
  try {
    const fn = new Function('return (' + objStr + ')');
    return fn();
  } catch (e) {
    console.error('Failed to parse object:', e.message);
    console.error('Object starts with:', objStr.substring(0, 200));
    return null;
  }
}

const products = [];
const order = [];
let successCount = 0;

for (let idx = 0; idx < objects.length; idx++) {
  const product = parseProductObject(objects[idx]);
  if (!product) {
    console.error(`ERROR: Failed to parse product at index ${idx}`);
    continue;
  }
  
  if (!product.id) {
    console.error(`ERROR: Product at index ${idx} has no id`);
    continue;
  }
  
  const filename = `${product.id}.json`;
  const filepath = join(PRODUCTS_DIR, filename);
  
  writeFileSync(filepath, JSON.stringify(product, null, 2), 'utf-8');
  order.push(product.id);
  successCount++;
}

// Save order file
writeFileSync(ORDER_FILE, JSON.stringify(order, null, 2), 'utf-8');

console.log(`\nExported ${successCount} products to data/products/`);
console.log(`Product order saved to data/product-order.json`);

if (successCount !== objects.length) {
  console.error(`WARNING: ${objects.length - successCount} products failed to parse!`);
  process.exit(1);
}
