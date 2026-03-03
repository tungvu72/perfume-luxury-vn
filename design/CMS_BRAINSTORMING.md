# 🧠 CMS BRAINSTORMING: OPTIONS FOR MAISON DE SON

Dựa trên yêu cầu của anh (đã quen dùng WordPress) và nền tảng Next.js hiện tại, em (Claude Developer) xin trình bày 3 phương án để chúng ta cùng thảo luận:

## 1. Phương án Sanity.io (Modern Headless)
Đây là phương án em đã "vội vàng" cài đặt vì nó cực kỳ hợp với Next.js.
- **Ưu điểm:** Tốc độ load cực nhanh (vì nó chỉ gửi text JSON), giao diện Admin sạch sẽ, customize form cực dễ (thêm nốt hương, điểm số chỉ mất 5 phút code).
- **Nhược điểm:** Cách soạn thảo Blog khác WordPress một chút (dùng Portable Text thay vì kéo thả Block như Gutenberg). Cần mạng internet ổn định để sync data.
- **Phù hợp:** Nếu anh muốn một hệ thống "High-tech", chuyên nghiệp, tối ưu SEO tuyệt đối.

## 2. Phương án WordPress Headless (Truyền thống + Hiện đại)
Cài một bản WP ở sub-domain (ví dụ: `api.maisondeson.vn`) chỉ để làm CMS. Next.js sẽ kéo data từ WP về hiển thị.
- **Ưu điểm:** Anh giữ 100% thói quen cũ. Soạn thảo bài review bằng Gutenberg cực sướng, quản lý Media Library quen thuộc.
- **Nhược điểm:** Hệ thống cồng kềnh (vừa chạy WP vừa chạy Next.js). Khó customize các trường dữ liệu "dị" như bảng điểm nốt hương nếu không cài thêm plugin nặng (ACF).
- **Phù hợp:** Nếu anh không muốn mất thời gian làm quen cái mới và ưu tiên tốc độ soạn thảo bài viết.

## 3. Phương án Strapi / Payload CMS (Self-hosted)
Tự chạy một hệ thống CMS trên server của mình.
- **Ưu điểm:** Giao diện quản trị bài viết rất giống WordPress nhưng hiện đại hơn nhiều. Anh làm chủ hoàn toàn dữ liệu.
- **Nhược điểm:** Tốn tài nguyên server vì phải chạy một ứng dụng Node.js riêng cho CMS. Cần setup Database (PostgreSQL) phức tạp hơn.
- **Phù hợp:** Nếu anh muốn sở hữu 100% hệ thống từ đầu đến cuối.

---

## 4. Bảng So Sánh Chi Tiết (Feature Matrix)

| Tiêu chuẩn | Sanity (Cloud) | WP Headless | Payload CMS (Self-host) |
| :--- | :--- | :--- | :--- |
| **Trải nghiệm viết** | Tốt (Portable Text) | Tuyệt vời (Gutenberg) | Tốt (Lexical/Slate Editor) |
| **Quản lý ảnh** | Đỉnh cao (Auto Crop) | Quen thuộc (Library) | Tốt (Local storage/S3) |
| **Độ linh hoạt Data** | Rất cao | Thấp (Cần Plugin) | Rất cao |
| **Bảo trì** | Nhẹ (No server) | Nặng (PHP + DB) | Trung bình (Node.js) |
| **Tốc độ Dev** | Nhanh | Chậm | Nhanh |

---

## 5. Dự thảo Cấu trúc Dữ liệu (Data Model Draft)

Chúng ta cần quản lý 3 nhóm chính:

### A. Nước hoa (Perfume)
- **Cơ bản:** Tên, Slug, Thương hiệu (Ref), Giới tính, Ảnh.
- **Điểm PLV:** 5 thông số (Scent, Longevity, Uniqueness, Compliments, Value).
- **Mùi hương:** Top/Middle/Base Notes (Array).
- **Vibes/Occasions:** Tags (Ref).
- **Affiliate:** Array Link (Shopee, Lazada, TikTok) + Giá.

### B. Thương hiệu (Brand)
- Tên, Logo, Mô tả, Slug.

### C. Bài viết Review (Blog/Article)
- Tiêu đề, Slug, Ảnh bìa, Tóm tắt.
- Nội dung (Rich Text): Hỗ trợ chèn link sản phẩm, nốt hương trực tiếp vào bài.

---

## 6. Phản biện & Đề xuất hành động

- **Nếu chọn Sanity:** Chúng ta sẽ mất chút thời gian để anh quen với việc viết bài không phải kiểu "Block" mà là "Flow". Nhưng đổi lại anh không bao giờ phải lo về Server hay Database.
- **Nếu chọn WP Headless:** Anh sẽ sướng nhất lúc viết bài, nhưng em sẽ khổ lúc code vì WP API nó không được "mượt" cho Next.js 15.
- **Đề xuất mới (Payload CMS):** Đây là "con lai" hoàn hảo. Giao diện Admin nó cực sạch, dùng chung code với Next.js nên rất đồng bộ. Editor của nó hiện tại rất giống Gutenberg.

**Câu hỏi cho anh:** Anh có muốn em gửi cho anh ảnh chụp màn hình (mockup) giao diện Admin của Payload so với Sanity để anh dễ chọn không?
