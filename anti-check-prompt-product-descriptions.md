Check giúp tao 3 file sau:
- D:/anti/perfume-luxury-vn/content/product-descriptions/batch1.json
- D:/anti/perfume-luxury-vn/content/product-descriptions/batch2.json
- D:/anti/perfume-luxury-vn/content/product-descriptions/batch3.json

Bối cảnh:
- Đây là batch mô tả sản phẩm nước hoa cho Maison De Son.
- Mỗi object có 4 field: `slug`, `title`, `shortDescription`, `productCopy`.
- Form đã duyệt: giọng Việt tự nhiên, giàu cảm nhận, không SEO nhồi nhét, không liệt kê note kiểu máy móc, không viết quá quảng cáo lố.
- Mục tiêu: đọc như một đoạn tư vấn thật, có thẩm mỹ, có phân biệt hoàn cảnh dùng, tính cách mùi và đối tượng phù hợp.

Yêu cầu check thật kỹ theo các tiêu chí sau:

1. JSON / kỹ thuật
- File có parse JSON sạch không
- Có ký tự lỗi, quote lỗi, escape lỗi, UTF-8 lỗi không
- Field có đồng nhất không

2. Chất lượng viết
- Có đúng tone Maison De Son không: thẳng, sang, gọn, có gu, không sáo rỗng
- Có câu nào bị AI quá, lặp cấu trúc, lặp nhịp giữa nhiều chai không
- Có đoạn nào lan man, vô nghĩa, hoặc nghe như template thay tên mùi không

3. Độ đúng theo từng mùi
- Có chai nào mô tả sai vibe / sai nhóm hương / sai hoàn cảnh dùng / sai đối tượng hợp không
- Có chỗ nào nhận định quá đà hoặc thiếu chính xác với cảm nhận thị trường phổ biến không
- Ưu tiên bắt lỗi factual mềm: ví dụ fresh mà tả quá tối, gourmand mà tả quá airy, office scent mà tả như clubbing scent, v.v.

4. Chuẩn output
- `title` có tự nhiên không
- `shortDescription` có gọn, đúng vai trò summary không
- `productCopy` có đủ độ hay, đủ khác nhau giữa các chai không

5. Cần output lại cho tao theo format này:

## Tổng quan
- Batch 1: pass/fail + lý do ngắn
- Batch 2: pass/fail + lý do ngắn
- Batch 3: pass/fail + lý do ngắn

## Lỗi kỹ thuật
- [file] + lỗi cụ thể

## Lỗi nội dung cần sửa
- [slug] + câu/ý có vấn đề
- Gợi ý sửa cụ thể

## Chai viết tốt nhất
- Nêu 5 chai viết ổn nhất

## Chai yếu nhất
- Nêu 5 chai cần sửa nhiều nhất

Quan trọng:
- Đừng chỉ khen chung chung.
- Nếu ổn thì nói rõ ổn ở đâu.
- Nếu dở thì chỉ ra đúng câu, đúng đoạn, đúng lý do.
- Ưu tiên audit thật gắt như biên tập viên senior.
