# UI MASTER PLAN — MAISON DE SON
## Chốt: 2026-03-19 | Owner đã duyệt
## Sprint: 19/03 → 01/04/2026

---

## 0. PHÂN VAI VẬN HÀNH

| Vai | Người | Trách nhiệm |
|-----|-------|------------|
| **Owner** | User | Duyệt direction cuối, chọn reference |
| **Coder** | Coder Bot | Viết content structure, product copy, SEO wording |
| **Anti** | Antigravity | Tổng hợp, clone/implement code, verify evidence, deploy |

**Rule:** Owner không làm middleman. Giao 1 lệnh → agent tự chạy → báo output có evidence.

---

## 1. REFERENCE CHÍNH

- **Fragrantica** — authority-style UI, layout, UX pattern
- Screenshots tại: `docs/design-reference/fragrantica/`
- Wireframe đã duyệt tại: `docs/UI_MASTER_PLAN.md` (file này) + wireframe images dưới đây

---

## 2. VISUAL IDENTITY (chốt)

| Token | Giá trị |
|-------|---------|
| **Primary color** | Teal / Dark Blue (màu xanh cổ vịt Fragrantica) |
| **Accent** | Crimson Red (logo + nút cực kỳ quan trọng) |
| **Typography** | Outfit hoặc Inter (sans-serif, sạch) |
| **Dark mode** | Bắt buộc hỗ trợ |
| **Layout PC** | 75/25 (main content / sidebar) |
| **Layout Mobile** | 1 cột, stack dọc |
| **Scoring** | Hệ 10 điểm (không dùng 5 sao như Fragrantica) |

---

## 3. SCOPE — 5 PAGES CẦN REDESIGN

| # | Page | Route | Priority | Wireframe |
|---|------|-------|----------|-----------|
| 1 | Homepage | `/` | 🔴 1st | ✅ Đã duyệt |
| 2 | Product Detail | `/[slug]` | 🔴 2nd | ✅ Đã duyệt |
| 3 | Kiến thức listing | `/kien-thuc` | 🟠 3rd | ✅ Đã duyệt |
| 4 | Bài viết chi tiết | `/[article-slug]` | 🟠 4th | ✅ Đã duyệt |
| 5 | Brand Listing | `/thuong-hieu` | 🟡 5th | ✅ Đã duyệt |

---

## 4. PAGE SPECS (ĐÃ DUYỆT)

---

### PAGE 1 — HOMEPAGE (`/`)

**Layout:** Sticky nav → Hero Article → 75/25 Feed

| Section | Giữ/Bỏ | Ghi chú |
|---------|--------|---------|
| Sticky nav + dark mode toggle | ✅ GIỮ | |
| Hero Featured Article (full-width, ảnh lớn, CTA) | ✅ GIỮ | |
| Article feed dạng card 75% | ✅ GIỮ | Category badge màu sắc |
| Sidebar "Sản phẩm mới nhất" 25% | ✅ GIỮ | Sort từ mockData |
| Sidebar "Perfume Stats" (member count, review count) | ❌ BỎ | Không có data thật |
| Sidebar "Latest Reviews" | ❌ BỎ | Không có data thật |
| Mobile: Search bar nổi bật | ✅ GIỮ | |
| Mobile: Popular Tags | ✅ GIỮ | |
| Mobile: Trending Perfumes | ✅ GIỮ | |
| Mobile: "Site Stats" 15,400 / 892 Brands | ❌ BỎ | Số sai |

---

### PAGE 2 — PRODUCT DETAIL (`/[slug]`)

**Layout:** Breadcrumb → Hero (image + info) → 75/25 body → Footer

| Section | Giữ/Bỏ/Thêm | Ghi chú |
|---------|------------|---------|
| Breadcrumb | ✅ GIỮ | |
| Product image (bottle) | ✅ GIỮ | |
| Brand + Product name | ✅ GIỮ | |
| Main Accords (progress bars, màu sắc) | ✅ GIỮ | Data từ mockData.accords |
| Engagement buttons: I HAVE IT / I WANT IT / MY SIGNATURE | ✅ GIỮ | localStorage, no backend |
| **Scoring hệ 10 điểm** | 🔄 SỬA | Thay 5★ → hiển thị điểm X.X/10 |
| Perfume Pyramid (Top/Mid/Base với icon) | ✅ GIỮ | Data từ mockData |
| Performance Metrics (Longevity + Sillage bars%) | ✅ GIỮ | |
| Product Description text | ✅ GIỮ | |
| Sidebar "Latest Reviews" | ❌ BỎ | Không có data user review |
| **[MỚI] "Mua ở đâu" block** | ✅ THÊM | Xem spec bên dưới |
| **[MỚI] "Mua tại Maison De Son" CTA block** | ✅ THÊM | Xem spec bên dưới |

**Spec block "Mua ở đâu" (học theo Fragrantica eBay widget):**
```
┌────────────────────────────────────────────┐
│  🛒 Mua ở đâu                              │
│  [Logo Shopee]          [Logo TikTok Shop] │
│  Item 1 — 1.200.000đ   Item 1 — 1.100.000đ│
│  Item 2 — 1.350.000đ   Item 2 — 1.250.000đ│
│  [Xem thêm trên Shopee →] [Xem TikTok →]  │
│                          Sponsored         │
└────────────────────────────────────────────┘
```
→ Affiliate links Shopee + TikTok Shop

**Spec block "Mua tại Maison De Son":**
```
┌────────────────────────────────────────────┐
│  ✅ Mua tại Maison De Son                  │
│  Cam kết hàng chính hãng 100%.             │
│  Nếu hàng giả — đền bù 20 triệu đồng.     │
│  [Liên hệ tư vấn Zalo →]                  │
└────────────────────────────────────────────┘
```

---

### PAGE 3 — KIẾN THỨC LISTING (`/kien-thuc`)

**Layout:** Hero → Filter tabs → 75/25 grid + sidebar

| Section | Spec |
|---------|------|
| Hero | Dark teal background, tiêu đề "Kiến thức nước hoa", mô tả ngắn |
| Filter tabs | Tất cả / Review / Roundup / Hướng dẫn / So sánh / Tin tức |
| Featured Article (full-width) | Ảnh lớn + category badge + title + excerpt + author/date |
| Article grid (3 cột) | Mỗi card: ảnh, category badge màu, title, 2-dòng excerpt, author + read time |
| Sidebar "Chủ đề phổ biến" | Tag cloud, teal tags |
| Sidebar "Sản phẩm liên quan" | 3-4 mini product cards với score |
| Pagination | Cuối main content |

**Category badge màu:**
- Review → Teal
- Roundup → Orange
- Hướng dẫn → Blue
- So sánh → Purple
- Tin tức → Gray

---

### PAGE 4 — BÀI VIẾT CHI TIẾT (`/[article-slug]`)

**Layout:** Header → Breadcrumb → Hero → 75/25 body → Footer

| Section | Spec |
|---------|------|
| Breadcrumb | Trang chủ > Kiến thức > [Tên bài] |
| Category badge | Màu theo loại bài (xem bảng trên) |
| H1 title | Lớn, bold |
| Author + date + read time | Dưới H1 |
| Hero image | Full-width |
| Article body (75%) | Typography chuẩn, paragraph spacing rộng |
| Inline product card | Khi mention chai cụ thể → mini card: ảnh + tên + score + "Xem chi tiết" |
| Quote block | Highlight quote style |
| Share buttons | Facebook + Copy link (cuối bài) |
| "Bài viết liên quan" | 3 card grid ngang (cuối bài) |
| Sidebar: "Trong bài viết này" (sticky ToC) | Điều hướng trong bài |
| Sidebar: "Sản phẩm được đề cập" | Mini cards: ảnh + tên + score X.X/10 + link |
| Sidebar: "Mua tại Maison De Son" CTA | Cam kết chính hãng, đền 20 triệu nếu hàng giả |

---

### PAGE 5 — BRAND LISTING (`/thuong-hieu`)

| Section | Giữ/Bỏ | Ghi chú |
|---------|--------|---------|
| A-Z sidebar sticky (desktop) | ✅ GIỮ | |
| Brand card grid: logo + tên + số mùi | ✅ GIỮ | Logo dùng gradient fallback nếu chưa có |
| Mobile: Horizontal A-Z index | ✅ GIỮ | |
| Mobile: Full-width list cards có logo | ✅ GIỮ | |

---

## 5. 20 FLAGSHIP PRODUCTS (đã duyệt)

| # | Product | Brand |
|---|---------|-------|
| 1 | Bleu de Chanel EDP | Chanel |
| 2 | Dior Sauvage Elixir | Dior |
| 3 | Dior Homme Intense | Dior |
| 4 | YSL Y EDP | YSL |
| 5 | La Nuit de L'Homme | YSL |
| 6 | Prada L'Homme | Prada |
| 7 | Prada Luna Rossa Carbon | Prada |
| 8 | Acqua di Giò Profondo | Giorgio Armani |
| 9 | Chanel Allure Homme Sport Eau Extrême | Chanel |
| 10 | Terre d'Hermès Eau Givrée | Hermès |
| 11 | Tom Ford Oud Wood | Tom Ford |
| 12 | Tom Ford Noir Extreme | Tom Ford |
| 13 | Creed Aventus | Creed |
| 14 | Baccarat Rouge 540 | MFK |
| 15 | Parfums de Marly Layton | Parfums de Marly |
| 16 | JPG Le Male Elixir | Jean Paul Gaultier |
| 17 | Viktor & Rolf Spicebomb Extreme | Viktor & Rolf |
| 18 | Valentino Uomo Born in Roma Intense | Valentino |
| 19 | Armani Stronger With You Intensely | Giorgio Armani |
| 20 | Le Labo Another 13 | Le Labo |

---

## 6. THỨ TỰ TRIỂN KHAI

```
Step 1: Homepage UI          → code + build pass
Step 2: Product Detail UI    → code + build pass (gồm 2 block mới: Mua ở đâu + MaisonCTA)
Step 3: Kiến thức Listing    → code + build pass
Step 4: Article Detail       → code + build pass
Step 5: Brand Listing        → code + build pass
Step 6: 20 Flagship content  → Coder viết content, Anti inject + build
Step 7: 10 bài traffic       → Coder viết, Anti publish + verify index
Step 8: Fix bugs             → Theo issue list
```

---

## 7. WIREFRAME FILES

| Page | File |
|------|------|
| Homepage Desktop | `brain/4f0e9abf.../wireframe_homepage_pc_*.png` |
| Homepage Mobile | `brain/4f0e9abf.../wireframe_homepage_mobile_*.png` |
| Product Desktop | `brain/4f0e9abf.../wireframe_product_pc_*.png` |
| Product Mobile | `brain/4f0e9abf.../wireframe_product_mobile_*.png` |
| Brand Listing Desktop | `brain/4f0e9abf.../wireframe_brand_pc_*.png` |
| Brand Listing Mobile | `brain/4f0e9abf.../wireframe_brand_mobile_*.png` |
| Kiến thức Desktop | `brain/2029af35.../wireframe_kienthuc_pc_*.png` |
| Article Detail Desktop | `brain/2029af35.../wireframe_article_pc_*.png` |

---

## 8. FILE NÀY LÀ XƯƠNG SỐNG DUY NHẤT

Các file sau là TÀI LIỆU PHỤ, không được mâu thuẫn với file này:
- `docs/handoff/active.md` — thread giao việc Coder/Anti
- `docs/handoff/project-review-2026-03-19.md` — review lịch sử
- `docs/EXECUTION_PLAN_Q2_MAISON_DE_SON.md` — plan cũ (superseded bởi file này)
- `project_state_summary.md` — snapshot state

Nếu có mâu thuẫn → file này thắng.
