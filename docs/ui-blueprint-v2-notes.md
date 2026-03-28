# UI Refinement Notes — Homepage
**Date:** 2026-03-24  
**Commit:** f02b8f5

---

## DESKTOP

### Điểm đã pass
| Block | Fix | Status |
|-------|-----|--------|
| Brand Spotlight — logo panel bg | Đổi `#F1F5F5` (lạnh) → `#EDE8E0` (warm beige) — logo nổi hơn trên nền ấm | ✅ PASS |
| Onboarding serial 01/02/03 | Đổi từ `--color-border` (xám trống) → `#B8962E` (warm gold) — tạo hierarchy rõ hơn | ✅ PASS |
| Floating Zalo button | Đổi `#0068FF` → `#0D7377` (teal brand) — đúng design token | ✅ PASS |

### Chưa final
| Block | Vấn đề | Action |
|-------|---------|--------|
| **Hero desktop** | Vẫn split: trái = value prop, phải = featured article. Chưa cảm giác liền khối. | ⚠️ CHƯA FINAL — cần xem xét lại composition. Option: làm hero full-bleed với featured bài viết là overlay hoặc pull-quote tích hợp vào nền trái, không phải card riêng bên phải |

---

## MOBILE

### Điểm đã pass
| Block | Fix | Status |
|-------|-----|--------|
| Product card score + giá dính nhau | Tăng width 152 → 168px, thêm `border-t` separator, `whitespace-nowrap` + `font-medium` cho giá | ✅ PASS |
| Search bar quá to | Giảm container từ `py-2` → `py-1.5` — compact hơn ~8px | ✅ PASS |
| Brand Spotlight logo panel | Đổi bg warm beige `#EDE8E0` — logo có contrast tốt hơn trên mobile card | ✅ PASS |
| Onboarding serial numbers | Warm gold `#B8962E` — pass trên cả mobile list layout | ✅ PASS |
| Floating Zalo button | Teal `#0D7377` — pass | ✅ PASS |

### Re-check Quick Paths mobile (đã verify)
- Ảnh ambient hoạt động đúng: card 2x2, mỗi card có ambient image top + text dưới
- Tuy nhiên: ảnh ambient (`di-lam.png`, `hen-ho.png`) chứa text chữ viết tay (notebook, sticky notes) → có thể gây distraction trên mobile nhỏ
- **Verdict:** ảnh vẫn cho cảm giác context nhanh (workspace / date / beginner / advisor) — scan ok
- **Chưa final:** Nếu muốn chuẩn hơn, thay ảnh chứa notebook text bằng ảnh thuần ambient (không có text trong ảnh)

---

## FOOTER — Verified

| Field | Trước | Sau | Status |
|-------|-------|-----|--------|
| Phone | `090 123 4567` — FAKE | `0961 226 169` — khớp với Zalo | ✅ Fixed |
| Email | `contact@maisondeson.vn` — chưa xác nhận | Đã xóa | ✅ Neutralized |
| Địa chỉ | `L3-456, Vinhomes Central Park` — chưa xác nhận | `TP. HCM, Việt Nam` — trung tính | ✅ Neutralized |
| Instagram/Facebook | `href="#"` — dead link | Thay bằng Zalo link thật | ✅ Fixed |
| Footer links | `Privacy Policy / Terms of Service` tiếng Anh + `#` | `Chính sách / Giới thiệu` tiếng Việt + real routes | ✅ Fixed |

---

## Tổng KPI Pass/Fail

| KPI | Desktop | Mobile |
|-----|---------|--------|
| Mobile card overlap hết | N/A | ✅ PASS |
| Search bar compact | N/A | ✅ PASS |
| Brand spotlight logo rõ | ✅ PASS | ✅ PASS |
| Onboarding serial rõ | ✅ PASS | ✅ PASS |
| Floating Zalo đúng tone | ✅ PASS | ✅ PASS |
| Hero desktop composition | ⚠️ CHƯA FINAL | N/A |
| Quick paths mobile ảnh | N/A | ⚠️ Đạt, nhưng có thể improve |
| Footer verified | ✅ PASS | ✅ PASS |

---

## Files đã sửa

| File | Thay đổi |
|------|---------|
| `src/app/page.tsx` | Mobile card width+separator, onboarding gold, brand warm bg |
| `src/components/Header.tsx` | Search bar padding mobile compact |
| `src/components/FloatingSupport.tsx` | Zalo `#0068FF` → `#0D7377` |
| `src/components/Footer.tsx` | Phone thật, địa chỉ neutral, social thật, text Việt |
