# ANTI_TASK_TEMPLATE.md
## Maison de SON — Standard task handoff for Anti

---

## 1. Mục đích file này

Đây là mẫu giao việc chuẩn giữa Coder và Anti.

Từ nay, mỗi task giao cho Anti nên có **2 phần song song**:
1. **Một file spec đầy đủ** lưu trong workspace
2. **Một tin nhắn ngắn** để gửi thẳng cho Anti

Mục tiêu:
- giảm hiểu sai task
- giảm bỏ sót hạng mục
- làm đúng ngay từ vòng đầu
- dễ audit, dễ handover, dễ scale

---

## 2. Cấu trúc giao việc chuẩn

Mỗi task nên gồm 6 khối sau:

### A. Context
- Task là gì?
- URL / file / page liên quan là gì?
- Vì sao cần làm?
- Đây là sửa mới, rewrite hay deploy?

### B. Deliverable
- Anti phải tạo / sửa / kiểm tra cái gì?
- Kết quả cuối cùng phải nhìn ra sao?
- Có cần deploy không?

### C. Rule bắt buộc
- Không được tự ý rewrite?
- Không được đổi layout?
- Không được dùng ảnh sai?
- Không được lặp anchor?
- Không được đổi slug / schema / metadata?

### D. Asset & spec đi kèm
- Nội dung chuẩn
- Anchor text map
- SEO package
- Schema yêu cầu
- Image plan
- Alt text
- CTA / internal links

### E. Checklist thực thi
- Liệt kê từng mục Anti phải tick xong

### F. Format báo lại
- Anti phải báo lại những gì sau khi làm xong

---

## 3. Template file spec đầy đủ

Dùng khung dưới đây cho các task chính thức.

```md
# [TASK NAME]
## URL / PAGE / FILE:
## Mục tiêu:

---

## 0. YÊU CẦU CHUNG
- ...
- ...
- ...

## 1. BỐI CẢNH
- ...
- ...

## 2. DELIVERABLE
- ...
- ...

## 3. RULE BẮT BUỘC
1. ...
2. ...
3. ...

## 4. NỘI DUNG / SPEC CHUẨN
### 4.1 Nội dung
...

### 4.2 Anchor text
| Anchor text | URL | Loại |
|---|---|---|

### 4.3 SEO package
- SEO title:
- Meta description:
- Focus keyword:
- Secondary keywords:
- Canonical:
- Schema:

### 4.4 Image plan
- Hero:
- Image 2:
- Image 3:
...

## 5. CHECKLIST THỰC THI
- [ ] ...
- [ ] ...
- [ ] ...

## 6. OUTPUT CẦN BÁO LẠI
1. ...
2. ...
3. ...
```

---

## 4. Template tin nhắn ngắn gửi Anti

Sau khi có file spec, luôn gửi thêm 1 tin nhắn ngắn theo format này:

```md
Anti, xử lý task theo file: `[TEN_FILE]`

Ưu tiên đúng 5 việc:
1. ...
2. ...
3. ...
4. ...
5. ...

Lưu ý bắt buộc:
- không tự rewrite ngoài spec
- không bỏ sót ảnh / anchor / schema
- làm xong báo lại theo đúng checklist ở cuối file
```

Mục đích của tin nhắn này:
- Anti hiểu ngay việc phải làm
- biết thứ tự ưu tiên
- không đọc file theo kiểu lướt rồi sót phần quan trọng

---

## 5. Template riêng cho task Content

Nếu task là bài viết / rewrite / SEO article, spec bắt buộc phải có đủ:

### A. Nội dung bài
- bản final để Anti copy đúng
- rule giữ nguyên paragraph breaks
- rule giữ nguyên heading và bullets

### B. Voice rule
- giọng lịch sự / hàn lâm / tự nhiên / sắc đến mức nào
- từ nào tránh dùng
- ví dụ một số cụm bị cấm nếu cần

### C. Anchor text map
- mỗi anchor dùng 1 lần
- link đúng URL đích
- homepage / brand / product links

### D. SEO package
- SEO title
- meta description
- focus keyword
- secondary keywords
- canonical
- schema type

### E. Image plan
- tổng số ảnh yêu cầu
- hero ở đâu
- mỗi sản phẩm 1 ảnh đúng chai
- alt text từng ảnh
- cấm ảnh sai chai / ảnh thay thế mơ hồ

### F. QA cuối cùng
- dấu tiếng Việt đúng chưa
- encoding đúng chưa
- article body render đúng spacing chưa
- internal links đúng chưa
- ảnh đúng section chưa

---

## 6. Template riêng cho task UI / Code / Deploy

Nếu task là UI / code / deploy, spec nên có:
- page / component bị ảnh hưởng
- mục tiêu UI cụ thể
- breakpoint cần check
- dark/light mode nếu có
- build requirement
- live URL cần verify
- có cần commit / deploy / screenshot hay không

---

## 7. Quy tắc vận hành mới

Từ nay, với mọi task quan trọng giao Anti:

### Bắt buộc phải có:
- [x] 1 file spec lưu trong workspace
- [x] 1 tin nhắn ngắn để gửi Anti
- [x] 1 checklist báo lại

### Không được làm kiểu:
- chỉ nhắn miệng mà không có file
- chỉ có file mà không có tin nhắn chốt ý chính
- giao việc nhưng không quy định format báo lại

---

## 8. Lợi ích thực tế

Áp dụng đúng quy trình này sẽ giúp:
- giảm hiểu sai task
- giảm vòng lặp sửa đi sửa lại
- tăng tỷ lệ làm đúng ngay lần đầu
- giữ đồng nhất voice / SEO / image / link structure
- dễ truy vết khi có lỗi
- dễ bàn giao giữa các phiên làm việc

---

## 9. Quick checklist cho Coder trước khi giao Anti

Trước khi gửi task, tự check:
- [ ] Đã có file spec chưa?
- [ ] Nội dung final đã chốt chưa?
- [ ] Đã ghi rõ điều cấm chưa?
- [ ] Đã có SEO package chưa?
- [ ] Đã có image plan chưa?
- [ ] Đã có anchor map chưa?
- [ ] Đã có checklist báo lại chưa?
- [ ] Đã có tin nhắn ngắn gửi kèm chưa?

---

## 10. Mẫu tên file gợi ý

- `ANTI_UPDATE_ARTICLE_[slug]_[date].md`
- `ANTI_FIX_UI_[page]_[date].md`
- `ANTI_DEPLOY_[scope]_[date].md`
- `ANTI_AUDIT_[scope]_[date].md`

Giữ tên file rõ để dễ tìm lại sau này.
