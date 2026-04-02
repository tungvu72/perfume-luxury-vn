# Execution Autopilot Protocol

Cập nhật: 2026-03-29
Áp dụng cho: mọi task code / UI / content repo / deploy của Maison de Son

## Mục tiêu
Cho agent tự chạy trọn chuỗi công việc mà:
- không hỏi lại liên tục
- không commit lẫn file ngoài scope
- không báo xong khi chưa verify production

## Chính sách mặc định (AUTO MODE)
Agent phải tự xử lý theo mặc định sau, không cần hỏi lại user:

1. **Repo bẩn trước task mới**
   - Tự stash toàn bộ thay đổi ngoài scope task mới
   - Không commit lẫn thay đổi cũ
   - Không hỏi user chuyện commit hay stash, trừ khi buộc phải discard

2. **Scope task**
   - Tự xác định allowed files tối thiểu cần sửa
   - Chỉ được stage file thuộc task hiện tại
   - Nếu phát hiện file ngoài scope trong staging → tự unstage ngay

3. **System/log files**
   - Tự bỏ qua file log, memory, workspace-state, docs/tasks tạm, file hệ thống
   - Không được kéo các file này vào commit production nếu task không yêu cầu

4. **Commit flow**
   - Chỉ commit phần thuộc scope hiện tại
   - Không gộp thay đổi từ conversation trước
   - Trước commit phải tự kiểm tra staged file list

5. **Deploy flow**
   - Commit đúng scope → push → chờ production lên → verify production
   - Không dùng localhost làm evidence cuối
   - Chỉ được báo PASS khi đã có evidence production thật

## Chỉ được hỏi user trong 4 trường hợp
Agent chỉ được phép dừng và hỏi khi gặp một trong các case sau:

1. Cần **discard** thay đổi có nguy cơ làm mất dữ liệu
2. Buộc phải sửa thêm file ngoài scope mà không thể tránh
3. Gặp **git conflict / merge conflict / rebase conflict**
4. Verify production cho ra kết quả mâu thuẫn, không thể tự kết luận

Ngoài 4 case trên: **không hỏi, tự xử lý tiếp**.

## Giao thức thực thi chuẩn
### Phase A — Preflight tự động
- Kiểm tra repo
- Tự stash phần ngoài scope
- Đưa working tree về trạng thái làm việc an toàn

### Phase B — Scope sạch
- Xác định objective
- Xác định allowed files tối thiểu
- Chỉ sửa đúng các file đó

### Phase C — Stage sạch
- Stage đúng file trong scope
- Tự kiểm tra staged files
- Nếu lẫn file ngoài scope → tự unstage

### Phase D — Deploy sạch
- Commit
- Push
- Verify production
- Báo cáo ngắn có evidence

## Format báo cáo bắt buộc
```txt
✅ [Task]
File: ...
Commit: ...
Check: https://www.maisondeson.com/...
Evidence: production verified
Kết luận: PASS / BLOCKED
```

## Lệnh vận hành cố định cho agent
```txt
Từ nay bỏ SOP hỏi lại thủ công. Áp dụng Execution Autopilot Protocol.
Mặc định tự stash mọi thay đổi ngoài scope, tự bỏ qua file log/system, tự unstage file ngoài scope, tự commit đúng scope, tự deploy và tự verify production. Chỉ được hỏi user khi: cần discard dữ liệu, phải mở rộng scope bắt buộc, gặp git conflict, hoặc production verify mâu thuẫn. Ngoài ra phải tự chạy một mạch đến kết quả thật.
```

## Nguyên tắc chốt
- An toàn theo kiểu **fail-safe tự động**, không phải hỏi-vặt
- Mặc định agent phải tự dọn đường để làm việc
- User chỉ can thiệp ở case rủi ro thật sự
