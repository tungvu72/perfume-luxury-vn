const data = require('./tempData.cjs');
const products = data.MASTER_PERFUMES;

const total = products.length;

// 1. Trùng nhau (Duplicates based on ID or Name)
const seenIds = new Set();
const duplicateIds = new Set();
let duplicatesCount = 0;

for (let p of products) {
  if (seenIds.has(p.id)) {
    duplicateIds.add(p.id);
    duplicatesCount++;
  } else {
    seenIds.add(p.id);
  }
}

// Stats variables
let đủMainVà5Chính = 0; // image != null && images.length >= 6 (1 main in images + 5 others OR images.length >= 6 overall?) Wait...
// The user asks for: "1 ảnh main + 5 ảnh chính". This means `images` array has at least 6 objects OR exactly 6. Usually, "đủ 1 ảnh main + 5 ảnh chính" means length >= 6.
// Also checked logic for those ones.

let có1Main0Chính = 0;  // image != null; images.length <= 1
let khôngCóMain = 0;    // image == null or empty

const detailTypes = {
  duplicateItems: Array.from(duplicateIds),
  duQuantity: duplicatesCount,
  full6: 0,
  just1Main: 0,
  noMain: 0
};

products.forEach(p => {
  const hasMain = !!(p.image && p.image.trim() !== '' && !p.image.includes('default'));
  const totalImages = p.images ? p.images.length : 0;
  
  if (!hasMain) {
    khôngCóMain++;
  } else {
    // Has main image. Now how many in images array?
    if (totalImages >= 6) {
      // At least 1 main + 5 gallery = 6 images
      đủMainVà5Chính++;
      detailTypes.full6++;
    } else if (totalImages <= 1) {
      // Only main (1) or none in array
      có1Main0Chính++;
      detailTypes.just1Main++;
    } else {
      // In between (2, 3, 4, 5) which was not explicitly asked, but we should count them or group them to ensure math adds up.
    }
  }
});

let remaining = products.filter(p => !!(p.image) && (p.images ? p.images.length : 0) > 1 && (p.images ? p.images.length : 0) < 6).length;

console.log(`TỔNG SỐ SẢN PHẨM (TRÊN WEB): ${total}`);
console.log(`- Trùng nhau (ID lặp lại): ${duplicatesCount} (Các ID bị trùng: ${Array.from(duplicateIds).join(', ')})`);
console.log(`- Đủ 1 ảnh main + 5 ảnh gallery (>= 6 ảnh): ${đủMainVà5Chính}`);
console.log(`- Có 1 ảnh main nhưng KHÔNG CÓ ảnh gallery (<= 1 ảnh): ${có1Main0Chính}`);
console.log(`- Không có ảnh main (hoặc ảnh rỗng): ${khôngCóMain}`);
console.log(`- Nhóm lấp lửng (từ 2 đến 5 ảnh): ${remaining}`);
