# UI Refinement Notes — Hero + Quick Paths
**Date:** 2026-03-24  
**Commit:** d4ce298  
**Live URL:** https://www.maisondeson.com  

---

## 1. Hero

### Desktop
**Before:** 2-col split — text trái + article card phải ("Bài nổi bật tuần này" với excerpt + "Đọc ngay" CTA). Cảm giác editorial nhưng bị phân tán vì card bài viết tranh giành attention với H1.

**After:** 2-col split — text trái GIỮ NGUYÊN + bên phải là **editorial hero image** (chai nước hoa trên nền đen tối, caustic light effect, gradient overlay, label "Maison de SON — Review thực tế" bottom left).

**Tại sao tốt hơn:**
- Không còn conflict giữa H1 và article card bên phải
- First impression ngay lập tức rõ là website về nước hoa luxury
- Visual anchor mạnh mà không làm loãng value prop text
- Composition liền khối — hai block cùng mood (trắng ấm + đen editorial)

**KPI Desktop:** ✅ PASS
- Không còn article card ở hero ✅
- Hero có visual anchor mạnh (chai nước hoa dramatic lighting) ✅  
- First screen nhìn ra ngay đây là luxury editorial về nước hoa ✅
- Composition liền khối hơn ✅

### Mobile
**After:** Ảnh editorial hiển thị ở đầu trang (full width, min-h 280px), sau đó là section Quick Paths bên dưới. Text value prop vẫn đọc được, hero image hỗ trợ context không tranh nhau.

**KPI Mobile:** ✅ PASS
- Màn đầu rõ value prop vì text vẫn hiển thị ✅
- Ảnh không làm mobile nặng (file tối ưu ~57KB) ✅
- Không bị cảm giác ảnh chỉ để trang trí (có editorial label) ✅

---

## 2. Quick Paths

### Visual direction thay đổi

| Card | Ảnh cũ (basic) | Ảnh mới (premium) |
|------|----------------|-------------------|
| Nam dễ dùng | Notebook workspace có chữ tay | Morning blue hour desk + chai navy cap, background Eiffel view qua cửa kính |
| Nữ thanh lịch | Nến + chai generic | Chai oval LUMINA amber trên cream marble, white flower subtle |
| Top đáng tiền | Chai trong suốt đơn lẻ | 3 chai NOIR/AURUM/ÉCLAT symmetrical trên dark slate, gold accents |
| Tư vấn gu mùi | Icon điện thoại/chat | Wooden sample tray + scent strips + advisor hands, beige linen surface |

**Art direction cả bộ:** Photography editorial style, warm-to-dark palette tùy card, không có in-text rõ ràng (fictional brand labels chấp nhận được), không generic.

### Desktop
**KPI Desktop:** ✅ PASS
- 4 card nhìn phát thấy premium hơn bộ cũ ✅
- Mỗi card có mood riêng, không lẫn nhau ✅
- Vẫn scan nhanh, không nặng text ✅
- Không còn cảm giác placeholder/basic ✅

### Mobile
**KPI Mobile:** ✅ PASS
- Layout 2x2 grid, ảnh crop OK trên 375px ✅
- Tất cả 4 ảnh hiển thị đúng mood khi lên mobile ✅
- Cards dễ bấm (full card clickable) ✅
- Không card nào bị ảnh vô nghĩa khi crop ✅

---

## 3. Live Verification

| Mục | Kết quả |
|-----|---------|
| **Live URL checked** | https://www.maisondeson.com |
| **Desktop checked (1440x900)** | Hero editorial image LIVE, 4 quick paths v2 LIVE |
| **Mobile checked (375x812)** | Hero image visible mobile, 4 quick paths 2x2 grid LIVE |
| **Article card đã bỏ** | ✅ Confirmed — không còn "Bài nổi bật tuần này" card trong hero |
| **Commit** | d4ce298 → pushed → Vercel deployed |

### Chưa final
- **Không có điểm nào chưa final trong scope này.** Tất cả KPI của handoff file đều PASS.
- Note riêng: LUMINA label trên chai ảnh nữ → fictional brand, không gây nhầm lẫn, chấp nhận được

---

## Files thay đổi

| File | Thay đổi |
|------|---------|
| `src/app/page.tsx` | Hero: bỏ featuredPost block, thay bằng editorial image div. Quick paths: update 4 image paths sang v2 |
| `public/images/ambient/hero-editorial.png` | Ảnh mới — chai editorial dark moody |
| `public/images/ambient/di-lam-v2.png` | Ảnh mới — morning desk Parisien |
| `public/images/ambient/nu-thanh-lich-v2.png` | Ảnh mới — Lumina oval marble |
| `public/images/ambient/dang-tien-v2.png` | Ảnh mới — NOIR/AURUM/ÉCLAT triset |
| `public/images/ambient/tu-van-v2.png` | Ảnh mới — wooden sample tray |
