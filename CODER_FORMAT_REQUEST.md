# YÊU CẦU FORMAT CHO CODER BOT

## Vấn đề hiện tại

Khi Coder gửi bài qua Telegram, xuống dòng bình thường (Enter 1 lần) hiển thị đúng trên Telegram. Nhưng khi Anti đưa vào file markdown (.md) cho website, markdown KHÔNG nhận diện xuống dòng đơn — nó gộp thành 1 paragraph dính.

Ví dụ Coder gửi:
```
**Hợp với:** dân văn phòng
**Đẹp nhất khi:** đi làm, họp hành
**Không hợp lắm nếu:** bạn thích mùi nổi bật
```

Website render ra: **Hợp với:** dân văn phòng **Đẹp nhất khi:** đi làm, họp hành **Không hợp lắm nếu:** bạn thích mùi nổi bật (dính 1 dòng)

## Cách fix: Coder gửi file .md thay vì paste text Telegram

Từ bài sau, Coder cần gửi content dưới dạng **file .md** lưu vào thư mục project, KHÔNG paste text trên Telegram.

Format chuẩn trong file .md:

### 1. Tách paragraph = 1 dòng trống

```markdown
Đoạn 1 nội dung ở đây.

Đoạn 2 nội dung ở đây.
```

### 2. "Hợp với / Đẹp nhất khi / Không hợp lắm nếu" — mỗi cái 1 dòng trống ở giữa

```markdown
**Hợp với:** dân văn phòng, người thích sạch

**Đẹp nhất khi:** đi làm, họp hành

**Không hợp lắm nếu:** bạn thích mùi nổi bật
```

### 3. Heading dùng ## (có dòng trống trên và dưới)

```markdown
---

## 2. Prada L'Homme — Mùi văn phòng đẹp đúng nghĩa

Nếu Bleu de Chanel là lựa chọn...
```

### 4. List dùng - hoặc • (có dòng trống trước list)

```markdown
Một chai đi làm đẹp nên có 4 điểm:

- **Mở đầu sạch và gọn** để không gây sốc mũi
- **Độ tỏa vừa phải** để người gần mới cảm nhận rõ
```

### 5. Bold dùng **text** (2 dấu sao)

```markdown
**đúng chất văn phòng nhất**
```

### 6. Divider giữa các section dùng ---

```markdown
---

## Section mới
```

## Quy trình mới

1. Coder viết bài → lưu file .md vào `D:/anti/perfume-luxury-vn/content/drafts/ten-bai.md`
2. Coder báo Anti: "Bài mới ở content/drafts/ten-bai.md"
3. Anti đọc file → thêm frontmatter, internal links, ảnh → deploy

## Lưu ý

- Coder KHÔNG cần thêm frontmatter (title, slug, date...) — Anti sẽ thêm
- Coder KHÔNG cần chèn link internal — Anti sẽ chèn
- Coder KHÔNG cần lo ảnh — Anti sẽ gen + chèn
- Coder CHỈ viết nội dung thuần dạng markdown chuẩn
