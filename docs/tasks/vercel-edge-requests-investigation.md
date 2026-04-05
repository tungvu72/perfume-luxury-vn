# BLOCKING ISSUE: Vercel Edge Requests 100% với traffic gần như 0

## Context
- Site: https://www.maisondeson.com
- Vercel free tier: 1M edge requests/month
- **Hiện tại: 100% (1M requests đã dùng hết)**
- **Traffic thực tế: chỉ 9.8K page views** (rất thấp)
- **Vấn đề:** 9.8K page views KHÔNG THỂ burn 1M edge requests được — có gì đó sai nghiêm trọng

## Phân tích ban đầu (Coder)
1. ISR revalidate = 3600 (1 giờ) → đã fix lên 86400 (24 giờ)
   - Giảm từ 72K → 3K requests/tháng
   - **NHƯNG vẫn không giải thích được 1M requests**

2. Image optimization bypass → có thể gây thêm requests
   - **NHƯNG không đủ để lên 1M**

3. **Hypothesis: Bot/crawler hoặc config sai nghiêm trọng**

## Câu hỏi cần Anti investigate

### 1. Vercel Analytics — Request breakdown
- Truy cập: https://vercel.com/tungvu72s-projects/perfume-luxury-vn-q72y/analytics
- Check tab **"Functions"** hoặc **"Edge Network"**:
  - Top paths nào burn requests nhiều nhất?
  - Có path nào bị loop không? (ví dụ: `/api/*` gọi liên tục)
  - Có middleware nào chạy trên mọi request không?

### 2. Check Vercel deployment logs
- Có error nào lặp lại liên tục không?
- Có function nào timeout rồi retry không?
- Có ISR regeneration fail rồi retry liên tục không?

### 3. Check bot traffic
- Vercel Analytics → **Top User Agents**
- Có bot nào crawl quá nhiều không? (Google, Bing, unknown bots)
- Nếu có → cần block hoặc rate limit

### 4. Check Next.js config
- File: `next.config.js` hoặc `next.config.mjs`
- Có middleware nào được enable không?
- Có rewrites/redirects nào gây loop không?
- Có API routes nào được gọi nhiều không?

### 5. Sanity webhook/preview mode
- Có Sanity webhook trigger rebuild liên tục không?
- Có preview mode nào leak ra production không?

## Đề xuất hành động (ưu tiên cao → thấp)

### 🔴 URGENT: Tìm nguồn gốc 1M requests
1. Anti check Vercel Analytics → screenshot **top 10 paths** burn requests nhiều nhất
2. Anti check Vercel deployment logs → có error/retry loop nào không
3. Anti check Vercel Functions tab → có function nào chạy quá nhiều không

### 🟡 MEDIUM: Temporary mitigation
- Nếu tìm thấy bot → block qua `vercel.json`:
  ```json
  {
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "X-Robots-Tag",
            "value": "noindex, nofollow"
          }
        ]
      }
    ]
  }
  ```
- Hoặc add rate limit middleware

### 🟢 LOW: Nếu không tìm được nguyên nhân
- Consider tạm thời pause site để tránh vượt quota
- Hoặc upgrade Vercel Pro ($20/month → 100M requests)

## Output cần từ Anti

1. **Screenshot Vercel Analytics:**
   - Top 10 paths (by requests)
   - Top 10 user agents
   - Request timeline (có spike bất thường không?)

2. **Vercel deployment logs:**
   - 50 dòng log gần nhất
   - Có error nào lặp lại không?

3. **Next.js config:**
   - Nội dung file `next.config.js` hoặc `next.config.mjs` (nếu có)
   - Có middleware.ts không? (nội dung)

4. **Vercel Functions tab:**
   - Có function nào invocation count cao bất thường không?

## Tại sao cần làm ngay
- Site đang ở 100% quota → có thể bị pause bất cứ lúc nào
- 9.8K traffic với 1M requests = **ratio 1:102** (bất thường cực kỳ)
- Normal ratio nên là **1:10 đến 1:20** (1 page view = 10-20 edge requests)
- **Có gì đó đang leak requests nghiêm trọng**

---

**Coder đã làm:**
- Fix ISR revalidate 3600 → 86400 (giảm 96% ISR requests)
- Tạo report: `docs/reports/vercel-edge-requests-fix-2026-04-05.md`

**Cần Anti làm:**
- Investigate Vercel Analytics + logs theo checklist trên
- Tìm nguồn gốc 1M requests
- Đề xuất fix cụ thể dựa trên findings

---

**Priority:** BLOCKING  
**Assigned to:** Anti  
**Deadline:** ASAP (site có thể bị pause bất cứ lúc nào)
