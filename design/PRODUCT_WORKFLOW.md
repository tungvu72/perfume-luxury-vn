# 📋 QUY TRÌNH ĐĂNG SẢN PHẨM CHUẨN (MAISON DE SON)

Tài liệu này quy chuẩn hóa cách lấy dữ liệu, tối ưu và nhập liệu cho mỗi chai nước hoa để đảm bảo tính đồng bộ, chuyên nghiệp và chuẩn SEO.

---

## 1. NGUỒN DỮ LIỆU (SOURCE)
- **Nguồn chính:** [Fragrantica.com](https://www.fragrantica.com/)
- **Lưu ý đặc biệt:** Ưu tiên lấy ảnh sản phẩm từ phần **"Fragram Photos"** (ngay dưới ảnh chính hoặc cuối trang) để có hình ảnh thực tế, đồng bộ và nghệ thuật hơn thay vì ảnh render của hãng.

---

## 2. NỘI DUNG CẦN LẤY (DATA EXTRACTION)

### A. Thông tin cơ bản
- **Name & Brand:** Tên chính xác trên chai.
- **Gender:** Nam, Nữ, hoặc Unisex.
- **Slug:** Đường dẫn chuẩn SEO (Ví dụ: `dior-sauvage-elixir`).

### B. Chỉ số hiệu năng (Fragrantica Stats) - *Lấy trung bình từ vote của User*
- **Longevity (Độ bám):** Quy đổi sang thang điểm 10 (Ví dụ: 9h+ = 9-10/10).
- **Sillage (Độ tỏa):** Quy đổi sang thang điểm 10 (Ví dụ: Enormous = 10/10, Strong = 8/10).
- **Seasons (Mùa):** Lấy tỉ lệ % của Xuân, Hạ, Thu, Đông từ biểu đồ.
- **Day/Night (Thời điểm):** Lấy tỉ lệ % của Ngày và Đêm.

### C. Ảnh thực tế (Real-life Photos)
- **Nguồn:** Lấy từ phần **"Fragram Photos"** của Fragrantica.
- **Yêu cầu:** Chọn 3-5 tấm ảnh đẹp nhất, đa dạng (ảnh chụp chai, ảnh chụp hộp, ảnh chụp trên tay).
- **Mục đích:** Tạo lòng tin tuyệt đối cho khách hàng rằng đây là sản phẩm có thật, không phải chỉ là ảnh render từ hãng.

### D. Cấu trúc mùi hương
- **Main Accords:** Lấy top 5 nhóm mùi nổi bật nhất.
- **Scent Pyramid:** Liệt kê đầy đủ Top, Middle và Base Notes.

### E. Định danh Maison de SON (PLV Luxury)
- **Verdict (Nhận định):** 1 câu mô tả ngắn gọn vibe chai này (Ví dụ: "Kì quan của Francois Demachy...").
- **VerdictShort (Định danh):** Một cụm từ viết hoa (Ví dụ: "UY LỰC & NAM TÍNH", "ÔNG HOÀNG CÔNG SỞ").
- **PLV Score:** Thang điểm 10 dựa trên 4 yếu tố: Mùi hương, Nét riêng, Sức hút, Đáng tiền.

---

## 3. TỐI ƯU SEO (SEO BEST PRACTICES)

- **Meta Title:** `[Tên Nước Hoa] + [Thương Hiệu] | Đánh giá & Giá tốt - Maison de SON`
- **Meta Description:** Viết 1-2 câu hấp dẫn có chứa từ khóa: "Đánh giá [Tên Nước Hoa]", "nốt hương", "độ bám tỏa".
- **Image Alt Text:** Luôn đặt alt cho ảnh là `nước hoa [Tên Nước Hoa] [Thương hiệu]`.
- **Internal Linking:** Trỏ link từ các nốt hương (Ví dụ: Lavender) về trang Bảng xếp hạng theo nốt hương đó.

---

## 4. QUY TRÌNH NHẬP LIỆU (CMS WORKFLOW)

1. **Khởi tạo:** Tạo document mới trong Sanity Studio (`/admin`).
2. **Media:** Upload ảnh từ Fragram Photos đã qua tối ưu (WebP, < 200KB).
3. **Data:** Nhập thông số đã lấy từ Fragrantica.
4. **Affiliate:** Thêm các link Shopee, Lazada, TikTok tham khảo giá tốt nhất.
5. **Review:** Viết bài review chi tiết (Article) nếu có, chèn các block ảnh/sản phẩm liên quan.
6. **Publish:** Kiểm tra lại hiển thị trên Mobile trước khi công khai.

---

## 5. NHIỆM VỤ CỦA CLAUDE (AI AGENT)

Khi Sếp yêu cầu thêm sản phẩm, Claude phải:
1. Tự động truy cập Fragrantica lấy dữ liệu theo đúng cấu trúc trên.
2. Viết nhận định (Verdict) bằng tiếng Việt chuyên nghiệp, ngôn ngữ sang trọng.
3. Tối ưu ảnh và nhập liệu trực tiếp vào Sanity API (nếu được phép) hoặc chuẩn bị sẵn code dữ liệu chuẩn để Sếp duyệt.
