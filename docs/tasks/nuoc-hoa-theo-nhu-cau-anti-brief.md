# TASK — Refactor `/bang-xep-hang` thành `/nuoc-hoa-theo-nhu-cau`

## Mục tiêu
Bỏ hẳn tư duy **“bảng xếp hạng”**.
Trang này từ nay là **công cụ khám phá nước hoa theo nhu cầu thực tế**.

Tên mới:
**Nước Hoa Theo Nhu Cầu**

URL mới:
**`/nuoc-hoa-theo-nhu-cau`**

Bắt buộc:
- tạo page mới ở URL trên
- **301 redirect** toàn bộ `/bang-xep-hang` → `/nuoc-hoa-theo-nhu-cau`

---

## Lý do đổi hướng
Không tiếp tục làm “bảng xếp hạng” nữa vì:

1. **Không thực tế**  
   User không cần một top list tổng. User cần tìm theo nhu cầu thật:
   - đi làm
   - hẹn hò
   - hằng ngày
   - mùa hè
   - thu đông
   - note hương
   - nhóm mùi
   - brand

2. **Ranking tổng dễ thành listicle SEO**  
   Nó tạo cảm giác áp đặt và thiếu ngữ cảnh dùng thực tế.

3. **UX mobile của ranking page không bền**  
   Khi nhồi rank, ảnh, badge, score, giá, text vào cùng một card thì rất dễ vỡ layout, truncate xấu, lệch bố cục.

4. **Maison cần utility page, không cần top list drama**  
   Page này phải giúp user **lọc ra chai phù hợp**, không phải xem ai đứng hạng 1.

---

## Nguồn tham chiếu bắt buộc
Bắt buộc học từ:
**https://www.fragrantica.com/search/**

### Nhưng phải hiểu đúng:
- **Clone structure / logic / usability**
- **KHÔNG copy visual**
- **KHÔNG bê nguyên style Fragrantica**
- Maison vẫn phải giữ giao diện riêng: **premium, sạch, gọn, dễ đọc hơn**

Tức là phải học 3 thứ của Fragrantica:
1. **search-first**
2. **filter-first**
3. **results-first**

---

## Layout bắt buộc

### Desktop
Bố cục bắt buộc:
- **sidebar filter bên trái**
- **khu search + results bên phải**

Khu results phải là:
- **grid 5 chai / 1 dòng**
- không phải card list ngang kiểu cũ
- không phải layout ranking cũ

### Mobile
Tư duy bắt buộc:
- ô search ở trên
- nút/filter trigger rõ ràng
- results nằm dưới
- dùng cùng logic hiển thị sản phẩm như desktop, nhưng fit mobile đúng cách
- **không được làm kiểu mobile ranking card cũ**

---

## Product item spec — khóa cứng
Mỗi chai trong result chỉ được hiển thị các thông tin sau:

1. **Ảnh chai**
2. **Tên sản phẩm**
3. **Thương hiệu**
4. **Năm sản xuất**
5. **Điểm số / 10**

### Không được thêm vào item:
- rank #01 #02 #03
- giá
- badge rối
- compare button
- tag chồng lên card
- score bubble kiểu phô
- metadata thừa

Mục tiêu là:
**sạch, dễ quét, utility-first**

---

## Bộ filter bắt buộc
Chỉ làm các filter dưới đây:

- **Thương hiệu**
- **Dịp dùng**:
  - đi làm
  - hẹn hò
  - hằng ngày
- **Mùa**:
  - hè
  - thu đông
  - đa dụng
- **Độ lưu hương**
- **Note hương**
- **Nhóm mùi**

Không tự ý mở thêm filter ngoài scope này ở bản đầu.

---

## Search behavior bắt buộc
Thanh search phải cho phép tìm theo:
- tên sản phẩm
- thương hiệu
- note hương
- nhóm mùi

Placeholder:
**Tìm theo tên nước hoa, thương hiệu, note hương...**

---

## Yêu cầu UI/UX
Phải bám đúng tinh thần sau:

### Phải có
- dễ dùng hơn ranking page cũ
- dễ scan hơn ranking page cũ
- mobile usable thật
- text readable
- spacing sạch
- card cân đối
- không bị cảm giác desktop co nhỏ xuống mobile

### Không được có
- horizontal overflow
- khoảng trắng vô lý
- text truncate thô bạo
- card lệch bố cục sang phải
- ảnh bị bó quá nhỏ
- filter đẩy layout vỡ
- cảm giác “đây vẫn là bảng xếp hạng cũ thay tên”

---

## Design direction
Học Fragrantica về:
- khả năng lọc
- cách ưu tiên search
- utility
- cách user đi từ nhu cầu → kết quả

Nhưng Maison phải hơn ở:
- thẩm mỹ
- spacing
- hierarchy
- readability
- cảm giác premium

**Chốt:**  
Đây phải là **Maison phiên bản refined hơn của search/discovery pattern**, không phải bản sao Fragrantica, và càng không phải ranking page cũ reskin lại.

---

## Acceptance criteria — chỉ được báo done khi pass hết

### URL / routing
- [ ] Có page mới tại `/nuoc-hoa-theo-nhu-cau`
- [ ] `/bang-xep-hang` redirect 301 sang URL mới

### Structure
- [ ] Desktop có sidebar filter trái + results phải
- [ ] Desktop result grid đúng **5 chai / dòng**
- [ ] Mobile có search + filter trigger + result area rõ ràng
- [ ] Mobile không dùng layout ranking card cũ

### Product item
- [ ] Mỗi item chỉ hiển thị: ảnh, tên SP, thương hiệu, năm sản xuất, điểm /10
- [ ] Không có rank number
- [ ] Không có compare button
- [ ] Không có badge rối
- [ ] Không có giá

### Filters
- [ ] Có đúng các filter đã yêu cầu
- [ ] Filter hoạt động thật
- [ ] Search hoạt động thật

### UX quality
- [ ] Không overflow ngang
- [ ] Không whitespace lỗi
- [ ] Không truncate xấu
- [ ] Không lệch card
- [ ] Mobile nhìn trực tiếp thấy ổn, không phải “tạm chấp nhận”

### Direction
- [ ] Nhìn vào page mới phải thấy đây là **tool tìm nước hoa theo nhu cầu**
- [ ] Không còn tinh thần “bảng xếp hạng”

---

## Verification bắt buộc
Không được báo done chỉ vì local ok.

Sau khi làm xong, bắt buộc:
1. deploy production
2. mở **trực tiếp production URL**
3. check **desktop trực tiếp**
4. check **mobile trực tiếp**
5. chụp proof đúng page production

Evidence cần có:
- URL production thật
- screenshot desktop
- screenshot mobile
- xác nhận redirect 301 từ `/bang-xep-hang`
- xác nhận desktop grid đúng 5 cột
- xác nhận item spec đúng field
- xác nhận không còn UX lỗi kiểu ranking cũ

---

## Kết quả mong muốn
Page này phải cho cảm giác:

**“Tôi đang dùng một công cụ để tìm chai phù hợp với nhu cầu của mình.”**

Chứ không phải:

**“Tôi đang xem một bảng top list được đổi tên.”**

---

**Lưu ý cuối cùng:**  
Nếu implementation hiện tại vẫn còn mang logic hoặc cảm giác của ranking page cũ, coi như **chưa đạt**, kể cả khi code chạy được.
