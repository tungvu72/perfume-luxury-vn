# SOP — Sản phẩm mới + ảnh main + ảnh thực tế cho Maison de SON

Cập nhật: 2026-03-31  
Trạng thái: Active draft v2  
Phạm vi: **Sản phẩm + ảnh main + ảnh thực tế**  
Ngoài phạm vi hiện tại: **Video**

---

## 0. SINGLE SOURCE OF TRUTH

**Từ thời điểm này, đây là quy trình duy nhất được phép dùng cho mọi việc liên quan đến:**
- tạo sản phẩm mới
- chuẩn hóa ảnh main
- intake / match / curate / attach ảnh thực tế
- export ảnh publish-ready
- batch publish ảnh sản phẩm

### Rule cứng
- **Mọi quy trình cũ liên quan đến ảnh sản phẩm / ảnh thực tế / tạo sản phẩm phải được xem là deprecated**
- Không dùng lại logic cũ, checklist cũ, script cũ, prompt cũ nếu mâu thuẫn với file này
- Nếu có tài liệu cũ trùng phạm vi, phải:
  1. gắn nhãn **DEPRECATED**
  2. dẫn về file này
  3. không tiếp tục vận hành theo tài liệu cũ

---

## 1. Mục tiêu

Thiết lập một quy trình rõ ràng để:
- tạo sản phẩm mới mà không loạn metadata
- giữ **ảnh main chuẩn** làm hình chính trên web
- đưa **ảnh thực tế tự chụp** vào đúng chỗ để tăng trust
- tránh over-upload, tránh gắn nhầm chai, tránh tạo item rác
- đảm bảo mọi ảnh publish ra web đều đi qua cùng một chuẩn export

---

## 2. Kết luận đã chốt

### 2.1. Ảnh main
- Ảnh main vẫn là **ảnh chuẩn packshot/catalog**
- Ảnh main là ảnh chính dùng cho:
  - listing
  - card grid
  - hero sản phẩm
  - search / recommendation modules
- **Ảnh main cũng phải có watermark** theo rule thống nhất của Maison de SON

### 2.2. Ảnh thực tế
- Ảnh thực tế là ảnh bổ sung để người xem hiểu hơn về sản phẩm
- Ảnh thực tế đi vào **gallery thực tế**
- Không dùng ảnh thực tế để thay ảnh main hàng loạt
- **Ảnh thực tế cũng phải có watermark**

### 2.3. Video
- **Tạm bỏ khỏi SOP này**
- Không bàn, không thiết kế, không triển khai gì liên quan đến video trong workflow hiện tại

---

## 3. Nguyên tắc nền tảng

### 3.1. Không dump toàn bộ ảnh
- Không up hết toàn bộ ảnh đang có
- Chỉ chọn lọc ảnh có giá trị thật với người xem

### 3.2. Không tự tạo sản phẩm từ ảnh
- Không tạo sản phẩm mới chỉ vì thấy folder ảnh tự chụp
- Ảnh không phải là bằng chứng đủ để đoán variant / nồng độ / metadata

### 3.3. Không gắn nhầm chai
- Không attach ảnh vào sản phẩm nếu match chưa chắc
- Không đoán brand / product / variant khi tên folder mơ hồ

### 3.4. Không publish raw source
- Không đưa file gốc full-res lên web
- Chỉ publish bản export web-ready

---

## 4. Có nên up hết tất cả ảnh không?

## Kết luận chốt
**Không. Chỉ up chọn lọc.**

### Mức khuyến nghị mỗi sản phẩm
Mỗi sản phẩm chỉ nên có:
- **1 ảnh main**
- **3–6 ảnh thực tế tốt nhất**

### Thứ tự ưu tiên ảnh thực tế
1. Ảnh toàn chai
2. Ảnh chai + hộp / fullbox
3. Ảnh góc cầm tay / bối cảnh đẹp
4. Ảnh close-up tem, đáy, nắp nếu thực sự tăng trust
5. Ảnh 10ml chỉ dùng khi thực sự có giá trị giải thích

### Không nên đưa lên
- quá nhiều ảnh na ná nhau
- ảnh rung, tối, lệch màu, nền bừa
- ảnh không chắc đúng chai / đúng variant
- ảnh 10ml nếu dễ làm người xem hiểu nhầm đó là sản phẩm chính

---

## 5. Rule cho ảnh 10ml

### Kết luận chốt
- Ảnh 10ml **không phải ưu tiên mặc định**
- Chỉ dùng nếu:
  - Maison de SON có bán chiết / tư vấn chiết liên quan
  - hoặc ảnh 10ml giúp giải thích thực tế trải nghiệm sản phẩm

### Rule hiển thị
- Không để ảnh 10ml lấn át gallery chính
- Không để ảnh 10ml đứng đầu gallery nếu sản phẩm chính là full bottle
- Nếu cần, có thể gắn tag/caption phân biệt rõ đó là ảnh chai chiết 10ml

---

## 6. Pipeline chuẩn cho sản phẩm mới

Một sản phẩm mới chỉ được tạo khi đủ **4 điều kiện tối thiểu**:
1. tên canonical chuẩn
2. brand chuẩn
3. variant / nồng độ chuẩn
4. ảnh main chuẩn + metadata tối thiểu

### Metadata tối thiểu trước khi tạo sản phẩm
- brand
- tên sản phẩm
- variant / nồng độ
- giới tính / nhóm dùng
- ảnh main chuẩn
- slug dự kiến
- nguồn xác minh tối thiểu

### Không được phép
- tạo item mới chỉ vì có folder ảnh
- đoán variant / nồng độ
- bịa note hương / year / performance
- tạo sản phẩm ngoài seed / queue đã kiểm soát

---

## 7. Pipeline chuẩn cho ảnh thực tế

Ảnh thực tế là pipeline riêng, chạy **sau khi** sản phẩm đã tồn tại hoặc đã match chắc với catalog.

## Phase A — Intake
Quét thư mục ảnh thực tế gốc và lập manifest.

### Mỗi folder/asset cần có
- `sourceFolder`
- `rawLabel`
- `candidateBrand`
- `candidateProduct`
- `candidateVariant`
- `matchedProductId`
- `matchedSlug`
- `confidence`
- `status`

### Status chuẩn
- `matched_existing`
- `needs_review`
- `not_on_site_yet`
- `ambiguous_variant`
- `reject`

## Phase B — Match
Đối chiếu với catalog hiện có.

### Chỉ có 3 hướng xử lý
1. Match chắc với sản phẩm đang có → được đưa vào staging gallery
2. Match mơ hồ → dừng, chờ review thủ công
3. Chưa có trên site → đưa vào backlog sản phẩm mới, không tự tạo item

## Phase C — Curate
Chọn 3–6 ảnh tốt nhất.

### Rule curate
- phải có ít nhất 1 ảnh toàn chai nếu folder có
- không lấy nhiều ảnh quá giống nhau
- ưu tiên ảnh sáng, rõ, màu thật, sạch nền
- nếu có fullbox đẹp → ưu tiên 1 ảnh
- ảnh 10ml chỉ dùng khi thực sự có giá trị giải thích

## Phase D — Export web-ready
Xuất ảnh publish-ready từ ảnh gốc.

### Rule export
- không publish file raw gốc
- chỉ publish bản web-ready
- tên file phải canonical
- kích thước phải đủ đẹp cho web nhưng không phải file master
- tất cả ảnh publish phải đi qua cùng một chuẩn watermark/export

## Phase E — Attach
Chỉ attach vào sản phẩm đã match chắc.

### Rule attach
- main image giữ vai trò chính
- ảnh thực tế đi vào `gallery thực tế`
- không overwrite main image hàng loạt
- không attach nếu chưa qua QA

---

## 8. Chiến lược publish thực tế

### Track 1 — Sản phẩm đã có sẵn trên site
1. match ảnh thực tế với sản phẩm đang có
2. curate 3–6 ảnh
3. export web-ready
4. QA
5. publish theo batch nhỏ

### Track 2 — Sản phẩm chưa có trên site
1. đưa vào backlog / seed queue
2. tạo sản phẩm mới theo pipeline sản phẩm
3. có ảnh main chuẩn + metadata chuẩn xong mới tạo item
4. sau đó mới attach ảnh thực tế

### Rule cứng
- Không tạo sản phẩm mới bằng ảnh thực tế trước
- Không attach ảnh thực tế cho item chưa xác minh xong

---

## 9. Batch size khuyến nghị

### Batch khuyến nghị
- **10–20 sản phẩm / lần** cho ảnh thực tế
- sản phẩm mới nên đi batch nhỏ hơn nếu metadata còn nhiều việc

### Sau mỗi batch phải check
- có match nhầm không
- gallery có quá nhiều ảnh không
- product page có nặng quá không
- thứ tự ảnh có hợp lý không
- ảnh có làm người xem hiểu sai về sản phẩm chính không

---

## 10. Cấu trúc media đề xuất

Mỗi sản phẩm nên có 2 lớp media trong SOP hiện tại:

### A. Main media
- `mainImage`
- vai trò: hiển thị chính trên listing và hero product

### B. Real gallery
- `realGallery[]`
- vai trò: ảnh thực tế Maison de SON
- chỉ chọn lọc, không dump toàn bộ

> Ghi chú: video sẽ được bàn ở SOP riêng sau.

---

## 11. Rule watermark — bản chốt hiện tại

## Kết luận chốt
**Watermark áp dụng cho cả ảnh main và ảnh thực tế.**

### Tuy nhiên phải tách thành 2 mức
#### A. Ảnh main
- watermark phải **nhẹ hơn** ảnh thực tế
- ưu tiên không phá packshot / bố cục chai
- không che vùng trung tâm chai
- phải đủ nhẹ để listing/card vẫn sạch

#### B. Ảnh thực tế
- watermark có thể rõ hơn ảnh main một chút
- vẫn phải giữ thẩm mỹ premium
- không được đóng to giữa ảnh theo kiểu phá UI

### Rule cứng chưa được tùy tiện vượt quá
- không publish ảnh không watermark
- không dùng watermark quá to hoặc quá đậm làm mất chất luxury
- không dùng nhiều kiểu watermark lẫn lộn
- mọi ảnh publish phải bám 1 hệ watermark thống nhất của Maison de SON

### Những gì Anti phải review và đề xuất trước khi thực thi hàng loạt
- watermark dạng text hay logo
- vị trí cố định nào tối ưu cho ảnh main
- vị trí cố định nào tối ưu cho ảnh thực tế
- opacity / scale hợp lý cho cả 2 nhóm
- export size tương ứng để vừa bảo vệ ảnh vừa giữ chất lượng web

---

## 12. Hạ tầng / Vercel / scale

## Kết luận chốt
Vercel đủ sức cho vài trăm đến vài nghìn sản phẩm nếu pipeline đúng.

### Rule vận hành
- listing chỉ dùng `mainImage`
- product page chỉ nên có gallery ảnh thực tế chọn lọc
- không upload file raw quá lớn
- ảnh publish phải được export đúng chuẩn
- không đẩy quá nhiều ảnh vào một page ngay từ đầu

---

## 13. Format report bắt buộc cho Anti

Mỗi lần làm batch ảnh / sản phẩm, Anti phải báo đúng 4 phần:

### A. Intake report
- tổng số folder scan
- match chắc
- mơ hồ
- chưa có trên site
- reject

### B. Publish candidate list
- danh sách sản phẩm đề xuất xử lý trong batch này

### C. Risk list
- variant dễ nhầm
- folder tên mơ hồ
- ảnh có nguy cơ gây hiểu lầm
- ảnh 10ml có thể làm lệch nhận thức sản phẩm chính

### D. Action taken
- staged
- attached
- skipped
- needs review
- deprecated docs/processes removed or marked

---

## 14. Yêu cầu dọn quy trình cũ

Anti phải làm thêm một bước review tài liệu/quy trình cũ liên quan đến cùng phạm vi.

### Mục tiêu
Đảm bảo từ nay chỉ còn **1 quy trình chính thức duy nhất** là file này.

### Việc phải làm
- tìm tất cả docs / notes / prompts / scripts / checklist cũ liên quan đến:
  - tạo sản phẩm mới
  - ảnh main sản phẩm
  - ảnh thực tế sản phẩm
  - batch publish ảnh sản phẩm
- phân loại:
  - `keep_as_reference`
  - `mark_deprecated`
  - `remove_from_workflow`

### Rule cứng
- nếu tài liệu cũ còn giá trị lịch sử, không xóa mù quáng; **mark deprecated** và dẫn link về SOP này
- nếu là prompt/quy trình cũ đang có nguy cơ làm Anti drift, phải loại khỏi workflow vận hành
- sau bước review này, Anti phải báo rõ:
  - file nào bị deprecated
  - file nào còn reference-only
  - file nào phải ngừng dùng hoàn toàn

---

## 15. Checklist trước khi publish ảnh thực tế

- [ ] Product đã tồn tại trên site hoặc đã match chắc với catalog
- [ ] Ảnh main chuẩn đã có
- [ ] Ảnh thực tế đã được curate
- [ ] Không có ảnh mơ hồ variant
- [ ] Không đưa quá nhiều ảnh na ná nhau
- [ ] 10ml không gây hiểu lầm thành sản phẩm chính
- [ ] Đã export web-ready
- [ ] Đã áp watermark đúng rule
- [ ] Đã qua QA batch

---

## 16. Kết luận điều hành

### Rule chốt hiện tại
- **Ảnh main = ảnh chuẩn, nhưng vẫn watermark**
- **Ảnh thực tế = gallery chọn lọc, có watermark**
- **Video = ngoài scope hiện tại**
- **Không up hết**
- **Không tự tạo item mới từ ảnh**
- **Batch nhỏ, có QA**
- **Đây là SOP chính thức duy nhất cho phạm vi này**

### Hành động tiếp theo
1. Cho Anti review quy trình này
2. Cho Anti rà soát và deprecated toàn bộ quy trình cũ liên quan
3. Sau đó mới viết prompt thực thi batch đầu tiên
