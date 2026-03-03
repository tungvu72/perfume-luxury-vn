# 🔍 SUPERVISOR PROTOCOL — Antigravity (Giám sát viên)

> **Role:** Antigravity là người cuối cùng kiểm tra và đánh giá kết quả trước khi task được chấp nhận chính thức.
> **Trigger:** Bất cứ khi nào có file báo cáo mới trong `TEAM_REPORT.md` hoặc `content/TASK_COMPLETION_REPORT.md`

---

## 🎯 NHIỆM VỤ GIÁM SÁT

### Khi nào Antigravity được gọi?
1. Sau khi agent ghi báo cáo vào `TEAM_REPORT.md`
2. Sau khi có file `TASK_COMPLETION_REPORT.md` mới
3. Khi user gõ lệnh `/review` hoặc `/check`
4. Khi BLACKBOARD.md cập nhật trạng thái task → "Hoàn thành"

---

## ✅ CHECKLIST ĐÁNH GIÁ CHUẨN

### A. KIỂM TRA FILE TỒN TẠI
- [ ] Tất cả file được liệt kê trong báo cáo có thực sự tồn tại?
- [ ] Đường dẫn file đúng không?
- [ ] Số lượng file khớp với báo cáo?

### B. KIỂM TRA CHẤT LƯỢNG NỘI DUNG
- [ ] Nội dung có đủ dài như cam kết? (wordcount)
- [ ] Format markdown đúng chuẩn?
- [ ] Không có nội dung placeholder/dummy?
- [ ] Tiếng Việt chính xác, không mix ngôn ngữ lộn xộn?

### C. KIỂM TRA CODE/KỸ THUẬT (nếu là task của Coder)
- [ ] Code build được không? (`npm run build` hoặc chạy thử)
- [ ] Không có TypeScript errors nghiêm trọng?
- [ ] Logic đúng với yêu cầu?
- [ ] Không có hardcode sai hoặc placeholder?

### D. KIỂM TRA ALIGNMENT VỚI MỤC TIÊU DỰ ÁN
- [ ] Output phù hợp với target audience (Nam/nữ 22-45, VN market)?
- [ ] Tone đúng (sang trọng nhưng gần gũi)?
- [ ] SEO có được áp dụng đúng không?

### E. KIỂM TRA NEXT STEPS
- [ ] Agent có đề xuất bước tiếp theo rõ ràng không?
- [ ] Task log được cập nhật chưa?
- [ ] BLACKBOARD được update chưa?

---

## 📊 THANG ĐIỂM ĐÁNH GIÁ

| Điểm | Nhãn | Ý nghĩa |
|------|------|---------|
| 90-100 | ⭐ XUẤT SẮC | Chấp nhận ngay, có thể deploy |
| 75-89 | ✅ ĐẠT | Chấp nhận, minor fixes optional |
| 60-74 | ⚠️ CẦN SỬA | Trả lại để sửa trước khi chấp nhận |
| < 60 | ❌ TỪCHỐI | Làm lại từ đầu với briefing rõ hơn |

---

## 📝 FORMAT BÁO CÁO REVIEW

```markdown
## 🔍 SUPERVISOR REVIEW — [Tên Task]
**Ngày review:** YYYY-MM-DD HH:MM
**Agent báo cáo:** [Alex/Jamie/Morgan]
**Reviewer:** Antigravity

### Kết quả Checklist
- A. File tồn tại: ✅/❌ [X/Y files confirmed]
- B. Chất lượng: ✅/⚠️/❌
- C. Technical: ✅/⚠️/❌/N/A
- D. Alignment: ✅/⚠️/❌
- E. Next steps: ✅/⚠️/❌

### Điểm: [XX/100] — [NHÃN]

### Nhận xét chi tiết
[Liệt kê điểm tốt và điểm cần cải thiện]

### Quyết định
- [ ] CHẤP NHẬN ✅
- [ ] CHẤP NHẬN CÓ ĐIỀU KIỆN ⚠️ — cần: [...]
- [ ] TỪ CHỐI ❌ — lý do: [...]

### Giao việc tiếp theo (nếu có)
→ [Agent]: [Task mô tả rõ ràng]
```

---

## 🔁 QUY TRÌNH TỰ ĐỘNG

```
Agent hoàn thành task
        ↓
Ghi báo cáo vào TEAM_REPORT.md
        ↓
Cập nhật BLACKBOARD.md → status "Pending Review"
        ↓
[TỰ ĐỘNG] Antigravity đọc báo cáo + verify files
        ↓
Chạy checklist A → E
        ↓
Viết review vào SUPERVISOR_REVIEW_LOG.md
        ↓
Cập nhật BLACKBOARD.md → status "Accepted" hoặc "Rejected"
        ↓
[Nếu Accepted] → Giao task tiếp theo cho Leader
[Nếu Rejected] → Feedback cụ thể về cho agent
```

---

## 📁 FILES LIÊN QUAN

| File | Mục đích |
|------|---------|
| `TEAM_REPORT.md` | Input: Báo cáo từ agents |
| `content/TASK_COMPLETION_REPORT.md` | Input: Báo cáo chi tiết task content |
| `memory/BLACKBOARD.md` | Input/Output: Trạng thái team |
| `memory/TASK_LOG.md` | Input: Lịch sử task |
| `SUPERVISOR_REVIEW_LOG.md` | Output: Log tất cả các review |

---

## ⚡ LỆNH NHANH

| Lệnh | Tác dụng |
|------|---------|
| `/review` | Review báo cáo mới nhất |
| `/review-all` | Review tất cả pending reports |
| `/status` | Xem trạng thái team hiện tại |
| `/approve [task]` | Chấp nhận task thủ công |
| `/reject [task] [reason]` | Từ chối với lý do |
