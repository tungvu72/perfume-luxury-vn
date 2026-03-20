# UI/UX PRO MAX — DESIGN STANDARDS (MAISON DE SON)
> Tài liệu này được trích xuất từ bộ quy tắc [UI/UX Pro Max](https://2026-03-19-ui-ux-pro-max.vercel.app/#rules) để làm chuẩn thiết kế cho Maison De Son. **Coder Bot hãy đọc và cho ý kiến trước khi triển khai hàng loạt.**

---

## 1. NHÓM QUY TẮC CRITICAL (Ảnh hưởng trực tiếp UX)

### 1.1. Accessibility - Khả năng tiếp cận
- **Color Contrast:** Mọi phần tử text phải đạt độ tương phản tối thiểu **4.5:1** so với nền. (Lưu ý: màu Teal phối hợp với màu Amber cần cẩn thận).
- **Focus States:** Trình duyệt phải hiển thị rõ ràng đường viền khi người dùng điều hướng bằng phím (Tab).
- **Alt-text:** Mọi hình ảnh phải có thuộc tính `alt` mô tả nội dung.
- **Form Labels:** Mọi ô nhập liệu phải đi kèm thẻ `<label>` hoặc được gắn `aria-label`.

### 1.2. Touch & Tương tác
- **Touch Targets:** Kích thước vùng bấm tối thiểu trên Mobile là **44px x 44px**.
- **Cursor Pointer:** Các phần tử clickable bắt buộc có `cursor: pointer`.
- **Hover Feedback:** Phải có phản hồi trực quan (màu sắc, border, shadow) khi di chuột qua, nhưng không được gây xô lệch giao diện (Cumulative Layout Shift).
- **Loading & Error:** Phải có trạng thái `loading` cho button và thông báo lỗi rõ ràng bên dưới form.

---

## 2. NHÓM QUY TẮC HIGH (Chất lượng giao diện)

### 2.1. Hiệu năng & Layout
- **Image Optimization:** Sử dụng `loading="lazy"` cho ảnh ngoài màn hình đầu tiên (below the fold).
- **No Horizontal Scroll:** Mobile tuyệt đối không có thanh cuộn ngang (`overflow-x: hidden`).
- **Responsive Points:** Thiết kế phải mượt mà qua các thiết bị:
  - **Mobile:** 375px
  - **Tablet:** 768px
  - **Laptop:** 1024px
  - **Desktop:** 1440px
- **Navbar Offset:** Đảm bảo nội dung không bị che khuất bởi Sticky Navbar.

### 2.2. Typography & Màu sắc
- **Line Height:** Paragraph nên để khoảng **1.6** (chuẩn Maison De Son hiện tại là 1.6).
- **Line Length:** Chiều dài dòng text lý tưởng là **65 ký tự (65ch)**. Nếu rộng hơn sẽ gây khó đọc.
- **Font-pairing:** Maison De Son chốt dùng **Inter** (San-serif) cho body và **Playfair Display** (Serif) cho headlines.
- **Icon Set:** Chỉ dùng SVG đồng nhất (Heroicons/Lucide). **Không dùng Emoji làm icon.**

---

## 3. CHECKLIST TRƯỚC KHI SHIP (DEPLOY)

- [ ] Toàn bộ UI đã có hiệu ứng `hover` và `active`.
- [ ] Transition mượt mà trong khoảng **150ms - 300ms**.
- [ ] Text không quá dính sát viền màn hình trên Mobile (Padding ngang tối thiểu 16px).
- [ ] Ảnh logo thương hiệu chính xác, sắc nét (nên dùng SVG).
- [ ] Đã kiểm tra giao diện trên cả Light Mode và Dark Mode.
- [ ] Tuân thủ `prefers-reduced-motion` nếu có animation phức tạp.

---

## Ý KIẾN CỦA CODER BOT:
> **Coder Bot hãy phản hồi tại đây hoặc trong file handoff về tính khả thi và các đề xuất bổ sung dựa trên Tech Stack hiện tại (Next.js 14 + Tailwind v4).**
