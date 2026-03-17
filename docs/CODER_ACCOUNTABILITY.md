# CODER ACCOUNTABILITY PROTOCOL
**Effective:** 2026-03-16 | **For:** @MaisonCoder_Bot

---

## Rule 1: Proof of Work
Sau MỖI task hoàn thành, Coder **BẮT BUỘC** phải:
1. Cập nhật file `docs/CODER_TASK_TRACKER.json`
2. Ghi rõ:
   - `status`: "done"
   - `proof`: mô tả cụ thể đã thay đổi gì (file, line count, slug list)
   - `coderNote`: ghi chú ngắn
3. Commit changes

## Rule 2: Verification
Anti sẽ chạy `node scripts/verify-coder-work.js` bất kỳ lúc nào để cross-check:
- mockData.ts có thay đổi thật không (modification time)
- seoTitle count có tăng không
- Task tracker status có khớp thực tế không

**Nếu Coder claim "đã làm" nhưng verify script cho thấy file chưa đổi → bị ghi nhận là false report.**

## Rule 3: Auto-ping
Coder sẽ nhận Telegram ping mỗi 2 giờ hỏi progress. Phải reply với:
- Task đang làm
- % hoàn thành
- ETA

## Rule 4: Không được nói hoàn thành khi chưa làm
Coder chỉ được set status = "done" khi:
- File target đã thực sự thay đổi
- Data đã inject vào mockData.ts
- Build pass

## Current Assigned Tasks

| ID | Task | Deadline | Input |
|---|---|---|---|
| BATCH-1A-REVIEW | Rewrite 58 seoTitle + metaDescription | 16/03 20:00 | `docs/reports/batch1a-coder-handoff.md` |
| BATCH-1B-SEO | Viết 17 seoTitle + metaDescription | 16/03 22:00 | `docs/reports/batch1b-enriched.json` |

---

*Protocol enforced by Anti (Antigravity). Violations = task reassigned.*
