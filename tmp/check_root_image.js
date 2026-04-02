const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// Find all products by looking for objects with `id:`
const idMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

// Count how many 'image: "/images/products/..."' exist
const imageMatches = [...content.matchAll(/image:\s*['"]([^'"]+)['"]/g)];

console.log(`Total IDs defined: ${idMatches.length}`);
console.log(`Total 'image:' fields found: ${imageMatches.length}`);

// Let's do a more robust parse by transpiling mockData.ts
const tsNode = require('child_process').execSync('npx ts-node -e "const m = require(\'./src/constants/mockData.ts\'); console.log(m.MASTER_PERFUMES.filter(p => !p.image || !require(\'fs\').existsSync(\'public\' + p.image)).map(p => p.id).join(\',\'))"', { encoding: 'utf8' });
console.log('Sản phẩm thiếu trường .image hoặc file không tồn tại:', tsNode.trim() || 'Không có');
