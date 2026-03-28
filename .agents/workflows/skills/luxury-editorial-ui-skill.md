# luxury-editorial-ui-skill
# Maison de SON — Internal UI/UX Design Skill
# Version: 1.0 | Date: 2026-03-24
# Dùng cho: Coder (implementation) + Anti (review/audit)

---

## Khi nào dùng skill này

- Trước khi redesign bất kỳ page nào
- Khi review PR/code có thay đổi UI
- Khi tạo component mới
- Khi audit UI sau deploy

---

## Dial Settings — Maison de SON

```yaml
DESIGN_VARIANCE: 5      # Có vài asymmetric sections nhưng không quá experimental
MOTION_INTENSITY: 3     # Chỉ hover + fade nhẹ, không scroll-triggered nặng
VISUAL_DENSITY: 2       # Spacious — luxury cần breathing room
```

---

## 1. Typography Rules

### Font Stack (đã set trong globals.css)
- **Serif**: Playfair Display → dùng cho: H1, tên sản phẩm, hero headline, editorial pull quotes
- **Sans**: Inter → dùng cho: body text, navigation, labels, badges, data points

### Hierarchy Rules
```
H1 product name:    Playfair 32-40px, font-weight 700, tracking -0.02em
H2 section title:   Playfair 24-28px, font-weight 600
H3 subsection:      Inter 18-20px, font-weight 600
Body text:          Inter 16px, line-height 1.7, max-width 65ch
Label/badge:        Inter 11-12px, font-weight 700, uppercase, tracking 0.1em
Price:              Inter 20-24px, font-weight 700
Score number:       Inter 28-36px, font-weight 800
```

### Anti-patterns (KHÔNG làm)
- ❌ Tất cả text đều Inter — thiếu editorial
- ❌ Body text quá nhỏ (< 15px)
- ❌ Line-height < 1.5 cho paragraph
- ❌ Dùng font-weight 400 cho heading

---

## 2. Color System

### Brand Tokens (từ globals.css)
```css
--color-primary: #0D7377      /* Teal — dùng cho: brand accent, CTA buttons, score circles */
--color-text: #1A1D21          /* Gần đen — body text chính */
--color-text-secondary: #5A6270 /* Xám trung — label, phụ đề */
--color-bg: #FFFFFF            /* Trắng thuần — background chính */
--color-bg-subtle: #F8FAFB     /* Trắng lạnh — section alternation */
--color-bg-muted: #F1F5F5      /* Background cho cards nhẹ */
```

### Luxury Color Rules
- Nền chính: **trắng** — không dùng off-white vàng (quá cũ)
- Section alternation: trắng → #F8FAFB → trắng (không dùng màu đậm trừ khi có ý đồ)
- CTA button: **#0D7377** (brand teal) — KHÔNG dùng xanh dương #0068FF (quá SaaS)
- Zalo button: teal hoặc dark (#1A1D21), KHÔNG dùng xanh Zalo gốc #0068FF
- Gold accent: `#C9A84C` — dùng cho: star ratings, "chính hãng" badge, verified mark
- Danger/sale: `#DC2626` — dùng hạn chế, chỉ cho price discount

### Anti-patterns
- ❌ Blue (#0068FF hoặc tương tự) làm primary CTA — trông SaaS, không luxury
- ❌ Gradient nặng toàn trang
- ❌ Quá 3 màu nổi bật trong 1 section

---

## 3. Spacing & Layout

### Spacing Scale (px)
```
xs:   4px   — gap giữa icon và text
sm:   8px   — padding badge, gap inline
md:   16px  — card padding mobile
lg:   24px  — card padding desktop, section gap
xl:   40px  — section padding top/bottom mobile
2xl:  64px  — section padding top/bottom desktop
3xl:  96px  — hero padding
```

### Column Rules
- **Desktop**: max-width 1280px, padding 0 24px
- **Product grid**: 4 cols desktop / 2 cols mobile (KHÔNG 1 col trừ bảng xếp hạng)
- **Product page**: 65/35 split (content / sidebar) desktop — stack single col mobile
- **Bài viết**: max-width 720px centered, asymmetric với visual nếu > 1000px screen

### Luxury Layout Principles
1. **Breathing room > density** — nếu nghi ngờ, thêm padding
2. **Dùng section separator** bằng whitespace, không dùng horizontal line (trừ footer)
3. **Hero section** phải full-bleed hoặc gần full-bleed, không boxed
4. **Product image** phải chiếm ít nhất 40% viewport trên mobile

---

## 4. Component Standards

### Product Card
```
✅ Cần có: Ảnh, tên brand (uppercase nhỏ), tên sản phẩm, score, giá
✅ Hover: subtle shadow lift (translateY -2px + shadow-md)
✅ Image: aspect-ratio 3/4, object-fit contain trên nền trắng/xám rất nhạt
❌ Không: star rating kiểu 5 sao (dùng score /10)
❌ Không: badge "sale" màu đỏ to đùng nếu không có sale thật
```

### CTA Button
```
Primary:    bg #0D7377, text white, border-radius 999px (pill), padding 12px 24px
Secondary:  border 1.5px #0D7377, text #0D7377, bg transparent
Danger/Buy: bg #EE4D2D (Shopee orange)
Min-height: 44px (a11y)
Hover:      translateY(-1px) + shadow-md, transition 0.2s
```

### Score Circle (hiện tại dùng ở PDP)
```
✅ Giữ nguyên — thiết kế ổn
✅ Màu teal (#0D7377) đúng brand
Cải thiện: thêm subtle glow effect khi hover
```

### Navigation
```
✅ Desktop: horizontal, sticky, logo centered hoặc left
✅ Mobile: hamburger hoặc bottom tab bar
Cải thiện hiện tại:
  - Font nav quá nhỏ — tăng lên 15px
  - Dropdown Thương hiệu cần visual hierarchy rõ hơn (group by A-Z hoặc by style)
```

---

## 5. Motion Rules

### Allowed animations (MOTION_INTENSITY = 3)
```css
/* Hover lift */
transition: transform 0.2s ease, box-shadow 0.2s ease;
&:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

/* Fade in on load */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fade-up 0.4s ease-out forwards;

/* Accord bar fill */
@keyframes bar-fill { from { width: 0; } }

/* Image zoom on hover (subtle) */
img { transition: transform 0.4s ease; }
img:hover { transform: scale(1.03); }
```

### NOT allowed
- ❌ Scroll-triggered parallax nặng (lag trên mobile)
- ❌ Auto-playing bất kỳ thứ gì không có lý do UX rõ
- ❌ Bounce animation
- ❌ Rotation animation trên content
- ❌ Animation duration > 600ms (trừ page transition)

---

## 6. SEO & Accessibility Checklist

Mỗi page trước khi ship:
- [ ] `<h1>` duy nhất, chứa keyword chính
- [ ] `<title>` ≤ 60 ký tự, chứa "chính hãng" + "2026" (với product pages)
- [ ] `<meta name="description">` ≤ 160 ký tự
- [ ] Tất cả `<img>` có `alt` text mô tả
- [ ] Contrast ratio ≥ 4.5:1 cho body text
- [ ] Interactive elements ≥ 44x44px (touch target)
- [ ] `focus-visible` outline visible (đã set trong globals.css)
- [ ] Không có duplicate H1 trên page
- [ ] Breadcrumb structured data cho product pages
- [ ] JSON-LD schema cho products (Product schema)

---

## 7. Current Issues Found (Audit 2026-03-24)

### Priority 1 — Fix ngay
| Issue | Vị trí | Fix |
|-------|--------|-----|
| Zalo button màu xanh #0068FF quá SaaS | Floating button + trang mua | Đổi sang teal hoặc dark button |
| Product card trên mobile hơi nhỏ, text bị cắt | Homepage grid | Tăng min-height card, clip text đúng cách |
| Hero section ảnh không full-bleed trên mobile | Homepage hero | Xóa border-radius trên mobile |

### Priority 2 — Cải thiện trong sprint
| Issue | Vị trí | Fix |
|-------|--------|-----|
| Visual density hơi cao ở product page sidebar | PDP | Thêm padding giữa các data blocks |
| Score cards 4 con số nhồi quá gần | PDP score section | Tăng gap hoặc dùng grid thay flexbox |
| Article grid 3 col — ảnh kích thước không đồng đều | Homepage bài viết | Dùng aspect-ratio cố định 16/9 |
| Section "Bài Viết Mới Nhất" thiếu editorial heading | Homepage | Thêm Playfair + subtle divider trước heading |

### Priority 3 — Nice to have
| Issue | Vị trí | Fix |
|-------|--------|-----|
| Không có hover state rõ ở product images | Product cards | Thêm overlay nhẹ + zoom |
| Footer links quá nhỏ trên mobile | Footer | Min-height 44px, font 15px |
| Breadcrumb màu quá nhạt | Product page | Tăng contrast |

---

## 8. Review Checklist — Coder Handoff

Trước khi giao Anti review, Coder phải tự check:
- [ ] Đúng font pairing (Playfair cho heading, Inter cho body)?
- [ ] Đúng màu primary (#0D7377, không dùng xanh dương)?
- [ ] VISUAL_DENSITY ≤ 3 (có đủ whitespace chưa)?
- [ ] Mobile layout hoạt động (check 375px và 428px viewport)?
- [ ] Không có animation duration > 600ms?
- [ ] Tất cả interactive > 44px?
- [ ] Không có hardcoded màu không thuộc design token?

---

## 9. Anti Review Checklist

Anti review PASS khi:
- [ ] Tất cả checklist trên của Coder đã tick
- [ ] Không có console error trên production
- [ ] Lighthouse Performance ≥ 85 (mobile)
- [ ] Không có visual regression rõ rệt so với screenshot trước
- [ ] Font rendering đúng trên cả Chrome + Safari

---

## Nguồn tham khảo
- `taste-skill` (Leonxlnx/taste-skill): học cách dial + guardrails, không bê nội dung
- `MEMORY.md` mục UI Skill Reference Rule (2026-03-23)
- Audit screenshots: brain/77d31a05.../homepage_full_*.png
- Fragrantica.com: editorial layout reference cho perfume authority site
