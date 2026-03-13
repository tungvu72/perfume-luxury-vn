# qc-gates.md

## Gate 1 — Source integrity
FAIL nếu:
- dữ liệu estimated / inferred / approximate
- bịa field từ trí nhớ hoặc cache mơ hồ
- nhét trạng thái block vào content field

## Gate 2 — Scope integrity
FAIL nếu:
- Coder sửa metadata/schema/deploy
- Anti tự viết lại content
- Research tự inject/deploy

## Gate 3 — Canonical integrity
FAIL nếu:
- tự đổi canonical name không evidence
- tự suy luận concentration
- merge nhầm flanker / concentration hợp lệ

## Gate 4 — Data field integrity
### Exact-verify only
Chỉ pass nếu verify chắc:
- `perfumer`
- `topNotes`
- `middleNotes`
- `baseNotes`

### CẤM estimate
- `accords.value`
- `longevity`
- `sillage`
- `seasons`
- `dayNight`
- `vibes`
- `sizes`
- `basePrice`

## Gate 5 — Encoding integrity
FAIL nếu có mojibake / lỗi UTF-8 kiểu:
- `M�i huong`
- `l�`
- mất dấu tiếng Việt trong source/live

## Gate 6 — Build + live integrity
FAIL nếu:
- build fail
- live page không hiện content như report
- ảnh broken / sai chai ở batch full completion

## Gate 7 — Reporting integrity
FAIL nếu:
- thiếu Count chính xác
- thiếu ID list
- thiếu commit
- thiếu build result
- tự ghi DONE khi chưa có QC pass
