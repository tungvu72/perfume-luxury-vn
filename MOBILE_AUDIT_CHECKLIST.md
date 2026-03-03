# 📱 MOBILE OPTIMIZATION AUDIT CHECKLIST

## ✅ Đã Hoàn Thành

### 1. Typography Mobile
- [x] Font size tối thiểu 16px cho body text trên mobile
- [x] Line-height 1.6+ cho dễ đọc
- [x] Font family fallback (Inter, sans-serif)
- [x] Heading sizes optimized cho mobile (H1: 28px, H2: 24px, H3: 20px)
- [x] Article text: 16px+, line-height 1.75

### 2. Touch Targets
- [x] Buttons minimum 44x44px
- [x] Links trong mobile menu có padding đủ
- [x] Social media icons trong footer: 44x44px
- [x] Search input đủ lớn cho mobile

### 3. Viewport & Responsive
- [x] Viewport meta tag: width=device-width, initial-scale=1
- [x] Theme color cho light/dark mode
- [x] No horizontal scroll (overflow-x: hidden)
- [x] Mobile breakpoints trong Tailwind (max-width: 768px)

### 4. Performance
- [ ] Images responsive với srcSet (cần verify)
- [ ] Lazy loading cho images ngoài viewport
- [ ] Code splitting tự động (Next.js)

---

## 📋 CẦN VERIFY THỦ CÔNG

### Chrome DevTools Device Mode
1. Mở Chrome DevTools (F12)
2. Click Device Toolbar (Ctrl+Shift+M)
3. Chọn iPhone 12/13/14 Pro (375px hoặc 390px width)
4. Kiểm tra:
   - [ ] Không có horizontal scroll
   - [ ] Font chữ đọc được (tối thiểu 16px)
   - [ ] Các button dễ tap (44x44px)
   - [ ] Menu mobile hoạt động tốt
   - [ ] Search dropdown hiển thị đúng

### Lighthouse Audit
 + "" + ash
npm run build
npm run start
# Mở Chrome DevTools → Lighthouse → Chọn Mobile → Analyze page load
 + "" + 

Target scores:
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

---

## 🔧 FILES ĐÃ CHỈNH SỬA

| File | Thay đổi |
|------|----------|
| \src/app/globals.css\ | Thêm mobile typography media queries |
| \src/app/layout.tsx\ | Thêm viewport meta tag, GA4 wrapper, GSC verification |
| \src/app/product/[id]/ProductClient.tsx\ | Fix article typography, max-width 65ch |
| \src/app/sitemap.ts\ | Tạo sitemap.xml dynamic |
| \src/app/robots.ts\ | Tạo robots.txt |
| \src/components/Header.tsx\ | Mobile touch targets optimization |
| \src/components/Footer.tsx\ | Social icons touch targets |
| \.env.local.example\ | Hướng dẫn config GA4 & GSC |

---

## 🚀 NEXT STEPS

1. **Setup GA4:**
   - Tạo property tại https://analytics.google.com/
   - Copy Measurement ID (G-XXXXXXXXXX)
   - Thêm vào \.env.local\: \NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX\

2. **Setup GSC:**
   - Vào https://search.google.com/search-console
   - Add property: maisondeson.com
   - Chọn HTML tag verification
   - Copy code vào \.env.local\: \NEXT_PUBLIC_GSC_VERIFICATION_CODE=your_code\

3. **Build & Deploy:**
    + "" + ash
   npm run build
   npm run start
    + "" + 

4. **Verify:**
   - https://maisondeson.com/sitemap.xml
   - https://maisondeson.com/robots.txt
   - Lighthouse score

---

**Last updated:** 2026-03-03
**Status:** ✅ Technical SEO & Mobile Optimization Complete
