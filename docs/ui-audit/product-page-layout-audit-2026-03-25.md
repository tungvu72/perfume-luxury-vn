# Product Page Layout Audit — 2026-03-25

## Scope
- Live check trên production: `https://www.maisondeson.com/nuoc-hoa-nam-armani-stronger-with-you-intensely`
- Checked desktop + mobile
- Code reviewed: `src/components/pdp/ProductClientV2.tsx`

## Evidence
- Desktop screenshot captured via browser tool
- Mobile screenshot captured via browser tool (390x844)
- Route `[slug]/page.tsx` đang render `ProductClientV2`

## Findings

### 1) Điểm đang bị đặt sai chỗ — PASS finding
**Hiện trạng:**
- Card `Điểm đánh giá` đang nằm ở sidebar desktop (`lg:block`) trong khi phần hero trên trái đã có score badge overlay trên ảnh.
- Kết quả là score bị tách khỏi context mua hàng/chốt nhận định, nhìn như một module phụ thay vì trọng tâm review.
- Trên mobile, card score không còn ở sidebar, nên user chỉ còn nhìn badge nhỏ ở ảnh + các chip info; trọng lượng “điểm đánh giá” bị yếu đi đáng kể.

**Tác động UX:**
- Desktop: score bị duplicate nhẹ (badge ảnh + card sidebar), nhưng lại thiếu vai trò trung tâm trong flow đọc.
- Mobile: score summary gần như mất cấu trúc rõ ràng, không còn block review-first mạnh như bản trước.

**Kết luận:**
- User nói đúng: phần điểm hiện bị đặt chưa hợp lý.

### 2) Mục cam kết của shop đang thiếu trong flow chính — PASS finding
**Hiện trạng:**
- `Cam kết của Maison de SON` vẫn còn trong code, nhưng bị đẩy xuống card số 4 ở sidebar desktop.
- Trên mobile, sidebar biến mất hoàn toàn, nên user gần như không thấy cam kết này trong trải nghiệm chính.
- Thay vào đó mobile chỉ có sticky CTA `Tư vấn Zalo`, nhưng thiếu trust layer ngay trước hành động.

**Tác động UX/conversion:**
- Mất trust block ở mobile — đây là nơi cần `chính hãng 100%`, `đền 10 triệu nếu hàng giả`, `tư vấn không ép mua` nhất.
- Trang product đang nghiêng về “review + CTA” nhưng thiếu “proof of trust” gần vùng giá/hành động.

**Kết luận:**
- User nói đúng: mục cam kết không còn ở vị trí hiệu quả như trước.

### 3) Thứ tự module hiện tại chưa tối ưu — PASS finding
**Hiện trạng flow desktop:**
1. Hero ảnh + info + CTA
2. Body review / accord / note / usage
3. Sidebar: điểm → tư vấn → thông tin nhanh → tags → cam kết

**Vấn đề:**
- Logic đọc bị lệch: score + trust + quick facts bị chia tách quá xa nhau.
- CTA mua/tư vấn xuất hiện trước trust block rõ ràng.
- `Thông tin nhanh` và `Cam kết` đều là block support cho decision nhưng bị đẩy về sidebar tách biệt.

**Mobile còn yếu hơn:**
- Hero dài nhưng thiếu một “trust + score cluster” ngay sau giá/CTA.
- Sticky CTA ở đáy tốt cho action nhưng không đủ để tạo niềm tin.

## Chẩn đoán chính
`ProductClientV2` đang ưu tiên bố cục editorial + sidebar kiểu desktop magazine, nhưng chưa translate tốt sang cấu trúc quyết định mua hàng của PDP Maison de SON.

## Đề xuất layout đúng hơn

### Rule chốt thêm từ user
- **Không lấy giá làm block chính trong hero decision flow**.
- Lý do: Maison de SON không có nguồn giá cố định đủ tin cậy để coi đây là dữ liệu chuẩn cần nhấn mạnh.
- Nếu cần nhắc giá, chỉ nên để mức tham khảo rất phụ hoặc bỏ hẳn khỏi vùng quyết định chính.

### Desktop
Ngay dưới hero / CTA nên có 1 cụm quyết định gồm 3 card ngang hoặc stack gọn:
1. **Điểm đánh giá**
2. **Thông tin nhanh**
3. **Cam kết của Maison de SON**

Card `Tư vấn chọn mua` có thể giữ riêng nhưng nên đứng sau cụm trên.

### Mobile
Ngay sau hero/CTA nên render tuần tự:
1. `Điểm đánh giá`
2. `Thông tin nhanh`
3. `Cam kết của Maison de SON`
4. rồi mới tới các section review sâu hơn

## Patch direction nên làm
1. Di chuyển `ScoreDisplay` ra khỏi sidebar-only, đưa vào main column dưới hero CTA
2. Di chuyển `Cam kết của Maison de SON` ra main flow, nhất là cho mobile
3. Gom `Điểm đánh giá + Thông tin nhanh + Cam kết` thành decision cluster
4. Sidebar desktop chỉ giữ block phụ như `Tư vấn chọn mua`, tags, maybe thông tin lặp nếu cần
5. Mobile sticky CTA giữ nguyên nhưng trust block phải xuất hiện phía trên fold đầu tiên hoặc ngay sau fold đầu tiên

## Verdict
- **Desktop:** FAIL layout hierarchy
- **Mobile:** FAIL trust visibility
- **Issue user reported:** VERIFIED
