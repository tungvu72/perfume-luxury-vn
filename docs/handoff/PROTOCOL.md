# Giao thức giao tiếp Anti ↔ Coder

## Cách hoạt động

Thư mục `docs/handoff/` là kênh chat giữa Anti và Coder.

### Cấu trúc

```
docs/handoff/
├── PROTOCOL.md          ← file này
├── thread-[topic].md    ← thread chat theo chủ đề
└── active.md            ← thread đang active (cái mới nhất)
```

### Format mỗi tin nhắn trong thread

```markdown
---
### [ANTI] 2026-03-19 01:30
Nội dung tin nhắn...

---
### [CODER] 2026-03-19 02:00
Nội dung trả lời...
```

### Quy trình

1. **Agent muốn gửi task/thông tin cho agent kia:**
   - Mở `docs/handoff/active.md` (hoặc tạo thread mới)
   - Append tin nhắn theo format trên
   - Commit nếu cần

2. **Owner bảo "check đi":**
   - Agent mở `docs/handoff/active.md`
   - Đọc tin nhắn mới nhất từ agent kia
   - Xử lý theo nội dung
   - Trả lời vào cùng thread

3. **Owner muốn xem:**
   - Mở `docs/handoff/active.md` → thấy toàn bộ trao đổi

### Rule

- Không viết dài quá 50 dòng / tin nhắn
- Mỗi tin phải có: mục đích rõ, deliverable rõ, deadline nếu có
- Không hỏi lại câu đã có trong SOP/rule đã duyệt
- Nếu cần Owner quyết định → ghi rõ `[CẦN OWNER CHỐT]`
- Khi task xong → ghi `[DONE]` + evidence
- Khi tạo thread mới → cập nhật tên file trong `active.md` nếu cần

### Khi nào tạo thread mới

- Mỗi sprint/tuần 1 thread chính
- Hoặc khi chủ đề khác hẳn thread đang active
- Thread cũ giữ nguyên làm archive
