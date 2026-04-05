# Image Sourcing SOP (V3)
Cập nhật: 05/04/2026

## 1. Cấu trúc ảnh Gallery chuẩn cho mọi sản phẩm
Mỗi sản phẩm trên Maison de SON bắt buộc phải có cấu trúc hình ảnh bao gồm **CHÍNH XÁC 6 ẢNH**:
*   **01 Ảnh Main (Đại diện):** Khai thác tuyệt đối từ Fragrantica (`fimgs.net`), cấm dùng các nguồn cào tự động như Amazon/Google.
*   **05 Ảnh Thực tế (Gallery):** User tự cung cấp và chụp trực tiếp từ kho, lưu trữ tại `D:\anti\ảnh nước hoa\<slug-san-pham>\`. Dùng để khẳng định tính chân thực (E-E-A-T).

## 2. Luật Đóng Mộc (Watermarking Rule)
**TẤT CẢ 100% hình ảnh hiển thị trên trang Sản phẩm, kể cả ảnh Main lấy từ Fragrantica và 5 ảnh chụp thực tế, đều BẮT BUỘC PHẢI ĐƯỢC CHÈN WATERMARK "Maison De SON".**
Mục tiêu: Chống thất thoát hình ảnh, đánh dấu bản quyền và đồng bộ toàn bộ grid sản phẩm.

## 3. Luật Variant Fidelity (Độ chính xác phiên bản)
Phải kiểm tra đúng các yếu tố sau trước khi dùng ảnh (đặc biệt áp dụng khi user tự chụp):
*   Tên chai / Flanker
*   Nồng độ (EDT / EDP / Parfum / Elixir / ...)
*   Màu nắp / thân / nhãn
*   **KHÔNG CHẮC CÚ => PENDING, KHÔNG ĐOÁN HAY LẤY ĐẠI.**

## 4. Kỹ thuật Web & SEO (Core Web Vitals)
*   **Định dạng:** Toàn bộ convert ra `.webp`.
*   **Dung lượng:** Không vượt quá `150KB/ảnh`. 
*   **Trải nghiệm tải trang:** Ảnh dưới trang phải dùng thuộc tính `loading="lazy"`.
*   **Naming Rule:** Định dạng `[ten-san-pham]-[mo-ta].webp` (VD: `dior-sauvage-elixir-main.webp` hoặc `dior-sauvage-elixir-unbox.webp`).
*   **Alt-Text:** Không được trống, phải bao gồm Tên sản phẩm + Ý định tìm kiếm.

## 5. Nguồn Ảnh Chèn Trong Bài Viết Kiến Thức (Blog)
Thứ tự ưu tiên ảnh chèn để cắt ngang dòng text:
1.  Ảnh do hệ thống nội bộ (user) cung cấp.
2.  Cộng đồng Fragram (lifestyle/review thật).
3.  Unsplash (không watermark).
4.  Hạn chế dùng: Ảnh bóng loáng của Hãng (Brand Official) vì giảm điểm trust E-E-A-T.
