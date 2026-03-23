# Blueprint V2 — Notes cho Coder
> Ngày: 2026-03-24 | Anti → Coder handoff
> Tham chiếu: `ANTI_HOMEPAGE_V2_EXECUTION_2026-03-24.md`

---

## V2 thêm gì so với V1?

| Block | V1 | V2 |
|-------|----|----|
| Hero | ✅ 2 cột | ✅ Giữ nguyên, polish thêm |
| Quick paths | ✅ 4 card | ✅ Giữ nguyên, thêm SVG icon real |
| Top picks | 4 card đều nhau | **1 large + 3 small** — hierarchy curated rõ hơn |
| **Onboarding** | ❌ Không có | ✅ **Mới** — 3 lối vào riêng (đi làm / hẹn hò / người mới) |
| **Brand spotlight** | ❌ Không có | ✅ **Mới** — 6 brand, có định vị ngắn từng brand |
| Knowledge | 3 card đều | **1 featured lớn + 3 card phụ** — editorial rõ hơn |
| **Trust section** | Chỉ 3 trust pills trong hero | ✅ **Mới** — section riêng, dark bg, 4 cột rõ ràng |
| CTA banner | ✅ Có | ✅ Giữ, copy thêm social proof |
| Footer | Có địa chỉ fake | ✅ **Cleaned** — chỉ info chắc chắn có thật |
| Mobile | Desktop co lại | ✅ **Thiết kế riêng hoàn toàn** |

---

## Block nào xử lý "homepage quá ngắn"?

5 blocks mới làm homepage dài hơn có chiến lược:

1. **Onboarding** (block 5) — 1 wrap box lớn, 3 card dọc → chiều cao đáng kể
2. **Brand spotlight** (block 6) — grid 3x2, info dense nhưng scannable
3. **Trust section** (block 8) — dark section đứng riêng, 4 cột text
4. **Knowledge** mở rộng (block 7) — từ 3 card đều → 1 featured + 3 bài phụ dọc bên phải
5. **Footer thật** — 4 cột đầy đủ thay vì footer ngắn

---

## Block nào phục vụ user Việt phổ thông?

| Block | Lý do phục vụ phổ thông |
|-------|------------------------|
| Quick paths | 4 ô bấm nhanh, không cần biết thuật ngữ |
| **Onboarding** | Câu hỏi bằng ngôn ngữ hoàn cảnh (đi làm / hẹn hò / người mới) thay vì theo note hương |
| Top picks | Có giá VND rõ, score /10, mô tả ngắn bằng tiếng Việt thật |
| Brand spotlight | Copy giải thích brand bằng 1 câu dễ hiểu — không phải lịch sử thương hiệu dài |
| CTA Zalo | Luôn có đường thoát → tư vấn người thật |

---

## Block nào tăng trust?

**Block 8 — Trust section** (mới hoàn toàn):
- 4 trust points riêng biệt với dark background — tạo cảm giác declaration, không phải bullet point chìm
- Nói thẳng: "dám nói nhược điểm", "không sponsored", "không ép mua"
- Copy ngắn, chắc — không corporate rỗng

Ngoài ra trust được reinforce qua:
- Hero trust pills (3 pills vẫn giữ)
- CTA note: "Miễn phí · Trả lời thật · Không ép mua"

---

## Desktop vs Mobile — khác nhau ở đâu

| Điểm | Desktop | Mobile |
|------|---------|--------|
| Hero | 2 cột grid, ảnh bên phải | Full-bleed card, CTA nằm trong ảnh |
| Quick paths | 4 card ngang | Grid 2×2 |
| Top picks | Grid `1.4fr 1fr 1fr 1fr` | Horizontal scroll strip |
| Onboarding | 3 card ngang bằng nhau | 3 card dọc (list) với arrow |
| Brand spotlight | Grid 3×2 | Horizontal scroll strip |
| Knowledge | `1.4fr + right column 3 bài` | Featured đứng + 2 row dưới |
| Trust section | 4 cột ngang, số lớn mờ | List dọc với check icons |
| Floating support | Có, bottom-right | Không có (đè content) |
| Bottom nav | Không có | 4 mục sticky bottom |
| Search | Trong header bên phải | Tách thành 1 dòng riêng dưới logo |

---

## Điểm Coder cần implement cẩn thận nhất

### 1. Onboarding block — **KHÔNG để merge với Quick paths**
> Đây là 2 block khác nhau hoàn toàn về intent:
> - Quick paths = filter nhanh theo nhóm user
> - Onboarding = hỏi hoàn cảnh dùng → routing sang top list phù hợp
>
> Implement bằng cách link từng ob-card đến rank page đã lọc sẵn:
> - Đi làm → `/bang-xep-hang?dip=di-lam`
> - Hẹn hò → `/bang-xep-hang?dip=hen-ho`
> - Người mới → `/bang-xep-hang?sort=easiest`

### 2. Brand spotlight — cần data thật
> Dùng brand slugs đã có trong hệ thống. Đừng hardcode copy mới.
> Lấy câu định vị từ brand description trong data layer nếu có.
> 6 brand ưu tiên: `dior`, `chanel`, `ysl`, `tom-ford`, `mancera`, `lattafa`

### 3. Trust section — giữ dark bg, không đổi màu
> Section này PHẢI dark (`#1A1D21`) — nếu đổi về trắng/teal thì mất đi weight cần thiết.
> Text contrast phải đạt 4.5:1 với rgba(255,255,255,0.6).

### 4. Mobile horizontal scrolls — smooth, không show scrollbar
```css
.scroll-strip {
  display: flex; gap: 10px;
  overflow-x: auto; padding: 0 16px 4px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.scroll-strip::-webkit-scrollbar { display: none; }
```

### 5. Footer — KHÔNG thêm địa chỉ, SĐT chi tiết vào code thật
> Blueprint đã clean ra rồi. Khi implement vào Next.js, chỉ dùng:
> - Email: contact@maisondeson.vn (nếu đã verify hoạt động)
> - Địa chỉ: "TP. Hồ Chí Minh, Việt Nam" (neutral)
> - Zalo link đúng số thật

### 6. Floating support — desktop only
> Implement với `@media (max-width: 768px) { display: none; }`
> Mobile dùng bottom nav tab "Tư vấn" thay thế.

---

## Files deliver

| File | Mục đích |
|------|----------|
| `ui-blueprint-v2-homepage.html` | Desktop — 9 blocks, standalone HTML |
| `ui-blueprint-v2-homepage-mobile.html` | Mobile — phone wrapper 390px, 9 blocks thiết kế riêng |
| `ui-blueprint-v2-notes.md` (file này) | Handoff notes cho Coder implement |

---

## KPI check — tự review trước khi giao Coder implement

- [x] Desktop đủ 9 block theo thứ tự spec A
- [x] Mobile đủ 9 block theo spec B — KHÔNG phải desktop co lại
- [x] Onboarding riêng, không merge với quick paths
- [x] Brand spotlight 6 brand, có định vị từng brand
- [x] Trust section là section riêng, không chỉ pills trong hero
- [x] Footer không có địa chỉ/SĐT fake
- [x] Floating support desktop only
- [x] Bottom nav 4 mục, mobile only
- [x] Màu teal `#0D7377` xuyên suốt, không có xanh SaaS `#0068FF`
- [x] SVG icons, không phải emoji trong final desktop blueprint
