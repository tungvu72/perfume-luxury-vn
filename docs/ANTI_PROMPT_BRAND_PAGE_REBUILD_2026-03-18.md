# ANTI PROMPT — FULL BRAND PAGE REBUILD 2026-03-18

Mục tiêu: **toàn bộ trang brand hiện có** phải được làm lại theo hướng factual hơn, trực quan hơn, mạnh SEO hơn, sạch dữ liệu hơn, và sẵn sàng deploy theo batch.

## Kết quả bắt buộc
1. Rà và xử lý brand trùng / sai tên / sai canonical nếu evidence đủ chắc
2. Làm content pack cho **tất cả brand pages hiện có**
3. Thiết kế lại UI brand page theo hướng **Fragrantica hoặc đẹp hơn**, nhưng hợp Maison De Son
4. Implement thật trong code để toàn bộ brand pages dùng layout mới
5. Chuẩn bị deploy-ready cho **toàn bộ brand pages**, không phải chỉ 1 page mẫu

---

## Rule bắt buộc
- Không bốc phét
- Không bịa lịch sử brand
- Không bịa năm thành lập, năm ra đời, founder, quốc gia, ownership, milestone
- Chỉ dùng fact có evidence thật
- Không chắc thì để `blocked` hoặc `unknown`, không đoán
- Không viết kiểu PR rỗng
- Không dùng giọng bán hàng lộ
- Không viết lan man
- Không để page nào bị bỏ sót khỏi danh sách audit

---

## Rule viết phần brand intro
Mỗi brand page phải có phần giới thiệu factual, gọn, hữu ích, dễ đọc.

### Bắt buộc ưu tiên các ý này
1. Brand là ai
2. Ra đời năm nào
3. Nhà sáng lập là ai
4. Xuất thân / bối cảnh hình thành
5. Quá khứ nổi bật gì
6. Hiện nay brand đứng ở đâu / nổi vì điều gì
7. Phong cách mùi đặc trưng
8. Các dòng/chai tiêu biểu

### Không cần
- làm văn dài
- ca ngợi sáo rỗng
- copy kiểu Wikipedia
- nhồi keyword cứng

### Giọng văn
- trung tính
- có gu
- factual
- không ba hoa
- không “bọn tao / tụi tao / mày”

### Độ dài đề xuất
- intro chính: 180–300 chữ / brand
- thêm bullets factual nếu cần

---

## Cấu trúc content block cho mọi brand page
Mỗi brand page phải có tối thiểu:

### 1. Hero brand
- brand name
- logo
- hero visual
- 1 intro ngắn

### 2. Brand snapshot
- Founded
- Founder
- Country
- Current positioning
- Signature style

### 3. Brand story / overview
- 180–300 chữ
- fact-first

### 4. Best sellers / notable perfumes
- link sang product pages

### 5. Vì sao brand này đáng chú ý
- 3–5 bullets factual

### 6. Related articles / guides
- link sang bài kiến thức liên quan nếu có

---

## UI/UX direction
Mục tiêu: toàn bộ brand pages phải trực quan hơn hiện tại, lấy cảm hứng từ Fragrantica nhưng **không copy**, và nhìn đẹp hơn.

### Bắt buộc khi redesign
1. Có **logo brand** rõ
2. Có **hero visual / banner**
3. Có **brand facts card** nhìn phát hiểu ngay
4. Có **section best sellers** trực quan
5. Có **section brand story** dễ đọc, không thành wall of text
6. Mobile-first
7. Spacing, hierarchy, typography rõ hơn page cũ
8. Toàn bộ brand pages dùng chung 1 hệ layout/component chuẩn

### Không được làm
- nhồi quá nhiều chữ lên đầu page
- để logo/hero quá nhỏ
- design rối như directory cũ
- mobile spacing chật
- chỉ làm 1 page mẫu rồi bỏ các page còn lại

---

## SEO requirements
Mỗi brand page cần có:
- `seoTitle`
- `metaDescription`
- `brandIntro`
- internal links tới product pages
- internal links tới related articles nếu có

### Rule SEO wording
- title tự nhiên
- không nhồi keyword vô hồn
- meta rõ nghĩa, có lực click vừa phải
- không dài lê thê

---

## Việc phải làm trong đêm

### TASK A — Audit full danh sách brand pages
Lập danh sách toàn bộ brand pages hiện có và status từng page:
- brand slug
- brand name current
- canonical brand name đề xuất
- có trùng / sai tên không
- có logo không
- có hero visual không
- có intro không
- có best sellers không
- có related links không
- ready / blocked

### TASK B — Làm content pack cho toàn bộ brand pages
Mỗi brand page phải có:
- seoTitle
- metaDescription
- brandIntro
- snapshot facts
- best sellers list
- related links list (nếu có)

Nếu thiếu fact thì ghi `unknown`, không đoán.

### TASK C — Rebuild UI brand page trong code
Mục tiêu:
- mọi brand pages dùng layout mới
- không làm 1 page demo rồi dừng

Tối thiểu phải có:
- logo block
- hero visual block
- facts card
- intro/story block
- best sellers block
- related content block

### TASK D — Asset mapping cho toàn bộ brand pages
Lập danh sách:
- brand
- logo status
- hero visual status
- asset source / missing

---

## Output bắt buộc

### 1. Report chính
- `docs/reports/brand-page-rebuild-2026-03-18.md`

Trong đó phải có:
- tổng số brand pages
- số page ready
- số page blocked
- data sources / evidence
- UI đã sửa gì
- file code đã sửa
- deploy-ready: yes/no

### 2. Content pack full
- `docs/reports/brand-page-content-pack-2026-03-18.json`

Schema tối thiểu mỗi brand:
- slug
- brandName
- seoTitle
- metaDescription
- brandIntro
- founded
- founder
- country
- positioning
- signatureStyle
- bestSellers
- relatedArticles
- confidence

### 3. Asset status
- `docs/reports/brand-assets-status-2026-03-18.md`

### 4. Nếu có sửa code thật
Ghi rõ trong report:
- file path
- component/page đã sửa
- build pass/fail

---

## Điều kiện PASS
- Không phải 1 page, mà **toàn bộ brand pages** đều được xử lý trong scope đêm nay
- Có content pack cho tất cả brand pages hiện có
- Có UI patch áp dụng cho toàn bộ brand pages
- Có asset status cho toàn bộ brand pages
- Không có fact bịa
- Có report file thật

## Format báo lại sáng mai
- Total brand pages: [n]
- Content pack: done/partial/blocked
- UI patch for all brand pages: done/partial/blocked
- Asset status: done/partial/blocked
- Code files changed: [...]
- Build: pass/fail
- Deploy-ready: yes/no
- Blocked reason: ...