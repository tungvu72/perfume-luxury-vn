# ANTI_PRESENTATION_SPEC_ARTICLE.md
## Maison de SON — Article Presentation Spec
## Áp dụng cho mọi bài viết knowledge / review / roundup

---

## 1. Mục tiêu\n\n### Rule bắt buộc mới\n- Mọi bài viết phải được kiểm tra và hoàn thiện trên **cả PC và mobile**\n- **Ưu tiên mobile**: mobile phải là phiên bản được tối ưu kỹ hơn, vì đây là bối cảnh đọc chính\n- Không được báo hoàn thành chung chung. Phải báo riêng tình trạng **PC** và **mobile** sau khi làm xong\n

Spec này dùng để Anti fix và kiểm tra phần **trình bày bài viết** trên site Maison de SON.

Phạm vi:
- article hero
- H1 / category label / meta line
- article body typography
- heading hierarchy
- paragraph spacing
- list spacing
- image spacing
- mobile readability

Mục tiêu cuối:
- nhìn sang, thoáng, dễ đọc
- đúng cấp nội dung
- không có lỗi render lặp title / quote / label tiếng Anh
- nhất quán giữa các bài

---

## 2. Rule hiển thị bắt buộc

### 2.1 H1
- H1 **không được có dấu ngoặc kép** ở đầu hoặc cuối
- H1 chỉ xuất hiện **1 lần duy nhất** trên page
- Không được render lặp lại title ở đầu body markdown

### 2.2 Title duplication
- Nếu title đã nằm ở article hero / header block thì body markdown **không được lặp lại nguyên dòng title nữa**
- Phần body phải bắt đầu ngay bằng sapo / đoạn mở bài / image đầu bài theo spec content

### 2.3 Category label
- Không dùng label tiếng Anh cho bài tiếng Việt nếu có bản Việt tương ứng
- Mapping mặc định:
  - Buying Guide → **Cẩm nang chọn mua**
  - Product Review → **Đánh giá sản phẩm**
  - Trend → **Xu hướng**
  - So sánh → **So sánh**
  - How-to → **Hướng dẫn**
  - Brand Story → **Câu chuyện thương hiệu**
- Label phải ngắn, dễ hiểu, đúng ngữ cảnh Việt

---

## 3. Typography hierarchy chuẩn

### 3.1 Body text
Mục tiêu: dễ đọc, không đặc, không quá nhỏ

#### Desktop
- font-size: **18px**
- line-height: **1.9**

#### Mobile
- font-size: **16px** hoặc **17px**
- line-height: **1.85** đến **1.9**

### 3.2 H2
- H2 phải **lớn hơn rõ rệt** so với body
- Desktop: **26px–32px**
- Mobile: **22px–26px**
- font-weight: **semibold hoặc bold**
- line-height: chặt hơn body, khoảng **1.3–1.4**
- margin-top phải đủ để tạo block mới rõ ràng

### 3.3 H3
- H3 vẫn phải nổi hơn body
- Desktop: **22px–24px**
- Mobile: **18px–20px**
- font-weight: **semibold**
- Không được để H3 nhìn như body in đậm

### 3.4 Meta text
- Author / date / read time nhỏ hơn body
- Không cạnh tranh thị giác với H1 và H2

---

## 4. Spacing chuẩn

### 4.1 Paragraph
- Mỗi paragraph phải có khoảng cách rõ ràng
- Không để các đoạn dính nhau thành khối đặc
- Gợi ý tối thiểu:
  - `margin-bottom: 1.25rem` đến `1.5rem`
  - nếu dùng Tailwind prose: paragraph spacing tương đương **my-5** hoặc **my-6**

### 4.2 Heading spacing
- H2 phải có khoảng cách lớn hơn paragraph thường
- Gợi ý:
  - khoảng cách phía trên H2: **2.5rem–3rem**
  - khoảng cách phía dưới H2: **1rem–1.25rem**
- H3 nhỏ hơn H2 nhưng vẫn phải có separation rõ

### 4.3 Lists
- Bullet list không được dính sát đoạn trước/sau
- Khoảng cách giữa các bullet vừa phải, dễ scan
- Khoảng cách trước và sau list phải thoáng hơn body bình thường

### 4.4 Images
- Ảnh phải có khoảng cách với đoạn trước và đoạn sau
- Không để ảnh dính ngay vào text làm nghẹt layout
- Gợi ý block image nên có khoảng cách khoảng **2rem** trên và dưới

### 4.5 Product sub-blocks
Các dòng kiểu:
- Hợp với
- Đẹp nhất khi
- Không hợp lắm nếu

phải được tách rõ khỏi paragraph phía trên, không dính liền thành một cục text.

---

## 5. Markdown rendering rules

### 5.1 Không render lại H1 trong body
- Nếu markdown file có H1 trùng title, cần strip hoặc bỏ khi render
- Page article chỉ có **1 H1 ở hero area**

### 5.2 Quote / ký tự thừa
- Không được xuất hiện ký tự thừa như:
  - dấu ngoặc kép bao ngoài title
  - bullet lỗi
  - ký tự escape lộ ra ngoài UI
- Sau khi publish phải kiểm tra trực tiếp trên live page

### 5.3 Body class
- Body article phải dùng prose / typography class đã được tune cho tiếng Việt
- Không dùng default prose nếu khiến heading nhỏ hơn body hoặc spacing quá sít

---

## 6. Visual standard mong muốn

Article body đúng chuẩn Maison de SON phải cho cảm giác:
- editorial
- nhiều nhịp thở
- scan dễ trên mobile
- heading nhìn ra ngay cấu trúc
- paragraph không quá dày
- sang, sạch, không giống blog mặc định

Bài viết không được có cảm giác:
- text dính cục
- heading chìm hơn body
- layout như markdown raw chưa style
- tiếng Việt nhưng label tiếng Anh

---

## 7. QA checklist cho Anti trước khi báo done\n\n### 7.1 Rule kiểm tra theo thiết bị\n- [ ] Đã check bản **mobile** trước\n- [ ] Đã check bản **PC** sau\n- [ ] Mobile đạt mức đọc thoáng, heading rõ, spacing ổn\n- [ ] PC giữ hierarchy đúng và không bị dàn quá loãng\n

- [ ] H1 không có ngoặc kép
- [ ] H1 chỉ xuất hiện 1 lần
- [ ] Không còn dòng title lặp trong body
- [ ] Category label đã Việt hóa đúng mapping
- [ ] H2 lớn hơn rõ ràng so với body
- [ ] H3 lớn hơn body và không bị chìm
- [ ] Paragraph spacing đã thoáng
- [ ] List spacing đã thoáng
- [ ] Image spacing đã đúng
- [ ] Mobile đọc không bị sít\n- [ ] Desktop hierarchy rõ\n- [ ] Đã có kết luận riêng cho mobile\n- [ ] Đã có kết luận riêng cho PC
- [ ] Không còn ký tự render lỗi trên live page

---

## 8. Format Anti báo lại

Sau khi fix xong, báo lại đúng format:

```md
✅ Presentation fix done\n- H1: fixed / not fixed\n- Duplicate title in body: fixed / not fixed\n- Category label: [text đang dùng]\n- Heading hierarchy: fixed / not fixed\n- Paragraph spacing: fixed / not fixed\n- Mobile version: done / not done\n- Mobile check: pass / fail\n- PC version: done / not done\n- PC check: pass / fail\n- Priority note: mobile-first confirmed / not confirmed\n- URL checked: ...
```

---

## 9. Gợi ý dùng file này

Mỗi khi Anti sửa article presentation, chỉ cần dẫn thêm file này cùng file task cụ thể.

Cách dùng:
- File task cụ thể = sửa bài nào, nội dung nào, ảnh nào
- File này = chuẩn trình bày article phải đạt mức nào

