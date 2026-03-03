# DEPLOYMENT GUIDE

Hướng dẫn deploy website Maison de SON lên Vercel.

---

## Pre-deploy Checklist

Trước khi deploy, đảm bảo các bước sau đã hoàn tất:

### 1. Build Local Success
```bash
npm run build
```
✅ Phải thành công, không có lỗi TypeScript hoặc build errors

### 2. Test Local
```bash
npm run start
```
✅ Website chạy được ở `http://localhost:3000`

### 3. Check Console Errors
- Mở DevTools (F12)
- Kiểm tra tab Console không có lỗi đỏ
- Kiểm tra tab Network không có 404/500 errors

### 4. Verify Dynamic Routes
Test các route sau:
- `/kien-thuc/[slug]` - Bài viết buying guides
- `/thuong-hieu/[slug]` - Trang thương hiệu
- `/product/[id]` - Trang sản phẩm

✅ Tất cả phải load thành công, không 404

### 5. Encoding Check
- Đảm bảo file `.md` không bị lỗi UTF-8
- Tiếng Việt hiển thị đúng, không bị ký tự lạ

---

## Deploy Steps

### Bước 1: Commit Changes
```bash
git add .
git commit -m "feat: thêm buying guides và dynamic routes"
```

### Bước 2: Push lên GitHub
```bash
git push origin main
```

### Bước 3: Monitor Vercel Dashboard
1. Truy cập: https://vercel.com/dashboard
2. Chọn project `perfume-luxury-vn`
3. Theo dõi quá trình build:
   - ✅ Build thành công → Auto-deploy
   - ❌ Build lỗi → Xem log và fix

### Bước 4: Kiểm tra Deploy Log
- Vào tab "Deployments"
- Click vào deployment mới nhất
- Xem "Build Logs" nếu có lỗi

---

## Post-deploy Verify

### 1. Website Loads
- URL: `https://maisondeson.com`
- ✅ Homepage load < 3 giây
- ✅ Không có lỗi 500/404

### 2. No 404 Errors
Test các route quan trọng:
- `/kien-thuc/01-top-10-nuoc-hoa-nam-duoc-yeu-thich-nhat-2026`
- `/thuong-hieu/dior`
- `/nam-gioi`
- `/nu-gioi`

✅ Tất cả phải load thành công

### 3. Check GA4 Realtime
1. Truy cập: https://analytics.google.com/
2. Chọn property Maison de SON
3. Vào Reports → Realtime
4. ✅ Thấy lượt truy cập realtime

### 4. Mobile Test
- Mở website trên mobile (hoặc Chrome DevTools mobile view)
- ✅ Responsive đúng
- ✅ Touch elements đủ lớn (44px+)
- ✅ Text đọc được không cần zoom

### 5. Performance Check
- Chạy Lighthouse (Chrome DevTools → Lighthouse)
- ✅ Performance > 80
- ✅ SEO > 90
- ✅ Accessibility > 90

---

## Troubleshooting

### Build Failed trên Vercel
**Triệu chứng:** Build lỗi nhưng local build thành công

**Giải pháp:**
1. Kiểm tra Node version trên Vercel (Settings → Build → Node.js Version)
2. Đảm bảo `package.json` có `engines`:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```
3. Xóa cache và rebuild:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

### 404 trên Dynamic Routes
**Triệu chứng:** Route `/kien-thuc/[slug]` báo 404

**Giải pháp:**
1. Kiểm tra file `src/app/kien-thuc/[slug]/page.tsx` tồn tại
2. Verify `generateStaticParams()` trả về đúng slug
3. Rebuild và push lại

### Tiếng Việt bị lỗi encoding
**Triệu chứng:** Ký tự tiếng Việt hiển thị thành `Ã¡`, `Ã©`,...

**Giải pháp:**
1. Đảm bảo file `.md` lưu với encoding UTF-8
2. Thêm `<meta charset="UTF-8" />` trong layout
3. Check `next.config.ts` có setting đúng

### Local Build Error: Corrupted Route Pattern
**Triệu chứng:** Lỗi `kien-thuc\`[slug\`]` không tồn tại

**Nguyên nhân:** Next.js cache route manifest bị lỗi trên Windows

**Giải pháp:**
1. Xóa hoàn toàn cache:
   ```bash
   rm -rf .next node_modules/.cache
   ```
2. Reinstall dependencies:
   ```bash
   npm install
   ```
3. Build lại:
   ```bash
   npm run build
   ```
4. Nếu vẫn lỗi, push lên Vercel để build trong môi trường Linux (sạch hơn)

---

## Quick Commands Reference

```bash
# Development
npm run dev          # Chạy dev server

# Build & Test
npm run build        # Build production
npm run start        # Chạy production server local
npm run lint         # Check ESLint

# Import articles
npx tsx scripts/import-articles.ts

# Git & Deploy
git add .
git commit -m "message"
git push origin main

# Cleanup
rm -rf .next node_modules
npm install
```

---

## Files Created

### 1. Dynamic Route
- **File:** `src/app/kien-thuc/[slug]/page.tsx`
- **Chức năng:** Hiển thị bài viết từ file markdown
- **Route:** `/kien-thuc/[slug]`

### 2. Import Script
- **File:** `scripts/import-articles.ts`
- **Chức năng:** Đọc và validate các file markdown
- **Run:** `npx tsx scripts/import-articles.ts`

### 3. Buying Guides Content
- **Folder:** `content/buying-guides/`
- **Số lượng:** 20 bài viết
- **Format:** Markdown với frontmatter

---

## Contact

Nếu gặp vấn đề không giải quyết được:
- 📧 Email: [your-email]
- 💬 Telegram Group: AI Dev Team - Perfume
- 📋 Issue Tracker: GitHub Issues

---

*Last updated: 2026-03-03*
