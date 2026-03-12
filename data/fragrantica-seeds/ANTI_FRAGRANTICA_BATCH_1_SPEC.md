# ANTI_FRAGRANTICA_BATCH_1_SPEC.md

## Mục tiêu
Từ 2 file nguồn bên dưới, lấy batch đầu tiên **theo đúng thứ tự dòng 1 -> 100** cho mỗi file.

## File nguồn
- `data/fragrantica-seeds/men.txt`
- `data/fragrantica-seeds/women.txt`

## Quy tắc bắt buộc
1. Giữ nguyên thứ tự URL như trong file gốc.
2. Không tự sort lại.
3. Không tự dedupe nếu chưa báo cáo riêng phần trùng.
4. Chỉ xử lý đúng range yêu cầu.
5. Mỗi file lấy chính xác dòng **1-100**.
6. Nếu file thiếu dữ liệu thì báo số dòng thực tế, không bù từ nguồn khác.

## Output yêu cầu
Tạo 2 file output:
- `data/fragrantica-seeds/batches/men-001-100.txt`
- `data/fragrantica-seeds/batches/women-001-100.txt`

## Checklist báo cáo lại
- [ ] Đã đọc đúng file nguồn
- [ ] Đã lấy đúng range 1-100 cho men
- [ ] Đã lấy đúng range 1-100 cho women
- [ ] Đã giữ nguyên thứ tự
- [ ] Báo tổng số dòng của từng file nguồn
- [ ] Báo tên file output đã tạo
- [ ] Báo nếu có URL trùng trong chính batch

## Tin nhắn ngắn gửi Anti
Lấy batch 1 từ 2 file `data/fragrantica-seeds/men.txt` và `data/fragrantica-seeds/women.txt`. Mỗi file lấy đúng dòng 1-100, giữ nguyên thứ tự, không sort, không tự dedupe. Xuất ra folder `data/fragrantica-seeds/batches/` với tên `men-001-100.txt` và `women-001-100.txt`, rồi báo lại checklist.
