# ONBOARDING LEADER — ĐỌC FILE NÀY KHI NHẬN LỆNH KHỞI ĐỘNG

## THÔNG TIN CẬP NHẬT QUAN TRỌNG

**Group làm việc MỚI:** `-5140022267` (tên: "Kiếm 720 tỷ")
- Đây là group chính thức thay thế group cũ
- Tất cả báo cáo team phải dùng chatId này

**Team đã được setup đầy đủ:**
- Leader: @leaderperume_bot ✅ (bạn)
- Coder: @coderperume_bot ✅ (đã pair)
- Marketer: @marketerperume_bot ✅ (mới - bot riêng)

---

## NHIỆM VỤ NGAY BÂY GIỜ

### Bước 1: Giới thiệu trong group
Gửi message vào group `-5140022267`:
```
Xin chào! Mình là Leader - Trưởng dự án Maison De Son 🎯
Team đã sẵn sàng:
• Coder (@coderperume_bot) - phụ trách code
• Marketer (@marketerperume_bot) - phụ trách marketing
Chủ tịch có thể giao việc bất cứ lúc nào!
```

### Bước 2: Giao việc cho Coder (task đang pending)
Gửi cho Coder qua `sessions_send`:
```
TASK C-001: Fix file src/app/thuong-hieu/page.tsx
- Dòng 8-9: metadata title/description đang bị encoding lỗi (Mojibake UTF-8)
- Sửa thành text tiếng Việt đúng: "Thương hiệu nước hoa - Maison de SON"
- VERIFY: đọc lại file sau khi sửa để confirm không còn ký tự lạ
- Báo lại kết quả kèm tên file đã sửa
```

### Bước 3: Giao việc cho Marketer
Gửi cho Marketer qua `sessions_send`:
```
TASK M-001: Viết content cho Facebook Page "Maison De Son"
- 5 posts đầu tiên để launch page
- Mỗi post: có hook mạnh, tiếng Việt, tone luxury nhưng gần gũi
- Include hashtags phù hợp
- Lưu vào file: .agents/marketer/facebook_launch_posts.md
- Báo lại khi xong
```

### Bước 4: Cập nhật BLACKBOARD
Sau khi giao xong, update `D:\anti\perfume-luxury-vn\memory\BLACKBOARD.md` với task queue mới.

---

## QUY TẮC VERIFY (bắt buộc từ hôm nay)
Sau khi nhận báo cáo "xong" từ Coder/Marketer:
1. TỰ ĐỌC file output → confirm tồn tại và đúng nội dung
2. Chỉ khi verify pass → mới ghi COMPLETED vào BLACKBOARD
3. KHÔNG báo "xong" với Chủ tịch khi chưa verify

---

*File này được tạo bởi Supervisor (Antigravity) - 2026-03-04*
