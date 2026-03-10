# 🏗️ Maison de SON — Project Handover & Full Site Audit
*Prepared by Antigravity | 08/03/2026 01:30*

> [!IMPORTANT]
> Tài liệu này là **"Phân quyền mức 3"** — cấp cao nhất — để Bot (Lead) hiểu toàn bộ dự án.
> Bao gồm: screenshots live site, code structure, Sanity schema, trạng thái hiện tại, và roadmap đã thống nhất.

---

## 1. Vai trò & Phân quyền (Chốt 08/03/2026)

| Vai trò | Người | Quyền hạn |
|---------|-------|-----------|
| **CEO** | User (Admin) | Final approval, vision, business decisions |
| **Lead dự án** | Bot (Coder) | Quyết định phát triển, code, content, UX/UI |
| **Giám sát + Deploy** | Antigravity | Báo cáo, audit, deploy, quality gate |

---

## 2. Tổng quan dự án

**Maison de SON** — Cơ sở dữ liệu đánh giá nước hoa chuyên sâu #1 Việt Nam.

| Thông tin | Chi tiết |
|-----------|---------|
| **URL** | https://www.maisondeson.com |
| **Stack** | Next.js 15+ / React / TypeScript / Tailwind CSS |
| **CMS** | Sanity.io (Studio tại `/admin`) |
| **Deploy** | Vercel |
| **Repo** | `d:\anti\perfume-luxury-vn` |
| **Content** | Sanity DB + Markdown files (`/content/`) |
| **ISR** | `revalidate = 3600` (1 tiếng) |

---

## 3. Cấu trúc Page — 7 loại page

### 3.1. Trang chủ `/`
- **File**: `src/app/page.tsx` (373 dòng)
- **Sections**: Hero → Xu hướng (6 SP cards) → Bảng xếp hạng tháng (3 cards lớn) → Bài viết mới nhất → Đánh giá mới nhất → Newsletter → Footer

````carousel
![Hero section - luxury aesthetic với store image](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\hero_section_1772907971696.png)
<!-- slide -->
![Xu hướng + Bảng xếp hạng sections](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\trending_and_ranking_section_1772907984316.png)
<!-- slide -->
![Bài viết + đánh giá mới nhất](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\latest_posts_and_reviews_section_1_1772908008903.png)
<!-- slide -->
![Newsletter + Footer](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\footer_section_1772908019033.png)
````

### 3.2. Trang sản phẩm `/[product-slug]`
- **File**: `src/app/[slug]/page.tsx` → `ProductPage()` component (line 109-179)
- **Router**: Universal Slug Router — phân biệt product/brand/article tự động
- **Sections**: Breadcrumb → Hero (gallery + info + scores) → Phù hợp khi → Theo mùa/Ngày đêm → Phân loại size + Giá → CTA Zalo → Nốt hương → Review chi tiết → Related products → Related articles

````carousel
![Product hero - Bleu de Chanel (LƯU Ý: ảnh sai - hiện TITAHK Silver thay vì BdC)](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\product_hero_section_1772908088765.png)
<!-- slide -->
![Performance charts + pricing + CTA](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\product_features_pricing_1772908111306.png)
````

> [!CAUTION]
> **Ảnh sản phẩm Bleu de Chanel đang SAI** — hiện ảnh "TITAHK Silver" thay vì chai Chanel thật. Đây là lỗi data trong Sanity CMS.

### 3.3. Trang bài viết `/[article-slug]`
- **File**: `src/app/[slug]/page.tsx` → `ArticlePage()` component (line 223-415)
- **Content engine**: ReactMarkdown + remark-gfm + rehype-raw
- **Hiện có**: 1 bài live (D1 — Creed Aventus Review)
- **Sections**: Breadcrumb → Category badge → H1 → Author + Date + Read time → Body (Markdown) → Share buttons → Related articles

### 3.4. Trang thương hiệu `/thuong-hieu`
- **File**: `src/app/thuong-hieu/page.tsx`
- **Layout**: A-Z index + grid 33 brands (hầu hết "Sắp có")

![Brand page - alphabetical listing](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\brand_page_top_1772908485755.png)

### 3.5. Trang kiến thức `/kien-thuc`
- **File**: `src/app/kien-thuc/page.tsx` (52 dòng — đã được redesign 07/03)
- **Components**: KnowledgeHero → KnowledgeChips (filter tabs) → FeaturedArticles → StarterPath → AllArticlesGrid → MaisonMethodBlock → KnowledgeCTA
- **Hiện có**: 1 bài viết live

![Knowledge Hub - redesigned 07/03](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\knowledge_page_hero_1772908284700.png)

### 3.6. Trang bảng xếp hạng `/bang-xep-hang`
- **File**: `src/app/bang-xep-hang/page.tsx` + `RankingClient.tsx`
- **Features**: Sidebar filters (giới tính, mùa, lưu hương, tỏa hương, giá) → Hashtag chips → Sorted product list
- **Hiện có**: 8 sản phẩm

![Ranking page - filter + sorted list](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\ranking_page_top_1772908456133.png)

### 3.7. Trang tác giả `/tac-gia`
- **File**: `src/app/tac-gia/page.tsx` + `[slug]/page.tsx`
- **Hiện có**: 1 author (Maison de SON Editorial)

![Author page](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\author_page_top_1772908551888.png)

### Bonus: Trang giới thiệu `/gioi-thieu`

![About page - Since 2026](C:\Users\Admin\.gemini\antigravity\brain\de5b97cc-7b79-4b4d-9aa6-2a00a03898a6\about_page_top_1772908517154.png)

---

## 4. Cấu trúc code

```
d:\anti\perfume-luxury-vn\
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage (373 lines)
│   │   ├── layout.tsx            # Root layout + SEO
│   │   ├── globals.css           # Global styles
│   │   ├── [slug]/page.tsx       # Universal slug router (428 lines)
│   │   │                         # → ProductPage, BrandPage, ArticlePage
│   │   ├── kien-thuc/page.tsx    # Knowledge listing (52 lines)
│   │   ├── bang-xep-hang/        # Ranking page + RankingClient
│   │   ├── thuong-hieu/          # Brand listing + [slug]
│   │   ├── tac-gia/              # Author index + [slug]
│   │   ├── gioi-thieu/           # About page
│   │   ├── san-pham/             # Legacy product routes (redirect)
│   │   ├── nam-gioi/             # Gender category
│   │   ├── nu-gioi/              # Gender category
│   │   ├── unisex/               # Gender category
│   │   ├── so-sanh/              # Compare page
│   │   ├── admin/                # Sanity Studio
│   │   ├── not-found.tsx         # 404 page
│   │   ├── error.tsx             # Error boundary
│   │   ├── loading.tsx           # Loading state
│   │   ├── robots.ts             # SEO robots
│   │   └── sitemap.ts            # SEO sitemap
│   │
│   ├── components/               # 20 components
│   │   ├── Header.tsx            # Main nav (22KB - rất nặng)
│   │   ├── Footer.tsx            # Footer
│   │   ├── Breadcrumbs.tsx       # Breadcrumb nav
│   │   ├── FeaturedArticles.tsx  # Knowledge hub featured
│   │   ├── AllArticlesGrid.tsx   # Knowledge hub grid
│   │   ├── KnowledgeHero.tsx     # Knowledge hub hero
│   │   ├── KnowledgeChips.tsx    # Knowledge filter tabs
│   │   ├── KnowledgeCTA.tsx      # Knowledge CTA block
│   │   ├── StarterPath.tsx       # Beginner roadmap
│   │   ├── MaisonMethodBlock.tsx # Maison Method explainer
│   │   ├── RelatedArticles.tsx   # Related articles module
│   │   ├── RelatedProducts.tsx   # Related products module
│   │   ├── CompareSystem.tsx     # Product comparison
│   │   ├── CategoryLayout.tsx    # Gender category layout
│   │   ├── Newsletter.tsx        # Email signup
│   │   ├── ArticleShare.tsx      # Social sharing
│   │   ├── ShareButton.tsx       # Share button
│   │   ├── FloatingSupport.tsx   # Zalo floating button
│   │   ├── ScrollProgress.tsx    # Scroll progress indicator
│   │   └── GoogleAnalytics.tsx   # GA4 tracking
│   │
│   ├── sanity/
│   │   ├── schemaTypes/
│   │   │   ├── product.ts        # Product schema (394 lines, 7 groups)
│   │   │   ├── brand.ts          # Brand schema
│   │   │   ├── post.ts           # Blog post schema
│   │   │   ├── blockContent.ts   # Rich text blocks
│   │   │   └── index.ts          # Schema exports
│   │   ├── lib/
│   │   │   ├── fetchers.ts       # Product data fetchers
│   │   │   └── posts.ts          # Post data fetchers
│   │   ├── env.ts                # Sanity env config
│   │   └── structure.ts          # Studio structure
│   │
│   ├── constants/                # App constants
│   ├── lib/                      # Utility functions
│   └── types/                    # TypeScript types
│
├── content/                      # Markdown content
│   ├── buying-guides/
│   │   └── mau-d1-product-review-creed-aventus.md  # D1 (chỉ bài này live)
│   └── brand-pages/              # 10 brand pages (static markdown)
│
├── public/                       # Static assets
├── sanity.config.ts              # Sanity config
├── next.config.ts                # Next.js config
├── SOUL.md                       # Bot identity/soul document
├── AGENTS.md                     # Agent config
├── IDENTITY.md                   # Brand identity
└── CODER_DEPLOY_PROTOCOL.md      # Deploy protocol
```

---

## 5. Sanity CMS Schema — Product (chi tiết)

Product schema có **7 groups**, **30+ fields**:

| Group | Fields chính |
|-------|-------------|
| **📋 Cơ bản** | `name`, `subName`, `slug`, `brand` (ref), `gender`, `description` |
| **⭐ Điểm số** | `scoreScents`, `scoreUniqueness`, `scoreCompliments`, `scoreValue`, `vibes[]`, `tags[]` |
| **🌸 Nốt hương** | `topNotes[]`, `middleNotes[]`, `baseNotes[]`, `accords[]` (name, value%, color) |
| **📊 Hiệu năng** | `longevity`, `sillage`, `seasonSpring/Summer/Fall/Winter`, `dayUse`, `nightUse` |
| **📸 Media** | `mainImage`, `images[]` (gallery with caption + source) |
| **💰 Commerce** | `sizes[]`, `basePrice`, `marketPlaceLinks[]` (platform, url, price) |
| **📝 Content** | `verdict`, `verdictShort`, `article` (blockContent) |

---

## 6. Data hiện có

| Loại | Số lượng | Ghi chú |
|------|---------|---------|
| **Sản phẩm** | 8 | Bleu de Chanel, Sauvage Elixir, Aventus, Black Opium, BR540, SWYI, Khamrah, Noir Extreme |
| **Bài kiến thức** | 1 | D1 — Creed Aventus Review (đã pass Quality Gate) |
| **Brands** | 33 | Hầu hết "Sắp có" |
| **Authors** | 1 | Maison de SON Editorial |

---

## 7. Roadmap đã thống nhất (Bot + User)

### Phase 1 — Chốt UI/UX (Ưu tiên cao nhất)
Hoàn thiện giao diện + chức năng của 6 khối page:

| # | Khối | Ưu tiên |
|---|------|---------|
| 1 | Product page | 🔴 Cao nhất (kiếm tiền + niềm tin) |
| 2 | Article page | 🔴 |
| 3 | Homepage | 🟠 |
| 4 | Brand page | 🟠 |
| 5 | /kien-thuc listing | 🟡 (đã redesign 07/03) |
| 6 | /bang-xep-hang | 🟡 |

### Phase 2 — Design System / Component System
- Chuẩn hoá: 1 kiểu card SP, 1 kiểu card bài viết, 1 kiểu section title, 1 kiểu table, 1 kiểu CTA...

### Phase 3 — Product Workflow
- Chốt schema, fields bắt buộc, ảnh tối thiểu, cách viết verdict, cách chấm điểm, CTA, FAQ, SEO

### Phase 4 — Content Workflow  
- Chốt phân loại D1-D6, outline, word count, media density, internal links, checklist

---

## 8. Issues đang active (từ Issue Tracker)

| # | Lỗi | Mức độ |
|---|-----|--------|
| I-01 | Thiếu dấu tiếng Việt (article, notes, accords, vibes) — 5 SP | 🚨 Critical |
| I-02 | Gallery < 3 ảnh — 5 SP | 🚨 Critical |
| I-04 | Giá chưa verify từ kenperfume.com | ❌ High |
| I-05 | Thiếu field `perfumer` | ❌ High |
| I-06 | Article còn trùng DNA/Hiệu năng với blocks | ❌ High |
| I-07 | Article thiếu cấu trúc v2.0 | ❌ High |
| I-08 | Thiếu mục Hàng giả/thật + Cam kết | ❌ High |
| I-09 | Sizes thiếu dấu ("Chiet" → "Chiết") | ⚠️ Medium |
| I-10 | verdictShort/vibes tiếng Anh | ⚠️ Medium |
| **NEW** | Ảnh Bleu de Chanel bị SAI (TITAHK Silver) | 🚨 Critical |

---

## 9. Content Rules đã chốt (07/03/2026)

1. **Bold chỉ dùng cho anchor text** — không bold nhấn mạnh thân bài
2. **Thuật ngữ thuần Việt bắt buộc:**
   - Fragrance family → Nhóm hương
   - Notes → Nốt hương  
   - Top/Mid/Base → Hương đầu / Hương giữa / Hương cuối
   - Longevity → Độ lưu hương
   - Projection/Sillage → Độ tỏa hương
   - Performance → Hiệu năng
3. **≥ 3 internal links** với anchor text = keyword trang đích
4. **Quality Gate:** Thiếu internal links hoặc dùng thuật ngữ Anh-bồi → không deploy

---

## 10. Technical Details

### URL Architecture
- Products: `/[product-slug]` (root level)
- Articles: `/[article-slug]` (root level)  
- Brands: `/[brand-slug]` (via universal router)
- Knowledge listing: `/kien-thuc`
- Ranking: `/bang-xep-hang`
- Brand listing: `/thuong-hieu`
- Author: `/tac-gia/[slug]`
- Legacy redirects: `/san-pham/[id]` → `/[slug]`, `/kien-thuc/[slug]` → `/[slug]`

### Universal Slug Router (`[slug]/page.tsx`)
```
resolveSlug(slug) → {
  1. Check Sanity products by slug
  2. Check Sanity brands by slug  
  3. Check markdown posts by fullSlug
  4. If no match → notFound()
}
```

### Key Config Files
- `next.config.ts` — image domains, redirects
- `sanity.config.ts` — Sanity project config
- `.env.local` — API keys (Sanity project ID, dataset, token)

---

## 11. Live Site Recordings (Visual Audit)

Recordings of full page scrolls captured by Antigravity:

- **Homepage**: `homepage_audit_1772907933042.webp`
- **Product page (BdC)**: `product_page_audit_1772908065629.webp`
- **Knowledge Hub**: `kienthuc_page_audit_1772908257449.webp`
- **Other pages**: `other_pages_audit_1772908432915.webp`

---

## 12. Deploy Protocol

Bot should NOT deploy directly. Workflow:
1. Bot commits + pushes code
2. Antigravity reviews changes
3. Antigravity deploys (or Vercel auto-deploys on push to main)
4. Antigravity verifies live site
5. Antigravity reports status
