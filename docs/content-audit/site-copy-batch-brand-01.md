# Content Audit — Batch 2: Brand Pages Copy
**Date:** 2026-03-24  
**Commit:** 24cec6d  
**Auditor:** Anti  
**Scope:** `/thuong-hieu` index page + `/thuong-hieu/[slug]` template — eyebrow, heading, intro copy, brand BRAND_CONTENT intros (20+ brands)

---

## Files Audited

1. `src/app/thuong-hieu/page.tsx` — brand index listing page
2. `src/app/thuong-hieu/[slug]/page.tsx` — individual brand page template + BRAND_CONTENT data

---

## Section-by-Section Audit

### /thuong-hieu (index listing)
**Status: FIX MINOR → FIXED**

| Element | Lỗi | Cũ | Mới |
|---------|-----|-----|-----|
| Eyebrow | Tiếng Anh không cần thiết | "Brand Directory" | "Thương hiệu A-Z" |
| Subcopy | PASS — đọc tự nhiên | — | — |
| H1 | PASS — "Thương hiệu nước hoa đáng khám phá" | — | — |
| Pills/badges | PASS — "X thương hiệu A-Z", "X sản phẩm đã có" | — | — |

---

### /thuong-hieu/[slug] (brand hero section)
**Status: FIX MINOR → FIXED**

| Element | Lỗi | Cũ | Mới |
|---------|-----|-----|-----|
| Hero eyebrow | Tiếng Anh | "Brand Profile" | "Hồ sơ thương hiệu" |
| "Thông tin nhanh" heading | PASS | — | — |
| CTA section | PASS — "Nhắn Zalo tư vấn" + subcopy phù hợp | — | — |

---

### BRAND_CONTENT — 20+ brand intros

| Brand | Status | Lỗi | Sửa |
|-------|--------|-----|-----|
| Dior | PASS | Không | — |
| Chanel | FIX MINOR → FIXED | "đẳng cấp rất ổn định" (lạ) | "chất lượng rất ổn định qua nhiều thế hệ" |
| YSL | PASS | Đọc tự nhiên, thẳng thắn | — |
| Tom Ford | FIX MINOR → FIXED | "thiên presentation nhiều hơn độ linh hoạt thực tế" (loạn, encoding) | "thiên đầu tư nhiều vào cảm xúc hơn là độ linh hoạt người dùng" |
| Armani | PASS | — | — |
| Creed | PASS | — | — |
| Versace | PASS | — | — |
| Prada | PASS | — | — |
| Guerlain | PASS | — | — |
| MFK | PASS | — | — |
| Parfums de Marly | PASS | — | — |
| Xerjoff | PASS | — | — |
| Nishane | PASS | — | — |
| Hermès | PASS | — | — |
| JPG | PASS | — | — |
| Givenchy | PASS | — | — |
| Narciso Rodriguez | PASS | — | — |
| Mugler | PASS | — | — |
| By Kilian | PASS | — | — |
| Byredo | PASS | — | — |
| Frédéric Malle | PASS | — | — |
| Dolce & Gabbana | PASS | — | — |
| Hugo Boss | PASS | — | — |
| Maison Margiela | PASS | — | — |
| Lancôme | PASS | — | — |
| Mancera | PASS | Ghi chú: "synthetic" giữ nguyên — đây là thuật ngữ ngành chấp nhận được | — |
| Initio | PASS | — | — |
| Lattafa | PASS (note: "value for money" trong signatureStyle — giữ vì đây là thuật ngữ dùng phổ biến) | — | — |
| Valentino | PASS | — | — |
| Louis Vuitton | PASS | — | — |
| Armaf | FIX MINOR → FIXED | signatureStyle: "Inspired style" tiếng Anh + intro "inspired fragrance" | signatureStyle → "Phóng theo chất liệu lớn…"; intro → Việt hoá |
| Afnan | PASS | — | — |
| Acqua di Parma | PASS | — | — |

---

## Summary

| Metric | Count |
|--------|-------|
| Files audited | 2 |
| Sections/brands checked | 25+ |
| PASS (không sửa) | 20+ brands |
| FIX MINOR → FIXED | 4 (eyebrow index, eyebrow slug, Chanel, Tom Ford, Armaf) |
| REWRITE BLOCK | 0 |
| BLOCKED | 0 |

**Commit: 24cec6d → pushed live (Vercel building)**

---

## Ghi chú điều chỉnh chính sách

Các từ Anh giữ lại có chủ ý:
- "niche", "designer", "extrait de parfum", "fresh", "gourmand", "sexy", "opening" — đây là thuật ngữ ngành nước hoa phổ biến, người Việt trong giới thường dùng, không phải lỗi.
- "value for money", "safe blind buy" trong signatureStyle Lattafa/Mugler — giữ vì ngắn, quen thuộc trong cộng đồng.

---

## Đề xuất Batch 3

**Batch 3 — Product pages copy** (productcopy, verdict, key section headings)  
Priority: `/san-pham/[slug]` — verdictShort, article sections titles  
Lý do: product pages là nơi user đọc nhiều nhất, lỗi copy ảnh hưởng conversion.  
Batch size: 15 products/batch theo workflow đã định.
