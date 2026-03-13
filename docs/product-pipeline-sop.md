# SOP — Product Pipeline Anti (Chống Duplicate + Không Bịa Data)

Cập nhật: 2026-03-13
Mục tiêu: cố định quy trình để mọi batch sản phẩm sau này không bị duplicate, không lệch seed, không bịa metadata, không publish bẩn.

## 1) Source of Truth
Chỉ được lấy sản phẩm từ:
- `data/fragrantica-seeds/men.txt`
- `data/fragrantica-seeds/women.txt`
- manifest/batch generate trực tiếp từ 2 file trên

### Cấm tuyệt đối
- Tự thêm item ngoài seed
- Tự đổi tên sản phẩm theo trí nhớ
- Tự thêm item để “đủ số lượng”
- Mất liên kết với `sourceUrl` gốc

---

## 2) Identity-Only Shell First
Khi tạo shell mới, chỉ được tạo các field identity an toàn:
- `id`
- `brand`
- `brandSlug`
- `name`
- `subName` (chỉ nếu chắc)
- `gender` (chỉ nếu chắc theo seed/batch)
- `sourceUrl`
- `seedBatch`
- `status`

### Chưa được thêm ở bước shell
- perfumer
- top/middle/base notes
- accords
- longevity
- sillage
- seasonality
- vibes
- scores
- price
- tags chuyên môn
- description
- verdict
- productCopy
- article

Nguyên tắc: **shell trống trước, content sau, enrich sau**.

---

## 3) Canonical Check Bắt Buộc Trước Khi Create
Trước khi tạo bất kỳ item nào, phải check canonical theo 4 tầng.

### 3.1 Normalize tên
Tên phải được chuẩn hóa trước khi so duplicate:
- lowercase
- bỏ accent / dấu
- chuẩn hóa `'`, `’`, `` ` `` về cùng 1 chuẩn
- bỏ ký tự đặc biệt dư
- gộp nhiều khoảng trắng thành 1
- chuẩn hóa token kiểu:
  - `d'hermes` = `d hermes`
  - `l'homme` = `l homme`
  - `eau givree` = `eau givrée`

### 3.2 Check 4 tầng
1. Exact ID match
2. Exact slug/name match
3. Normalized name match
4. Same source URL match

### 3.3 Trạng thái hợp lệ
Mỗi item chỉ được rơi vào 1 trong 4 trạng thái:
- `OK_EXISTING`
- `NEEDS_FIX`
- `NEW_WRITE`
- `BLOCKED_REVIEW`

### Rule
- Match item có sẵn -> không create mới
- Tên gần giống nhưng chưa chắc cùng sản phẩm -> `BLOCKED_REVIEW`
- Khác flanker thật sự -> phải ghi rõ điểm khác rồi mới được create
- Không bao giờ dùng id kiểu `-variant`, `-2`, `-copy`

---

## 4) No Fact Invention
Nếu dữ liệu factual không có nguồn chuẩn, **không được điền**.

### Các field cấm tự đoán
- perfumer
- top/mid/base notes
- accords
- longevity
- sillage
- seasonality
- scores
- price
- sizes
- tags chuyên môn
- description factual
- verdict factual

### Rule xử lý
- Có source chắc -> mới giữ
- Không có source chắc -> để trống / null / blocked
- Source bị chặn -> `BLOCKED_SOURCE`
- Scrape fail **không có nghĩa** được phép đoán

---

## 5) Tách Vai Trò Coder / Anti
### Coder chỉ làm
- `productCopy`
- `article`

### Anti chỉ làm
- audit
- map
- canonical check
- inject
- build verify
- push

### Anti không được
- tự viết content
- tự sửa copy theo ý mình
- tự thêm mô tả sản phẩm
- tự enrich metadata nếu chưa có source chắc

---

## 6) Pre-Inject Validation
Trước khi inject một batch mới, bắt buộc check hết:
- [ ] item có trong seed
- [ ] không trùng source URL
- [ ] không trùng normalized name với canonical item khác
- [ ] không có duplicate shell
- [ ] id sạch, không có `-variant`, `-2`, `-copy`
- [ ] shell chỉ chứa field hợp lệ
- [ ] nếu là content batch: inject đúng `id` đã duyệt

Fail 1 dòng -> không inject, chuyển `BLOCKED_REVIEW`.

---

## 7) Post-Inject QA
Sau mỗi batch:
1. build local
2. check search result
3. spot-check:
   - tên hiển thị
   - URL / slug
   - duplicate search result

### Search QA bắt buộc
Phải test ít nhất:
- exact name
- normalized name không dấu
- brand + product

Ví dụ:
- `terre d hermes`
- `terre d'hermes`
- `hypnotic poison`
- `allure homme sport`

Nếu search ra 2 item cùng 1 sản phẩm -> batch fail.

---

## 8) Hard Stops
Phải dừng ngay và hỏi lại nếu gặp:
- item không có trong seed
- 2 item normalized giống nhau
- source URL map vào 2 product khác nhau
- duplicate/variant mơ hồ
- không xác minh được factual metadata
- search sau inject bị duplicate

Không được đoán để pipeline tiếp tục.

---

## 9) Rule Ra Quyết Định Nhanh
### Khi nào được create mới?
Chỉ khi:
- có trong seed
- không match item cũ theo 4 tầng canonical check
- không duplicate source URL
- không duplicate normalized name

### Khi nào chỉ update item cũ?
Khi:
- cùng source URL, hoặc
- cùng normalized identity, hoặc
- chỉ khác accent/apostrophe/spacing

### Khi nào blocked?
Khi:
- chưa chắc duplicate hay flanker riêng
- source fail
- mapping conflict
- search result bất thường

---

## 10) Report Format Bắt Buộc
Mỗi batch báo đúng format:
- Batch:
- Created:
- Updated:
- Duplicates blocked:
- Build:
- Commit:
- Remaining:

Nếu có issue:
- Issue:
- Action taken:

---

## 11) Checklist Tự Hỏi Trước Mỗi Batch
- item này có trong seed không?
- đã có canonical item chưa?
- normalized name có trùng không?
- source URL có trùng không?
- factual fields có source chưa?
- search sau inject có sạch không?

Nếu bất kỳ câu nào chưa chắc -> `BLOCKED_REVIEW`.

---

## 12) Hiến pháp ngắn cho Anti
1. Không create ngoài seed.
2. Không bịa metadata.
3. Không bypass canonical check.
4. Không dùng id `-variant`, `-2`, `-copy`.
5. Không giữ 2 item cùng sản phẩm chỉ khác accent/apostrophe/spacing.
6. Không inject nếu validation fail.
7. Không push nếu search còn duplicate.
8. Không scrape được thì block, không đoán.
9. Coder viết content, Anti chỉ inject/build/push.
10. Khi nghi ngờ -> block, không phỏng đoán.
