# ANTI — PIPELINE 200 SẢN PHẨM MAISON DE SON

## Mục tiêu
Hoàn thành pipeline xử lý 200 sản phẩm đầu tiên từ 2 file nguồn:
- `data/fragrantica-seeds/men.txt`
- `data/fragrantica-seeds/women.txt`

Phạm vi hiện tại:
- `men`: dòng 1–100
- `women`: dòng 1–100

Bắt buộc chia batch nhỏ, không làm một lần toàn bộ 200 sản phẩm.

## Chia batch bắt buộc
### Men
- M01: `men 001–020`
- M02: `men 021–040`
- M03: `men 041–060`
- M04: `men 061–080`
- M05: `men 081–100`

### Women
- W01: `women 001–020`
- W02: `women 021–040`
- W03: `women 041–060`
- W04: `women 061–080`
- W05: `women 081–100`

## Phân vai
### CODER làm
1. Đọc URL nguồn theo từng batch
2. Check sản phẩm đã có trên website chưa
3. Nếu đã có:
   - đúng và đủ -> `OK_EXISTING`
   - thiếu / sai / mỏng / sai format -> `NEEDS_FIX`
4. Nếu chưa có -> `NEW_WRITE`
5. Viết hoặc sửa bài sản phẩm theo format ngắn đã chốt
6. Lưu draft + manifest cho Anti

### ANTI làm
1. Đọc manifest của batch
2. Chỉ xử lý item `READY_FOR_PUBLISH` hoặc `NEEDS_FIX`
3. Không đụng item `OK_EXISTING`
4. Nếu sản phẩm mới -> tạo entry
5. Nếu sản phẩm cũ cần sửa -> update đúng entry cũ, không duplicate
6. Báo cáo kết quả từng batch

## Rule check sản phẩm cũ trước
Nếu sản phẩm đã có trên website:
- đối chiếu với data tham chiếu + rule Maison de SON
- đúng và đủ -> không viết lại, mark `OK_EXISTING`
- chưa đúng / chưa đủ -> sửa sản phẩm cũ trước, mark `NEEDS_FIX`

Nếu chưa có trên website:
- mới tạo mới, mark `NEW_WRITE`

## Format bài sản phẩm
Đây không phải review dài.
- độ dài mục tiêu: 300–500 từ
- tối đa khoảng 600 từ nếu chai quan trọng

### Cấu trúc bắt buộc
1. `Mùi hương của [Tên chai]`
2. `Hiệu năng và hoàn cảnh sử dụng`
3. `[Tên chai] hợp với ai?`
4. `Kết luận nhanh`

### Yêu cầu nội dung
- không lặp lại thông tin đã có sẵn trên product page nếu không cần thiết
- không kể note kiểu máy móc
- ưu tiên cảm nhận thực tế, tình huống dùng, tệp người dùng
- giọng Maison de SON: súc tích, thực chiến, dễ hiểu

## File / folder
- nguồn: `data/fragrantica-seeds/men.txt`, `data/fragrantica-seeds/women.txt`
- manifests: `data/product-batches/manifests/`
- reports: `data/product-batches/reports/`
- drafts: `content/product-drafts/`

## Trạng thái
- `OK_EXISTING`
- `NEEDS_FIX`
- `NEW_WRITE`
- `READY_FOR_PUBLISH`
- `BLOCKED`

## Trình tự bắt buộc
1. M01 `men 001–020`
2. W01 `women 001–020`
3. M02 `men 021–040`
4. W02 `women 021–040`
...

## Rule cho Anti khi đăng / sửa
1. Không tự đổi tone content
2. Không tự viết lại ngoài draft nếu không có chỉ thị
3. Không tự đổi slug nếu chưa xác nhận
4. Không tạo duplicate cho sản phẩm đã tồn tại
5. Nếu sửa sản phẩm cũ, phải sửa đúng entry cũ
6. Mobile-first presentation

## Format báo cáo batch
### Batch Report
- Batch: `M01` / `W01`
- Tổng item: X
- `OK_EXISTING`: X
- `UPDATED (NEEDS_FIX)`: X
- `CREATED (NEW_WRITE)`: X
- `BLOCKED`: X

### Chi tiết
- Tên sản phẩm — trạng thái — URL live / lý do block

### QA
- Mobile: pass/fail
- Desktop: pass/fail
- Slug check: pass/fail
- Duplicate check: pass/fail

## Lệnh thực thi ngay
Bắt đầu từ `M01 = men 001–020`.
Xong M01 mới chuyển W01.
