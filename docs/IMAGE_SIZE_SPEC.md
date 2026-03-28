# IMAGE SIZE SPEC — Maison de SON
> Cập nhật: 2026-03-24 | Bắt buộc tuân thủ khi upload ảnh mới

---

## 1. Quick Paths — Ambient Cards (Homepage)

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **1:1 (vuông)** |
| **Kích thước tối thiểu** | 600 × 600px |
| **Kích thước khuyến nghị** | 800 × 800px |
| **Định dạng** | PNG hoặc WebP |
| **Vị trí lưu** | `/public/images/ambient/` |
| **Đặt tên** | `[context]-v2.png` (VD: `di-lam-v2.png`) |
| **Container render** | Mobile: 160px cao · Desktop: 200px cao |
| **Crop mode** | `object-cover object-center` — trim đều 2 bên |
| **Ghi chú** | Đặt subject chính vào **vùng 40–60% chiều dọc** (giữa) để không bị cắt khi crop |

### 4 ảnh hiện tại
| File | Mô tả | Fit |
|------|-------|-----|
| `di-lam-v2.png` | Bàn làm việc, chai nước hoa + sổ tay | ✅ |
| `nu-thanh-lich-v2.png` | Chai Lumina trên nền trắng | ✅ |
| `dang-tien-v2.png` | Chai tối màu trên nền tối | ✅ |
| `tu-van-v2.png` | Tay cầm ống chiết + bàn xét | ✅ |

---

## 2. Hero — Editorial Image (Homepage)

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **3:2 hoặc 16:9** |
| **Kích thước tối thiểu** | 1920 × 1080px |
| **Kích thước khuyến nghị** | 2400 × 1350px |
| **Định dạng** | PNG hoặc WebP |
| **Vị trí lưu** | `/public/` (root) |
| **Tên file** | `hero-main-v2.png` |
| **Container render** | Height: 70vh (min 560px) |
| **Crop mode** | `object-cover object-center` |
| **Ghi chú** | Subject chính ở giữa hoặc hơi lệch phải; vùng trên/dưới có thể bị che bởi overlay text |

---

## 3. Product Image — Bottle Shot

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **1:1 (vuông)** |
| **Kích thước tối thiểu** | 400 × 400px |
| **Kích thước khuyến nghị** | 800 × 800px |
| **Định dạng** | PNG (có nền trắng hoặc transparent) |
| **Vị trí lưu** | Sanity Media / CDN |
| **Crop mode** | `object-contain` — giữ nguyên tỉ lệ, không cắt |
| **Background** | Trắng `#FFFFFF` hoặc trong suốt |
| **Ghi chú** | Chai phải chiếm 70–80% diện tích ảnh; không padding quá nhiều |

### Kích thước render theo context
| Context | Kích thước container |
|---------|---------------------|
| Homepage product card | 120 × 120px |
| Bảng xếp hạng row | 60 × 60px (mobile) · 90 × 90px (desktop) |
| Search dropdown | 48 × 48px |
| Brand spotlight card | 100% × aspect-square |
| PDP hero (main image) | 400 × 400px (mobile) · 500 × 500px (desktop) |
| Related products | 150 × 150px |

---

## 4. Brand Logo

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **1:1 hoặc 4:1 (ngang)** |
| **Kích thước tối thiểu** | 200 × 200px (vuông) |
| **Định dạng** | PNG với nền transparent |
| **Vị trí lưu** | Sanity Media |
| **Crop mode** | `object-contain` |
| **Ghi chú** | Logo phải có padding đều 4 phía; nền transparent để blend với panel |

---

## 5. Article / Knowledge Page — Main Image

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **16:9** |
| **Kích thước tối thiểu** | 1200 × 675px |
| **Kích thước khuyến nghị** | 1600 × 900px |
| **Định dạng** | JPG (quality 85+) hoặc WebP |
| **Vị trí lưu** | Sanity Media |
| **Crop mode** | `object-cover object-center` |
| **Ghi chú** | Dùng làm OG image → phải đủ sáng và có text-safe zone ở giữa |

---

## 6. Author Avatar

| Thuộc tính | Giá trị |
|------------|---------|
| **Tỉ lệ gốc** | **1:1 (vuông)** |
| **Kích thước tối thiểu** | 200 × 200px |
| **Định dạng** | JPG hoặc PNG |
| **Crop mode** | `object-cover` — render thành circle |

---

## Tóm tắt nhanh

| Loại ảnh | Tỉ lệ | Size khuyến nghị | Format |
|----------|-------|-----------------|--------|
| Quick Path (ambient) | **1:1** | 800 × 800 | PNG/WebP |
| Hero homepage | **16:9** | 2400 × 1350 | PNG/WebP |
| Product bottle | **1:1** | 800 × 800 | PNG (transparent) |
| Brand logo | **1:1** | 400 × 400 | PNG (transparent) |
| Article main image | **16:9** | 1600 × 900 | JPG/WebP |
| Author avatar | **1:1** | 200 × 200 | JPG/PNG |

---

## Rule chung cho mọi ảnh

1. **Không upload ảnh nhỏ hơn kích thước tối thiểu** — sẽ bị vỡ hoặc mờ
2. **Tỉ lệ sai sẽ bị cắt** — luôn check tỉ lệ trước khi upload
3. **Subject chính ở giữa ảnh** — tránh bị cắt bởi crop
4. **Dùng WebP thay PNG nếu ảnh không cần transparent** — nhẹ hơn 30–50%
5. **Không để text trong ảnh** (trừ hero) — text overlay do code xử lý
