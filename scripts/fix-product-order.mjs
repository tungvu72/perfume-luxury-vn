import fs from 'fs';
import path from 'path';

const productsDir = path.resolve('data/products');
const orderFile = path.resolve('data/product-order.json');

// Get all actual file basenames
const files = fs.readdirSync(productsDir)
  .filter(f => f.endsWith('.json'))
  .map(f => f.replace('.json', ''))
  .sort();

// Write new order
fs.writeFileSync(orderFile, JSON.stringify(files, null, 2) + '\n', 'utf-8');
console.log(`Updated product-order.json with ${files.length} products`);
