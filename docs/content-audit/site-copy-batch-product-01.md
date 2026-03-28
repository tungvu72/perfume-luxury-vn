# Content Audit — Batch 3: Product Page UI Copy (Template)
**Date:** 2026-03-24  
**Commit:** ad2009f  
**Auditor:** Anti  
**Scope:** Product page UI template — static/hardcoded copy trong 2 product client components

> **Lưu ý phạm vi:** Batch 3 này chỉ audit **static copy** (hardcoded strings trong component).
> Product-specific copy (verdict, description, article trong data) sẽ là Batch 3b — cần audit riêng theo 15 products/lượt.

---

## Files Audited

1. `src/components/pdp/ProductClientV2.tsx` — product detail page component (V2, Sanity-based)
2. `src/app/product/[id]/ProductClient.tsx` — product detail page component (V1, mockData-based)

---

## ProductClientV2.tsx — Static Copy Audit

### Hero section
| Element | Copy | Status |
|---------|------|--------|
| Gender label | "Nước Hoa Nam / Nữ / Unisex" | PASS |
| Perfumer label | "Tác giả:" | PASS (ngắn, phù hợp context) |
| Trust chips | ~~"Không sponsored"~~ → "Không nhận tài trợ" | **FIX MINOR → FIXED** |
| | "Review khí hậu Việt Nam" | PASS |
| | "Tư vấn miễn phí" | PASS |
| CTA primary | "Tư vấn qua Zalo" | PASS |
| Compare button | "So sánh" / "Đã thêm so sánh" | PASS |

### Article section eyebrows
| Element | Copy | Status |
|---------|------|--------|
| Eyebrow | "Đánh giá thực tế" | PASS |
| H2 | "Cần biết gì về {name}?" | PASS |
| Section 1 badge | "Cân nhắc kỹ trước khi mua" | PASS |
| Section 2 badge | "Phân tích giá trị" | PASS |
| Section 3 badge | "Gợi ý hoàn cảnh dùng" | PASS |

### Verdict section
| Element | Copy | Status |
|---------|------|--------|
| Eyebrow | "Kết luận của Maison de SON" | PASS |

### Sidebar
| Element | Copy | Status |
|---------|------|--------|
| Score card heading | "Điểm đánh giá" | PASS |
| Zalo card eyebrow | "Tư vấn chọn mua" | PASS |
| Zalo card body | "Kể gu mùi, ngân sách và hoàn cảnh dùng…" | PASS |
| Zalo CTA | "Nhắn Zalo ngay" | PASS |
| Quick info heading | "Thông tin nhanh" | PASS |
| Tags heading | ~~"Tags"~~ → "Phân loại" | **FIX MINOR → FIXED** |
| Cam kết heading | "Cam kết của Maison de SON" | PASS |
| Cam kết items (4) | Tất cả tự nhiên, đúng giọng | PASS |

### Mobile sticky CTA
| Element | Copy | Status |
|---------|------|--------|
| CTA label | "Tư vấn Zalo" | PASS |

---

## ProductClient.tsx (V1) — Static Copy Audit

### Hero section
| Element | Copy | Status |
|---------|------|--------|
| "Nhận xét nhanh" label | PASS | |
| Score subscores | "Mùi hương", "Nét riêng", "Sức hút", "Đáng tiền" | PASS |
| "Giá tham khảo" heading | PASS | |
| Price body | ~~"chốt size, hàng sẵn"~~ → "xác nhận size, hàng sẵn" | **FIX MINOR → FIXED** |

### Performance section
| Element | Copy | Status |
|---------|------|--------|
| "Hiệu năng thực chiến" | PASS — tự nhiên, đúng giọng |
| Longevity/sillage labels | "Độ lưu hương / Độ tỏa hương" | PASS |
| Helper text for each range | 3 variants mỗi metric — PASS, cụ thể và hữu ích |
| "Mùa & thời điểm" | PASS |

### Notes section  
| Element | Copy | Status |
|---------|------|--------|
| "Khám phá các tầng hương" heading | PASS |
| Layer labels | "Hương đầu / Hương giữa / Hương cuối" | PASS |
| Duration hints | "Bay sau 15-30 phút", "Kéo dài 3-5 tiếng"... | PASS |

### Shopee section
| Element | Copy | Status |
|---------|------|--------|
| "Tham khảo giá sàn TMĐT" | PASS — viết tắt phổ biến |
| Fallback text | "Đang cập nhật giá từ các shop uy tín" | PASS |
| Fallback CTA | "Hỏi giá trực tiếp qua Zalo →" | PASS |

---

## Summary

| Metric | Count |
|--------|-------|
| Files audited | 2 |
| Total elements checked | 40+ |
| PASS | 37+ |
| FIX MINOR → FIXED | 3 (trust chip English, Tags, "chốt size") |
| REWRITE BLOCK | 0 |
| BLOCKED | 0 |

**Commit: ad2009f → pushed live (Vercel building)**

---

## Scope chưa làm trong Batch 3

**Batch 3b — Product-specific copy (data layer):**  
Product verdict, description, article text nằm trong `mockData.ts` và Sanity CMS.  
Số lượng lớn (200+ products), cần xử lý riêng theo batch 15 products/lần.  
_Không thuộc phạm vi Batch 3 này — đây là static template copy audit._

---

## Đề xuất Batch 4

**Batch 4 — Knowledge/article pages** (`/kien-thuc`, `/kien-thuc/[slug]`)  
- Heading, eyebrow, section headings trong listing page
- Article template UI copy
- Category labels, filter labels nếu có
- Ưu tiên: trang listing và top 5 bài viết nhiều traffic
