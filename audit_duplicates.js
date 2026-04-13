const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
const content = fs.readFileSync(mockPath, 'utf8');
const lines = content.split('\n');

// Parse all products
let products = [];
let cur = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const mId = line.match(/^\s*id:\s*"([^"]+)"/);
  if (mId) {
    if (cur) products.push(cur);
    cur = { id: mId[1], lineNum: i + 1, name: '', brand: '', image: '', images: [], gender: '' };
  }
  if (!cur) continue;

  const mName = line.match(/^\s*name:\s*"([^"]+)"/);
  if (mName && !cur.name) cur.name = mName[1];

  const mBrand = line.match(/^\s*brand:\s*"([^"]+)"/);
  if (mBrand && !cur.brand) cur.brand = mBrand[1];

  const mGender = line.match(/^\s*gender:\s*"([^"]+)"/);
  if (mGender && !cur.gender) cur.gender = mGender[1];

  const mImg = line.match(/^\s*image:\s*"([^"]+)"/);
  if (mImg && !cur.image) cur.image = mImg[1];

  // Capture image URLs from images array
  const mImgUrl = line.match(/url:\s*"([^"]+)"/);
  if (mImgUrl) cur.images.push(mImgUrl[1]);
}
if (cur) products.push(cur);

console.log(`\n========================================`);
console.log(`TỔNG SỐ SẢN PHẨM: ${products.length}`);
console.log(`========================================\n`);

// ===== CHECK 1: Duplicate IDs =====
console.log(`\n--- CHECK 1: TRÙNG ID ---`);
let idMap = {};
products.forEach(p => {
  if (!idMap[p.id]) idMap[p.id] = [];
  idMap[p.id].push(p);
});
let dupIds = Object.entries(idMap).filter(([k, v]) => v.length > 1);
if (dupIds.length === 0) {
  console.log('✅ Không có ID trùng.');
} else {
  console.log(`❌ ${dupIds.length} ID bị trùng:`);
  dupIds.forEach(([id, items]) => {
    console.log(`  "${id}" xuất hiện ${items.length} lần:`);
    items.forEach(p => console.log(`    - Line ${p.lineNum}: ${p.brand} ${p.name} (${p.gender})`));
  });
}

// ===== CHECK 2: Duplicate Names (same brand + name) =====
console.log(`\n--- CHECK 2: TRÙNG TÊN (Brand + Name) ---`);
let nameMap = {};
products.forEach(p => {
  let key = (p.brand + ' ' + p.name).toLowerCase().trim();
  if (!nameMap[key]) nameMap[key] = [];
  nameMap[key].push(p);
});
let dupNames = Object.entries(nameMap).filter(([k, v]) => v.length > 1);
if (dupNames.length === 0) {
  console.log('✅ Không có tên trùng.');
} else {
  console.log(`❌ ${dupNames.length} tên bị trùng:`);
  dupNames.forEach(([name, items]) => {
    console.log(`  "${name}":`);
    items.forEach(p => console.log(`    - ID: "${p.id}" | Line ${p.lineNum} | Gender: ${p.gender}`));
  });
}

// ===== CHECK 3: Duplicate Main Images =====
console.log(`\n--- CHECK 3: TRÙNG ẢNH MAIN ---`);
let imgMap = {};
products.forEach(p => {
  if (p.image) {
    if (!imgMap[p.image]) imgMap[p.image] = [];
    imgMap[p.image].push(p);
  }
});
let dupImgs = Object.entries(imgMap).filter(([k, v]) => v.length > 1);
if (dupImgs.length === 0) {
  console.log('✅ Không có ảnh main trùng.');
} else {
  console.log(`❌ ${dupImgs.length} ảnh main bị dùng chung:`);
  dupImgs.forEach(([img, items]) => {
    console.log(`  Ảnh: ${img}`);
    items.forEach(p => console.log(`    - ID: "${p.id}" | ${p.brand} ${p.name}`));
  });
}

// ===== CHECK 4: Similar Names (fuzzy - catch near-duplicates) =====
console.log(`\n--- CHECK 4: TÊN TƯƠNG TỰ (Nghi trùng) ---`);
function normalize(s) {
  return s.toLowerCase()
    .replace(/[''\u2019]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/eau|de|pour|homme|femme|edp|edt|parfum|toilette/g, '');
}
let checked = new Set();
let suspects = [];
products.forEach((a, i) => {
  products.forEach((b, j) => {
    if (i >= j) return;
    let key = a.id + '|' + b.id;
    if (checked.has(key)) return;
    checked.add(key);
    
    let na = normalize(a.brand + a.name);
    let nb = normalize(b.brand + b.name);
    
    // Check if one contains the other or high overlap
    if (na.length > 5 && nb.length > 5) {
      if (na === nb || na.includes(nb) || nb.includes(na)) {
        suspects.push([a, b]);
      }
    }
  });
});
if (suspects.length === 0) {
  console.log('✅ Không phát hiện tên tương tự đáng ngờ.');
} else {
  console.log(`⚠️ ${suspects.length} cặp nghi trùng:`);
  suspects.forEach(([a, b]) => {
    console.log(`  "${a.brand} ${a.name}" (id: ${a.id}, gender: ${a.gender}, line: ${a.lineNum})`);
    console.log(`  "${b.brand} ${b.name}" (id: ${b.id}, gender: ${b.gender}, line: ${b.lineNum})`);
    console.log('  ---');
  });
}

// ===== CHECK 5: Products without main image file =====
console.log(`\n--- CHECK 5: ẢNH MAIN KHÔNG TỒN TẠI TRÊN DISK ---`);
let missing = [];
products.forEach(p => {
  if (!p.image) {
    missing.push(`  ❌ "${p.id}" (${p.brand} ${p.name}) - KHÔNG CÓ TRƯỜNG IMAGE`);
    return;
  }
  let filePath = path.join(__dirname, 'public', p.image);
  if (!fs.existsSync(filePath)) {
    missing.push(`  ❌ "${p.id}" -> ${p.image} (FILE KHÔNG TỒN TẠI)`);
  }
});
if (missing.length === 0) {
  console.log('✅ Tất cả ảnh main đều tồn tại trên disk.');
} else {
  console.log(`❌ ${missing.length} sản phẩm thiếu file ảnh:`);
  missing.forEach(m => console.log(m));
}

console.log(`\n========================================`);
console.log(`AUDIT HOÀN TẤT`);
console.log(`========================================\n`);
