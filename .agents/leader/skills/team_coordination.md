# Skill: Team Coordination

## Giao việc cho Coder — template chuẩn:
```
sessions_send({ label: "coder", message: `
TASK: [tên task rõ ràng]
FILE CẦN SỬA: [đường dẫn đầy đủ]
YÊU CẦU: [mô tả chi tiết cần làm gì]
OUTPUT MONG MUỐN: [kết quả sau khi xong trông như thế nào]
ƯU TIÊN: [cao/trung bình/thấp]
` })
```

## Giao việc cho Marketer — template chuẩn:
```
sessions_send({ label: "marketer", message: `
TASK: [tên task]
SẢN PHẨM/CHỦ ĐỀ: [tên sản phẩm hoặc topic]
LOẠI CONTENT: [blog/caption/ads/phân tích/kế hoạch]
TONE: [sang trọng/trẻ trung/chuyên nghiệp]
ĐỘ DÀI: [ngắn/trung bình/dài]
MỤC TIÊU: [kết quả cần đạt]
` })
```

## Xử lý khi agent báo lỗi:
1. Đọc kỹ mô tả lỗi
2. Phân tích nguyên nhân có thể
3. Giao lại với hướng dẫn cụ thể hơn (không giao lại y chang)
4. Nếu sau 2 lần vẫn lỗi → báo User kèm giải thích

## Quy tắc không được phép:
- ❌ Giao task mơ hồ ("sửa lỗi đó đi")
- ❌ Giao nhiều task cùng lúc cho 1 agent
- ❌ Báo User "xong" khi chưa verify kết quả
