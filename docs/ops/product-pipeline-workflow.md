# product-pipeline-workflow.md

## Mục tiêu
Đưa catalog Maison de Son về trạng thái 218 sản phẩm sạch duplicate, content hiển thị đúng, metadata an toàn, ảnh hợp lệ, build pass và live verify được.

## Lane 1 — Coder
1. Lấy queue READY_FOR_CONTENT
2. Viết `productCopy`
3. Xuất batch JSON
4. Append handoff report cho Anti

## Lane 2 — Anti
1. Inject batch content do Coder tạo
2. Build verify
3. Nếu có task enrich: chỉ enrich field được phép
4. Deploy / live verify nếu task yêu cầu
5. Báo `PENDING_CODER_QC`

## Lane 3 — Research (khi có)
1. Tìm ảnh / source / verify metadata khó
2. Xuất handoff JSON sạch cho Anti
3. Không tự inject

## Rule chung
- Không ai được vượt scope role của mình
- Batch chưa qua QC thì không DONE
- Repo state thực tế luôn thắng report text
- Khi source bị block: không bịa, không bypass
