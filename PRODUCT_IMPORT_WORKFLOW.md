# PRODUCT IMPORT WORKFLOW — Maison de SON
*Cập nhật: 08/03/2026*

## Mục tiêu
Chuẩn hóa quy trình nhập **sản phẩm nước hoa** trước khi scale tin tức/content.

Lý do:
- Product page là xương sống của site
- Ranking / compare / brand / internal link đều phụ thuộc data sản phẩm
- Bài viết SEO chỉ mạnh khi có product page thật để trỏ link

---

## 1. ƯU TIÊN TRIỂN KHAI

### Giai đoạn 1 — Nhập 8-15 chai flagship trước
Ưu tiên các chai có:
- Search intent mạnh tại VN
- Brand mạnh
- Dễ viết D1 review và D2 roundup sau đó
- Dễ kiểm chứng ảnh + giá + note

### Gợi ý shortlist round đầu
- Bleu de Chanel EDP
- Dior Sauvage Elixir
- Creed Aventus
- YSL Y EDP
- Acqua di Gio Parfum
- Azzaro The Most Wanted Parfum
- Jean Paul Gaultier Le Male Le Parfum
- Versace Eros EDP
- Baccarat Rouge 540
- Maison Margiela Jazz Club
- BDK Gris Charnel
- Tom Ford Ombre Leather

---

## 2. THỨ TỰ NHẬP MỖI SẢN PHẨM

### Bước 1 — Xác định đúng chai
Phải chốt đúng 4 thứ trước khi nhập:
- **Brand**
- **Tên chai**
- **Phiên bản**: EDT / EDP / Parfum / Elixir / Cologne / Intense
- **Giới tính / positioning**: nam / nữ / unisex

### Bước 2 — Chốt slug chuẩn
Format ưu tiên:
- `bleu-de-chanel-edp`
- `dior-sauvage-elixir`
- `ysl-y-edp`

**Rule:**
- không dấu
- lowercase
- có biến thể nếu cần để tránh nhầm bản
- không dùng slug quá chung kiểu `bleu-chanel`

### Bước 3 — Thu thập data lõi
Field bắt buộc:
- `name`
- `subName`
- `brand`
- `brandSlug`
- `id`
- `gender`
- `image`
- `gallery[]`
- `basePrice`
- `sizes[]`
- `concentration`
- `releaseYear`
- `perfumer` (nếu có)
- `mainAccords[]`
- `topNotes[]`
- `middleNotes[]`
- `baseNotes[]`
- `longevity`
- `sillage`
- `versatility`
- `compliment`
- `overall`
- `verdict`
- `verdictShort`
- `description`

### Bước 4 — Kiểm tra hiển thị
Sau khi nhập phải check:
- product page
- brand page
- ranking page
- compare page
- related products
- search / header search

---

## 3. ẢNH — PHẦN KHÓ NHẤT

## Mục tiêu ảnh
Ảnh phải đạt 4 tiêu chí:
1. **Đúng chai**
2. **Đúng phiên bản**
3. **Đẹp khi hiển thị card + detail page**
4. **Không có dấu hiệu ảnh bẩn / fake / nhòe / sai màu chai**

## Thứ tự nguồn ảnh ưu tiên
### Tier 1 — Official / brand / press image
Dùng khi có thể.

### Tier 2 — Nguồn tham khảo uy tín
Dùng để đối chiếu hoặc lấy khi không có official clean image:
- Fragrantica
- Parfumo
- retailer uy tín có packshot sạch

### Tier 3 — Marketplace
Chỉ dùng để **đối chiếu phiên bản**, không ưu tiên dùng làm hero image nếu:
- nền bẩn
- crop xấu
- sai màu chai
- có watermark mạnh
- là ảnh người bán tự chụp quá lộn xộn

## Checklist xác minh ảnh đúng chai
Trước khi chốt hero image, bắt buộc check:
- Tên trên thân chai đúng chưa?
- Nắp chai đúng form chưa?
- Màu juice đúng chưa?
- Có phải đúng version EDP/EDT/Parfum/Elixir không?
- Có nhầm gift set / tester / mini / travel spray không?
- Có nhầm ảnh bản reformulation / limited edition không?

## Tiêu chuẩn ảnh hero
- nền sạch
- chai chiếm khung rõ ràng
- không bị crop mất đầu / chân chai
- tỷ lệ đẹp khi render trên card dọc
- ưu tiên PNG/WebP hoặc JPG sạch nền sáng

## Tiêu chuẩn gallery
Mỗi sản phẩm nên có tối thiểu:
- 1 ảnh hero chính diện
- 1 ảnh góc chéo hoặc close-up thân chai
- 1 ảnh hộp/packaging
- 1 ảnh lifestyle hoặc cầm tay (nếu sạch)

---

## 4. QUY TẮC CHẤM ĐIỂM NỘI BỘ

Các điểm hiện tại nên giữ cấu trúc nhất quán:
- `longevity`
- `sillage`
- `versatility`
- `compliment`
- `overall`

**Rule:**
- Không chấm cảm tính quá đà
- Nếu chưa chắc → tạm conservative
- Mọi chai đều phải có `verdictShort` 1-2 câu rõ ràng
- Không dùng copy khoa trương kiểu quảng cáo rẻ tiền

---

## 5. QUALITY GATE TRƯỚC KHI CHO LÊN LIVE

Một sản phẩm chỉ pass khi đủ:
- [ ] đúng brand
- [ ] đúng tên chai
- [ ] đúng phiên bản
- [ ] slug chuẩn
- [ ] hero image đúng chai
- [ ] gallery >= 3 ảnh
- [ ] có giá tham khảo
- [ ] có sizes
- [ ] có notes cơ bản
- [ ] có verdictShort
- [ ] có description sạch, đủ dấu
- [ ] brand page render đúng
- [ ] ranking page render đúng
- [ ] compare page không vỡ

Nếu thiếu ảnh đúng phiên bản → **KHÔNG publish vội**.

---

## 6. WORKFLOW THỰC THI TỐI ƯU

### Cách làm nhanh nhưng vẫn sạch
#### Round A — Skeleton
Nhập trước:
- brand
- name
- version
- slug
- hero image
- giá
- sizes
- verdictShort

#### Round B — Enrichment
Bổ sung:
- notes
- accords
- scores
- gallery
- description
- verdict full

#### Round C — Content bridge
Sau khi product ổn:
- viết D1 review
- gắn vào brand page
- gắn vào ranking / compare
- internal link từ bài kiến thức / roundup

---

## 7. ƯU TIÊN VẬN HÀNH CHO CEO

Nếu muốn đi nhanh và đúng:
1. Chốt **danh sách 10 chai đầu tiên**
2. Chốt **nguồn ảnh ưu tiên**
3. Chọn **hình thức nhập liệu**:
   - tiếp tục mockData tạm thời
   - hoặc chuyển sang Sanity write flow

### Khuyến nghị hiện tại
- **Ngắn hạn:** tiếp tục nhập bằng flow đang dễ kiểm soát nhất
- **Khi schema ổn:** chuyển sang quy trình Sanity chuẩn

---

## 8. VIỆC CODER BOT LÀM ĐƯỢC NGAY

Tao làm được các phần sau:
- dựng checklist nhập liệu chuẩn
- chuẩn hóa field/schema cần có
- lọc shortlist sản phẩm nên nhập trước
- kiểm tra slug/link/render sau nhập
- rà soát ảnh đúng phiên bản theo checklist
- support viết verdict / description / review sau khi có data nền

## 9. NÚT THẮT LỚN NHẤT

**Ảnh đúng phiên bản** là chỗ dễ sai nhất.

Sai 1 ảnh là kéo theo:
- mất trust
- SEO image sai intent
- product page nhìn fake
- brand impression hỏng ngay

Vì vậy ảnh phải được coi là **quality gate số 1** của phase nhập liệu.

---

## 10. BƯỚC TIẾP THEO ĐỀ XUẤT

Ngay sau file này, nên làm tiếp:
- tạo **Product Import Template** cho 1 chai
- chốt **top 10 sản phẩm nhập trước**
- quyết định nhập qua **mockData** hay **Sanity write flow**
