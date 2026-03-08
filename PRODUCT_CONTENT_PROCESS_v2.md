# PRODUCT CONTENT PROCESS v2 — Maison de SON
*Cập nhật: 08/03/2026 theo feedback CEO*

## 1. Nguyên tắc giọng viết mới
- Viết như **người dùng nước hoa phổ thông ở Việt Nam nhưng có trải nghiệm thật**
- Không dùng từ làm màu hoặc khó hiểu với số đông như: `DNA`, `verdict`, `mass appealing`, `beast mode`
- Nếu buộc phải nói khái niệm chuyên môn, phải đổi sang tiếng Việt dễ hiểu ngay
- Đọc lên phải giống người thật nói, không giống form AI review

## 2. Cấu trúc product detail mới
Mỗi sản phẩm phải có 2 lớp:

### A. Tóm tắt đầu trang
Đổi từ:
- `Verdict nhanh`

Thành:
- `Nhận xét nhanh`

Nội dung gồm:
- 1 headline ngắn, dễ hiểu
- 1 đoạn nhận xét 2-3 câu như người dùng thật
- Có block `Hợp với ai` / `Không hợp nếu`

### B. Bài chi tiết sản phẩm
Bắt buộc có các mục:
- Nguồn gốc và xuất xứ
- Ra mắt khi nào
- Câu chuyện ra đời
- Có bao nhiêu phiên bản / flankers chính
- Mùi hương mang lại cảm giác gì
- Khi nào nên dùng
- Nhận xét của Maison de SON

## 3. Rule anchor text bắt buộc
Mỗi bài product detail phải có tối thiểu 3 link nội bộ cơ bản:
1. Link về **trang chủ**
   - Anchor: `Maison de SON`
   - URL: `/`

2. Link về **danh mục phù hợp**
   - Nam: `nước hoa nam` → `/nam-gioi`
   - Nữ: `nước hoa nữ` → `/nu-gioi`
   - Unisex: `nước hoa unisex` → `/unisex`

3. Link về **chính sản phẩm đó**
   - Anchor: đúng tên sản phẩm
   - URL: `/${product.id}`

Nếu thiếu 1 trong 3 link trên → chưa pass.

## 4. Những từ/cụm phải tránh
- DNA
- verdict
- niche theo kiểu khoe thuật ngữ quá mức
- câu quá kịch kiểu: "biểu tượng tối thượng", "kiệt tác không thể thiếu", "cực phẩm đỉnh cao"

## 5. Công thức viết nhận xét đầu trang
Format:
- Câu 1: mùi này cho cảm giác gì
- Câu 2: hợp ai / hợp dịp nào
- Câu 3: nói thật điểm cần lưu ý

Ví dụ đúng:
- `Đây là mùi sạch, sang và dễ dùng trong nhiều hoàn cảnh. Hợp người cần một chai đi làm, gặp khách hoặc dùng hằng ngày mà vẫn lịch sự. Nếu bạn thích mùi quá nổi bật hoặc quá khác biệt, chai này có thể hơi an toàn.`

## 6. Quality gate mới
Một product page chỉ pass khi đủ:
- [ ] Không còn từ `DNA`
- [ ] Không còn từ `verdict` lộ ra ngoài UI
- [ ] Tóm tắt đầu trang đọc tự nhiên như người thật
- [ ] Bài chi tiết có đủ 6 mục thông tin chính
- [ ] Có 3 internal links cơ bản: home / category / self
- [ ] Ảnh đúng phiên bản hoặc đang bị block an toàn

## 7. Thứ tự sửa từ giờ
1. Fix UI + wording trước
2. Fix article theo process mới
3. Chèn anchor text đủ 3 link
4. Đọc lại như người dùng phổ thông
5. Nếu còn cảm giác AI → viết lại
