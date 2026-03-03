# 🏗️ CMS ARCHITECTURE: MAISON DE SON (SANITY.IO)

Để thay thế cho WordPress mà vẫn giữ được sự tiện lợi, chúng ta sẽ xây dựng **Maison de SON Studio**.

## 1. CẤU TRÚC DỮ LIỆU (SCHEMAS)

### A. Sản phẩm (Product) - "Trái tim của hệ thống"
- **Thông tin cơ bản:** Tên, Slug, Thương hiệu (Reference), Ảnh chính (Hotspot/Crop).
- **PLV Score (Chuyên gia chấm):** Scent, Longevity, Uniqueness, Compliments, Value.
- **Scent Pyramid:** Tầng hương Đầu, Giữa, Cuối (Array of Strings).
- **Affiliate Links (Mới):**
    - Shopee Link + Giá tham khảo.
    - Lazada Link + Giá tham khảo.
    - TikTok Shop Link + Giá tham khảo.
- **Content:** Bài review chi tiết (Portable Text - giống Gutenberg).

### B. Thương hiệu (Brand)
- **Tên Brand:** (Ví dụ: Chanel).
- **Logo:** Ảnh vector/png.
- **Mô tả:** Lịch sử và định vị thương hiệu.

### C. Bài viết Kiến thức (Blog)
- **Tiêu đề & Ảnh bìa.**
- **Phân loại:** (Review, Hướng dẫn, Xu hướng).
- **Nội dung:** Soạn thảo Rich Text, chèn ảnh sản phẩm linh hoạt.

## 2. TRẢI NGHIỆM QUẢN TRỊ (ADMIN EXPERIENCE)

- **Giao diện hiện đại:** Không rườm rà như WP cũ, chỉ tập trung vào việc nhập liệu.
- **Live Preview:** Anh sửa nội dung bên trái, bên phải sẽ hiện ra giao diện web thật để anh xem trước (Preview).
- **Quản lý ảnh:** Tự động tối ưu dung lượng và cắt ảnh theo đúng tỷ lệ 4:5 hoặc 16:9 của web.

## 3. LOGIC KINH DOANH TRỰC TIẾP
- Loại bỏ hoàn toàn hệ thống Giỏ hàng/Thanh toán.
- Tập trung vào **Deep Linking**: Khi khách nhấn vào giá Shopee, web sẽ mở App Shopee trên điện thoại của họ.
- Nút **Zalo Chat** sẽ xuất hiện xuyên suốt để chốt sales trực tiếp.

---
*Ghi chú:* Tôi sẽ bắt đầu cài đặt `next-sanity` và cấu hình hạ tầng cho Studio này. Anh sẽ có một địa chỉ `/admin` riêng để đăng nhập.
