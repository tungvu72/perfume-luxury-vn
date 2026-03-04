# 📋 TASK SPEC: ĐĂNG 3 SẢN PHẨM + 1 BÀI VIẾT (CHUẨN 10/10)
## Giao từ: Chủ tịch | Ngày: 2026-03-04

---

## ⚠️ TRƯỚC KHI BẮT ĐẦU — CẢ TEAM ĐỌC

- **ARTICLE_STANDARDS.md**: `D:\anti\perfume-luxury-vn\content\ARTICLE_STANDARDS.md`
- **PRODUCT_WORKFLOW.md**: `D:\anti\perfume-luxury-vn\design\PRODUCT_WORKFLOW.md`
- **CONTENT_SOURCE_POLICY.md**: `D:\anti\perfume-luxury-vn\.agents\leader\content\CONTENT_SOURCE_POLICY.md`

**Tiêu chuẩn: 10/10** — Không đăng nếu chưa đạt. Leader verify trước khi báo Chủ tịch.

---

## TASK A — 3 SẢN PHẨM (Marketer nghiên cứu, Coder import)

### Sản phẩm cần đăng:
1. **Creed Aventus** (Nam, Parfum)
2. **Chanel Bleu de Chanel Parfum** (Nam, Parfum)
3. **YSL Y EDP** (Nam, Eau de Parfum)

---

### MARKETER làm (Task A1): Nghiên cứu & viết data

**Với mỗi sản phẩm, Marketer phải cung cấp đủ các trường sau (lấy từ Fragrantica, không bịa):**

```json
{
  "name": "Tên nước hoa",
  "subName": "Eau de Parfum / Parfum / EDT",
  "brand": "Tên thương hiệu",
  "gender": "nam / nu / unisex",
  "description": "1-2 câu mô tả ngắn, tiếng Việt, sang trọng",

  "topNotes": ["note1", "note2", "note3"],
  "middleNotes": ["note1", "note2"],
  "baseNotes": ["note1", "note2", "note3"],
  "accords": [
    {"name": "Woody", "value": 85, "color": "#8B6914"},
    {"name": "Fruity", "value": 70, "color": "#E86A2B"}
  ],

  "longevity": 9,
  "sillage": 8,
  "seasonSpring": 65,
  "seasonSummer": 40,
  "seasonFall": 85,
  "seasonWinter": 75,
  "dayUse": 50,
  "nightUse": 90,

  "scoreScents": 9.5,
  "scoreUniqueness": 9.0,
  "scoreCompliments": 9.5,
  "scoreValue": 7.5,

  "verdictShort": "UY LỰC & NAM TÍNH",
  "verdict": "Kỳ quan nước hoa từ Erwin Creed...",

  "vibes": [
    {"label": "Quyền lực", "icon": "👑"},
    {"label": "Hẹn hò", "icon": "🌹"}
  ],
  "tags": ["Bestseller", "Niche", "Date Night"],
  "sizes": ["50ml", "100ml", "250ml"],
  "basePrice": 5500000,

  "mainImageUrl": "URL ảnh render chính hãng (Fragrantica)",
  "galleryUrls": ["URL Fragram Photo 1", "URL Fragram Photo 2", "URL Fragram Photo 3"]
}
```

**Lưu data vào file:** `D:\anti\perfume-luxury-vn\.agents\marketer\product-data\[slug].json`

**Nguồn bắt buộc:**
- Notes & Accords: Fragrantica (fragrantica.com/perfume/[brand]/[name])
- Stats (longevity, sillage, seasons): Community vote trên Fragrantica
- Ảnh: mainImage từ Fragrantica chính, gallery từ Fragram Photos
- Giá: Shopee Vietnam (tìm theo tên sản phẩm)

---

### CODER làm (Task A2): Import vào Sanity

Sau khi Marketer nộp data file, Coder:
1. Đọc từng file `.json` trong `.agents/marketer/product-data/`
2. Chạy script import: `scripts/import-products-to-sanity.ts` (đã có sẵn)
   - Script domain: `projectId: 'ww1zzidl'`, `dataset: 'production'`
   - Cần env: `SANITY_API_TOKEN` từ file `.env.local`
3. Upload ảnh gallery lên Sanity Assets
4. Verify: check sản phẩm xuất hiện tại `/product/[slug]` trên localhost
5. Báo Leader: 3 sản phẩm đã live, URL kiểm tra

**Lệnh chạy:**
```bash
npx tsx scripts/import-products-to-sanity.ts
```

---

## TASK B — 1 BÀI VIẾT KIẾN THỨC (Marketer viết)

### Chủ đề: "Top 10 Nước Hoa Nam Bán Chạy Nhất Năm 2026 — Từng Dùng Qua"

### Yêu cầu bắt buộc (10/10 checklist):

**Metadata:**
```yaml
title: "Top 10 Nước Hoa Nam Bán Chạy Nhất 2026 — Đã Test Thực Tế"
description: "Danh sách 10 nước hoa nam bán chạy nhất 2026 được Maison de SON kiểm nghiệm. Hương thơm, độ bám, giá cả đánh giá thực tế."
slug: "top-10-nuoc-hoa-nam-ban-chay-nhat-2026"
image: [URL ảnh hero 1200x630px, lấy từ Unsplash hoặc Fragrantica]
```

**Cấu trúc bài:**
```
H1: Top 10 Nước Hoa Nam Bán Chạy Nhất 2026 — Đã Test Thực Tế

Intro (100-150 từ): Vì sao bài viết này đáng đọc? Hook mạnh.

Mục lục:
1. Tiêu chí chọn lọc
2. Top 10 (mỗi sản phẩm 1 H3)
3. Bảng so sánh nhanh
4. Hướng dẫn chọn theo nhu cầu
5. Kết luận

H2: Tiêu Chí Chọn Lọc (nói rõ cách đánh giá)

H2: Top 10 Nước Hoa Nam Bán Chạy 2026
  H3: 1. [Tên SP 1] — [Tag định danh]
    - Ảnh sản phẩm
    - Mùi hương ngắn gọn (2-3 câu)
    - Điểm mạnh / Điểm yếu
    - Phù hợp với: ...
    - Gợi ý giá: [link Shopee]

  (lặp cho 9 sản phẩm còn lại)

H2: Bảng So Sánh Nhanh (markdown table)
| Tên | Mùi chủ đạo | Độ bám | Giá | Tốt nhất cho |

H2: Chọn Theo Nhu Cầu
  H3: Đi làm văn phòng → ...
  H3: Hẹn hò → ...
  H3: Ngân sách dưới 2 triệu → ...

Kết luận (100 từ): Tóm tắt + CTA đến /bang-xep-hang
```

**Yêu cầu khác:**
- Top 10 phải là sản phẩm có trên fragrantica, có số liệu thực
- Mỗi sản phẩm: 1 ảnh từ Fragrantica
- 5 internal links → /product/[slug] hoặc /bang-xep-hang hoặc /huong-dan
- Độ dài: 1200-1500 từ
- 100% tiếng Việt, tone chuyên gia nhưng gần gũi

**Lưu file tại:**
`D:\anti\perfume-luxury-vn\content\buying-guides\21-top-10-nuoc-hoa-nam-ban-chay-nhat-2026.md`

---

## QUYẾT ĐỊNH QUI TRÌNH (Leader theo dõi)

```
Bước 1: Leader giao A1+B cho Marketer đồng thời
Bước 2: Marketer hoàn thành → nộp Leader
Bước 3: Leader QC dữ liệu sản phẩm (kiểm tra notes từ Fragrantica)
         Leader QC bài viết (checklist 10/10 theo ARTICLE_STANDARDS.md)
Bước 4: Nếu pass → Leader giao A2 cho Coder (kèm file data của Marketer)
Bước 5: Coder import → verify /product/[slug] live
Bước 6: Leader báo Chủ tịch: 3 URL sản phẩm + 1 URL bài viết + nhận xét team
```

---

## ĐỊNH NGHĨA "CHUẨN 10/10"

**Sản phẩm đạt 10/10 khi:**
- [ ] Tất cả fields điền đầy đủ (notes 3 tầng, accords, scores, vibes, tags)
- [ ] Longevity/Sillage lấy từ community vote Fragrantica (không tự bịa)
- [ ] Có ≥ 3 Fragram Photos upload gallery
- [ ] Verdict = 1-2 câu tiếng Việt sang trọng, đúng tính cách chai
- [ ] VerdictShort = cụm từ viết HOA, specific (không generic)
- [ ] Có affiliate link Shopee

**Bài viết đạt 10/10 khi:**
- [ ] Pass toàn bộ checklist trong ARTICLE_STANDARDS.md
- [ ] Marketer self-score ≥ 8.5/10
- [ ] Leader verify: hook mạnh, facts chính xác, internal links đúng
