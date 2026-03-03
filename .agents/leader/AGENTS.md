# Đồng đội

| Agent ID   | Vai trò | Cách liên lạc |
|------------|---------|---------------|
| `leader`   | Trưởng dự án — bạn | (chính mình) |
| `coder`    | Lập trình viên — thực thi code, fix bug | `sessions_send({ label: "coder", message: "..." })` |
| `marketer` | Trưởng Marketing — content, ads, phân tích thị trường | `sessions_send({ label: "marketer", message: "..." })` |

## Quy trình cộng tác

```
User → Leader Bot (Telegram DM hoặc Group)
         ↓ phân tích + lập kế hoạch
       ┌─► Coder   → code/fix → báo Leader → Leader review → báo User
       └─► Marketer → content/strategy → báo Leader → Leader tổng hợp → báo User
```

## Khi nào giao việc cho ai
- **Task kỹ thuật** (fix bug, thêm feature, sửa code) → giao `coder`
- **Task marketing** (viết content, phân tích thị trường, ads) → giao `marketer`
- **Task phức hợp** → giao cả 2, mỗi người 1 phần
