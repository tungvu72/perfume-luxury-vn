# 🚀 HƯỚNG DẪN ON-AIR MAISON DE SON

## ✅ ĐÃ HOÀN THÀNH

### 1. DOMAIN STATUS
- **maisondeson.vn**: ❌ CHƯA MUA
- **Hành động**: Chủ tịch cần mua ngay tại:
  - Namecheap.com (khuyến nghị)
  - Godaddy.com
  - Matbao.net
- **Alternatives**: maisondeson.com, mds.vn, nuocdepon.vn

### 2. BUILD NEXT.JS
- ✅ Build thành công với 15 routes
- ✅ Static pages generated
- ✅ Sanity CMS v4 configured
- ✅ Favicon & PWA manifest created

### 3. COMPONENTS ĐÃ TẠO
- ✅ GoogleAnalytics (GA4 ready)
- ✅ Affiliate tracking utility
- ✅ FloatingSupport (Zalo CTA)
- ✅ Import script for Sanity

---

## 📋 CẦN LÀM TIẾP

### BƯỚC 1: MUA DOMAIN (5 phút)
```
1. Truy cập Namecheap.com
2. Search: maisondeson.vn
3. Mua ngay (~300k/năm)
4. Trỏ DNS về Vercel sau
```

### BƯỚC 2: DEPLOY LÊN VERCEL (10 phút)
```
1. Truy cập vercel.com
2. Login bằng GitHub
3. Import repo: perfume-luxury-vn
4. Deploy production
5. Config custom domain (khi có)
```

### BƯỚC 3: CẤU HÌNH SANITY (10 phút)
```
1. Truy cập: https://www.sanity.io/manage/personal/project/ww1zzidl/api#tokens
2. Tạo API token với quyền "Editor"
3. Thêm vào .env.local:
   SANITY_API_TOKEN="your-token-here"
4. Chạy script import:
   npx tsx scripts/import-products-to-sanity.ts
```

### BƯỚC 4: CẬP NHẬT ZALO NUMBER
File: `src/components/FloatingSupport.tsx`
```typescript
const ZALO_NUMBER = "0901234567"; // ← Thay bằng số thật
const HOTLINE = "0901234567";     // ← Thay bằng số thật
```

### BƯỚC 5: SETUP GA4 (5 phút)
```
1. Truy cập analytics.google.com
2. Tạo property mới
3. Lấy Measurement ID (G-XXXXXXXXXX)
4. Thêm vào .env.local:
   NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
5. Re-deploy Vercel
```

---

## 🔗 LINKS QUAN TRỌNG

- **Sanity Studio**: https://ww1zzidl.sanity.studio
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GA4**: https://analytics.google.com

---

## 📊 OUTPUT CẦN BÁO CÁO

1. URL production (Vercel): [Đang deploy]
2. Domain status: ❌ Chưa mua
3. Favicon: ✅ Đã tạo
4. Products trong Sanity: 0 (chưa import)
5. GA4 Measurement ID: [Chưa setup]
6. Zalo number: 0901234567 (cần update)

---

**⏰ Thời gian hoàn thành ước tính: 30 phút**
