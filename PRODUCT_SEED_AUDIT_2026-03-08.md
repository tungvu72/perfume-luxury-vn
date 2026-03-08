# PRODUCT SEED AUDIT — 8 chai hiện có
*Cập nhật: 08/03/2026*

## Nguồn đang dùng
- Runtime fallback: `src/constants/mockData.ts`
- Tổng seed hiện có: **8 chai**

## Chuẩn đối chiếu mới (theo chỉ đạo CEO)
- **Fragrantica** = nguồn chính cho thông tin mùi, note, ảnh hero/gallery đối chiếu
- **Kenperfume** = nguồn giá tham khảo

---

## KẾT LUẬN NHANH

### Giữ và sửa ít (salvage tốt)
1. **Dior Sauvage Elixir**
2. **Bleu de Chanel EDP**
3. **Creed Aventus**
4. **Baccarat Rouge 540**

### Giữ nhưng phải làm lại khá mạnh
5. **Stronger With You Intensely**
6. **YSL Black Opium EDP**
7. **Tom Ford Noir Extreme**

### Nên cân nhắc loại khỏi round 1 / không ưu tiên trước
8. **Lattafa Khamrah**

---

## AUDIT CHI TIẾT TỪNG CHAI

## 1) Dior Sauvage Elixir
**Trạng thái:** GIỮ — sửa ít đến vừa

**Điểm tốt:**
- Đúng chai chính, đúng intent mạnh
- Hero/galleries đang đi từ fimgs/fragram là đúng hướng
- Có giá, notes, score, verdict cơ bản

**Điểm cần sửa:**
- `subName: "Parfum"` dễ gây nhiễu; cần check lại naming hiển thị chuẩn cho Elixir
- Copy vẫn hơi phô và quảng cáo quá tay
- Cần đối chiếu lại score/claims theo chuẩn giọng Maison de SON mới
- Cần confirm ảnh hero đúng bản Elixir đang dùng

**Phán quyết:** **SALVAGE**

---

## 2) Giorgio Armani Stronger With You Intensely
**Trạng thái:** GIỮ — làm lại khá mạnh

**Điểm tốt:**
- Chọn chai đúng nhu cầu thị trường VN
- Có ảnh Fragrantica/community để cứu được

**Điểm cần sửa:**
- `id` đang là `armani-stronger-with-you` nhưng tên thực là **Stronger With You Intensely** → slug chưa đủ sạch
- Dễ nhầm với Stronger With You EDT / Absolutely / Intensely
- Cần chốt lại naming, version, slug, ảnh hero đúng bản Intensely
- Nội dung hiện tại hơi “quảng cáo TikTok”

**Phán quyết:** **REBUILD SOFT**

**Gợi ý slug nên xem lại:**
- `armani-stronger-with-you-intensely`
- hoặc `stronger-with-you-intensely`

---

## 3) Lattafa Khamrah
**Trạng thái:** KHÔNG ƯU TIÊN ROUND 1

**Điểm tốt:**
- Viral mạnh
- Dễ có ảnh và data Fragrantica
- Giá dễ tiếp cận

**Điểm yếu:**
- Chưa phải chai xương sống mạnh nhất để build authority giai đoạn đầu
- Nếu round 1 đang chỉ có 8 slot seed, Khamrah nên nhường chỗ cho chai có intent cốt lõi mạnh hơn
- Có thể để round 2/3 sau khi trục flagship ổn

**Phán quyết:** **DEPRIORITIZE**

---

## 4) Bleu de Chanel EDP
**Trạng thái:** GIỮ — sửa ít

**Điểm tốt:**
- Chai flagship cực mạnh cho SEO và conversion intent
- Naming khá sạch
- Hình hiện tại đi đúng hướng, đúng bản EDP
- Có thể dùng làm template vàng cho nhóm designer nam

**Điểm cần sửa:**
- Tone copy cần bớt khoa trương
- Cần đối chiếu lại notes + prices từ Fragrantica/Kenperfume
- Check lại gallery xem có ảnh nào đẹp hơn để làm hero

**Phán quyết:** **SALVAGE HIGH PRIORITY**

---

## 5) YSL Black Opium EDP
**Trạng thái:** GIỮ — làm lại vừa đến mạnh

**Điểm tốt:**
- Intent nữ rất mạnh
- Có traffic/search demand thật
- Có đủ lý do để giữ trong core set đầu

**Điểm cần sửa:**
- Cần rà lại notes/middle notes vì hiện có khả năng phrasing chưa chuẩn
- Copy đang rất editorial cũ, dài và phô
- Cần kiểm chứng lại ảnh hero + gallery đúng bản EDP, không lẫn flankers

**Phán quyết:** **REBUILD MEDIUM**

---

## 6) Creed Aventus
**Trạng thái:** GIỮ — sửa ít đến vừa

**Điểm tốt:**
- Flagship cực mạnh, bắt buộc nên có
- Ảnh hiện tại ổn để salvage
- Data nền tương đối usable

**Điểm cần sửa:**
- Bớt claim/giọng cường điệu
- Cần rà lại perfumer/batch controversy wording cho trung tính hơn
- Giá Kenperfume cần đối chiếu lại cẩn thận

**Phán quyết:** **SALVAGE HIGH PRIORITY**

---

## 7) Baccarat Rouge 540
**Trạng thái:** GIỮ — sửa ít đến vừa

**Điểm tốt:**
- Flagship unisex cực mạnh
- Có giá trị brand/entity tốt cho site
- Data và image hiện tại salvage được

**Điểm cần sửa:**
- Phải phân biệt rõ EDP vs Extrait trong wording + sizes
- Copy cần tiết chế hơn
- Notes và accord cần check lại theo Fragrantica chuẩn

**Phán quyết:** **SALVAGE HIGH PRIORITY**

---

## 8) Tom Ford Noir Extreme
**Trạng thái:** GIỮ — làm lại vừa

**Điểm tốt:**
- Tốt cho phân khúc nam buổi tối / luxury designer
- Vẫn đáng có trong core set ban đầu

**Điểm cần sửa:**
- Cần xác minh lại notes chính và cách mô tả cho đúng bản EDP
- Hero/gallery cần check lại xem có đang lẫn ảnh bản khác không
- Copy cũ hơi dài và overdramatic

**Phán quyết:** **REBUILD MEDIUM**

---

## ĐỀ XUẤT XỬ LÝ ROUND 1 (TỪ CHÍNH 8 CHAI NÀY)

## Nhóm A — làm trước ngay (4 chai)
1. Bleu de Chanel EDP
2. Dior Sauvage Elixir
3. Creed Aventus
4. Baccarat Rouge 540

**Lý do:**
- Đây là 4 chai vừa mạnh SEO, vừa mạnh entity/brand, vừa là xương sống cho ranking và internal links.

## Nhóm B — làm ngay sau đó (3 chai)
5. YSL Black Opium EDP
6. Tom Ford Noir Extreme
7. Stronger With You Intensely

## Nhóm C — tạm hoãn
8. Lattafa Khamrah

---

## QUYẾT ĐỊNH VẬN HÀNH

### Không nên làm lúc này
- Không xoá toàn bộ seed rồi nhập lại từ đầu một cách mù
- Không giữ nguyên seed hiện tại rồi coi như data thật

### Nên làm
- Dùng **8 chai hiện tại làm base audit**
- Với mỗi chai:
  - nếu salvage được → sửa
  - nếu naming/version sai → rebuild đúng
  - nếu không hợp ưu tiên round 1 → hạ xuống sau

---

## BƯỚC TIẾP THEO ĐỀ XUẤT

Ngay sau audit này:
1. Chuẩn hóa **thứ tự 4 chai làm trước**
2. Với từng chai:
   - chốt tên chuẩn
   - chốt slug chuẩn
   - chốt ảnh hero từ Fragrantica
   - chốt giá Kenperfume
   - rewrite verdict/description ngắn gọn
3. Sửa trực tiếp vào `src/constants/mockData.ts` trước để site chạy sạch hơn
4. Sau đó mới nghĩ tới import flow lớn hơn
