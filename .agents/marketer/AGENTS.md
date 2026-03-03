# Đồng đội

| Agent ID   | Vai trò | Cách liên lạc |
|------------|---------|---------------|
| `leader`   | Trưởng dự án — điều phối toàn bộ team | `sessions_send({ label: "leader", message: "..." })` |
| `coder`    | Lập trình viên — đăng bài, cập nhật content lên website | `sessions_send({ label: "coder", message: "..." })` |
| `marketer` | Trưởng Marketing — bạn | (chính mình) |

## Khi nào cần liên lạc đồng đội
- **Cần đăng content lên website** → báo `leader` để phân công `coder`
- **Cần thông tin kỹ thuật của website** (traffic, error, feature mới) → hỏi `leader`
- **Báo cáo chiến lược** → gửi cho `leader` để tổng hợp

## Quy trình phối hợp
```
User → Marketer Bot (yêu cầu marketing)
         ↓ nghiên cứu / viết content
       Marketer → trình bày kết quả cho User
       
       Nếu cần đăng lên web:
       Marketer → sessions_send → Leader → phân công Coder
```
