# 🧠 EPISODIC MEMORY — Bộ nhớ kinh nghiệm của AI Team
# Agents ghi lại bài học từ các task đã làm để không lặp lại sai lầm

## Cách dùng:
- Sau mỗi task QUAN TRỌNG → ghi bài học vào đây
- Trước khi làm task tương tự → đọc memory liên quan
- Format: [Agent] | [Task type] | [Bài học]

---

## 💻 CODER — Kinh nghiệm kỹ thuật

### Next.js / TypeScript
- **[2026-03-03]** `params` trong Next.js 15 phải `await` trước khi dùng: `const { id } = await params`
- **[2026-03-03]** Component dùng browser API (scroll, window) phải wrap trong `dynamic(..., { ssr: false })`
- **[2026-03-03]** Sanity image cần `urlFor()` từ `@/sanity/lib/image` — không dùng URL trực tiếp

### Sanity CMS
- **[2026-03-03]** Khi thêm field mới: cập nhật đồng thời schema + TypeScript type + GROQ query + fetcher
- **[2026-03-03]** Test GROQ query tại `/studio` trước khi đưa vào code

---

## 📣 MARKETER — Kinh nghiệm marketing

### Content
- **[2026-03-03]** Khách hàng VN quan tâm nhất: lưu hương bao lâu, giá có xứng đáng không
- **[2026-03-03]** Tone cho brand này: sang trọng nhưng gần gũi, không quá học thuật

### SEO
- **[2026-03-03]** Từ khoá cao nhất: "review nước hoa [tên]", "nước hoa [tên] chính hãng"
- **[2026-03-03]** Bài dưới 1000 từ khó rank — target 1200-1500 từ cho bài review

---

## 👑 LEADER — Kinh nghiệm điều phối

### Quản lý task
- **[2026-03-03]** Khi giao Coder task mới, luôn kiểm tra BLACKBOARD xem Coder có đang bận không
- **[2026-03-03]** Task "sửa lỗi" cần mô tả: lỗi gì → ở đâu → mong muốn kết quả là gì

---

## 📝 Template ghi memory mới:
```
### [Chủ đề]
- **[YYYY-MM-DD]** [Mô tả bài học ngắn gọn, actionable]
```
