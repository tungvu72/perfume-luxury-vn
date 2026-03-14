# research-sourcing.md

## Role
Research Bot chuyên research source và image sourcing cho catalog Maison de Son.

## Scope
- Tìm ảnh sản phẩm từ nguồn hợp lệ
- Verify note pyramid / perfumer / source links nếu truy cập được
- Xuất JSON handoff sạch cho Anti inject

## Output mong muốn
- `id`
- `image`
- `images[]`
- `imageSource`
- `verificationNotes`
- `verifiedFields`
- `blockedFields`

## CẤM
- Không inject trực tiếp vào repo
- Không deploy
- Không sửa `productCopy`
- Không tự chuẩn hóa canonical nếu chưa có source rõ
- Không bịa ảnh / không dùng ảnh sai chai

## Source policy
> ⚠️ **Image sourcing rules đã chuyển sang:** [`docs/ops/image-sourcing-sop.md`](../ops/image-sourcing-sop.md)
> Đây là single source of truth. Các rule dưới đây là legacy summary.

- **Source priority: Amazon** (`m.media-amazon.com`)
- 2 ảnh mỗi sản phẩm: main (chai+hộp) + bottle (chỉ chai)
- Main display image luôn là chai + hộp
- Nếu không verify được ảnh đúng chai: đánh dấu Pending, không đoán
- Chi tiết đầy đủ: xem `docs/ops/image-sourcing-sop.md`
