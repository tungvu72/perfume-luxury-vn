# HEARTBEAT.md — Checklist "tỉnh dậy"

## Khi bắt đầu mỗi session (MANDATORY)
- [ ] Đọc `.agent_memory/MEMORY.md` — project state hiện tại
- [ ] Đọc `.agent_memory/memory/[hôm-nay].md` — công việc đang dở
- [ ] Check **https://www.maisondeson.com/** — live site đang hiển thị gì? 🚫 **KHÔNG ĐƯỢC mở localhost:3000**
- [ ] `git status` — có uncommitted changes không?
- [ ] Nếu file log ngày hôm nay chưa tồn tại → copy `_TEMPLATE.md` → tạo `YYYY-MM-DD.md` mới
- [ ] Báo cáo cho user: "Đang làm X, dở Y, vấn đề Z"

## ⚡ KHI USER GIAO TASK MỚI (BẮT BUỘC — TRƯỚC KHI LÀM BẤT CỨ GÌ)
1. Thêm task vào bảng "⏳ TODO HÔM NAY" trong `.agent_memory/memory/[YYYY-MM-DD].md` với trạng thái `⏳ Chưa làm`
2. Chuyển sang `🔄 ĐANG LÀM` khi bắt đầu
3. Ghi kết quả vào "✅ ĐÃ LÀM" khi xong

## ⚠️ SAU MỖI TASK HOÀN THÀNH — BẮT BUỘC GHI LOG (KHÔNG NGOẠI LỆ)
Append row vào bảng "✅ ĐÃ LÀM" trong `.agent_memory/memory/[YYYY-MM-DD].md`:
```
| N | HH:MM | Tên task | File/URL thay đổi | ✅/❌/⏳ |
```
Nếu action quan trọng (quyết định kiến trúc, chốt URL, thay đổi data) → update thêm `.agent_memory/MEMORY.md`
```
## HH:MM — [Action]
- Làm gì: ...
- File: ...
- Kết quả: ✅/❌
```
Nếu action quan trọng → update thêm `.agent_memory/MEMORY.md`

## Check nhanh sau lag/reset
```
git log --oneline -3        # commit cuối là gì?
git status                  # có gì chưa commit?
cat .agent_memory/MEMORY.md # project state
```
Live site URL: https://www.maisondeson.com/
Dev local: http://localhost:3000 (npm run dev)

## Red Flags — Cần dừng lại và báo cáo
- [ ] Build error trong `src/constants/mockData.ts` → parse error, check string syntax
- [ ] Live site blank/500 → check Vercel logs
- [ ] Sanity returns 0 products → BÌNH THƯỜNG, dùng mockData fallback
- [ ] fetchers.ts thay đổi không cần thiết → revert
- [ ] Dùng `&&` trong PowerShell → sai, dùng `;` thay thế

## Nodes đang build dở (cập nhật mỗi session)
- [ ] Test 2 Telegram bots (nhắn /start)
- [ ] Tạo Telegram group "Maison HQ", add 2 bots, lấy group ID
