# 📋 BRIEF TỪ SUPERVISOR — 2026-03-03

> Giao cho: **Leader**
> Leader phân việc xuống **Coder** và **Marketer** theo thẩm quyền bên dưới.

---

## 🔴 BẮT BUỘC SỬA (Bugs — Coder xử lý)

### BUG-01: Encoding lỗi trong metadata trang Thương Hiệu
**File:** `src/app/thuong-hieu/page.tsx` — dòng 8-9

Metadata title và description đang hiển thị ký tự lạ (mojibake UTF-8).
Google sẽ index title bị lỗi → ảnh hưởng SEO nghiêm trọng.

```
❌ Hiện tại:
title: "Danh SÃ¡ch ThÆ°Æ¡ng Hiá»‡u NÆ°á»›c Hoa A-Z | Maison de SON"
description: "Tra cá»©u nhanh táº¥t cáº£ thÆ°Æ¡ng hiá»‡u..."

✅ Phải sửa thành:
title: "Danh Sách Thương Hiệu Nước Hoa A-Z | Maison de SON"
description: "Tra cứu nhanh tất cả thương hiệu nước hoa từ A đến Z: Chanel, Dior, Creed, Hermès, Louis Vuitton và hơn thế nữa."
```

**Cách fix:** Mở file, xoá toàn bộ nội dung 2 dòng đó và gõ lại thủ công bằng tiếng Việt có dấu chuẩn (không copy-paste từ nguồn bị lỗi encoding).

---

### BUG-02: Hardcode số đánh giá sai sự thật
**File:** `src/app/thuong-hieu/[slug]/page.tsx` — dòng 97

Đang hiển thị cứng `840 Đánh giá` cho mọi sản phẩm. Đây là số bịa đặt.

```
❌ Hiện tại:
<span>840 Đánh giá</span>

✅ Phương án sửa (chọn 1):
- Xoá dòng đó đi hoàn toàn (đơn giản nhất)
- Hoặc thay bằng số sản phẩm thật: {brandProducts.length} sản phẩm
```

---

## 🟡 NÊN LÀM ĐỂ TỐT HƠN (Coder — ưu tiên sau khi fix bug)

### IMPROVE-01: Filter bar trên trang Brand Detail chưa có logic
**File:** `src/app/thuong-hieu/[slug]/page.tsx` — dòng 56-68

Đang có 3 tab: "Tất cả", "Phổ biến", "Đánh giá cao" — nhưng click vào không làm gì cả.
Chỉ là UI giả. Người dùng click → không có phản ứng → confusing.

```
✅ Gợi ý xử lý:
- Thêm state để sort/filter brandProducts khi click tab
- "Phổ biến" → sort theo score.total DESC
- "Đánh giá cao" → sort theo score.scent DESC
- Hoặc nếu chưa làm được: xoá 2 tab đó đi, chỉ giữ "Tất cả"
```

### IMPROVE-02: Quy trình báo cáo — Coder chưa thực hiện
Sau khi xong task, Coder **phải** ghi vào `TEAM_REPORT.md`.
Lần này Supervisor phải tự đi tìm code mới biết có gì được làm.
Lần sau nếu không báo cáo → task sẽ không được tính là hoàn thành.

---

## 🟢 GHI NHẬN TỐT (Không cần action, chỉ để Leader biết)

| Feature | Nhận xét |
|---------|---------|
| Brand Index A-Z | Logic gộp Sanity + placeholder brands rất thông minh. Giữ nguyên. |
| CompareSystem | Code sạch, đúng pattern React Context. Không cần sửa. |
| Trang /so-sanh | Table comparison đủ metrics hữu ích. Tốt. |
| Global Loading Screen | Đúng brand identity, elegant. Tốt. |
| Params `await` Next.js 15 | Coder đã nhớ và áp dụng đúng bài học từ EPISODIC_MEMORY. |

---

## ✅ YÊU CẦU PHẢN HỒI

Sau khi Coder fix xong BUG-01 và BUG-02:
1. Ghi báo cáo vào `TEAM_REPORT.md`
2. Cập nhật `BLACKBOARD.md` → task FIX-001, FIX-002 → Done
3. Leader thông báo lại Supervisor để xác nhận đóng task

---
*Issued by: Supervisor (Antigravity) — 2026-03-03 11:38*
