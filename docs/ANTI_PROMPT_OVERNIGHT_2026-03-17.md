# ANTI PROMPT — OVERNIGHT WORK 2026-03-17

Làm đêm nay theo đúng thứ tự dưới đây.

## Rule chung
- Không bốc phét
- Chỉ làm theo evidence thật trong repo/site/data
- File nào chưa chắc thì ghi `blocked`, không đoán
- Mỗi task phải có output file thật
- Sáng mai báo lại ngắn: file nào xong, file nào blocked, blocked vì gì

---

## TASK 1 — Update tracker Batch 1
Đọc và làm đúng:
- `docs/ANTI_PROMPT_UPDATE_TRACKER_BATCH1.md`

Mục tiêu:
- đồng bộ `docs/CODER_TASK_TRACKER.json` với output thật đang có
- không để tracker lệch nữa

Output cần có:
- `docs/CODER_TASK_TRACKER.json` được update thật nếu evidence đủ

---

## TASK 2 — Làm sạch bộ keyword hiện có
Mục tiêu:
- chuẩn bị input sạch cho Coder chốt backlog traffic

Việc cần làm:
- gom toàn bộ keyword hiện có từ các file đã tạo
- loại keyword trùng rõ ràng
- đánh dấu keyword lỗi font / lỗi encoding
- giữ lại các cột tối thiểu:
  - keyword
  - source
  - measured_or_observed
  - note
- không tự bịa volume
- không tự bịa difficulty

Output bắt buộc:
- `docs/keyword-research/keyword-master-cleaned.csv`

Nếu có keyword lỗi font chưa sửa được sạch thì:
- vẫn giữ raw ở cột note
- ghi rõ là encoding issue

---

## TASK 3 — Audit 20 product pages ưu tiên
Mục tiêu:
- sáng mai Coder có input để chốt schema nâng cấp product page

Việc cần làm:
- chọn 20 product pages quan trọng nhất từ repo/site
- audit theo format:
  - slug
  - title/meta có chưa
  - short description có chưa
  - product copy có chưa
  - FAQ có chưa
  - block hoàn cảnh dùng có chưa
  - block hợp ai / không hợp ai có chưa
  - internal links có chưa
  - ảnh đủ chưa
  - thiếu gì

Output bắt buộc:
- `docs/reports/product-page-audit-top20-2026-03-17.md`

---

## TASK 4 — Rà brand bị trùng / sai tên
Mục tiêu:
- xử lý lỗi user đã phát hiện: brand trùng nhau, brand sai tên

Việc cần làm:
- audit toàn bộ dữ liệu brand hiện có trong repo/CMS-facing data nếu truy cập được từ repo
- tìm:
  - brand trùng slug
  - brand trùng tên nhưng khác format
  - brand sai spelling
  - brand bị lệch tên canonical
- không tự merge nếu chưa chắc
- phải ghi rõ:
  - brand hiện tại
  - lỗi gì
  - brand canonical đề xuất
  - evidence ở đâu

Output bắt buộc:
- `docs/reports/brand-audit-duplicates-canonical-2026-03-17.md`

Format tối thiểu mỗi dòng / mục:
- current value
- issue type
- proposed canonical
- evidence
- confidence: high / medium / low

---

## TASK 5 — Sửa bài clean office scent, diệt câu nghe máy
Đọc và làm đúng:
- `docs/ANTI_PROMPT_FIX_ARTICLE_VOICE_SAID_ERRORS.md`

Mục tiêu:
- rà toàn bài và sửa hết các cụm nghe máy kiểu:
  - chai đi tối
  - chai đi làm
  - các cụm tương tự

Output:
- sửa trực tiếp file:
  - `content/drafts/xu-huong-nuoc-hoa-clean-office-scent-2026-v3-final.md`

---

## Thứ tự ưu tiên bắt buộc
1. TASK 5 — fix bài clean office scent
2. TASK 1 — update tracker Batch 1
3. TASK 4 — brand audit trùng / sai tên
4. TASK 2 — keyword cleaned
5. TASK 3 — product page audit top20

---

## Format báo lại sáng mai
- Task 5: done/blocked — [file]
- Task 1: done/blocked — [file]
- Task 4: done/blocked — [file]
- Task 2: done/blocked — [file]
- Task 3: done/blocked — [file]
- Blocked reason: [nếu có]

## Điều kiện PASS chung
- Có file output thật cho từng task
- Không có kết luận nào không có evidence
- Không nói chung chung kiểu “đã rà xong” nếu không có file