# Product Page Blueprint V2 — Notes cho Coder
> Ngày: 2026-03-24 | Anti → Coder handoff
> Ref: `ANTI_PRODUCT_PAGE_V2_EXECUTION_2026-03-24.md`
> Live ref: `maisondeson.com/nuoc-hoa-nam-armani-stronger-with-you-intensely`

---

## Thay đổi lớn nhất so với V1

| Block | V1 | V2 |
|-------|----|----|
| Hero layout | 2 cột đơn giản | **2 cột premium**: ảnh full-height với gradient bg, score badge overlay, info col có hierarchy rõ |
| Score/perf | Dashboard-feel, dày đặc | **Score bars mảnh (5px/3px)**, layout `circle + bars side-by-side`, không nặng data panel |
| Notes/accords | Chips linh tinh nhiều style | **3 nhóm rõ (đầu/giữa/cuối) + tính chất**, primary/muted/default 3 mức thị giác |
| Editorial | 3 card đều nhau | **3 section có label riêng**, highlight quote box on key warning |
| Trust | Inline trong hero | **Trust chips dưới CTA button**, nhẹ nhàng hơn, không salesy |
| Sidebar | Promo-box feel | **3 card tách biệt**: score, mua, thông tin nhanh — không bị merge thành 1 block lộn xộn |
| Related | 4 card grid đơn | **4 card curated với context**: mỗi card có 1 câu giải thích "tại sao xem tiếp" |
| Verdict | Kết luận inline trong bài | **Dark block riêng** trước related — ngắt nhịp rõ, cảm giác editorial kết thúc mạnh |

---

## Desktop vs Mobile — khác biệt chính

| Điểm | Desktop | Mobile |
|------|---------|--------|
| Hero layout | 2 cột grid (ảnh trái / info phải) | Ảnh full-width + overlay score badge, info bên dưới |
| Meta thông tin | Row ngang trong hero info | **Meta strip** cuộn ngang — compact, không tràn |
| Performance | `circle + bars grid` trong article | `circle + bars` side-by-side trong 1 card compact |
| Editorial | 3 section dọc trong main col | 3 section dọc, padding 16px, text size nhỏ hơn 1px |
| Sidebar | Sticky, 3 card bên phải | **Không có sidebar** — CTA nằm trong hero info ngay đầu |
| Score badge | Absolute top-right của ảnh | Absolute top-right nhỏ hơn (58px vs 72px) |
| Related | 4 card grid 4-col | **Horizontal scroll strip** |
| Floating support | Fixed bottom-right | **Không có** — thay bằng bottom nav tab "Tư vấn" |

---

## Block nào tăng luxury feel rõ nhất

**1. Hero desktop (block 1)**
- Ảnh có gradient background `#FAF9F7 → #EDE8E0` thay vì bg trắng phẳng
- Score badge overlay dark trong ảnh
- Info col có `border-left` mảnh tách 2 vùng rõ
- CTA 2 nút rõ cấp bậc: dark primary + outline secondary

**2. Verdict block (block 5)**
- Dark `#1A1D21` ngắt hẳn với trắng của bài
- Typography serif + eyebrow teal
- Tạo sense of closure rõ ràng trước khi chuyển sang related

**3. Related section (block 6)**
- Mỗi card có 1 dòng giải thích lý do gợi ý — không phải list sản phẩm ngẫu nhiên
- Xem tiếp = có định hướng, không phải đổ bulk

---

## Block nào tăng usability cho người Việt phổ thông

**1. Meta strip mobile**
- 4 ô ngắn: Loại / Nồng độ / Mùa / Dịp — scan nhanh trong 2 giây
- Không cần đọc full spec để biết chai này dùng lúc nào

**2. Editorial labels** (`Ai không nên mua?` / `Có đáng tiền không?` / `Nên dùng khi nào?`)
- Tên section viết theo câu hỏi người thật sẽ đặt — không phải jargon kỹ thuật
- Người không biết gì về nước hoa vẫn biết phần nào đọc trước

**3. Trust chips dưới CTA**
- "Review khí hậu Việt Nam · Không sponsored · Miễn phí tư vấn"
- Context ngắn, cụ thể — không phải badge marketing rỗng

**4. Sidebar card "Thông tin nhanh"**
- 5 dòng key info: hãng / nồng độ / mùa / dịp / năm
- User không cần scroll toàn bài mới có thể quyết định có đọc tiếp không

---

## Điểm Coder cần implement cẩn thận nhất

### 1. Hero: ảnh product với `mix-blend-multiply`
```css
.product-img {
  object-fit: contain;
  mix-blend-multiply; /* loại bỏ viền trắng của PNG*/
  padding: 40px;
}
```
> Quan trọng: bg của container phải là màu sáng (không phải trắng #fff tinh) để blend đẹp. Dùng `from-[#FAF9F7] to-[#EDE8E0]`.

### 2. Score badge overlay — absolute positioning
```tsx
<div className="relative">
  <ProductImage />
  <div className="absolute top-4 right-4 w-[72px] h-[72px] rounded-full bg-[#1A1D21] ..." />
</div>
```
> Badge phải nằm trong container `relative` của ảnh, không phải trong hero info col.

### 3. Sidebar sticky — chỉ desktop
```css
.sidebar { position: sticky; top: 80px; align-self: start; }
/* Mobile: sidebar không tồn tại, CTA nằm trong hero info */
```

### 4. Editorial labels — dùng text thật, không emoji
> Đây là section labels, không phải UI decoration. Dùng typography + background teal nhạt, không dùng emoji.

### 5. Related card — giữ "1 câu context" mỗi card
> Desktop: mỗi rel-card có `rel-desc` — 1 câu giải thích tại sao gợi ý chai này
> Mobile: horizontal scroll, không có desc (space không đủ)
> Implement riêng, không dùng component chung cho 2 context

### 6. Trust chips — KHÔNG fake thêm số liệu
> Dùng đúng 3 chips: "Review khí hậu Việt Nam", "Không sponsored", "Tư vấn miễn phí"
> Không thêm số lượng review fake, không thêm star rating

### 7. Footer — giữ consistent với homepage V2
> Format 4 col desktop, links grid 2-col mobile
> Không thêm địa chỉ/SĐT nếu chưa verify

---

## Files deliver

| File | Mục đích |
|------|----------|
| `ui-blueprint-v2-product-desktop.html` | Desktop — full product page layout |
| `ui-blueprint-v2-product-mobile.html` | Mobile — phone wrapper 390px |
| `ui-blueprint-v2-product-notes.md` (file này) | Handoff notes cho Coder |

---

## KPI self-check

**Desktop:**
- [x] Hero nhìn ra "luxury product detail page"
- [x] Score bars mảnh, tinh, không dashboard feel
- [x] Chips notes/accords gọn, nhóm theo 3 mức rõ
- [x] Editorial sections có label thật, không generic
- [x] Sidebar 3 card tách biệt, không promo-box
- [x] Related có context "tại sao xem"
- [x] Verdict dark ngắt nhịp rõ

**Mobile:**
- [x] Dùng được tốt ở 375–390px
- [x] Hero: score badge overlay, CTA inline trong info
- [x] Không có sidebar (không cần, không đúng context)
- [x] Meta strip compact, scan nhanh
- [x] Performance block không clutter
- [x] Chips notes nhóm rõ, không quá nhiều cùng lúc
- [x] Related horizontal scroll, footer gọn
- [x] Bottom nav thay thế floating → không đè content
