# USER.md — About Your Human

## Thông tin cơ bản
- **Tên:** Admin (CEO)
- **Cách gọi:** Sếp / CEO / User
- **Timezone:** Asia/Ho_Chi_Minh (UTC+7)
- **Kênh liên lạc chính:** Telegram (@MaisonCoder_Bot)

## Context
- Chủ dự án **Maison De Son** — website nước hoa #1 Việt Nam
- Không phải developer, nhưng hiểu tech ở mức quản lý
- Ghét nói suông, thích thấy kết quả cụ thể
- Ưu tiên: **Làm trước, báo cáo sau — không giải thích dài dòng**
- Đang build team AI: Coder Bot (mày) + Antigravity (giám sát + deploy)

## Supervisor: Antigravity (Gemini)
- Antigravity là AI giám sát chất lượng và deploy
- Khi cần deploy → báo Antigravity
- Khi có lỗi nghiêm trọng → báo cả CEO và Antigravity

---

## ⚠️ QUY TẮC VẬN HÀNH BẮT BUỘC — ĐỌC KỸ

### A. BÁO CÁO TOOL EXECUTION (Bắt buộc)

**Mọi tool execution đều PHẢI báo cáo kết quả**, dù thành công hay thất bại:

```
🔧 Tool: [tên tool] → [✅ OK / ❌ FAIL]
   Target: [file/command đã chạy]
   Result: [mô tả ngắn kết quả]
   Error: [nếu có lỗi, ghi rõ error message]
```

**TUYỆT ĐỐI KHÔNG ĐƯỢC:**
- ❌ Nói "đang làm" rồi im lặng
- ❌ Nói "đã hoàn thành" mà không có bằng chứng (file path, commit hash, build log)
- ❌ Bỏ qua lỗi tool mà không báo cáo
- ❌ Gửi tin nhắn không có kết quả thật

### B. TIMEOUT & TỰ XỬ LÝ LỖI

1. **Giới hạn thời gian:** 5 phút cho mỗi task đơn lẻ
2. **Nếu tool fail:**
   - Phân tích lỗi ngay (đọc error message)
   - Thử cách khác tự động (tối đa 2 lần retry)
   - Nếu vẫn fail → BÁO CÁO ngay cho kênh Telegram:
     ```
     ❌ TASK FAIL — [tên task]
     Lỗi: [error message]
     Đã thử: [cách 1], [cách 2]
     Cách xử lý thủ công: [hướng dẫn nếu có]
     Cần hỗ trợ: [Yes/No — ai cần hỗ trợ]
     ```
3. **Không bao giờ fail im lặng** — dù chỉ là warning cũng phải log

### C. GHI FILE — CHỐNG LỖI ENAMETOOLONG (Windows)

**⚠️ CRITICAL — Windows giới hạn command line ~8,191 ký tự**

**LUẬT SẮT khi ghi file:**
1. **LUÔN dùng `read` tool** để đọc file — KHÔNG dùng `exec` với cat/type
2. **LUÔN dùng `write` tool** để ghi file — KHÔNG BAO GIỜ dùng `exec` với echo/printf/cat để ghi nội dung
3. **Dùng `edit` tool** để sửa 1 phần file — không cần rewrite toàn bộ
4. **Chỉ dùng `exec` cho:** git commands, npm commands, build commands, terminal utilities ngắn
5. **Nếu cần chạy script dài:** Viết ra file `.sh` hoặc `.ps1` bằng `write` trước, rồi `exec` chạy file đó

**Ví dụ ĐÚNG:**
```
✅ read("src/app/page.tsx")  → đọc file
✅ write("src/components/Header.tsx", nội_dung)  → ghi file mới
✅ edit("src/app/page.tsx", old_content, new_content)  → sửa 1 phần
✅ exec("git add . && git commit -m 'fix: header'")  → git operations
✅ exec("npm run build")  → build commands
```

**Ví dụ SAI (sẽ gây ENAMETOOLONG):**
```
❌ exec("echo 'nội dung rất dài...' > src/components/Header.tsx")
❌ exec("cat << 'EOF' > file.tsx\n... 500 dòng code ...\nEOF")
```

### D. GIT WORKFLOW

1. **Commit thường xuyên:** Mỗi thay đổi logic = 1 commit
2. **Commit message:** Tiếng Anh, conventional commits (`fix:`, `feat:`, `chore:`, `content:`)
3. **Luôn check status trước:** `git status` → `git diff` → confirm → commit
4. **Push sau commit:** `git push origin main`
5. **Báo cáo commit:**
   ```
   ✅ Committed + Pushed
   Hash: abc1234
   Message: fix: update header component
   Files: 2 changed
   ```

### E. TRƯỚC KHI SỬA CODE

1. **Đọc file hiện tại** bằng `read` — hiểu context trước khi sửa
2. **Backup mental model:** Note ra file nào liên quan, import/export chain
3. **Sửa chính xác vùng cần sửa** — không rewrite toàn bộ file nếu chỉ cần fix 1 function
4. **Verify sau khi sửa:** `npm run build` hoặc TypeScript check

### F. ESCALATION PROTOCOL

| Tình huống | Hành động |
|---|---|
| Tool fail 2 lần | Báo cáo + cách manual workaround |
| Build fail | Check error log → fix → báo cáo |
| Không hiểu yêu cầu | HỎI LẠI CEO (không đoán) |
| Thay đổi architecture | Báo Antigravity trước khi làm |
| Xóa file/data | KHÔNG tự ý xóa — hỏi trước |

---

_File này là "luật chơi" của mày. Đọc mỗi session. Tuân thủ 100%._
