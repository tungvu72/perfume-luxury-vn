# 🔧 HƯỚNG DẪN SETUP GA4 & GSC - MAISON DE SON

**Email quản trị:** hts.tungvu@gmail.com

---

## 📊 TASK 1: GOOGLE ANALYTICS 4

### Bước 1: Tạo GA4 Property
1. Truy cập: https://analytics.google.com/
2. Đăng nhập với: **hts.tungvu@gmail.com**
3. Click **Admin** (bánh răng góc trái dưới)
4. Trong Account dropdown, chọn **Create Account** (hoặc chọn account có sẵn)
5. Điền thông tin:
   - **Account name:** Maison De Son
   - **Property name:** Maison De Son
   - **Reporting time zone:** Vietnam
   - **Currency:** Vietnamese đồng (VND)
6. Click **Next**
7. Chọn industry category: **Shopping** (hoặc phù hợp nhất)
8. Click **Create**

### Bước 2: Lấy Measurement ID
1. Sau khi tạo property, chọn **Data Streams**
2. Click **Add stream** → **Web**
3. Điền:
   - **Website URL:** https://maisondeson.com
   - **Stream name:** Maison De Son Website
4. Click **Create stream**
5. Copy **Measurement ID** (dạng **G-XXXXXXXXXX**)

### Bước 3: Config vào Next.js
1. Tạo file .env.local tại root project:
`env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
`
(thay XXXXXXXXXX bằng ID thực tế)

2. Code đã có sẵn trong src/app/layout.tsx - không cần sửa thêm

---

## 🔍 TASK 2: GOOGLE SEARCH CONSOLE

### Bước 1: Verify Property
1. Truy cập: https://search.google.com/search-console
2. Đăng nhập với: **hts.tungvu@gmail.com**
3. Click **Add Property**
4. Chọn **URL prefix**
5. Nhập: **https://maisondeson.com**
6. Click **Continue**

### Bước 2: HTML Tag Verification
1. Chọn phương thức **HTML tag**
2. Copy giá trị **content** từ meta tag (ví dụ: content="abc123xyz...")
3. Tạo/thêm vào .env.local:
`env
NEXT_PUBLIC_GSC_VERIFICATION_CODE=abc123xyz...
`
(thay abc123xyz... bằng code thực tế)

4. Code đã có sẵn trong src/app/layout.tsx

### Bước 3: Submit Sitemap (sau khi verify xong)
1. Vào Search Console → **Sitemaps**
2. Nhập: **sitemap.xml**
3. Click **Submit**

---

## 📝 FILE .ENV.LOCAL MẪU

`env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GSC_VERIFICATION_CODE=your_verification_code_here
`

---

## ✅ VERIFY SAU KHI SETUP

### 1. Kiểm tra GA4
- Mở https://analytics.google.com/
- Vào **Reports** → **Realtime**
- Truy cập website → See nếu có active users

### 2. Kiểm tra GSC
- Mở https://search.google.com/search-console
- Property status: **Verified**
- Sitemap: **Success** (sau khi submit)

### 3. Kiểm tra Website
- View page source (Ctrl+U)
- Search "G-" → thấy GA4 script
- Search "google-site-verification" → thấy meta tag

---

## 🚀 DEPLOY LÊN VERCEL

Sau khi thêm .env.local:

1. Commit changes:
`ash
git add .
git commit -m "Add GA4 and GSC configuration"
git push origin main
`

2. Vercel sẽ auto-deploy
3. Vào Vercel Dashboard → Check deployment status
4. Nếu có lỗi → Xem logs và fix

**⚠️ Lưu ý:** KHÔNG commit .env.local lên GitHub (đã có trong .gitignore)
Chỉ add environment variables trực tiếp trên Vercel Dashboard:
- Vercel → Project → Settings → Environment Variables
- Add: NEXT_PUBLIC_GA_ID và NEXT_PUBLIC_GSC_VERIFICATION_CODE

---

**Date created:** 2026-03-03
**Contact:** hts.tungvu@gmail.com
