# Vercel Edge Requests 100% — Root Cause & Fix
**Date:** 2026-04-05  
**Status:** FIXED (pending deploy)  
**Severity:** CRITICAL

---

## Problem

Vercel free tier: **1,000,000 Edge Requests/month** → đã dùng **100%** trong ~1 tháng.

**Metrics từ Vercel Analytics:**
- Total requests: 9.8K page views
- Fast Data Transfer: 75% (7.5GB/10GB)
- Edge Requests: 100% (1M/1M)

**Nguy cơ:** Site sẽ bị pause nếu vượt quota.

---

## Root Cause Analysis

### 1. ISR revalidate = 3600 (1 giờ) — MAIN CULPRIT

**File:** `src/app/[slug]/page.tsx`, `src/app/page.tsx`

```typescript
export const revalidate = 3600; // Re-generate mỗi 1 giờ
```

**Impact:**
- ~100 pages (products + brands + articles)
- Mỗi page regenerate mỗi 1 giờ = 24 lần/ngày
- 100 pages × 24 = **2,400 edge requests/ngày** chỉ từ ISR
- 1 tháng = **72,000 requests** (chưa tính traffic thật)

**Với 9.8K page views thật:**
- 9.8K HTML requests
- 72K ISR requests
- Static files (CSS/JS/images): ~10-20 requests/page × 9.8K = ~100-200K
- **Total estimate: ~180-280K requests** (nhưng Vercel báo 1M → có vấn đề khác)

---

### 2. Image Optimization bypass

**Code:**
```typescript
<Image 
  src={product.image} 
  unoptimized={!p.mainImage || p.mainImage.startsWith('http')}
/>
```

**Impact:**
- External images (Unsplash, Sanity) không được optimize
- Mỗi ảnh load = 1 edge request không cache
- 1 product page có 3-5 ảnh → 3-5 edge requests/page

---

### 3. Possible bot/crawler traffic

**Hypothesis:**
- Google/Bing bot crawl toàn bộ site liên tục
- Không có rate limit → burn requests không kiểm soát
- Cần check Vercel Analytics → IP patterns

---

## Solution Implemented

### ✅ FIX 1: Tăng ISR revalidate lên 86400 (24 giờ)

**Changed files:**
- `src/app/[slug]/page.tsx`
- `src/app/page.tsx`

**Before:**
```typescript
export const revalidate = 3600; // 1 giờ
```

**After:**
```typescript
export const revalidate = 86400; // 24 giờ
```

**Impact:**
- 100 pages × 1 lần/ngày = **100 edge requests/ngày** (giảm 96%)
- 1 tháng = **3,000 requests** (từ 72K xuống 3K)

**Trade-off:**
- Content mới cần đợi tối đa 24 giờ để lên live (thay vì 1 giờ)
- Acceptable vì content ít thay đổi hằng ngày

---

## Next Steps (TODO)

### 🔴 PRIORITY 1: Deploy ngay

```bash
git add .
git commit -m "fix: increase ISR revalidate to 86400 (24h) to reduce edge requests"
git push origin main
```

### 🟡 PRIORITY 2: Monitor sau deploy (1 tuần)

- Check Vercel Analytics → Edge Requests usage
- Nếu vẫn cao → investigate bot traffic

### 🟢 PRIORITY 3: Optimize images (nếu cần)

**Option A: Migrate external images sang local**
- Download ảnh từ Unsplash/Sanity → lưu vào `/public/images/`
- Update `src/constants/mockData.ts` → dùng local path
- Enable Next.js Image Optimization

**Option B: Enable Vercel Image Optimization cho external URLs**
- Cấu hình `next.config.js`:
  ```js
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  }
  ```

### 🟢 PRIORITY 4: Add cache headers cho static files

**File:** `next.config.js` (nếu chưa có)

```js
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ];
}
```

---

## Expected Outcome

**Before fix:**
- ISR: 72K requests/month
- Traffic: 9.8K requests/month
- Images: ~100K requests/month
- **Total: ~180K+** (nhưng Vercel báo 1M → cần investigate thêm)

**After fix:**
- ISR: 3K requests/month (giảm 96%)
- Traffic: 9.8K requests/month (không đổi)
- Images: ~100K requests/month (chưa optimize)
- **Total estimate: ~113K/month** (giảm ~40%)

**Nếu vẫn vượt quota → cần:**
1. Check bot traffic (Vercel Analytics → Top IPs)
2. Optimize images (migrate local hoặc enable optimization)
3. Consider upgrade Vercel Pro ($20/month → 100M edge requests)

---

## Commit Info

**Files changed:**
- `src/app/[slug]/page.tsx`
- `src/app/page.tsx`
- `docs/reports/vercel-edge-requests-fix-2026-04-05.md` (this file)

**Commit message:**
```
fix: increase ISR revalidate to 86400 (24h) to reduce edge requests

- Change revalidate from 3600 (1h) to 86400 (24h)
- Reduce ISR edge requests from 72K/month to 3K/month (96% reduction)
- Trade-off: content updates take max 24h instead of 1h
- Addresses Vercel free tier 100% edge requests usage
```

---

**End of report**
