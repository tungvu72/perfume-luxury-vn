# ANTI PROMPT — KEYWORD EXPANSION CHO THỊ TRƯỜNG VIỆT NAM

Mục tiêu: mở rộng bộ keyword cho Maison De Son ngoài file Keyword Planner hiện có, nhưng **tuyệt đối không bốc phét**.

## Bối cảnh
- Website: Maison De Son
- Thị trường: Việt Nam
- Chủ đề: nước hoa
- File nguồn đã có sẵn:
  - `D:\claw\.openclaw\media\inbound\từ_khóa_về_nước_hoa---34d15791-cb19-425c-96cb-9bf0acc8bbc2.xlsx`
- Coder đang làm keyword plan từ file này.
- Anti cần bổ sung thêm keyword từ các nguồn ngoài Keyword Planner.

## Rule bắt buộc
1. **Không bốc phét**
   - Không tự bịa volume
   - Không tự bịa xu hướng tăng/giảm
   - Không tự bịa rằng keyword “rất hot” nếu không có evidence
   - Không tự kết luận intent nếu chưa ghi rõ lý do

2. **Mọi dữ liệu phải phân biệt rõ 2 loại**
   - `measured` = có số liệu thật / có source thật
   - `observed` = quan sát từ autocomplete / PAA / related / Shopee / TikTok / Reddit / Search Console / comment

3. **Nếu là observed thì chỉ được ghi đúng thứ nhìn thấy**
   - ví dụ: “xuất hiện trong Google autocomplete”
   - ví dụ: “lặp lại trong comment TikTok nhiều lần”
   - ví dụ: “có mặt trong Search Console query export”

4. **Không merge bừa keyword trùng nghĩa**
   - chỉ group sau khi giữ lại raw source
   - phải lưu cả raw keyword trước

## Nguồn phải đào
Ưu tiên theo thứ tự:
1. Google autocomplete
2. Google People Also Ask
3. Google related searches
4. Search Console của site (nếu Anti có quyền truy cập)
5. Internal search / câu hỏi khách thật / Zalo / comment
6. Shopee / TikTok search / TikTok comment / YouTube comment
7. Fragrantica / Reddit / cộng đồng nước hoa

## Cách làm

### A. Tạo file raw evidence trước
Lưu toàn bộ keyword thô vào:
- `docs/keyword-research/keyword-expansion-vn-raw.csv`

Schema đề xuất:
- keyword
- sourceType
- sourceDetail
- market
- note
- observedAt
- evidence

Trong đó:
- `sourceType`: autocomplete / paa / related / search_console / shopee / tiktok / youtube / reddit / fragrantica / customer_question
- `sourceDetail`: ví dụ “Google autocomplete”, “TikTok search suggest”, “Search Console export 2026-03-17”
- `market`: luôn ghi `VN`
- `evidence`: mô tả ngắn thứ thật sự nhìn thấy, không suy diễn

### B. Tạo file grouped output sau khi lọc
Lưu file đã nhóm vào:
- `docs/keyword-research/keyword-expansion-vn-grouped.md`

Mỗi nhóm cần có:
- cluster name
- keyword list
- source mix
- intent guess
- confidence: high / medium / low
- notes

### C. Nếu có Search Console export
Lưu riêng tại:
- `docs/keyword-research/search-console-query-export-2026-03-17.csv`

Không được chỉ chụp màn hình rồi kết luận. Nếu có export thật thì lưu file thật.

## Khung cluster cần gom
1. Use-case
   - đi làm
   - mùa hè
   - hẹn hò
   - văn phòng
   - đi học
   - quà tặng
   - dưới ngân sách

2. Product / brand intent
   - tên brand
   - tên line
   - tên chai
   - tên chai + review
   - tên chai + giá
   - tên chai + hợp ai

3. Comparison
   - A vs B
   - alternative
   - mùi giống chai nào

4. Trust / buying hesitation
   - thật giả
   - có nên mua không
   - lưu hương bao lâu
   - edt vs edp
   - tester có nên mua không

5. Educational practical
   - xịt thế nào
   - xịt mấy shot
   - xịt lên áo hay da
   - cách giữ mùi lâu trong thời tiết nóng

## Output Anti phải báo lại
Format bắt buộc:
- File raw: [path thật]
- File grouped: [path thật]
- Tổng raw keywords: [số]
- Nguồn đã dùng: [list]
- Có Search Console hay không: Yes/No
- Có gì còn thiếu evidence: [ghi rõ]

## Điều kiện PASS
- Có file raw thật
- Có file grouped thật
- Có phân biệt measured vs observed
- Không có câu chữ kiểu “keyword này hot”, “nên đánh mạnh”, “volume cao” nếu không có evidence
- Có thể bàn giao lại cho Coder để merge vào master keyword plan
