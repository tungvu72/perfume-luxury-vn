# 🚫 QUY TRÌNH DEPLOY VERCEL — CODER PROTOCOL
## Bắt buộc thực hiện TRƯỚC mỗi lần git push
**Dự án:** perfume-luxury-vn | **Stack:** Next.js 15 + TypeScript + Sanity

---

## 🔍 PHÂN TÍCH LỖI THỰC TẾ (từ Vercel log)

3 deploy fail liên tiếp, tất cả dưới 1 phút → **Build-time errors**, không phải runtime.

| Commit | Lỗi có thể | Nguyên nhân gốc |
|--------|-----------|----------------|
| "Hardcode GA4 + GSC" | `viewport` deprecated warning → error | Dùng field deprecated trong Next.js 15 |
| "Update GA4 + Bug fixes" | TypeScript lỗi import | Sửa bug không test build trước |
| "Update Zalo number" | ESLint error / encoding fail | Sửa nhỏ kéo theo lỗi encoding |

**Pattern:** Coder push code **mà không chạy `next build` trước** → fail trên Vercel.

---

## ⛔ CÁC LỖI HAY GẶP NHẤT — CẤM LẶP LẠI

### Lỗi 1: `viewport` deprecated trong Next.js 15
```typescript
// ❌ SAI — Next.js 15 không cho phép viewport trong metadata
export const metadata: Metadata = {
  viewport: { width: "device-width" },  // LỖI BUILD!
}

// ✅ ĐÚNG — tách riêng thành export viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}
export const metadata: Metadata = {
  title: "...",
}
```

### Lỗi 2: Encoding UTF-8 bị vỡ (Mojibake)
```typescript
// ❌ SAI — File bị lưu sai encoding
description: "KhÃ¡m phÃ¡ thÆ°Æ¡ng hiá»‡u..."  // Mojibake!

// ✅ ĐÚNG — Tiếng Việt Unicode chuẩn
description: "Khám phá thương hiệu nước hoa cao cấp"
```
**Rule:** Luôn lưu file với encoding UTF-8 (không phải UTF-8 with BOM, không phải ANSI).
Kiểm tra: Nếu thấy ký tự lạ như `Ã`, `â€`, `Æ°` → file đang bị lỗi encoding → phải fix trước khi push.

### Lỗi 3: `any` type không được khai báo
```typescript
// ❌ SAI — ESLint báo lỗi @typescript-eslint/no-explicit-any
const brands = await getAllBrands();
brands.map((b: any) => ...)  // Có thể bị flag

// ✅ ĐÚNG — Dùng type proper hoặc suppress có lý do
type BrandRaw = { name: string; slug: string; productCount?: number }
const brands: BrandRaw[] = await getAllBrands();
```

### Lỗi 4: Import không tồn tại
```typescript
// ❌ SAI — Import component/function chưa tạo
import { NewComponent } from "@/components/NewComponent"  // File chưa có!

// ✅ ĐÚNG — Tạo file trước, import sau. Hoặc dùng dynamic import
```

### Lỗi 5: Missing environment variables
```typescript
// ❌ SAI — Hardcode biến nhạy cảm trong code
const GA_ID = "G-8DCZC9TD49"  // Nên dùng env var

// ✅ ĐÚNG — Dùng env var (nhưng phải set trên Vercel dashboard)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
```
**Rule:** Tất cả env vars phải được thêm vào **Vercel Project Settings → Environment Variables** trước khi deploy.

### Lỗi 6: `<script>` trong Suspense (Next.js 15)
```typescript
// ❌ SAI — Script tags không được phép trong Suspense component trực tiếp
<Suspense fallback={null}>
  <script async src="..." />
</Suspense>

// ✅ ĐÚNG — Tạo separate Client Component cho GA
// File: src/components/GoogleAnalytics.tsx
'use client'
import Script from 'next/script'
export function GoogleAnalytics({ id }: { id: string }) {
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
}
```

---

## ✅ CHECKLIST BẮT BUỘC TRƯỚC MỖI COMMIT

```
BƯỚC 1: Kiểm tra TypeScript
□ Chạy: npx tsc --noEmit
□ Kết quả: PHẢI 0 errors

BƯỚC 2: Kiểm tra ESLint
□ Chạy: npx next lint
□ Kết quả: PHẢI 0 errors (warnings OK)

BƯỚC 3: Build test (QUAN TRỌNG NHẤT)
□ Xóa cache: Remove-Item -Recurse -Force .next (nếu cần)
□ Chạy: npx next build
□ Kết quả: PHẢI "Build successful" — KHÔNG được push nếu lỗi

BƯỚC 4: Kiểm tra encoding
□ Mở mỗi file đã chỉnh sửa
□ Kiểm tra: Không có ký tự lạ dạng Ã, â€, Æ°, á»
□ Nếu có → fix encoding trước

BƯỚC 5: Kiểm tra environment variables
□ Tất cả process.env.* đã được thêm vào .env.local chưa?
□ Có cần thêm vào Vercel dashboard không?
□ KHÔNG hardcode API keys, IDs vào code source

BƯỚC 6: Kiểm tra imports
□ Tất cả file import đều tồn tại thực sự?
□ Đường dẫn @/components/... đúng không?
```

---

## 🔧 CÁC LỆNH CHUẨN

```powershell
# Trước khi push — chạy theo thứ tự này:

# 1. TypeScript check
npx tsc --noEmit

# 2. Lint check  
npx next lint

# 3. Build test (quan trọng nhất)
npx next build

# Nếu build fail vì Windows file lock (.next folder):
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npx next build

# 4. Nếu tất cả pass → push
git add .
git commit -m "feat: [mô tả ngắn gọn]"
git push
```

---

## 📋 QUY ƯỚC COMMIT MESSAGE

```
feat: thêm tính năng mới
fix: sửa bug [mô tả bug]
chore: cập nhật config/dependency
style: thay đổi CSS/styling
refactor: tái cấu trúc code (không thay đổi chức năng)
docs: cập nhật documentation

VÍ DỤ TỐT:
  fix: sửa encoding UTF-8 trong metadata thuong-hieu/page.tsx
  feat: thêm nút mua Shopee vào product card
  fix: xóa hardcode review count, thay bằng dynamic count

VÍ DỤ XẤU (không rõ ràng):
  update stuff
  fix bug
  changes
```

---

## 🌿 QUY ƯỚC BRANCH (khi có nhiều người làm)

```
main          → Production (Vercel deploy từ đây)
dev           → Development (test trước khi merge vào main)
feat/[name]   → Tính năng mới
fix/[name]    → Bug fix

QUY TẮC:
□ KHÔNG push thẳng vào main khi chưa test build
□ Làm việc trên branch riêng, merge vào dev trước
□ Chỉ merge dev → main khi build OK
```

---

## 🔴 CÁC VIỆC KHÔNG ĐƯỢC LÀM

```
❌ Push code mà chưa chạy next build
❌ Sửa file và không kiểm tra encoding sau khi save
❌ Hardcode GA ID, API keys, verification codes vào source code
❌ Import component/function chưa tạo file
❌ Push một mình nhiều commit liên tiếp để "thử" — test local trước
❌ Bỏ qua TypeScript errors bằng cách thêm // @ts-ignore vô tội vạ
❌ Dùng `any` type mà không có comment giải thích lý do
```

---

## ⚙️ NEXT.JS 15 — CÁC THAY ĐỔI QUAN TRỌNG CẦN BIẾT

```typescript
// 1. viewport phải tách riêng
import { Metadata, Viewport } from 'next'
export const viewport: Viewport = { width: 'device-width' }
export const metadata: Metadata = { title: '...' }

// 2. themeColor phải tách riêng (không trong metadata)
export const viewport: Viewport = {
  themeColor: [{ media: '...', color: '#fff' }]
}

// 3. Script tags dùng next/script thay vì <script> raw
import Script from 'next/script'
<Script src="..." strategy="afterInteractive" />

// 4. Route handlers trả về Response, không dùng NextResponse.json() cho đơn giản
// 5. Dynamic imports: await import() thay vì require()
```

---

## 📊 VERCEL ENVIRONMENT VARIABLES — DANH SÁCH CẦN SET

```
NEXT_PUBLIC_GA_ID=G-8DCZC9TD49
NEXT_PUBLIC_GSC_VERIFICATION=2v7xR50gvaL9u1mDddvOL3gl8qQUe5BFnmesiPmLQts
SANITY_API_TOKEN=[token từ Sanity dashboard]
NEXT_PUBLIC_SANITY_PROJECT_ID=[project ID]
NEXT_PUBLIC_SANITY_DATASET=production
```
**Lưu ý:** Tất cả biến `NEXT_PUBLIC_*` có thể thấy phía client. Biến không có prefix chỉ dùng server-side.

---

## 📝 BÁO CÁO SAU KHI DEPLOY

Sau mỗi deploy thành công, Coder PHẢI update `TEAM_REPORT.md`:
```
## Coder Report — [Ngày]
- Task: [Tên task]
- Commit: [Hash]
- Vercel Deploy: ✅ Success / ❌ Fail (lý do)
- Files changed: [Danh sách file]
- Test: TypeScript ✅ | Lint ✅ | Build ✅
```

---

*Protocol này là bắt buộc. Supervisor (Antigravity) sẽ check build history trong mỗi review.*
*Vi phạm → task bị rollback và phải làm lại.*
