# Keyword remap rules — 2026-03-31

## Sự thật về batch trước
- Không được xem là đã check tay hết từng từ khóa.
- Batch trước là classify bán tự động theo rule + match pattern, nên có false map.
- Các ví dụ user chỉ ra là hợp lệ và phải sửa.

## Rule sửa cứng cho batch mới
1. `nước hoa nam + [brand]` -> ưu tiên brand page nếu brand đã có trên web, không map về `/nuoc-hoa-nam`.
2. `nước hoa + [tên chai] + [dung tích/mini/chiết]` -> map vào đúng product page tương ứng nếu sản phẩm đã có.
3. Nếu keyword có brand + model nhưng web chưa có đúng product page -> đưa vào `Cần thêm trang sản phẩm` với tên đề xuất chính xác.
4. Các alias Việt hóa phổ biến phải map về đúng chai gốc nếu xác định được, ví dụ `narciso hồng` -> đúng product Narciso tương ứng.
5. Chỉ map về category khi keyword thực sự generic, không chứa brand/model rõ ràng.
6. Brand đã có trên web nhưng batch trước bỏ sót -> phải ưu tiên remap sang brand page trước khi xét `Cần thêm trang sản phẩm`.

## Ví dụ lỗi đã xác nhận
- `nước hoa nam mont blanc` -> không được map `/nuoc-hoa-nam`
- `nước hoa nam salvatore ferragamo` -> không được map `/nuoc-hoa-nam`
- `nước hoa nam mont blanc legend` -> phải vào product hoặc đề xuất product chính xác
- `nước hoa nam paco rabanne` -> không được map `/nuoc-hoa-nam`
- `nước hoa narciso hồng 100ml` -> phải vào đúng product Narciso hồng nếu web đã có
