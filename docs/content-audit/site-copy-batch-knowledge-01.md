# Content Audit — Batch 4: Knowledge Pages Copy
**Date:** 2026-03-24  
**Commit:** 25d6476  
**Auditor:** Anti  
**Scope:** `/kien-thuc` listing page + `/kien-thuc/[slug]` (redirect only, no copy)

---

## Files Audited

1. `src/app/kien-thuc/page.tsx` — knowledge listing page (đầy đủ UI copy)
2. `src/app/kien-thuc/[slug]/page.tsx` — chỉ là redirect shell, không có copy cần audit

---

## /kien-thuc (listing page) — Audit

### Hero section
| Element | Cũ | Mới | Status |
|---------|-----|-----|--------|
| H1 | "Kiến thức nước hoa" | Giữ nguyên | PASS |
| Subcopy | "Khám phá thế giới mùi hương qua các bài viết chuyên sâu" | "Đọc trước khi mua — review thật, hướng dẫn rõ, viết cho người Việt phổ thông." | **FIX MINOR → FIXED** |

Lý do: câu cũ là brochure mơ hồ, câu mới có quan điểm và cụ thể hơn.

### Filter tabs
| Trước | Sau | Status |
|-------|-----|--------|
| "Roundup" | "Tổng hợp" | **FIX MINOR → FIXED** |
| "Tin tức" | "Xu hướng" | **FIX MINOR → FIXED** |
| "Tất cả", "Review", "Hướng dẫn", "So sánh" | Giữ nguyên | PASS |

### POPULAR_TOPICS array (código, không render)
| Status | Lỗi |
|--------|-----|
| **REWRITE BLOCK → DELETED** | Array chứa placeholder rác: "Cận hasi", "Rõ ràn", "Tân ơ", "Lượt bạn", "Tìm nhạc" — không phải tiếng Việt thật. Array cũng không được dùng ở đâu trong component. Đã xóa hoàn toàn. |

### Article cards (dynamic content)
| Element | Status |
|---------|--------|
| Hiển thị: title, excerpt, author, readTime, date | Lấy từ Sanity — không phải static copy, không thuộc phạm vi audit |
| Category labels map | PASS |

### Sidebar — Chủ đề phổ biến
| Trước | Sau | Status |
|-------|-----|--------|
| "Niche" | "Thương hiệu niche" | **FIX MINOR → FIXED** |
| "Designer" | "Phân biệt thật giả" | **FIX MINOR → FIXED** |
| "Review", "Hướng dẫn", "Mùa hè", "Đi làm", "Hẹn hò", "So sánh" | Giữ nguyên | PASS |

### Sidebar — Sản phẩm liên quan
| Element | Status |
|---------|--------|
| Heading | "Sản phẩm liên quan" | PASS |
| Product data (dynamic) | Không phải static copy | — |

### Sidebar CTA
| Element | Copy | Status |
|---------|------|--------|
| H3 | "Cần gợi ý mùi phù hợp?" | PASS |
| Body | "Nhắn Zalo để được tư vấn theo ngân sách và hoàn cảnh dùng thực tế." | PASS |
| Button | "Nhắn Zalo ngay" | PASS |

---

## Summary

| Metric | Count |
|--------|-------|
| Files audited | 2 |
| Elements checked | 20+ static copy points |
| PASS | 14 |
| FIX MINOR → FIXED | 5 |
| REWRITE BLOCK → FIXED | 1 (POPULAR_TOPICS garbage data) |
| BLOCKED | 0 |

**Commit: 25d6476 → pushed live**

---

## Note bổ sung

- `/kien-thuc/[slug]` là pure redirect shell — không có UI copy cần audit
- Article content (title, excerpt, body) đến từ Sanity CMS — thuộc phạm vi editorial audit riêng, không phải template copy audit

---

## Đề xuất Batch 5

**Batch 5 — Bảng xếp hạng page** (`/bang-xep-hang`)  
- Filter labels, sort labels, heading/subcopy
- Product card labels trong grid
- Empty states, loading states
- SEO metadata copy
