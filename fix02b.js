const fs = require('fs');
let content = fs.readFileSync('src/app/thuong-hieu/[slug]/page.tsx', 'utf8');

// BUG-02: Replace hardcoded "840 Đánh giá"
content = content.replace(/840 Đánh giá/g, '{product.reviewCount || 0} đánh giá');

// BUG-03: Simplify filter bar - remove the two extra tabs
content = content.replace(
  /<span className="text-gray-400 cursor-pointer hover:text-foreground">Phổ biến<\/span>\s*<span className="text-gray-400 cursor-pointer hover:text-foreground">Đánh giá cao<\/span>/g,
  ''
);

fs.writeFileSync('src/app/thuong-hieu/[slug]/page.tsx', content, 'utf8');
console.log('BUG-02 & BUG-03 fixed!');
