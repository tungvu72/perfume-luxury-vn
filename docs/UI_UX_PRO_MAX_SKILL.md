# UI/UX PRO MAX — HƯỚNG DẪN THIẾT KẾ CHUYÊN NGHIỆP

Tài liệu này tổng hợp toàn bộ nội dung từ [UI/UX Pro Max](https://2026-03-19-ui-ux-pro-max.vercel.app/#rules) để Coder Bot có thể học và áp dụng các tiêu chuẩn thiết kế hiện đại.

---

## 1. GIỚI THIỆU
Đây là bộ công cụ giúp thiết kế giao diện web và mobile theo chuẩn chuyên nghiệp, tự động đề xuất phong cách, màu sắc, font chữ và các quy tắc UX.

---

## 2. SKILL NÀY LÀM ĐƯỢC GÌ?
Khi yêu cầu Antigravity tạo một trang web hoặc thiết kế giao diện, Skill UI/UX Pro Max sẽ tự động:
- Phân tích yêu cầu sản phẩm.
- Chọn Style phù hợp ( Minimalism, Glassmorphism, v.v.).
- Chọn bộ màu (Color Palette) chuẩn ngành.
- Chọn cặp Font chữ (Typography) tối ưu.
- Áp dụng các quy tắc UX (Accessibility, Touch, Performance).

---

## 3. HƯỚNG DẪN SỬ DỤNG

### Cách 1: Tự động (Khuyên dùng)
Sử dụng flag `--design-system` khi yêu cầu tạo web. Antigravity sẽ tự động chọn style + màu + font + UX rules.
> Ví dụ: "Tạo trang landing page cho ứng dụng quản lý tài chính cá nhân --design-system"

### Cách 2: Tìm kiếm thủ công (Nâng cao)
Sử dụng lệnh `search.py` với các domain: `style`, `color`, `typography`, `ux`, `landing`, `chart`, `product`.

---

## 4. 8 NHÓM QUY TẮC THIẾT KẾ (35+ RULES)

Các quy tắc được sắp xếp theo mức độ quan trọng:

### 1. Accessibility - Khả năng tiếp cận (CRITICAL)
Đảm bảo mọi người đều có thể sử dụng (kể cả người khuyết tật).
- `color-contrast`: Độ tương phản tối thiểu 4.5:1.
- `focus-states`: Hiển thị rõ ràng khi dùng phím Tab.
- `alt-text`: Mô tả cho hình ảnh.
- `form-labels`: Mọi input phải có `<label>`.
- `keyboard-nav`: Có thể điều hướng toàn bộ trang bằng bàn phím.

### 2. Touch & Tương tác (CRITICAL)
Tối ưu cho người dùng Mobile.
- `touch-target`: Kích thước vùng bấm tối thiểu **44x44px**.
- `cursor-pointer`: Mọi phần tử click được phải có `cursor: pointer`.
- `hover-feedback`: Phản hồi trực quan khi di chuột.
- `loading-buttons`: Trạng thái chờ khi bấm nút.
- `error-feedback`: Thông báo lỗi rõ ràng.

### 3-4. Hiệu năng & Layout (HIGH)
- `image-optimization`: Sử dụng `loading="lazy"`.
- `reduced-motion`: Tôn trọng cài đặt giảm chuyển động của người dùng.
- `viewport-meta`: Cấu hình meta viewport chuẩn.
- `font-size`: Kích thước chữ dễ đọc trên mọi thiết bị.
- `no-horizontal-scroll`: Tuyệt đối không cuộn ngang trên mobile (`overflow-x: hidden`).

### 5-6. Typography, Màu sắc & Animation (MEDIUM)
- `line-height`: Khoảng cách dòng thoáng (thường 1.5 - 1.6).
- `line-length`: Tối đa **65 ký tự (65ch)** mỗi dòng.
- `font-pairing`: Kết hợp font Heading và Body hài hòa.
- `animation-duration`: Chuyển động nhanh gọn (150-300ms).
- `transform-only`: Chỉ nên animate `transform` và `opacity` để đạt 60fps.

---

## 5. KHO DỮ LIỆU CÓ SẴN
- **58 Phong Cách Thiết Kế:** Bao gồm Glassmorphism, Minimalism, Neubrutalism, Y2K, Cyberpunk, v.v.
- **96 Bộ Màu Theo Sản Phẩm:** Từng ngành nghề (Spa, SaaS, Fitness, v.v.) đều có bộ màu riêng.
- **57 Cặp Font từ Google Fonts:** Heading + Body đã được pair sẵn theo cảm xúc.
- **11 Tech Stack:** React, Next.js, Flutter, v.v. (Mỗi stack có quy tắc đặc thù).

---

## 6. QUY TRÌNH 4 BƯỚC THỰC HIỆN
1. **Phân tích yêu cầu:** Xác định loại sản phẩm, keyword, ngành nghề.
2. **Tạo Design System:** Chạy lệnh search cho 5 lĩnh vực (product, style, color, landing, typography).
3. **Tinh chỉnh:** Tìm kiếm thêm theo domain nếu cần.
4. **Áp dụng theo Stack:** Tự động áp dụng quy tắc riêng của tech stack đang dùng.

---

## 7. VÍ DỤ CỤ THỂ

### Ví dụ 1: Landing page cho spa
- **Style:** Minimalism / Luxury.
- **Màu:** Vàng gold + trắng kem.
- **Font:** Playfair Display + Inter.
- **UX:** Touch target 44px, Contrast 4.5:1.

### Ví dụ 2: Dashboard SaaS
- **Style:** Dark Mode / Fintech.
- **Màu:** Xanh dương + Cam CTA.
- **Font:** Plus Jakarta Sans.
- **UX:** Skeleton loading, Responsive grid.

---

## 8. CHECKLIST TRƯỚC KHI SHIP (DEPLOY)

### Chất lượng hình ảnh
- Không dùng emoji làm icon (sử dụng SVG).
- Tất cả icon cùng 1 bộ (Heroicons hoặc Lucide).
- Logo thương hiệu chính xác.
- Hover không làm xô layout.

### Tương tác
- Mọi phần tử click được có `cursor-pointer`.
- Hover có phản hồi trực quan rõ ràng.
- Transition mượt (150-300ms).
- Focus state hiển thị cho keyboard nav.

### Light/Dark Mode
- Chữ có độ tương phản đủ (4.5:1 tối thiểu).
- Card/glass hiển thị tốt trên cả 2 mode.
- Viền (border) nhìn thấy được trên cả 2 mode.

### Layout & Responsive
- Không bị nội dung bị che bởi navbar cố định.
- Responsive tại: 375px, 768px, 1024px, 1440px.
- Không cuộn ngang trên mobile.
- Touch target tối thiểu 44x44px.

### Accessibility
- Mọi hình ảnh có `alt` text.
- Ô nhập liệu có `label`.
- Màu sắc không phải dấu hiệu duy nhất để nhận biết thông tin.

---
*Biên soạn dựa trên tài liệu của Minh Đỗ.*
*Dành riêng cho hệ thống AI Agent Antigravity & Coder Bot.*
