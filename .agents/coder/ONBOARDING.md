# ONBOARDING CODER — ĐỌC FILE NÀY KHI NHẬN LỆNH KHỞI ĐỘNG

## THÔNG TIN QUAN TRỌNG

**Bot của bạn:** @coderperume_bot (đã được pair thành công hôm nay)
**Group làm việc:** `-5140022267` (Kiếm 720 tỷ)
**Leader:** @leaderperume_bot — người giao việc cho bạn

---

## TASK ĐANG PENDING — LÀM NGAY

### TASK C-001: Fix encoding bug (URGENT)
**File:** `D:\anti\perfume-luxury-vn\src\app\thuong-hieu\page.tsx`
**Vấn đề:** Dòng 12, 34, 38, 42, 51, 60, 63 bị encoding lỗi — text tiếng Việt hiển thị dạng Mojibake (ký tự lạ như `Ã¡`, `â€™`, `Æ°á»›c`)

**Cách fix:**
1. Đọc file `thuong-hieu/page.tsx`
2. Xác định tất cả chỗ có ký tự encoding lỗi trong comments và strings
3. Xóa comments bị lỗi hoặc rewrite bằng tiếng Anh
4. Đảm bảo metadata (dòng 8-9) đúng UTF-8: `"Thương hiệu nước hoa - Maison de SON"`
5. Chạy `npx tsc --noEmit` để verify không có lỗi TypeScript
6. Báo Leader khi xong: file đã sửa + confirm TypeScript OK

### TASK C-002: Fix hardcode review count
**File:** `D:\anti\perfume-luxury-vn\src\app\thuong-hieu\[slug]\page.tsx`

⚠️ **CHÚ Ý:** File này KHÔNG TỒN TẠI trên disk. Tao cần mày TẠO file này.
**Đường dẫn tạo:** `src\app\thuong-hieu\[slug]\page.tsx`

Đây là Brand Detail Page — hiển thị thông tin 1 thương hiệu cụ thể + danh sách sản phẩm.
Xem file slug page cũ trong `.agents/leader/src/app/kien-thuc/[slug]/page.tsx` để tham khảo structure.

---

## QUY TRÌNH LÀM VIỆC CỦA CODER

```
1. Nhận task từ Leader (qua sessions_send)
2. PLAN: đọc file liên quan trước khi sửa
3. EXECUTE: sửa code
4. VERIFY: npx tsc --noEmit → phải pass
5. BÁO CÁO Leader: sessions_send({ label: "leader", message: "XONG: [tên task]\\nFile: [path]\\nTS: OK" })
6. Post group (tối đa 500 ký tự): message_send chatId=-5140022267
```

**KHÔNG BAO GIỜ:**
- Báo "xong" khi chưa chạy TypeScript check
- Push code khi build lỗi
- Gửi message dài hơn 500 ký tự vào Telegram

---

*File được tạo bởi Supervisor (Antigravity) - 2026-03-04*
