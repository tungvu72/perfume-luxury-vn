# SKILL ĐĂNG SẢN PHẨM (BẢN HIỆN HÀNH - CHUẨN HÓA ĐỂ ĐỌC)

Nguồn gốc: tổng hợp lại từ:
- d:/anti/.agents/workflows/skills/product-data-entry.md
- d:/anti/.agents/workflows/dang-sp-son.md

## 1) Khi nào dùng
- Khi cần thêm/cập nhật 1 sản phẩm vào catalog Maison De Son trong `src/constants/mockData.ts`.
- Khi có yêu cầu lấy ảnh Fragrantica + cập nhật dữ liệu kỹ thuật + deploy.

## 2) Input bắt buộc
- STT sản phẩm (nếu có)
- Brand
- Tên sản phẩm
- Nồng độ (EDT/EDP/Parfum/Extrait)
- Slug/id sản phẩm trong `mockData.ts`

## 3) Quy trình chuẩn (bản hiện hành)

### Bước 1: Lấy ảnh từ Fragrantica
1. Tìm đúng trang Fragrantica của chai.
2. Lấy đúng image id (fimgs id).
3. Tải 2 ảnh:
- Main ảnh trắng: `https://fimgs.net/mdimg/perfume/o.[ID].jpg`
- Social card: `https://fimgs.net/mdimg/perfume-social-cards/en-p_c_[ID].jpeg`
4. Lưu đúng thư mục:
- main -> `public/images/products/[stt]-[slug]-main.jpg|webp`
- card -> `fragrantica_cards/[STT]. [BRAND] [NAME] [CONC].jpeg`
5. Check bắt buộc góc trái trên cùng của ảnh card:
- Mở card full-size, đọc text tên chai ở góc trái trên cùng.
- Tên chai phải khớp 100% với sản phẩm đang xử lý.
- Nồng độ phải khớp 100% (EDT/EDP/Parfum/Extrait).
- Nếu chỉ lệch 1 phần (ví dụ nhầm `The One` với `The One for Men`) thì loại ngay, không dùng card đó.
6. Checklist text card bắt buộc (không đủ là fail):
- `Brand`: phải khớp 100% với brand mục tiêu.
- `Tên sản phẩm`: phải khớp 100% (không dùng bản gần giống/flanker khác).
- `Gender` (dòng text trên card): phải khớp đúng:
  - Nam -> `for men`
  - Nữ -> `for women`
  - Unisex -> `for women and men`
- `Nồng độ`: phải khớp đúng `EDT/EDP/Parfum/Extrait` theo task.
- Nếu card không hiện rõ nồng độ ở text góc trái, bắt buộc đối chiếu thêm title + URL của trang Fragrantica trước khi chốt.
- Sai 1 trường bất kỳ -> loại card, tìm card khác.
7. Bằng chứng bắt buộc trước khi dùng card:
- Lưu ảnh proof vùng góc trái (thấy rõ Name + Brand + Gender) vào `docs/reports/card-check/`.
- Tên file proof: `[STT]-[slug]-card-proof.png`.

### Bước 2: Bóc dữ liệu từ card
- longevity
- sillage
- seasons
- dayNight
- accords
- notes
- gender

### Bước 3: Tính điểm School of SON
- scent = rating * 2
- uniqueness theo vote bands
- compliments theo mức sillage
- value theo tier
- total = weighted formula
- Không dùng random.

### Bước 4: Cập nhật mockData.ts
- Điền đủ bộ field sản phẩm (kỹ thuật + content + SEO + media)
- `image` + `images[]` đúng enum/source
- `isPublished` đúng trạng thái

### Bước 5: Verify + deploy
- `eslint` + `next build`
- pass mới commit/push
- báo cáo kết quả

## 4) Gate bắt buộc
- Đúng chai/đúng nồng độ.
- Ảnh card là đúng social card.
- Pass đủ 4 trường text card: Brand + Name + Gender + Nồng độ.
- Có ảnh proof check text card trong `docs/reports/card-check/`.
- Tên file card đúng format.
- Đủ trường dữ liệu.
- Build pass.

## 5) Lỗi thường gặp
- Nhầm EDT/EDP.
- Nhầm chai cùng dòng flankers.
- Đọc thiếu dòng `gender` trên card nên lấy sai bản nam/nữ/unisex.
- Gắn sai ảnh card.
- Đặt tên file card không theo chuẩn.

