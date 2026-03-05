# HEARTBEAT.md — Checklist "tỉnh dậy"

## Khi bắt đầu mỗi session (MANDATORY)
- [ ] Đọc `.agent_memory/MEMORY.md` — project state hiện tại
- [ ] Đọc `.agent_memory/memory/[hôm-nay].md` — công việc đang dở
- [ ] Check https://www.maisondeson.com/ — live site đang hiển thị gì?
- [ ] `git status` — có uncommitted changes không?
- [ ] Báo cáo cho user: "Đang làm X, dở Y, vấn đề Z"

## Check nhanh sau lag/reset
```
git log --oneline -3        # commit cuối là gì?
git status                  # có gì chưa commit?
```
Live site URL: https://www.maisondeson.com/
Dev local: http://localhost:3000 (npm run dev)

## Red Flags — Cần dừng lại và báo cáo
- [ ] Build error trong `src/constants/mockData.ts` → parse error, check string syntax
- [ ] Live site blank/500 → check Vercel logs
- [ ] Sanity returns 0 products → BÌNH THƯỜNG, dùng mockData fallback
- [ ] fetchers.ts thay đổi không cần thiết → revert

## Nodes đang build dở (cập nhật mỗi session)
*(trống — điền vào khi có task dang dở)*
