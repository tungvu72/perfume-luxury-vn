# 📰 TIÊU CHUẨN BÀI VIẾT — MAISON DE SON
## Tài liệu bắt buộc cho cả Leader, Coder, Marketer
*Cập nhật: 2026-03-04 — Version 2.0*

---

## 1. NGUỒN THÔNG TIN — Lấy từ đâu?

### Nguồn chính thống (theo thứ tự ưu tiên)

| Nguồn | URL | Dùng cho |
|-------|-----|---------|
| **Fragrantica** | fragrantica.com | Notes, stats, longevity, sillage, vote cộng đồng |
| **Brand Official** | dior.com, chanel.com... | Thông số chính hãng, concentration, MSRP |
| **Basenotes** | basenotes.net | Expert reviews, lịch sử ra đời |
| **Reddit r/fragrance** | reddit.com/r/fragrance | Honest user reviews, không sponsored |
| **Shopee/Lazada/Tiki** | — | Giá thực tế thị trường VN |

### Nguyên tắc bất biến về độ trung thực
```
❌ KHÔNG BAO GIỜ:
- Bịa đặt số liệu (longevity, sillage, notes)
- Copy-paste dịch máy từ tiếng Anh
- Claim không bằng chứng: "tốt nhất VN", "số 1"
- Dùng ảnh render hãng thay ảnh thực tế
- Spin content từ site khác

✅ BẮT BUỘC:
- Notes pyramid: verify ≥ 2 nguồn
- Giá: check 3 nguồn (Shopee + Lazada + Official)
- Dùng số liệu: "Theo Fragrantica..." / "Theo X reviews trên Shopee..."
- Unique content > 90%
```

---

## 2. LẤY ẢNH — Quy trình cụ thể

### Ảnh sản phẩm (Product Review)
1. Vào trang sản phẩm trên **Fragrantica**
2. Scroll xuống phần **"Fragram Photos"** (cuối trang)
3. Chọn **3-5 ảnh**: đa dạng (chai, hộp, trên tay, lifestyle)
4. **KHÔNG dùng** ảnh render chính hãng hoặc ảnh watermark

### Ảnh Buying Guide / Article
- **Hero image (1200×630px):** Unsplash (unsplash.com) — license free
- **Product images:** Từ Fragrantica Fragram Photos
- **Infographic:** Tạo bằng Canva hoặc mô tả để Coder implement

### Tiêu chuẩn kỹ thuật ảnh

| Tiêu chí | Yêu cầu |
|---------|---------|
| **Featured/Hero** | 1200×630px (OG standard) |
| **Content images** | 800×600px |
| **Format** | WebP (ưu tiên), JPG fallback |
| **File size** | <200KB content, <500KB hero |
| **Alt text** | Chứa keyword, 100-125 ký tự |
| **Unoptimized** | `true` cho ảnh từ Fragrantica/Unsplash |

### Số lượng ảnh tối thiểu theo loại bài

| Loại bài | Số ảnh tối thiểu |
|----------|-----------------|
| Product Review | 4-6 ảnh (chai, hộp, test, notes graphic) |
| Buying Guide (10-15 sản phẩm) | 10-15 ảnh (mỗi sản phẩm 1 ảnh + hero) |
| Brand Spotlight | 6-8 ảnh (logo, products, lịch sử) |
| How-to Guide | 5-8 ảnh (step-by-step) |

---

## 3. CẤU TRÚC BÀI VIẾT CHUẨN

### Metadata (Bắt buộc 100%)
```yaml
title: "[Keyword chính] — [Năm] | [USP ngắn]"
  # VD: "Top 15 Nước Hoa Nam Dưới 1 Triệu — 2026 | Hương Thơm Lâu"
  # Độ dài: 50-60 ký tự
description: "[Keyword] + [benefit] + [CTA nhẹ]"
  # Độ dài: 150-160 ký tự
slug: "url-friendly-khong-dau-co-keyword"
featuredImage: "1200x630px, alt text có keyword"
```

### Content Structure
```
H1: Title chính (duy nhất 1 per page)
│
├── Intro (100-150 từ): Hook + vấn đề + preview nội dung
├── Mục lục: 3-5 mục chính
│
├── H2: [Mục 1]
│   ├── H3: [Sub-mục nếu cần]
│   └── [Content + ảnh minh họa]
│
├── H2: [Mục 2..N]
│
└── Kết luận (100 từ): Tóm tắt + CTA rõ ràng
    → "Xem giá tại Shopee →" hoặc "Đọc thêm review →"
```

---

## 4. SEO REQUIREMENTS

### Keyword placement (bắt buộc)
- **Title H1:** Có keyword chính
- **First 100 từ:** Keyword chính xuất hiện tự nhiên
- **1 H2:** Có keyword chính hoặc variant
- **Conclusion:** Nhắc lại keyword chính
- **Alt text:** Tất cả ảnh phải có alt text chứa keyword

### Internal Linking
- **3-5 internal links** mỗi bài
- **Anchor text = keyword của trang đích** (không phải "click here")
  ```
  ✅ [review Dior Sauvage Elixir](/kien-thuc/dior-sauvage-elixir-review)
  ❌ [xem thêm tại đây](/kien-thuc/dior-sauvage-elixir-review)
  ```
- Link đến: product pages, other buying guides, brand pages

### Keyword Research (Marketer phải làm trước khi viết)
1. Check volume: Google Keyword Planner / Ahrefs / SEMrush
2. Phân tích intent: Informational vs Commercial vs Transactional
3. Check đối thủ rank top 10 với keyword này
4. Chỉ chọn keyword có lượng tìm kiếm thực tế, không "bịa" keyword

---

## 5. CONTENT QUALITY STANDARDS

### Tone of Voice
```
✅ Chuyên gia nhưng gần gũi: "Sau 30 ngày test..."
✅ Khách quan: "Một số người thích, một số không"
✅ Gợi ý mua: "Gợi ý tham khảo giá tại Shopee"
✅ So sánh thực tế: "So với AdG thì X thơm hơn vì..."

❌ Spam: "Mua ngay!", "Tốt nhất!", "Giảm giá sốc!"
❌ Từ pháp lý nhạy cảm: "affiliate", "commission" (dùng "liên kết tham khảo")
❌ Claim vô căn cứ: "số 1 Việt Nam"
```

### Mobile Optimization
- Paragraph: tối đa **3-4 dòng** trên mobile
- Sentence: tối đa **20-25 từ**
- Lists dài: dùng bullet points
- Images: responsive, load nhanh (WebP)

---

## 6. LOẠI BÀI VIẾT & FORMAT CỤ THỂ

### A. Product Review
```markdown
---
title: "[Tên nước hoa] Review — Đánh Giá Thực Tế 2026"
description: "Review [Tên] từ [Brand]. Mùi [X], độ bền [X]h, phù hợp [đối tượng]. Xem ngay!"
---

# [Tên nước hoa] Review — [Định danh ngắn]

## Thông tin cơ bản
Brand / Năm / Concentration / Perfumer

## Cấu trúc mùi hương (Nguồn: Fragrantica)
Top / Middle / Base Notes

## Trải nghiệm thực tế
Lần đầu xịt / Sau 2h / Sau 6h+

## Chỉ số hiệu năng (Community vote Fragrantica)
Longevity: X/10 | Sillage: X/10

## Phù hợp với ai?
✅ Phù hợp: ... | ❌ Không phù hợp: ...

## Rating
Mùi hương / Độ bền / Đáng tiền / Tổng

## Gợi ý mua → Affiliate links Shopee/Lazada
```

### B. Buying Guide
```markdown
---
title: "Top [N] Nước Hoa [Category] [Năm] — Đã Test Thực Tế"
---

# Top [N] Nước Hoa [Category]

[Intro: vấn đề người đọc đang gặp]

## Tiêu chí chọn lọc

## 1. [Sản phẩm tốt nhất] — [Tag ngắn]
[Ảnh] [Mô tả ngắn] [Gợi ý giá] [Link]

## 2, 3... (tương tự)

## Kết luận + CTA
```

---

## 7. QUY TRÌNH ĐĂNG BÀI (Workflow)

### Marketer làm:
```
1. Research keyword + check volume
2. Lên outline bài (gửi Leader duyệt nếu cần)
3. Viết content theo format chuẩn
4. Self-review theo checklist (mục 8)
5. Lưu vào: content/buying-guides/[slug].md
   hoặc: content/product-reviews/[slug].md
6. Báo Leader: file path + self-score
```

### Coder làm (nếu bài cần trang riêng / component mới):
```
1. Nhận yêu cầu từ Leader
2. Check file .md đã có chưa
3. Verify page route hoạt động: /kien-thuc/[slug]
4. Check ảnh load đúng không (unoptimized flag nếu cần)
5. npx tsc --noEmit → 0 errors
6. Báo Leader
```

---

## 8. CHECKLIST SELF-REVIEW (Marketer dùng trước khi nộp)

```
METADATA:
□ Title: 50-60 ký tự, có keyword
□ Description: 150-160 ký tự, có CTA nhẹ
□ Slug: url-friendly, không dấu, có keyword
□ Featured Image: 1200×630px, có alt text

CONTENT:
□ H1 duy nhất
□ Intro: 100-150 từ, có hook mạnh
□ Mục lục: 3-5 mục
□ Body: 600-1500 từ, H2/H3 rõ ràng
□ Kết luận: 100 từ + CTA
□ Internal links: 3-5 links, anchor text = keyword trang đích

SEO:
□ Keyword chính: Title, H1, first 100 từ, 1 H2, conclusion
□ Tất cả ảnh có alt text chứa keyword
□ Không có broken links

CHẤT LƯỢNG:
□ Tone: chuyên gia, gần gũi, khách quan
□ Không dùng từ cấm (affiliate, commission, mua ngay)
□ Fact-check: notes, longevity, sillage — verify ≥ 2 nguồn
□ Unique: 100%, không Copy-paste dịch

MOBILE:
□ Paragraph ≤ 3-4 dòng
□ Ảnh đủ số lượng theo loại bài
□ Format đẹp trên mobile (list, heading)

ĐIỂM TỰ CHẤM: [X/10] — Chỉ nộp khi ≥ 8/10
```

---

*File này là tài liệu chuẩn thức, tất cả agents phải tuân theo.*
*Khi có thay đổi quy trình → Leader cập nhật file này và thông báo team.*
