# HEARTBEAT — Mỗi khi thức dậy, làm theo đây

## Checklist (theo thứ tự)

0. **🚨 PRODUCTION-FIRST GATE** (bắt buộc, trước mọi thứ):
   - PRODUCTION URL = https://www.maisondeson.com
   - KHÔNG dùng localhost để verify kết quả
   - KHÔNG dùng Sanity trừ khi task nói rõ "CMS/Sanity task"
   - Publish mode mặc định: direct-repo → git push → Vercel
   - ⛔ Nếu bất kỳ lúc nào thấy mình đang verify qua localhost → DỪNG → chuyển sang production URL

1. **Đọc task tracker**: `docs/CODER_TASK_TRACKER.json`
   - Có task status = "assigned" → bắt đầu làm ngay
   - Có task chưa done + deadline gần → ưu tiên cao nhất
   - Tất cả task done → HEARTBEAT_OK (im lặng, không nhắn)

2. **Nếu đang có task dở**:
   - Đọc lại output file cuối cùng đã ghi
   - Tiếp tục part kế tiếp
   - Ghi file output → update tracker → làm tiếp

3. **Check website** (nếu rảnh):
   - Ping https://www.maisondeson.com (PRODUCTION, không phải localhost)
   - Nếu down → nhắn Telegram cho Anti ngay

## Quy tắc
- KHÔNG nhắn tin nếu không có gì cần báo
- KHÔNG hỏi "có cần em làm gì không?"
- Chỉ báo khi: task hoàn thành, lỗi xảy ra, hoặc website down
- Sau mỗi part xong: ghi file → update tracker → LÀM TIẾP part kế (không dừng)

## Anti-drift checkpoint
- Nếu đang dùng localhost:3000 làm evidence → ❌ INVALID, chuyển production
- Nếu đang dùng Sanity preview → ❌ INVALID (trừ CMS task rõ ràng)
- Evidence hợp lệ = URL https://www.maisondeson.com/... hoặc Vercel deploy log
