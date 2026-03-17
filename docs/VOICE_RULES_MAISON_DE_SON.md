# VOICE RULES — MAISON DE SON
## Chốt sau vòng review ngày 2026-03-17

## 1. Kết luận thẳng
Coder đã bị quá thiên về kỹ thuật, viết ra câu đúng ý nhưng không giống người thật nói/viết.

Từ nay, ưu tiên tuyệt đối:
- tự nhiên
- gần người đọc
- có hình dung thật
- có tình huống thật
- ít mùi content AI

Không được đánh đổi giọng người thật để lấy câu chữ “đúng khung”.

---

## 2. Những kiểu câu bị cấm hoặc cần hạn chế mạnh

### Cấm dùng các cụm này nếu không có ngữ cảnh rất đặc biệt
- nước hoa gọn
- mùi gọn
- sống được lâu dài
- dùng ngoài đời thật
- bớt kiên nhẫn với
- chuyển dịch rất quan trọng
- ngày càng được ưa chuộng
- tạo thiện cảm
- ít rủi ro
- đúng bối cảnh
- dễ sống chung
- ít drama
- kiểu mùi này
- đây là kiểu mùi
- đây là một lựa chọn
- nó không phải X. Nó là Y.
- bọn tao
- tụi tao

### Hạn chế mạnh các câu mở đầu bằng
- Đây là...
- Đó là...
- Nó là...
- Nếu...

Nếu 3 đoạn liên tiếp mở kiểu giống nhau => fail voice QA.

---

## 3. Rule viết đúng giọng hơn

### A. Viết như đang nói chuyện với người đang thật sự định mua hoặc định dùng
Không giảng bài.
Không lên lớp.
Không viết như đang thuyết trình.

### B. Mỗi đoạn nên có 1 hình dung thật
Ví dụ tốt:
- xịt lúc sáng đi làm, đến trưa vẫn dễ chịu
- bước vào thang máy không ai thấy ngợp
- ngồi phòng máy lạnh lâu vẫn ổn
- đi cà phê sau giờ làm không bị lệch hoàn cảnh

### C. Ưu tiên từ cụ thể, dễ hình dung
Thay vì:
- gọn
- sạch
- sáng
- dễ dùng

hãy cố nói cụ thể hơn:
- không bí
- không ngọt gắt
- đứng gần vẫn dễ chịu
- đi làm không bị quá nồng
- xịt hằng ngày không mệt

### D. Mỗi bài phải có ít nhất 1–2 câu nghe như người thật từng dùng nước hoa nói ra
Ví dụ:
- Có những mùi mới xịt thì hay, nhưng vào phòng kín một lúc là bắt đầu nặng đầu.
- Có chai rất đẹp cho buổi tối, nhưng mang đi làm 8 tiếng thì hơi quá tay.
- Có mùi ngửi trên giấy thấy cuốn, lên da ngày nóng lại thành khác hẳn.

### E. Bớt kết luận to tát
Không dùng giọng kiểu:
- đây là thay đổi rất quan trọng
- điều này phản ánh...
- xu hướng này cho thấy...

Nếu cần kết luận, nói ngắn và gần hơn.

---

## 4. Công thức giọng văn nên học từ các site đã review

### Học từ Ken Perfume
- gần người mua
- ít làm văn
- nói dễ hiểu
- thực tế

### Học từ Vật Vờ Studio
- vào ý nhanh
- chuyển đoạn mượt
- có cảm giác người thật đang kể

### Học từ Apa Niche
- có chất cảm nhận mùi
- có không khí
- có hình ảnh

### Công thức Maison De Son
- gần như Ken
- mượt như Vật Vờ
- có chất mùi như Apa
- nhưng gọn hơn cả 3

---

## 5. QA bắt buộc cho Coder trước khi giao

Nếu bài rơi vào 1 trong các lỗi sau thì chưa được giao:
- đọc lên thấy mùi dịch
- lặp pattern câu liên tục
- toàn khái niệm trừu tượng, không có hình dung thật
- thay từ không tự nhiên kiểu “nước hoa gọn”
- mở bài lạnh, giảng dạy, xa người đọc

---

## 6. QA Anti phải phối hợp chặn

Anti không rewrite giọng văn thay Coder, nhưng phải chặn nếu thấy:
- 3 đoạn đầu đã có mùi AI rõ
- lặp pattern “Đây là / Nó là / Nếu / Nó không phải X. Nó là Y.”
- có từ vô nghĩa hoặc không tự nhiên như “nước hoa gọn”
- title/meta đúng keyword nhưng không có lực click
- duplicate title giữa hero và body

Nếu fail, Anti phải chỉ ra:
- câu nào fail
- fail vì pattern gì
- fail vì từ nào nghe máy

Không được chỉ báo chung chung là “hơi AI”.

---

## 7. Chốt vận hành

Từ nay, trước khi publish bài kiến thức mới:
1. Coder tự QA theo file này
2. Anti QA lại theo file này
3. Một bài chỉ pass khi qua cả 2 lớp QA
