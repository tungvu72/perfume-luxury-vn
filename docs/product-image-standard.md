# Product Image Standard — Maison de SON

> Được lập: 2026-03-25 | Status: ACTIVE

## Vấn đề hiện tại

Từ audit grid live site:
- **Nội dung hỗn loạn**: chai đơn / hộp đơn / chai+hộp / 2 chai
- **Nền không đồng nhất**: trắng, xám, tím (Alien), cam (Hermès), đen (Creed)
- **Tỷ lệ khác nhau**: landscape (Allure Homme), quá nhỏ (Angel), zoomed in (Allure Homme EDT)
- **File size không chuẩn**: từ <5KB đến >200KB

---

## Image Standard Rule (bắt buộc)

### 1. Nội dung ảnh
- ✅ **Chai đơn, front facing** — không có hộp, không có accessories
- ✅ Chai nguyên vẹn, không bị crop
- ❌ Không dùng: hộp alone, 2 chai, lifestyle shot, chai nằm ngang
- ❌ Không dùng: ảnh có logo thương hiệu overlay, watermark, badge

> **Lý do chọn chai đơn:** Đồng nhất dễ nhất, scale tốt trong grid, professional luxury aesthetic. Box makes grids look messy khi brand khác nhau.

### 2. Background
- ✅ **Trắng thuần** `#FFFFFF` hoặc off-white `#FAFAFA`
- ❌ Không có nền màu, gradient, shadow ngoài, pattern
- ❌ Không có lifestyle bg (bàn, studio set, outdoor)

### 3. Kích thước & tỷ lệ
- **Canvas**: `800 × 1000px` (tỷ lệ 4:5 portrait)
- **Padding**: 12% tất cả 4 cạnh (= 96px top/bottom, 96px left/right)
- **Subject area**: tối đa `608 × 808px` trong canvas
- **Format**: WebP preferred, JPEG fallback
- **File size**: 40–120KB (WebP), 60–150KB (JPEG)
- **Quality**: WebP 85%, JPEG 85%

### 4. Căn chỉnh
- Chai **căn giữa** canvas theo cả trục X và Y
- Chân chai (bottom) ngồi tại ~85% chiều cao canvas
- Không được crop bất kỳ phần nào của chai

---

## Nguồn ảnh (theo ưu tiên)

| Priority | Nguồn | Chất lượng | Scale |
|----------|-------|-----------|-------|
| 1 | **Fragrantica** `/photos/{id}-{size}.jpg` | ⭐⭐⭐⭐⭐ | 284/284 |
| 2 | **Official brand sites** | ⭐⭐⭐⭐⭐ | ~70% products |
| 3 | **Sephora/Farfetch CDN** | ⭐⭐⭐⭐ | ~90% products |
| 4 | **Remove.bg** (remove nền cũ) | ⭐⭐⭐ | Fallback |

**Fragrantica URL pattern:**
```
https://fimgs.net/mdimg/perfume/375x500.{fragrantica_id}.jpg
```

---

## Batch Plan

### Batch 0: Xác định priority (NGAY)
- [ ] Audit tự động: check ảnh nào có nền tối/màu → Priority 1
- [ ] Check ảnh nào có landscape orientation → Priority 1
- [ ] Export danh sách 284 sản phẩm + Fragrantica ID

### Batch 1 — Top 30 products (tuần 1)
**Tiêu chí**: Sản phẩm có traffic cao hoặc đang có lỗi ảnh nghiêm trọng (dark bg, box-only, landscape)

Ưu tiên xử lý ngay:
- Afnan 9PM (dark box bg)
- Creed Absolu Aventus (dark moody bg)
- Aqua di Giò Parfum (box only)
- Mugler Alien (purple bg)
- Hermès 24 Faubourg (orange bg)
- Chanel Allure Homme (landscape)
- Angel Muse (box dominant)
- + 23 sản phẩm tiếp theo trong top traffic

### Batch 2 — 50 sản phẩm tiếp (tuần 2)
- [ ] Tải ảnh Fragrantica theo bulk
- [ ] Process qua script: resize → center → white bg → export WebP
- [ ] Replace trong `/public/images/products/`
- [ ] Commit

### Batch 3 → 5 — Remaining 200 sản phẩm
- Mỗi batch ~50 sản phẩm
- Script tự động xử lý

---

## Processing Script Plan

```powershell
# Workflow cho mỗi batch:
# 1. Lấy danh sách slug từ mockData
# 2. Map sang Fragrantica ID
# 3. Download ảnh
# 4. Process: ImageMagick hoặc Sharp (Node)
#    - Resize về 800x1000
#    - White bg
#    - Center subject
#    - Export WebP 85%
# 5. Rename về convention: {slug}-main.webp
# 6. Replace trong /public/images/products/
# 7. Update mockData image field nếu cần
```

---

## Naming Convention

```
{slug}-main.webp       → ảnh chính (hiển thị trong grid + product hero)
{slug}-gallery-1.webp  → ảnh phụ 1 (nếu có)
{slug}-gallery-2.webp  → ảnh phụ 2 (nếu có)
```

Ví dụ:
- `nuoc-hoa-nam-dior-sauvage-edp-main.webp`
- `nuoc-hoa-nam-chanel-bleu-chanel-edp-main.webp`

---

## CSS Fallback (áp dụng ngay, không cần đổi ảnh)

Trong khi chờ batch replace, có thể apply CSS sau để normalize grid hiển thị:

```css
.product-card img {
  object-fit: contain;
  background: #ffffff;
  padding: 12%;
  aspect-ratio: 4/5;
}
```

> ⚠️ CSS chỉ là tạm thời. Ảnh thực tế vẫn cần replace đúng standard.

---

## Status Tracking

| Batch | Số SP | Trạng thái | Hoàn thành |
|-------|-------|-----------|----------|
| Batch 1 | 30 | ⏳ Pending | — |
| Batch 2 | 50 | ⏳ Pending | — |
| Batch 3 | 50 | ⏳ Pending | — |
| Batch 4 | 50 | ⏳ Pending | — |
| Batch 5 | 50 | ⏳ Pending | — |
| Batch 6 | ~54 | ⏳ Pending | — |
