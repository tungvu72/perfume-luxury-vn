# ANTI PROMPT — UPDATE TRACKER CHO BATCH 1

Cập nhật `docs/CODER_TASK_TRACKER.json` theo evidence thật đang có trong repo.

## Mục tiêu
Đồng bộ tracker với output file thực tế đã tồn tại, không để trạng thái lệch nữa.

## Rule bắt buộc
- Không bốc phét
- Chỉ update nếu file output tồn tại thật
- Không đánh dấu done nếu chưa có evidence cụ thể
- Nếu verify script fail thì ghi rõ fail, không tự pass

## Việc cần làm

### 1. Kiểm tra file output thực tế
Kiểm tra tối thiểu các file này có tồn tại:
- `docs/reports/batch1a-coder-final-part1.json`
- `docs/reports/batch1a-coder-final-part2.json`
- `docs/reports/batch1a-coder-final-part3.json`
- `docs/reports/batch1a-coder-final-part4.json`
- `docs/reports/batch1a-coder-final-part5.json`
- `docs/reports/batch1a-coder-final-part6.json`
- `docs/reports/batch1b-coder-final.json`

### 2. Chạy verify script
Chạy:
- `scripts/verify-coder-work.js`

Nếu pass thì ghi rõ proof.
Nếu fail thì ghi rõ fail reason vào `coderNote` hoặc note tương đương.

### 3. Update tracker
File cần update:
- `docs/CODER_TASK_TRACKER.json`

#### Task 1
- id: `BATCH-1A-REVIEW`
- nếu evidence đủ thì update:
  - `status`: `done` hoặc trạng thái đúng với thực tế
  - `proof`: ghi rõ các file part1-part6
  - `coderNote`: ghi ngắn gọn số part / thời điểm / verify status

#### Task 2
- id: `BATCH-1B-SEO`
- nếu evidence đủ thì update:
  - `status`: `done` hoặc trạng thái đúng với thực tế
  - `proof`: `docs/reports/batch1b-coder-final.json`
  - `coderNote`: ghi ngắn gọn verify status

### 4. Báo lại theo format này
- Tracker updated: Yes/No
- BATCH-1A-REVIEW: done/blocked
- BATCH-1B-SEO: done/blocked
- Verify script: pass/fail
- Proof paths:
  - ...
- Nếu blocked, blocked vì gì

## Điều kiện PASS
- `docs/CODER_TASK_TRACKER.json` được update thật
- proof path ghi đúng file thật
- không còn để `assigned` nếu output đã có đủ evidence
- không tự kết luận pass nếu verify chưa pass