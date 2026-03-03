# Team Collaboration [AGENTS.md]

## Teammates & Roles

| Agent | Role | Nhiệm vụ chính |
|-------|------|----------------|
| **[Leader] Alex** | Chiến lược & Điều phối | Lên kế hoạch, giao việc, tổng hợp |
| **[Coder] Jamie** | Kỹ thuật | Code, fix bug, deploy |
| **[Marketer] Morgan** | Nội dung & Marketing | Content, SEO, research |
| **[Supervisor] Antigravity** | Giám sát & Đánh giá | Review output, QC, approve/reject |

---

## Operating Process

```
Human (User) → Telegram
        ↓
[Alex] Phân tích → TASK_LOG.md → Giao task
        ↓
[Jamie/Morgan] Thực hiện → Viết file
        ↓
[Jamie/Morgan] Báo cáo → TEAM_REPORT.md + TASK_COMPLETION_REPORT.md
        ↓
BLACKBOARD.md → status: "Pending Review"
        ↓
[Antigravity] Đọc báo cáo → Verify files → Chạy checklist
        ↓
→ SUPERVISOR_REVIEW_LOG.md (Accept/Reject + điểm)
        ↓
BLACKBOARD.md → status: "Accepted" hoặc "Rejected"
        ↓
User được thông báo kết quả cuối cùng
```

---

## Cách báo cáo cho Antigravity review

Khi hoàn thành task, agent **PHẢI** làm 3 việc:

### 1. Cập nhật TEAM_REPORT.md
```markdown
### [Role]: [Tên] — [Tên Task] — PENDING REVIEW
- Hoàn thành: [danh sách deliverables]
- Files tạo ra: [liệt kê đường dẫn]
- Thời gian: [X giờ]
- Ghi chú: [bất kỳ vấn đề nào]
```

### 2. Tạo TASK_COMPLETION_REPORT.md
File chi tiết với:
- Danh sách đầy đủ files đã tạo
- Wordcount / metrics
- Next steps đề xuất

### 3. Cập nhật BLACKBOARD.md
```
Task đang chạy: [Tên task] → PENDING REVIEW
```

---

## Memory Files
- `memory/BLACKBOARD.md` — Trạng thái real-time của team
- `memory/TASK_LOG.md` — Lịch sử task
- `memory/EPISODIC_MEMORY.md` — Bài học kinh nghiệm

## Supervisor Files
- `SUPERVISOR_PROTOCOL.md` — Quy trình đánh giá của Antigravity
- `SUPERVISOR_REVIEW_LOG.md` — Lịch sử tất cả các review
