# 🚀 SETUP GUIDE - MAISON DE SON

## ✅ HOÀN THÀNH

### 1. Mobile Typography Optimization
- Font size 16px+ trên mobile
- Line-height 1.6-1.75
- Touch targets 44x44px minimum
- Viewport meta tag configured

### 2. SEO Technical
- sitemap.xml ✅ (static pages)
- robots.txt ✅
- GA4 integration ready ✅
- GSC verification ready ✅

---

## 🔧 CẦN SETUP

### Bước 1: Google Analytics 4
1. Truy cập https://analytics.google.com/
2. Tạo property mới: "Maison De Son"
3. Lấy **Measurement ID** (dạng G-XXXXXXXXXX)
4. Tạo file \.env.local\ tại root project:

\\\env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\\\

### Bước 2: Google Search Console
1. Truy cập https://search.google.com/search-console
2. Add property: **maisondeson.com**
3. Chọn **HTML tag** verification method
4. Copy giá trị \content\ từ meta tag
5. Thêm vào \.env.local\:

\\\env
NEXT_PUBLIC_GSC_VERIFICATION_CODE=your_verification_code_here
\\\

### Bước 3: Build & Deploy
\\\ash
npm run build
npm run start
\\\

### Bước 4: Verify
- https://maisondeson.com/sitemap.xml
- https://maisondeson.com/robots.txt
- Google Analytics Realtime
- GSC Verification status

---

## 📁 FILES CHỈNH SỬA

| File | Mục đích |
|------|----------|
| src/app/globals.css | Mobile typography |
| src/app/layout.tsx | GA4 + GSC + viewport |
| src/app/sitemap.ts | Sitemap XML |
| src/app/robots.ts | Robots TXT |
| src/app/product/[id]/ProductClient.tsx | Article typography |
| src/components/Header.tsx | Mobile touch targets |
| src/components/Footer.tsx | Mobile touch targets |
| src/components/FloatingSupport.tsx | Encoding fix |

---

**Status:** ✅ Ready for GA4/GSC setup
**Build:** ✅ Successful
**Date:** 2026-03-03
