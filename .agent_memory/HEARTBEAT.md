# HEARTBEAT.md — Checklist "tỉnh dậy"

## Khi bắt đầu mỗi session (MANDATORY)
- [ ] Đọc `.agent_memory/MEMORY.md` — project state hiện tại
- [ ] Đọc `.agent_memory/memory/[hôm-nay].md` — công việc đang dở
- [ ] Check https://www.maisondeson.com/ — live site đang hiển thị gì?
- [ ] `git status` — có uncommitted changes không?
- [ ] Báo cáo cho user: "Đang làm X, dở Y, vấn đề Z"

## Sau mỗi hành động (MANDATORY — KHÔNG NGOẠI LỆ)
Append vào `.agent_memory/memory/[YYYY-MM-DD].md`:
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
