# UI Audit Maison de SON — 2026-03-24

## Mục tiêu chốt
Maison de SON phải trở thành một website:
- dễ dùng cho người Việt ở mọi độ tuổi
- đọc nhanh trên mobile
- đủ sang để tạo cảm giác premium/luxury
- không màu mè kiểu SaaS/Dribbble
- ưu tiên clarity, trust, speed, conversion

---

## 1) Kết luận tổng thể
Site hiện tại **đã sạch, usable, có nền editorial**, nhưng còn 4 vấn đề gốc:

1. **Thiếu consistency giữa các page**
   - Homepage có chút editorial
   - Ranking page thiên về app/filter UI
   - Knowledge page là blog/listing
   - Article page là longform magazine
   => Chưa chung một visual system

2. **Mobile-first chưa đủ triệt để**
   - Header + search + floating support + bottom nav đang tranh không gian
   - Một số text/meta quá nhỏ
   - Nhiều chip/filter gây mệt cho user phổ thông

3. **Luxury chưa đi cùng tiện dụng**
   - Có nơi cố premium bằng card/shadow/gradient
   - Nhưng chưa tối ưu cho đọc nhanh, tìm nhanh, quyết định nhanh

4. **UX cho người Việt phổ thông chưa đủ mềm**
   - Người dùng phổ thông cần đường đi đơn giản: tìm mùi / xem top / hỏi tư vấn
   - Hiện có nhiều lớp UI nhưng chưa đủ rõ “đi đâu tiếp theo”

---

## 2) Nguyên tắc redesign chốt

### A. Maison de SON không làm kiểu SaaS
Không dùng motion nặng, filter quá dày, chip quá nhiều, icon/emoji dày đặc.

### B. Maison de SON phải là “Luxury Editorial Commerce”
Kết hợp 3 thứ:
- **Editorial**: typography đẹp, ảnh đẹp, khoảng thở tốt
- **Commerce**: tìm nhanh, giá rõ, CTA rõ
- **Advisory**: luôn có đường sang tư vấn Zalo

### C. Mobile ưu tiên số 1
Đa số người Việt xem bằng điện thoại. Mọi quyết định UI phải test trước ở 375px.

### D. Thiết kế cho người Việt phổ thông
- text dễ hiểu
- không thuật ngữ rối
- không filter quá kỹ thuật ở first layer
- CTA rõ: xem bảng xếp hạng / xem bài / nhắn tư vấn

---

## 3) Review theo page

## Homepage `/`
### Điểm đang ổn
- Hero bài featured có cảm giác editorial
- Có ranking + bài viết + tư vấn => logic đúng
- Dễ hiểu website làm gì

### Vấn đề
- Section heading còn nhỏ, yếu, hơi utility
- Grid top products thiếu cảm giác curated/premium
- CTA banner cuối hơi “web bán hàng”, chưa đủ sang
- Mobile có quá nhiều thành phần nổi cùng lúc: header, search, floating support, bottom nav

### Hướng sửa
- Hero giữ editorial nhưng làm rõ value proposition cho người Việt:
  - “Hiểu mùi trước khi mua”
  - “Review thực tế trong khí hậu Việt Nam”
- Section title lớn hơn, ít emoji hơn
- Top products nên đổi từ “catalog cards” sang “editorial ranking cards”
- CTA tư vấn giảm màu chói, tăng trust copy

---

## Ranking `/bang-xep-hang`
### Điểm đang ổn
- Có hệ filter/sort khá mạnh
- Có utility tốt cho user có nhu cầu rõ

### Vấn đề
- Filter quá dày với user phổ thông
- Nhiều emoji/chip/tag làm page bị app-like
- Danh sách dài, lặp nhịp, dễ mệt
- Mobile filter chiếm không gian và gây áp lực nhận thức

### Hướng sửa
- Chia 2 tầng filter:
  1. **Nhanh cho người Việt phổ thông**: Nam / Nữ / Unisex, Đi làm, Hẹn hò, Mùa hè, Dễ dùng, Theo giá
  2. **Nâng cao**: độ lưu hương, độ tỏa hương, note, brand
- Top page phải có “lối vào nhanh” trước khi vào filter sâu
- Dùng section gợi ý như:
  - Top dễ dùng nhất
  - Top cho người mới
  - Top đi làm
  - Top đáng tiền
- Product row giảm noise, tăng readability

---

## Knowledge `/kien-thuc`
### Điểm đang ổn
- Có featured article + grid logic tốt
- Có thể trở thành hub authority

### Vấn đề
- Sidebar hơi nặng, làm lệch focus
- Filter tabs nhìn như placeholder
- Có dấu hiệu nội dung text lỗi/chưa tinh (`POPULAR_TOPICS` có text rác trong code)
- Chưa đủ rõ content hierarchy cho người mới

### Hướng sửa
- Bỏ cảm giác “blog archive”, chuyển sang “knowledge hub”
- Chia cụm nội dung rõ hơn:
  - Cho người mới bắt đầu
  - So sánh nổi bật
  - Chọn theo nhu cầu
  - Kiến thức tránh mua sai
- Sidebar desktop giảm trọng lượng, mobile đưa xuống dưới
- Tabs phải thực sự hữu dụng hoặc bỏ

---

## Article pages `/[article-slug]`
### Điểm đang ổn
- Typography body tốt nhất site
- Có TOC, related, author, CTA
- Dễ đẩy authority

### Vấn đề
- Nhiều emoji trong TOC/CTA/sidebar làm giảm độ sang
- Sidebar desktop hơi nhiều box
- Hero image đẹp nhưng phần sau hơi nhiều card khác style nhau
- CTA Zalo xanh quá mạnh so với brand tone

### Hướng sửa
- Giữ longform structure hiện tại
- Giảm box count ở sidebar: chỉ giữ TOC + 1 khối tư vấn + 1 khối bài/sản phẩm liên quan
- CTA chuyển sang tone premium hơn
- Tăng sự nhất quán giữa article header, body, author, related modules

---

## Product pages `/[product-slug]`
### Điểm đang ổn
- Có nền tảng PDP tốt
- Universal slug system ổn cho SEO

### Vấn đề
- Từ ảnh live trước đó: floating support đè content
- Header/search vẫn hơi chiếm chỗ trên mobile
- Cần đảm bảo product page ra quyết định nhanh hơn cho user Việt

### Hướng sửa
- Above-the-fold phải trả lời ngay:
  - mùi gì
  - hợp ai
  - dùng khi nào
  - giá khoảng bao nhiêu
  - nên hỏi Zalo khi nào
- Các block nên theo thứ tự quyết định, không theo thứ tự kỹ thuật

---

## Brand pages `/[brand-slug]`
### Điểm đang ổn
- Có hơi hướng premium rõ hơn homepage/ranking
- Card hệ sản phẩm khá ổn

### Vấn đề
- Layout tốt nhưng chưa liên kết mạnh với nhu cầu user
- Chưa có quick paths rõ cho người không rành brand

### Hướng sửa
- Thêm section đầu kiểu:
  - Brand này hợp gu nào
  - Nên bắt đầu từ chai nào
  - Tầm giá trung bình
- Tăng guidance thay vì chỉ listing

---

## 4) Fix hệ thống UI chung

## A. Header
### Vấn đề
- 2 tầng header + search làm mobile chật
- Search focus border hơi nặng
- Mobile menu có emoji, làm giảm độ premium

### Hướng sửa
- Gộp header mobile theo hướng compact
- Search bar thấp hơn, nhẹ hơn
- Bỏ emoji trong mobile nav
- Search suggestions ưu tiên:
  - thương hiệu nổi bật
  - top keyword phổ thông
  - note phổ biến
- Mobile search nên chiếm spotlight khi mở, thay vì dính cùng quá nhiều chrome

## B. Floating support
### Vấn đề
- Đè content
- Tạo cảm giác bán hàng gấp

### Hướng sửa
- Mobile: ẩn khi scroll xuống đọc sâu, hoặc thu về 1 pill nhỏ
- Desktop: tinh gọn hơn, giảm cảm giác pop-up
- Không cạnh tranh với bottom nav

## C. Bottom nav mobile
### Vấn đề
- Hữu ích nhưng cộng với floating support thành dư UI

### Hướng sửa
- Giữ 4 mục chính:
  - Trang chủ
  - Xếp hạng
  - Kiến thức
  - Tư vấn
- Không cần dồn quá nhiều shortcut

## D. Typography
### Vấn đề
- Meta text nhiều nơi quá nhỏ
- Một số trang dùng serif/sans chưa đồng nhất

### Hướng sửa
- Heading serif cho editorial moments
- Sans cho navigation, meta, data
- Tăng cỡ chữ tối thiểu mobile cho meta/filter/read time

## E. Components
### Vấn đề
- Card styles, badge styles, button styles, shadow styles chưa thống nhất

### Hướng sửa
- Chốt 1 design system:
  - radius 16 / 24
  - border mềm, shadow rất tiết chế
  - 1 primary CTA style
  - 1 secondary CTA style
  - 1 chip style

---

## 5) Ưu tiên sửa theo thứ tự

### P1 — Phải sửa trước
1. Header mobile + search
2. Floating support
3. Bottom nav mobile
4. Ranking page filter simplification
5. Typography/contrast cho meta text

### P2 — Sửa tiếp
6. Homepage hierarchy
7. Knowledge page structure
8. Article sidebar simplification
9. CTA system thống nhất

### P3 — Polish
10. Product/brand guidance blocks
11. Footer premium hóa
12. Visual consistency toàn site

---

## 6) Định nghĩa “website tiện lợi cho người Việt”
Một user Việt phổ thông vào web phải làm được 4 việc trong 10 giây đầu:
1. hiểu web này giúp gì cho mình
2. tìm được top list nhanh
3. xem bài kiến thức dễ hiểu
4. biết cách hỏi tư vấn nếu chưa chốt được

Nếu không đạt 4 việc này thì UI dù đẹp vẫn chưa tốt.

---

## 7) Component/file nên sửa trước
- `src/components/Header.tsx`
- `src/components/FloatingSupport.tsx`
- `src/app/page.tsx`
- `src/app/kien-thuc/page.tsx`
- `src/app/bang-xep-hang/RankingClient.tsx`
- `src/app/[slug]/page.tsx`
- `src/app/globals.css`

---

## 8) Hướng demo chốt
Demo cần thể hiện:
- desktop: premium editorial + clarity
- mobile: compact, dễ đọc, 1 đường đi rõ ràng
- không chạy theo hiệu ứng nặng
- ngôn ngữ gần gũi với người Việt

Tài liệu demo đi kèm:
- `docs/ui-demo-home-desktop.html`
- `docs/ui-demo-home-mobile.html`
