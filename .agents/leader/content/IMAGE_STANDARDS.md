# IMAGE STANDARDS

## 📊 Số Lượng Ảnh Tối Thiểu

| Loại bài | Số ảnh | Ghi chú |
|----------|--------|---------|
| Product Review | 4-6 ảnh | Bottle, box, notes graphic, lifestyle |
| Buying Guide (10 products) | 10-15 ảnh | 1 ảnh/sp + hero + comparison |
| Brand Spotlight | 6-8 ảnh | Brand story, top products, heritage |
| How-to Guide | 5-8 ảnh | Step-by-step visuals |
| Category Page | 3-5 ảnh | Banner + featured products |
| Blog Post | 2-4 ảnh | Hero + inline images |

---

## 🎨 Chất Lượng Ảnh

### Technical Specifications

| Tiêu chí | Yêu cầu |
|----------|---------|
| **Resolution** | 1200x630px (OG), 800x600px (content) |
| **Format** | WebP (ưu tiên), JPG/PNG (fallback) |
| **File size** | < 200KB (content), < 500KB (hero) |
| **Color space** | sRGB |
| **DPI** | 72 (web), 300 (print) |

### Source Guidelines

| Nguồn | Ưu tiên | Ghi chú |
|-------|---------|---------|
| Tự chụp | ⭐⭐⭐ | Best for originality |
| Brand official | ⭐⭐ | Check license |
| Fragrantica (o. prefix) | ⭐⭐ | Community allowed |
| User generated | ⭐ | Must have permission |

---

## 🔍 SEO Ảnh Checklist

### Trước khi upload

- [ ] **Filename:** `ten-khong-dau.webp` (ví dụ: `nuoc-hoa-sauvage-elixir.webp`)
- [ ] **Alt text:** Chứa keyword, 100-125 ký tự
- [ ] **Title attribute:** Tooltip description
- [ ] **Width/height attributes:** Explicit trong HTML
- [ ] **Loading="lazy":** Cho ảnh dưới fold
- [ ] **Compressed:** Qua TinyPNG/Squoosh

### Alt Text Formula
```
[Product name] + [key feature] + [context]
Ví dụ: "Dior Sauvage Elixir nước hoa nam chính hãng hộp đen sang trọng"
```

### Example HTML
```html
<img 
  src="/images/sauvage-elixir-bottle.webp"
  alt="Dior Sauvage Elixir nước hoa nam chính hãng hộp đen sang trọng"
  title="Dior Sauvage Elixir - Nước hoa nam cao cấp từ Dior"
  width="800"
  height="600"
  loading="lazy"
/>
```

---

## 📸 Nội Dung Minh Họa

### 1. Hero Image
**Mục đích:** First impression, social sharing

**Yêu cầu:**
- Sản phẩm chính, chất lượng cao
- Background clean, professional
- Branding subtle (logo góc)
- Size: 1200x630px (OG standard)

### 2. Notes Graphic
**Mục đích:** Educational, visual interest

**Format:** Pyramid visualization

```
        TOP NOTES
      (Bergamot, Pepper)
         /       \
        /         \
   MIDDLE NOTES   (Lavender, Nutmeg)
      /             \
     /               \
  BASE NOTES (Vanilla, Amberwood)
```

**Tools:** Canva, Figma, Illustrator

### 3. Lifestyle Images
**Mục đích:** Context, aspiration

**Scenes:**
- 🏢 Công sở (vest, office setting)
- 🎉 Tiệc tối (formal wear, evening)
- 💕 Hẹn hò (casual elegant, restaurant)
- ☀️ Daily wear (casual, daytime)

### 4. Comparison Images
**Mục đích:** Help decision making

**Format:** Side-by-side

```
| Product A | vs | Product B |
|-----------|----|-----------|
| Bottle    |    | Bottle    |
| Notes     |    | Notes     |
| Price     |    | Price     |
| Rating    |    | Rating    |
```

### 5. Packaging Details
**Mục đích:** Authenticity proof

**Shots needed:**
- Box exterior (all angles)
- Box interior
- Bottle front
- Bottle back (batch code)
- Cap detail
- Atomizer close-up
- Authenticity card (if any)

---

## 🛠️ Workflow Xử Lý Ảnh

### Step 1: Research & Capture
```
□ Find official images from brand
□ Take own photos (if product in hand)
□ Screenshot from Fragrantica (o. prefix)
□ Download from YouTube (thumbnail quality)
```

### Step 2: Edit & Optimize
```
□ Crop to standard sizes
□ Adjust brightness/contrast
□ Remove watermarks (if possible legally)
□ Add branding (subtle corner logo)
```

### Step 3: Compress
```
□ Run through TinyPNG.com
□ Or use Squoosh.app
□ Target: < 200KB per image
□ Check quality after compression
```

### Step 4: Rename & Tag
```
□ Rename: descriptive-kebab-case.webp
□ Add alt text in CMS
□ Add title attribute
□ Set width/height
```

### Step 5: Upload
```
□ Upload to Sanity CMS
□ Add to media library with tags
□ Insert into content
□ Verify lazy loading
```

---

## 📱 Responsive Images

### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/images/product.webp"
  alt="Product description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
  priority={false}
  loading="lazy"
/>
```

### Srcset for Multiple Sizes
```html
<img 
  src="product-800.webp"
  srcset="product-400.webp 400w,
          product-800.webp 800w,
          product-1200.webp 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1000px) 800px,
         1200px"
  alt="Product description"
/>
```

---

## 🚫 Things to Avoid

- [ ] Blurry or pixelated images
- [ ] Obvious stock photos (generic models)
- [ ] Watermarked images (unless own)
- [ ] Incorrect aspect ratios (stretched)
- [ ] Too large file sizes (> 500KB)
- [ ] Missing alt text
- [ ] Copyright violations
- [ ] Inconsistent style across site

---

## 📈 Performance Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| Image weight (homepage) | < 1MB total |
| Compression ratio | > 60% |
| Format adoption (WebP) | > 90% |

---

*Last updated: 2026-03-03*
*Owner: Content + Dev Team*
