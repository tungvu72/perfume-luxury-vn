# WORKFLOW PUBLISH BÀI VIẾT

## Bước 1: VIẾT CONTENT (Marketer)
- **Thời gian:** 30-60 phút/bài
- **Output:** File markdown trong "content/buying-guides/" hoặc "content/product-reviews/"
- **Checklist:** Dùng ARTICLE_STANDARDS.md
- **Người phụ trách:** Marketer

---

## Bước 2: REVIEW NỘI DUNG (Leader/Marketer)
- **Thời gian:** 10 phút
- **Check:** Chính tả, SEO, tone, facts
- **Tool:** Grammarly (nếu cần), manual review
- **Status:** ✅ Pass / ❌ Fix
- **Người phụ trách:** Leader + Marketer

---

## Bước 3: IMPORT VÀO WEBSITE (Coder)
- **Thời gian:** 5 phút
- **Action:** 
  - Tạo page trong "src/app/kien-thuc/[slug]/page.tsx"
  - Hoặc: Import vào Sanity CMS schema "article"
- **Verify:** Build local thành công
- **Người phụ trách:** Coder

---

## Bước 4: DEPLOY (Coder)
- **Thời gian:** 5-10 phút
- **Action:** Git commit → Push → Vercel auto-deploy
- **Verify:** Website load được, không console errors
- **Người phụ trách:** Coder

---

## Bước 5: VERIFY LIVE (Marketer + Leader)
- **Thời gian:** 5 phút
- **Check:** URL live, SEO meta, mobile display
- **Tools:** 
  - Google Rich Results Test
  - Mobile-Friendly Test
- **Report:** URL + screenshot vào group
- **Người phụ trách:** Marketer + Leader

---

## TỔNG THỜI GIAN: ~60-90 phút/bài

## PUBLISH SCHEDULE:
| Thời gian | Bài |
|-----------|-----|
| 6:00      | Bài #1 |
| 12:00     | Bài #2 |
| 18:00     | Bài #3 |
| 24:00     | Bài #4 |

---

## TRACKING TEMPLATE

`markdown
## TRACKING BÀI: [TÊN BÀI]

| Bước | Người làm | Thời gian bắt đầu | Thời gian kết thúc | Status |
|------|-----------|-------------------|-------------------|--------|
| 1. Viết Content | Marketer | | | ⏳ |
| 2. Review | Leader | | | ⏳ |
| 3. Import | Coder | | | ⏳ |
| 4. Deploy | Coder | | | ⏳ |
| 5. Verify Live | Marketer+Leader | | | ⏳ |

**URL Live:** 
**Ghi chú:**
`

---

**Người tạo:** Leader Bot  
**Ngày áp dụng:** 2026-03-03  
**Version:** 1.0
