# HANDOFF UI SPEC — Product Page Redesign

## 1. Màn hình
Product Page — trang chi tiết sản phẩm nước hoa (template dùng chung cho toàn bộ product)

## 2. Mục tiêu visual
- Premium editorial hơn, bớt cảm giác "database nước hoa"
- Giảm 70% border/box — dùng spacing + typography phân tách
- Mobile 375px scan dễ, không scroll fatigue
- CTA Zalo rõ nhưng tinh tế, không "chợ"

## 3. Thay đổi chính

### A. BỎ BOX BAO NGOÀI hầu hết section
Hiện tại mọi section đều có `rounded-[28px] border border-[var(--border)] bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.04)]`.

Đề xuất: Bỏ box, thay bằng `border-t border-[var(--border)] pt-12 mt-12` (divider nhẹ giữa sections).

Áp dụng cho: Vibes, DNA/Notes timeline, Accords, Performance, Article.
GIỮ box cho: CTA block, Bảng giá table.

### B. XÓA SIDEBAR (desktop)
Hiện tại có aside sticky `lg:grid-cols-[minmax(0,1fr)_320px]` chứa "Tóm tắt nhanh" + "Size đang có".

Đề xuất: Bỏ sidebar. Chuyển content vào main flow:
- "Tóm tắt nhanh" → gộp vào verdict block
- "Size đang có" → gộp vào CTA/giá block

Layout desktop: chỉ còn `lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]` cho Hero (image left + content right), phần bên dưới hero là 1 column full-width.

### C. VERDICT + SCORE INLINE
Hiện tại: Score circle 110px to + verdict text bên cạnh + 2 box "Hợp với ai" / "Không hợp nếu" bên trong.

Đề xuất:
- Score circle nhỏ lại 60px, inline với verdict heading
- Bỏ 2 box "Hợp/Không hợp" riêng → gộp thành 1 dòng text nhẹ
- Bỏ box bao ngoài verdict section

### D. QUICK FACTS STRIP
Thêm 1 strip ngang dạng pill tags ngay dưới title:
`EDP · Nam giới · Lưu hương 8/10 · Tỏa hương 7/10`

### E. GỘP PERFORMANCE
Hiện tại: 2 box riêng biệt (Hiệu năng + Mùa & thời điểm).
Đề xuất: Gộp thành 1 section "Hiệu năng & Thời điểm", không box bao.

### F. SCORE CARDS COMPACT
4 score cards (Mùi hương, Nét riêng, Sức hút, Đáng tiền) hiện dạng grid 2x2 với border.
Đề xuất: Bỏ border, chỉ giữ số + label. Hoặc chuyển 1 row ngang.

### G. MOBILE CTA STICKY (tùy chọn)
Thêm sticky bottom bar trên mobile: `[Tư vấn Zalo] [4.200.000đ]`
Cần thêm `pb-[80px]` cho main content.

### H. BỎ BADGE "CHƯA XÁC MINH" TRÊN ẢNH
Di chuyển xuống metadata nhỏ dưới gallery, hoặc bỏ trên mobile.

## 4. Component cần sửa

| Component | File | Dòng | Thay đổi |
|---|---|---|---|
| ProductHero | ProductClient.tsx | L129-297 | Bỏ box bao image, bỏ sidebar, inline score+verdict |
| ProductClient (main) | ProductClient.tsx | L305-457 | Bỏ sidebar aside, bỏ box bao sections, tăng spacing |
| Quick Facts Strip | MỚI | - | Tạo strip pill tags dưới title |
| Performance section | ProductClient.tsx | L392-397 | Gộp 2 box thành 1 section |
| Vibes section | ProductClient.tsx | L387-390 | Bỏ box bao |
| Notes/DNA section | ProductClient.tsx | L400-403 | Bỏ box bao, giữ timeline |
| Accords section | ProductClient.tsx | L405-408 | Bỏ box bao |

## 5. Mobile behavior (375px)
- Ảnh full-width, bỏ badge noise
- Title `text-[28px]` (giảm từ 34px)
- Score circle 48px inline với verdict
- Quick facts: 1 row scroll ngang pills
- CTA: sticky bottom hoặc nổi bật trong flow
- Sections: spacing 48px, không box
- 4 score cards: 1 row hoặc 2x2 không border

## 6. Điều tuyệt đối KHÔNG làm
- Không đổi URL structure
- Không phá universal slug router `src/app/[slug]/page.tsx`
- Không đụng JSON-LD (Product schema + BreadcrumbList) — nằm trong server component
- Không xóa internal links trong article
- Không thêm dependency mới
- Không phá dark mode (dùng `var(--border)` cho dividers)
- Không thêm badge/coupon/sale style
- Không nhồi animation nặng

## 7. Ưu tiên implement
- **P1**: Bỏ box bao sections + tăng spacing (impact cao nhất, sửa ít nhất)
- **P2**: Bỏ sidebar, inline score+verdict, quick facts strip
- **P3**: Gộp performance, score cards compact, mobile CTA sticky

---

# YÊU CẦU REVIEW

Phân tích design spec product page này theo góc kỹ thuật và SEO.

Trả về đúng 6 phần:
1. Problem statement
2. Feasibility review (5 câu hỏi: code nhanh? phá SEO? hợp data? responsive? performance?)
3. File cần sửa
4. Plan implement theo thứ tự
5. Acceptance criteria
6. QA checklist

Constraint:
- Next.js 15 App Router
- TailwindCSS
- Không đổi URL
- Không phá universal slug router
- Không giảm readability
- Không ảnh hưởng SEO/internal links
- Mobile-first
- Ưu tiên sửa ít file nhất nhưng hiệu quả cao nhất

File chính cần sửa: `src/app/product/[id]/ProductClient.tsx` (458 dòng, "use client")
Server wrapper: `src/app/[slug]/page.tsx` L110-180 (KHÔNG SỬA)

Cuối cùng kết luận 1 dòng:
**APPROVED / APPROVED WITH CHANGES / REJECTED**
