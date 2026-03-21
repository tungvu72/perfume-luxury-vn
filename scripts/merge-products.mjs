/**
 * merge-products.mjs
 * Gộp tất cả file JSON trong data/products/ → src/constants/mockData.ts
 * Giữ thứ tự theo data/product-order.json
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const PRODUCTS_DIR = join(ROOT, 'data', 'products');
const ORDER_FILE = join(ROOT, 'data', 'product-order.json');
const OUTPUT_FILE = join(ROOT, 'src', 'constants', 'mockData.ts');

// Read order file
const order = JSON.parse(readFileSync(ORDER_FILE, 'utf-8'));

// Read all product JSON files
const products = [];
for (const id of order) {
  const filepath = join(PRODUCTS_DIR, `${id}.json`);
  try {
    const data = JSON.parse(readFileSync(filepath, 'utf-8'));
    products.push(data);
  } catch (e) {
    console.error(`ERROR reading ${id}.json: ${e.message}`);
    process.exit(1);
  }
}

// Convert a JS value to TypeScript source code
function valueToTS(value, indent = 2, currentIndent = 0) {
  const pad = ' '.repeat(currentIndent);
  const innerPad = ' '.repeat(currentIndent + indent);
  
  if (value === null || value === undefined) return 'undefined';
  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return String(value);
  
  if (typeof value === 'string') {
    // Use template literal for multi-line strings (article, productCopy)
    if (value.includes('\n')) {
      return '`' + value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`';
    }
    // Regular string with double quotes
    return JSON.stringify(value);
  }
  
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    
    // Check if array items are simple (strings, numbers)
    const allSimple = value.every(v => typeof v === 'string' || typeof v === 'number');
    
    if (allSimple && JSON.stringify(value).length < 100) {
      return JSON.stringify(value);
    }
    
    // Check if items are simple objects like { name: "..." }
    const allSimpleObj = value.every(v => typeof v === 'object' && !Array.isArray(v) && v !== null &&
      Object.values(v).every(vv => typeof vv === 'string' || typeof vv === 'number' || typeof vv === 'boolean'));
    
    if (allSimpleObj) {
      const items = value.map(item => {
        const entries = Object.entries(item).map(([k, v]) => {
          return `${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`;
        });
        return `{ ${entries.join(', ')} }`;
      });
      
      // If fits on one line
      const oneLine = `[${items.join(', ')}]`;
      if (oneLine.length < 150) return oneLine;
      
      // Multi-line
      return '[\n' + items.map(item => innerPad + item).join(',\n') + '\n' + pad + ']';
    }
    
    // Complex array
    const items = value.map(item => innerPad + valueToTS(item, indent, currentIndent + indent));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    
    // Simple flat objects on one line
    const allSimpleValues = entries.every(([, v]) => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean');
    if (allSimpleValues) {
      const parts = entries.map(([k, v]) => `${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`);
      const oneLine = `{ ${parts.join(', ')} }`;
      if (oneLine.length < 150) return oneLine;
    }
    
    const lines = entries.map(([k, v]) => {
      const valStr = valueToTS(v, indent, currentIndent + indent);
      return `${innerPad}${k}: ${valStr}`;
    });
    return '{\n' + lines.join(',\n') + '\n' + pad + '}';
  }
  
  return String(value);
}

// Build the TypeScript output
function productToTS(product, indent = 4) {
  const pad = ' '.repeat(indent);
  const lines = [];
  
  // Define key order to match original file
  const keyOrder = [
    'id', 'brandSlug', 'brand', 'name', 'subName', 'perfumer', 'gender',
    'image', 'images', 'description', 'productCopy', 'article',
    'verdict', 'verdictShort', 'score', 'vibes',
    'longevity', 'sillage', 'seasons', 'dayNight',
    'topNotes', 'middleNotes', 'baseNotes', 'accords',
    'seoTitle', 'metaDescription',
    'tags', 'sizes', 'basePrice', 'shopeeOffers'
  ];
  
  // Get all keys, ordered
  const allKeys = new Set([...keyOrder, ...Object.keys(product)]);
  
  for (const key of allKeys) {
    if (!(key in product)) continue;
    const value = product[key];
    const valStr = valueToTS(value, 2, indent);
    lines.push(`${pad}${key}: ${valStr}`);
  }
  
  return `  {\n${lines.join(',\n')}\n  }`;
}

// Generate full file
const header = 'import { Perfume } from "../types";\n\nexport const MASTER_PERFUMES: Perfume[] = [\n';
const footer = '\n];\n';

const productStrings = products.map(p => productToTS(p));
const output = header + productStrings.join(',\n') + footer;

writeFileSync(OUTPUT_FILE, output, 'utf-8');
console.log(`Merged ${products.length} products into src/constants/mockData.ts`);
