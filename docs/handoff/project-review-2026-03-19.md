# Project Review — Maison De Son

> Ngày: 19/03/2026
> Từ: Anti (Ops Agent)
> Gửi: Coder — đọc và phản hồi

---

## Timeline: 16 ngày (03/03 → 18/03)

| Giai đoạn | Ngày | Output |
|-----------|------|--------|
| Foundation | 03-04/03 | Website live, routing, GA4 |
| Content System | 05/03 | Article engine, author pages, JSON-LD |
| Product Expansion | 11-13/03 | 93 → 210 sản phẩm, copy ~130 chai |
| Image Coverage | 14-15/03 | 126 ảnh verified từ Amazon |
| Quality & Cleanup | 15-16/03 | Repo cleanup, Image SOP, bug fixes |
| Brand + Articles | 17-18/03 | 65 brand pages, article pipeline SOP |

---

## Số liệu hiện tại

| Metric | Số |
|--------|-----|
| Products trong catalog | 210 |
| Có product copy | ~130 (62%) |
| Ảnh chính verified | 126 (60%) |
| Products hoàn chỉnh 100% | 0 |
| Bài viết published | 9 |
| Brand pages | 65 |
| Route pages | 13 |

---

## 5 vấn đề Owner đánh giá

1. **UI/UX xấu** — AI tự design không có mắt thẩm mỹ, không có reference cụ thể
2. **Sản phẩm nhiều nhưng rỗng** — 210 shell, 0 chai hoàn chỉnh 100%
3. **Pages có lỗi khắp nơi** — chưa QA nghiêm túc 1 lần
4. **SEO không có chiến lược** — có bài nhưng không có keyword plan, content calendar, đo lường
5. **Agent team không tự vận hành** — Owner phải làm middleman, giao việc, test, chuyển lời

---

## Đã thống nhất: 14 ngày tới (19/03 → 01/04)

### Scope cố định — chỉ 4 mảng

1. Clone UI từ web mẫu → 5 trang chính
2. 20 sản phẩm flagship hoàn chỉnh 100%
3. 10 bài traffic có keyword research
4. Fix pages lỗi rõ nhất

### 6 rule vận hành mới

1. Owner không làm middleman — giao 1 lệnh, agent tự chạy
2. Mỗi task phải có output hữu hình (file, build, URL, commit)
3. Mọi claim phải có evidence (path, log, route, URL)
4. Làm batch nhỏ — pass xong mới mở batch tiếp
5. Verify tự động bằng script — giảm test tay
6. Trạng thái cứng: draft → integrated → build pass → production live

### Deadline

01/04/2026 — nếu không ra:
- Giao diện đủ đẹp
- 20 sản phẩm đủ chuẩn
- 10 bài đủ tốt
- Site bớt lỗi rõ rệt

→ Kết luận: mô hình hiện tại chưa đáng tiếp tục.

---

## Phân vai hiện tại

| Vai | Agent | Trách nhiệm chính |
|-----|-------|--------------------|
| CEO / Owner | Anh | Quyết định, chọn design reference, duyệt cuối |
| Content + Code | Coder | Viết bài, product copy, sửa code, SEO wording |
| Ops + Research + Ảnh + QA | Anti | Source ảnh, inject data, build, deploy, verify, report |

---

## Hệ thống hiện tại

| Component | Cách hoạt động |
|-----------|---------------|
| Products | `src/constants/mockData.ts` — array trong code |
| Articles | `content/buying-guides/*.md` — markdown filesystem |
| Article parser | `src/sanity/lib/posts.ts` — đọc filesystem, KHÔNG dùng Sanity API |
| Article gate | Frontmatter `status: published` |
| Routing | `src/app/[slug]/page.tsx` — universal router |
| Deploy | Git push → Vercel auto-deploy |
| Brand pages | `content/brand-pages/*.md` + route `/thuong-hieu/[slug]` |

---

## Yêu cầu phản hồi

Coder đọc xong báo cáo này, trả lời:

1. Có sai số liệu nào không?
2. Phân vai như trên có hợp lý không?
3. 4 mảng 14 ngày — Coder nhận phần nào cụ thể?
4. Bắt đầu từ mảng nào trước?
5. 20 chai flagship đề xuất danh sách?
