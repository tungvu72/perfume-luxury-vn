# SKILL ĐĂNG SẢN PHẨM V2 (SỬA LỖI NHẦM CARD / NHẦM TÊN FILE)

## Mục tiêu
Đăng sản phẩm đúng 100% theo chai thực tế: đúng variant, đúng nồng độ, đúng ảnh main/card, đúng tên file.

## 0) Quy tắc vàng
- Không dùng mapping mơ hồ theo STT để suy đoán card.
- Card phải được xác thực theo **slug + tên chai + nồng độ + text góc trái trên card**.
- Nếu không xác thực được bằng mắt -> để pending, không gắn card.

## 1) Input bắt buộc
- STT
- Brand
- Name
- Concentration
- Product id trong `mockData.ts`
- URL trang Fragrantica mục tiêu

## 2) Bước lấy ảnh (bắt buộc theo thứ tự)
1. Mở trang Fragrantica đúng variant.
2. Xác nhận trang mô tả khớp dữ liệu sản phẩm (gender, year, notes chính).
3. Lấy fimgs ID từ trang đó.
4. Tải ảnh:
- Main: `https://fimgs.net/mdimg/perfume/o.[ID].jpg`
- Card: `https://fimgs.net/mdimg/perfume-social-cards/en-p_c_[ID].jpeg`
5. Đặt tên file card chuẩn:
- `[STT]. [BRAND UPPERCASE] [NAME] [CONC].jpeg`
- Ví dụ: `084. DOLCE & GABBANA The One EDP.jpeg`

## 3) Gate xác minh card (BẮT BUỘC)
- [ ] Nhìn góc trái trên card: tên chai trùng 100%.
- [ ] Nồng độ trùng 100% (EDT/EDP/Parfum).
- [ ] Không nhầm line khác (vd The One vs The One for Men).
- [ ] Ảnh card và ảnh main cùng đúng 1 variant.
- [ ] Tên file card khớp format chuẩn.

## 4) Cập nhật dữ liệu trong mockData.ts
- `image` trỏ đúng ảnh main.
- `images[]` có entry fragram đúng main.
- Nếu có owner folder thì giữ riêng, không trộn nguồn sai chai.
- Không sửa source code khác phạm vi task.

## 5) Verify
- `npx eslint src/constants/mockData.ts --fix`
- `npx next build`
- Pass mới commit/push.

## 6) Báo cáo bắt buộc sau khi làm
- ID đã dùng
- Link nguồn Fragrantica
- Tên file main/card đã lưu
- Kết quả build
- URL production cần check

## 7) Patch cho case hiện tại
3 chai cần card:
- `006` Al Ambra Dubai Musk
- `080` Diptyque Fleur de Peau
- `084` Dolce & Gabbana The One EDP

Ghi chú riêng cho `084`:
- Chỉ chấp nhận card đúng variant "The One" nữ (không phải "The One for Men").
- Tên file chuẩn đề xuất: `084. DOLCE & GABBANA The One EDP.jpeg`

