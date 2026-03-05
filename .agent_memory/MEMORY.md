# MEMORY.md — Bộ Não Chính của Antigravity Agent
*Cập nhật: 2026-03-05*

---

## 🌐 PROJECT STATE
- **Live URL:** https://www.maisondeson.com/ ✅ LIVE
- **Sanity Studio:** https://ww1zzidl.sanity.studio
- **Vercel:** Auto-deploy từ `main` branch
- **Local:** `D:\anti\perfume-luxury-vn` | `npm run dev` → port 3000
- **Last deploy:** commit `98233c5`

---

## 🛠️ TECH STACK
- Next.js 16.1.6 (App Router, Turbopack)
- Sanity v4 (project: `ww1zzidl`, dataset: `production`)
- Tailwind CSS v4
- TypeScript
- Vercel (hosting)

---

## ⚡ DEPENDENCY GRAPH (Data Flow)

```
[Content sources]
├── src/constants/mockData.ts       ← PRODUCTION DATA (8 sản phẩm, MASTER_PERFUMES[])
│   └── Là fallback khi Sanity trả về 0 kết quả
├── content/buying-guides/*.md      ← Articles (D1-D6 published)
│   └── Đọc bởi src/sanity/lib/posts.ts → getAllPosts()
└── Sanity CMS                      ← CHƯA CÓ DATA (brand là reference, cần write token)

[Fetchers] src/sanity/lib/fetchers.ts
├── getAllProducts()     → Sanity first, fallback MASTER_PERFUMES
├── getProductBySlug()  → Sanity first, fallback mockData
├── getProductsByGender()
├── getProductsByBrand()
└── getTopRankedProducts()

[Pages]
├── /                    → page.tsx → getAllProducts + getTopRankedProducts + getAllPosts
├── /san-pham/[id]       → getProductBySlug
├── /bang-xep-hang       → getAllProducts
├── /nam-gioi            → getProductsByGender("nam")
├── /nu-gioi             → getProductsByGender("nu")
├── /unisex              → getProductsByGender("unisex")
├── /[slug]              → getAllPosts + getPostBySlug (articles)
└── /thuong-hieu/[slug]  → getProductsByBrand
```

---

## 📦 DATA: 8 SẢN PHẨM LIVE (mockData.ts)
| ID | Brand | Tên | Gender | Giá |
|---|---|---|---|---|
| sauvage-elixir | DIOR | Sauvage Elixir | nam | 4.2M |
| armani-stronger-with-you-intensely | GIORGIO ARMANI | Stronger With You Intensely | nam | 2.85M |
| lattafa-khamrah | LATTAFA | Khamrah | unisex | 1.25M |
| bleu-de-chanel-edp | CHANEL | Bleu de Chanel | nam | 4.2M |
| ysl-black-opium | YSL | Black Opium | nu | 3.8M |
| creed-aventus | CREED | Aventus | nam | 8.5M |
| mfk-baccarat-rouge-540 | MFK | Baccarat Rouge 540 | unisex | 6.5M |
| tom-ford-noir-extreme | TOM FORD | Noir Extreme | nam | 5.2M |

---

## 📰 ARTICLES LIVE (content/buying-guides/)
- D1: `mau-d1-product-review-creed-aventus.md` ✅ published
- D2: `mau-d2-buying-guide-nuoc-hoa-van-phong.md` ✅ published
- D3: `mau-d3-trend-xu-huong-thang-3-2026.md` ✅ published
- D4: `mau-d4-so-sanh-sauvage-edp-vs-elixir.md` ✅ published
- D5: `mau-d5-how-to-edp-edt-khac-nhau.md` ✅ published
- D6: `mau-d6-brand-story-maison-francis-kurkdjian.md` ✅ published

---

## 🧠 KIẾN TRÚC QUYẾT ĐỊNH

### Tại sao dùng mockData thay vì Sanity?
- Sanity schema dùng `brand` là **reference** (không phải string)
- Sanity `mainImage` là image asset (cần upload file, không dùng URL)
- Để import vào Sanity cần **write token** + upload ảnh thủ công
- **Quyết định:** Dùng mockData.ts làm data layer chính ở giai đoạn hiện tại. Sanity sử dụng như CMS cho articles.

### URL Schema
- Sản phẩm: `/san-pham/[slug]`
- Articles: `/[slug]` (root level, không có `/kien-thuc/` prefix)
- Thương hiệu: `/thuong-hieu/[slug]`

---

## ❌ SAI LẦM CẦN TRÁNH
1. **Đừng sửa fetchers.ts không cần thiết** — website đang dùng mockData fallback, hoạt động tốt
2. **Đừng làm với localhost mà quên live site** — luôn kiểm tra https://www.maisondeson.com/
3. **Đừng commit code chưa test build** — phải `npm run build` hoặc dev server OK trước
4. **mockData.ts article field** — phải là string hợp lệ, không để text rơi ra ngoài

---

## 📋 TASKS STATUS (2026-03-05)
| Task | Status | Ghi chú |
|------|--------|---------|
| D1-D6 articles | ✅ LIVE | Tất cả published |
| 8 sản phẩm (1/brand) | ✅ LIVE | Via mockData fallback |
| Homepage V3 | ✅ LIVE | News section, category icons |
| fetchers.ts GROQ fix | ⚠️ Committed locally | Không cần thiết, nhưng không phá gì |
| mockData.ts parse fix | ✅ Fixed | Line 17 bị broken article field |
| Sanity write token | ❌ Chưa làm | Cần để import data vào Sanity |
| Newsletter backend | ❌ Chưa làm | |
| Thêm brands (Versace, Hermes...) | ❌ Pending | Chưa có task |
