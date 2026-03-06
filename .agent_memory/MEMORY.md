# MEMORY.md — Bộ Não Chính của Antigravity Agent
*Cập nhật: 2026-03-06 13:55 ICT*

---

## 🌐 PROJECT STATE
- **Live URL:** https://www.maisondeson.com/ ✅ LIVE
- **Sanity Studio:** https://ww1zzidl.sanity.studio
- **Vercel:** Auto-deploy từ `main` branch
- **Local:** `D:\anti\perfume-luxury-vn` | `npm run dev` → port 3000
- **Last Git Push:** commit `137881e` — cleanup agent files

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

## 🤖 OPENCLAW SETUP (2026-03-05) — QUAN TRỌNG

### Folder: `D:\anti\openclaw\`
```
openclaw/
├── coder-config.json     ← Config Coder Bot (GPT-4.1)
├── marketer-config.json  ← Config Marketer Bot (Qwen-Plus)
├── start-all.ps1         ← Script khởi động CẢ 2 bots
├── coder-soul.md         ← Identity Coder
├── marketer-soul.md      ← Identity Marketer
└── state/
    ├── coder/            ← State Coder gateway
    └── marketer/         ← State Marketer gateway
```

### Bot Coder
- **Telegram:** @MaisonCoder_Bot
- **Token:** `8222958468:AAHzhLfGqBspjNFTe-nCm-7gB_VJbJ5JJD0`
- **Model:** GPT-4.1 (OpenAI)
- **Port:** 18789
- **Start:** `$env:OPENCLAW_CONFIG_PATH='D:\anti\openclaw\coder-config.json'; $env:OPENCLAW_STATE_DIR='D:\anti\openclaw\state\coder'; openclaw gateway --port 18789`

### Bot Marketer
- **Telegram:** @MaisonMarketer_Bot
- **Token:** `8469091674:AAEkb_-j-igIkeZO2G5ahfgkX5guzlvavvg`
- **Model:** Qwen-Plus (Alibaba DashScope)
- **API Base:** `https://coding-intl.dashscope.aliyuncs.com/v1`
- **Port:** 18790
- **Start:** `$env:OPENCLAW_CONFIG_PATH='D:\anti\openclaw\marketer-config.json'; $env:OPENCLAW_STATE_DIR='D:\anti\openclaw\state\marketer'; openclaw gateway --port 18790`

### User Info
- **Telegram User ID:** `93372553`
- **Group ID:** chưa tạo — cần tạo group "Maison HQ", add 2 bots vào, lấy group ID

### APIs
- OpenAI: `sk-proj-knqWfIg9...` (dùng cho Coder)
- Alibaba DashScope: `sk-sp-2e36922bd...` (dùng cho Marketer)

### Trạng thái
- ✅ OpenClaw 2026.3.2 installed
- ✅ Cả 2 bottoken configured + user ID whitelisted
- ⏳ Cần test: mày nhắn `/start` cho cả 2 bot trên Telegram
- ⏳ Cần: tạo group Maison HQ, lấy group ID, update config

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
2. **🚫 TUYỆT ĐỐI KHÔNG check localhost** — Luôn kiểm tra trực tiếp https://www.maisondeson.com/ trên browser. Đừng bao giờ mở localhost:3000 để verify.
3. **Đừng commit code chưa test build** — phải `npm run build` hoặc dev server OK trước
4. **mockData.ts article field** — phải là string hợp lệ, không để text rơi ra ngoài
5. **ĐỪNG dùng `&&` trong PowerShell** — dùng `;` thay thế
6. **OpenClaw daemon cần Admin rights** — chạy foregroud với `openclaw gateway --port XXXX` thay vì install-daemon

---

## 🗑️ FILES ĐÃ XÓA (không còn dùng)
Commit `137881e` đã xóa toàn bộ team agent files cũ:
- AGENTS.md, AGENT_TRANSFER_LOG.md, BOOTSTRAP.md, IDENTITY.md
- MOBILE_AUDIT_CHECKLIST.md, ON_AIR_GUIDE.md, SETUP_GUIDE.md
- SUPERVISOR_*.md, TEAM_REPORT.md, TOOLS.md
- content/PUBLISH_WORKFLOW.md, content/TASK_COMPLETION_REPORT.md
- memory/BLACKBOARD.md, memory/EPISODIC_MEMORY.md, memory/TASK_LOG.md

---

## 📋 TASKS STATUS (2026-03-05)
| Task | Status | Ghi chú |
|------|--------|---------|
| D1-D6 articles | ✅ LIVE | Tất cả published |
| 8 sản phẩm (1/brand) | ✅ LIVE | Via mockData fallback |
| Homepage V3 | ✅ LIVE | News section, category icons |
| mockData Tom Ford fix | ✅ Done | Restored via git checkout + đã có dấu tiếng Việt |
| OpenClaw 2 bots setup | ✅ Done | Configs trong D:\anti\openclaw\ |
| Telegram bots created | ✅ Done | Coder + Marketer |
| Telegram bot test | ⏳ Pending | Mày cần nhắn /start cho 2 bot |
| Telegram group | ⏳ Pending | Chưa tạo group Maison HQ |
| Sanity write token | ❌ Chưa làm | Cần để import data vào Sanity |
| Newsletter backend | ❌ Chưa làm | |
| Thêm brands (Versace, Hermes...) | ❌ Pending | Chưa có task |
