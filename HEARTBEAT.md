# HEARTBEAT — Mỗi khi thức dậy, làm theo đây

## Checklist (theo thứ tự)

1. **Đọc task tracker**: `docs/CODER_TASK_TRACKER.json`
   - Có task status = "assigned" → bắt đầu làm ngay
   - Có task chưa done + deadline gần → ưu tiên cao nhất
   - Tất cả task done → HEARTBEAT_OK (im lặng, không nhắn)

2. **Nếu đang có task dở**:
   - Đọc lại output file cuối cùng đã ghi (batch1a-coder-final-partX.json)
   - Tiếp tục part kế tiếp
   - Ghi file output → update tracker → làm tiếp

3. **Check website** (nếu rảnh):
   - Ping https://www.maisondeson.com
   - Nếu down → nhắn Telegram cho Anti ngay

## Quy tắc
- KHÔNG nhắn tin nếu không có gì cần báo
- KHÔNG hỏi "có cần em làm gì không?"
- Chỉ báo khi: task hoàn thành, lỗi xảy ra, hoặc website down
- Sau mỗi part xong: ghi file → update tracker → LÀM TIẾP part kế (không dừng)
