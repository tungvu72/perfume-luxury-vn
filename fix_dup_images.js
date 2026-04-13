const fs = require('fs');
const mockPath = 'src/constants/mockData.ts';
let content = fs.readFileSync(mockPath, 'utf8');

// Fix 1: YSL Libre L'Eau Nue — line ~12263 — đang dùng nhầm ảnh libre-edp
// Replace the image and images line for libre-leau-nue
content = content.replace(
  /image: "\/images\/products\/ysl-libre-edp-main\.jpg",\s*\n\s*images: \[\{ url: "\/images\/products\/ysl-libre-edp-main\.jpg", source: "owner", caption: "YSL Libre L'Eau Nue chính hãng", verified: true \}\]/,
  'image: "/images/products/ysl-libre-leau-nue-main.jpg",\n    images: [{ url: "/images/products/ysl-libre-leau-nue-main.jpg", source: "studio", caption: "YSL Libre L\'Eau Nue chính hãng", verified: true }]'
);

// Fix 2: Versace Eros EDT — line ~12327 — đang dùng nhầm ảnh eros-edp
content = content.replace(
  /image: "\/images\/products\/versace-eros-edp-main\.jpg",\s*\n\s*images: \[\{ url: "\/images\/products\/versace-eros-edp-main\.jpg", source: "owner", caption: "Versace Eros EDT chính hãng", verified: true \}\]/,
  'image: "/images/products/versace-eros-edt-main.jpg",\n    images: [{ url: "/images/products/versace-eros-edt-main.jpg", source: "studio", caption: "Versace Eros EDT chính hãng", verified: true }]'
);

fs.writeFileSync(mockPath, content, 'utf8');
console.log('Fixed duplicate image mappings for Libre L\'Eau Nue and Eros EDT.');
