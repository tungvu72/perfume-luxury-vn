const fs = require('fs');
let content = fs.readFileSync('src/app/thuong-hieu/[slug]/page.tsx', 'utf8');

// BUG-02: Replace hardcoded "840 Đánh giá" with dynamic count
content = content.replace('"840 Đánh giá"', '{product.reviewCount || 0} đánh giá');

// BUG-03: Simplify filter bar - remove non-functional tabs, keep only "Tất cả"
const oldFilter = `<div className="flex gap-8">
                        <span className="text-primary cursor-pointer hover:underline underline-offset-4">Tất cả</span>
                        <span className="text-gray-400 cursor-pointer hover:text-foreground">Phổ biến</span>
                        <span className="text-gray-400 cursor-pointer hover:text-foreground">Đánh giá cao</span>
                    </div>`;
const newFilter = `<div className="flex gap-8">
                        <span className="text-primary font-bold">Tất cả</span>
                    </div>`;
content = content.replace(oldFilter, newFilter);

fs.writeFileSync('src/app/thuong-hieu/[slug]/page.tsx', content, 'utf8');
console.log('BUG-02 & BUG-03 fixed!');
