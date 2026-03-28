# Image Sourcing SOP

## Scope
- Source, verify, optimize, and assign product images for Maison de Son catalog items.
- This SOP is for **product card / product detail main image**, not editorial article illustrations.

## Rule mới cho ảnh sản phẩm
Mỗi sản phẩm hiện tại có **1 ảnh main** dùng làm ảnh chính trên site.

### Nguồn ưu tiên
1. **Fragrantica** cho ảnh main mặc định
2. Ảnh thật nội bộ do user cung cấp tại:
   - `D:\anti\ảnh nước hoa\<ten-folder-san-pham>`

## Cách dùng nguồn ảnh
### 1) Ảnh main mặc định
- lấy từ **Fragrantica**
- phải đúng chai / đúng variant / đúng nồng độ / đúng packaging ở mức có thể xác minh
- nếu không chắc đúng variant thì để pending, không đoán

### 2) Ảnh thật nội bộ
- user sẽ cung cấp ảnh thật trong thư mục:
  - `D:\anti\ảnh nước hoa`
- mỗi sản phẩm là 1 folder riêng
- ví dụ:
  - `D:\anti\ảnh nước hoa\ombre leather`
- các ảnh này là nguồn ưu tiên cho ảnh thực tế / gallery / kiểm chứng sản phẩm thật khi có

## Variant fidelity rule
Phải kiểm tra đúng các yếu tố sau trước khi dùng ảnh:
- tên chai / flanker
- nồng độ (EDT / EDP / Parfum / Elixir / ...)
- silhouette chai
- màu nắp / thân / nhãn
- packaging tổng thể nếu nhìn thấy

Không chắc => pending, không đoán.

## Output format
Với mỗi sản phẩm, ghi rõ:
- product slug hoặc product id nội bộ nếu có
- source URL ảnh main
- local folder ảnh thật nếu có
- confidence: high / medium / low
- notes về mức độ khớp variant

## Optimization
- tối ưu web-friendly khi cần
- giữ chất lượng đủ tốt để nhìn rõ chai
- không over-compress
- crop nhất quán, ưu tiên chai là chủ thể chính

## Naming
- tên file giữ ổn định, dễ map theo product slug
- nếu cần export/copy ra asset chính thức, ưu tiên naming theo product slug thay vì quy tắc cũ `{id}-main.jpg`

## Final assignment rule
- mỗi sản phẩm hiện tại có 1 ảnh main chuẩn
- ảnh thật nội bộ là nguồn bổ sung quan trọng khi user đã cung cấp folder riêng
- nếu chưa chắc ảnh đúng variant => pending, không fill bằng ảnh đoán
