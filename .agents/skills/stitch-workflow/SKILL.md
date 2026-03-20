---
description: Stitch + AI Workflow - Step-by-step process for creating beautiful websites using reference images and AI tools
---

# Stitch + AI Website Design Workflow

> Source: Nguyễn Tuấn Sơn — Antigravity VN group
> Workflow for creating professional websites using Stitch mockup + Claude Code/Antigravity

## 5-Phase Process

### Phase 1: Chuẩn bị (Preparation)

Define 6 elements trước khi bắt đầu:

1. **LOẠI TRANG** (Type):
   - Landing page
   - Web bán hàng (e-commerce)
   - Trang giới thiệu công ty
   - Web SaaS
   - Portfolio cá nhân

2. **MỤC TIÊU** (Goal):
   - Thu lead (lead generation)
   - Giới thiệu dịch vụ
   - Bán sản phẩm
   - Xây dựng trust / uy tín
   - Đăng ký demo

3. **PHONG CÁCH** (Style):
   - Minimal
   - Modern
   - Tech / Premium
   - Startup-style
   - Dark / Futuristic

4. **COMPONENTS CẦN CÓ**:
   - Hero section
   - Social proof
   - Features / Benefits
   - Pricing
   - CTA
   - Footer

5. **TÊN THƯƠNG HIỆU** + branding keywords

6. **NỘI DUNG** — text, images, data sẵn sàng

### Phase 2: Tìm ảnh tham khảo (Inspiration)

**Platforms để tìm:**
- Pinterest
- Dribbble
- Godly.website
- Awwwards

**Rules quan trọng:**
- 📸 **CHỤP SCREENSHOT** thay vì gửi URL cho AI
- AI xử lý ảnh tốt hơn URL vì hiểu được layout/color/mood trực tiếp
- Tìm 3-5 references cho mỗi section
- Keywords ví dụ: "luxury perfume website", "editorial blog layout", "product page modern"

### Phase 3: Tạo mockup trong Stitch

1. Mở **Stitch** → chọn "Web App"
2. Chọn model: **Gemini 3.1 Pro** (cho kết quả tốt nhất)
3. Upload ảnh reference screenshots
4. Viết prompt mô tả:
   - Style mong muốn
   - Layout structure
   - Color scheme
   - Sections cần có

### Phase 4: Refine trong Claude Code / Antigravity

1. Export code từ Stitch (HTML/CSS/React)
2. Import vào project
3. Dùng AI để:
   - Fine-tune responsive
   - Add logic / data binding
   - Optimize performance
   - Fix accessibility

### Phase 5: Deploy

1. Build verification (`next build`)
2. Push to GitHub
3. Vercel auto-deploy
4. Review trên live site

## Áp dụng cho Maison De Son

| Element | Value |
|---------|-------|
| **Loại** | Content site + E-commerce hybrid |
| **Mục tiêu** | Trust building + Affiliate commerce |
| **Style** | Modern Editorial (Fragrantica-inspired) |
| **Brand** | Maison De Son |
| **References** | Fragrantica.com, our wireframes in `/docs/wireframes/` |

## Key Takeaway
> "Luôn dùng SCREENSHOT thay vì URL khi giao visual task cho AI — AI hiểu ảnh tốt hơn text mô tả layout."
