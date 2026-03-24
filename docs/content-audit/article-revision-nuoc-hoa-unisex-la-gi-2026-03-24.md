# Article Revision Notes — nuoc-hoa-unisex-la-gi

**Date:** 2026-03-24  
**Commit:** `3a0895f`  
**Live URL:** https://www.maisondeson.com/nuoc-hoa-unisex-la-gi

---

## Heading change

| Cũ | Mới |
|----|-----|
| `## Kết luận nhanh` | `## Tóm tắt nhanh` |

Confirmed live trong TOC sidebar + body text. Verified bằng screenshot `desktop_article_images_check_3_1774365328955.png`.

---

## Rewritten sections

| Section | Loại sửa |
|---------|----------|
| **Mở bài** | Rewrite toàn bộ — bỏ "Trong vài năm gần đây...", thay bằng cách dẫn từ scenario thực tế người mua |
| **Định nghĩa "unisex là gì"** | Bỏ câu "Hiểu đơn giản..." mùi textbook, đổi sang giải thích trực tiếp từ thói quen/kỳ vọng người dùng |
| **Lý do phổ biến #3** | Bỏ "brand niche và designer" — đổi thành "thương hiệu lớn" để tránh English eyebrow |
| **Kết luận cuối** | Bỏ cấu trúc tóm tắt lại định nghĩa như sách giáo khoa → viết lại ngắn, đời hơn |
| **Toàn bài** | Loại các cụm: "đáng cân nhắc", "mang đến trải nghiệm", "phù hợp nhiều đối tượng", "lựa chọn đáng xem" |

---

## Total images

**6 ảnh tổng** (chuẩn density cho bài ~1700 từ: pass)

| # | File | Đặt sau section |
|---|------|----------------|
| 1 | `nuoc-hoa-unisex-la-gi-2026.png` | Intro / hero |
| 2 | `unisex-tom-tat-nhanh.png` | Sau "Tóm tắt nhanh" |
| 3 | `unisex-vi-sao-pho-bien.png` | Sau "Vì sao phổ biến?" |
| 4 | `unisex-nhom-mui.png` | Sau "Những nhóm mùi..." |
| 5 | `unisex-ai-nen-dung.png` | Sau "Ai nên bắt đầu?" |
| 6 | `unisex-cach-chon.png` | Trước "Những hiểu lầm..." |

Mật độ: ~1 ảnh / 260 từ → PASS theo rule 1 ảnh / 200–300 từ.

---

## Desktop PASS ✅

- Heading "Tóm tắt nhanh" đúng trong body + TOC
- 6 ảnh phân bổ đều, không text-heavy
- Flow đọc mượt, ảnh có caption rõ
- Sidebar TOC hoạt động, scroll smooth

## Mobile PASS ✅

- Layout responsive sạch ở 390px
- Text readable, không quá dày
- Ảnh scale đúng, không bị overflow

---

## SEO / Frontmatter / Internal links

| Hạng mục | Status |
|----------|--------|
| `title` | Giữ nguyên ✅ |
| `slug: nuoc-hoa-unisex-la-gi` | Giữ nguyên ✅ |
| `description` | Giữ nguyên ✅ |
| `image: /images/articles/nuoc-hoa-unisex-la-gi-2026.png` | Giữ nguyên ✅ |
| Link `/bang-xep-hang` anchor "top nước hoa tốt nhất" | Giữ nguyên ✅ |
| Link `/nuoc-hoa-nam-chanel-bleu-chanel-edp` anchor "Bleu de Chanel EDP" | Giữ nguyên ✅ |
| Link `/chanel` anchor "Chanel" | Giữ nguyên ✅ |
| Link `/` anchor "nước hoa chính hãng" | Giữ nguyên ✅ |

---

## Chưa final ở đâu

Không còn điểm chưa final. Bài đạt Definition of Done theo handoff file.

> Note: Screenshot đầu tiên của browser subagent chụp lúc page còn ISR cache cũ (thấy "Kết luận nhanh" trong TOC). Screenshot thứ 2 trở đi sau khi force reload đã xác nhận đúng "Tóm tắt nhanh". **Pipeline: Verified** — article đọc từ local markdown, không qua Sanity CMS.
