# IMAGE RULES — Maison de SON
> Phiên bản: 1.0 | Anti | 2026-03-24
> Bắt buộc đọc trước khi thêm bất kỳ ảnh nào vào codebase

---

## Nguyên tắc gốc

| Rule | Giải thích |
|------|-----------|
| **Ảnh chỉ thêm khi có mục đích scan** | Không dùng ảnh trang trí thuần túy. Mỗi ảnh phải giúp user hiểu context nhanh hơn hoặc click nhiều hơn |
| **Không dùng stock photo có người** | Ảnh người thật trông fake/cliché — dùng object, flat lay, môi trường không có người |
| **Ambient > Product cho onboarding** | Card giới thiệu nhóm mùi dùng ảnh context/mood. Chỉ dùng ảnh sản phẩm khi đang giới thiệu sản phẩm cụ thể |
| **Icon 32px > ảnh 40px không rõ** | Nếu ảnh phải nhỏ hơn 60px để hiển thị — dùng icon thay |
| **Consistent color palette** | Tất cả ảnh ambient phải có nền sáng, tone ấm (cream/warm white/beige). Không mix ảnh tối + ảnh sáng trong cùng 1 block |

---

## AMBIENT IMAGES — Quick Paths / Onboarding Cards

**Mục đích:** Giúp user scan + chọn nhóm đúng trước khi đọc chữ

### Rules

```
1. Không có mặt người (không tay, không bóng người)
2. Nền: sáng, tone ấm — cream (#FAF9F7), warm white, beige
3. Props: tối đa 3 object, 1 trong số đó là chai nước hoa hoặc element liên quan đến mùi
4. Ánh sáng: natural light từ 1 phía, soft shadow — không flash cứng
5. Shot angle: flat lay từ trên xuống HOẶC 3/4 angle nhẹ — không chụp thẳng mặt
6. Kích thước lưu: 640x400px hoặc 800x500px (tỉ lệ 16:10)
7. Định dạng: .png hoặc .webp
8. Không text/logo/watermark trong ảnh
```

### Mapping hiện tại

| Card | File | Mood |
|------|------|------|
| Nước hoa nam dễ dùng | `/images/ambient/di-lam.png` | Bàn làm việc, chai nước hoa xanh navy, notebook |
| Nước hoa nữ thanh lịch | `/images/ambient/hon-ho.png` | *(cần generate — mood: floral, nhẹ, pink/cream)* |
| Top đáng tiền nhất | `/images/ambient/nguoi-moi.png` | Chai nước hoa clear glass, nền cream sạch |
| Nhờ tư vấn gu mùi | `/images/ambient/tu-van.png` | Chai + điện thoại chat, nền beige |

> **hen-ho.png** hiện đang dùng cho card "Hẹn hò" — dark/candle vibe. Phù hợp nội dung nhưng contrast với 3 ảnh còn lại (đều sáng). Nếu muốn consistent thì cần generate lại ảnh sáng hơn.

---

## BRAND SPOTLIGHT IMAGES — Flagship Product

**Mục đích:** "Bộ nhớ kích hoạt" — user nhận ra chai → nhớ brand → click

### Rules

```
1. Ảnh chai flagship của brand (chai nổi tiếng nhất, ai cũng nhận ra)
2. Nền: gradient nhẹ cream-to-light-beige (#FAF9F7 → #EDE8E0) — KHÔNG trắng thuần
3. mix-blend-multiply: bật — để loại bỏ nền trắng của PNG
4. Kích thước render: 80x80px (mobile card) / 100x100px (desktop card)  
5. Nguồn ảnh: Dùng product.image từ data sẵn có — KHÔNG tải ảnh ngoài
6. Không crop/zoom quá — chai phải nhìn thấy đủ hình dạng
7. Chỉ 1 chai/card — không collage nhiều chai
```

### Mapping hiện tại

| Brand | Flagship product slug | Ảnh dùng |
|-------|-----------------------|----------|
| Dior | sauvage-edp | Từ product data |
| Chanel | bleu-de-chanel-edp | Từ product data |
| YSL | ysl-y-edp | Từ product data |
| Tom Ford | noir-extreme | Từ product data |
| Mancera | cedrat-boise | Từ product data |
| Lattafa | khamrah | Từ product data |

---

## KNOWLEDGE / BÀI VIẾT THUMBNAILS

**Mục đích:** Visual entry point — user nhận ra context bài viết trước khi đọc tên

### Rules

```
1. Tỉ lệ: 16:9 (desktop grid) hoặc 4:3 (card đứng)
2. Mobile: thumbnail tối thiểu 100px wide để nhận ra được
3. Không để article không có thumbnail — dùng PLACEHOLDER nếu chưa có ảnh thật
4. PLACEHOLDER: /images/placeholder-article.jpg — ảnh chai trung tính, không brand-specific
5. object-fit: cover — không để ảnh bị stretch
6. Alt text: tên bài viết (không để trống)
```

---

## PRODUCT IMAGES (trong listing/related)

### Rules

```
1. Nền container: gradient from-[#FAF9F7] to-[#EDE8E0] (không trắng tinh)
2. mix-blend-multiply: LUÔN BẬT cho ảnh sản phẩm PNG
3. object-fit: contain với padding — không crop chai
4. Tỉ lệ container: 1:1 (square) hoặc 4:5 (portrait) cho product detail
5. Không thêm shadow CSS vào ảnh sản phẩm — tự nó đã có shadow
6. Hover: scale(1.03–1.05) nhẹ, duration 400–500ms
```

---

## THƯ MỤC LƯU ẢNH

```
public/
  images/
    ambient/       ← Ảnh ambient/mood cho cards (Quick Paths, Onboarding)
    brands/        ← Logo SVG thương hiệu
    articles/      ← Thumbnail bài viết
    products/      ← Ảnh sản phẩm nếu host local
```

---

## CHECKLIST TRƯỚC KHI THÊM ẢNH

- [ ] Ảnh này có mục đích UX cụ thể không? (scan / click / context)
- [ ] Có người trong ảnh không? → Nếu có: không dùng
- [ ] Kích thước file có ổn không? (target < 200KB/ảnh ambient)
- [ ] Nền có consistent với palette (sáng, ấm) không?
- [ ] Đã thêm alt text chưa?
- [ ] Có dùng `mix-blend-multiply` cho ảnh product PNG không?
