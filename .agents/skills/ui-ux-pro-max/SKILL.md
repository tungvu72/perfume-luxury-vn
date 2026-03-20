---
description: UI/UX Pro Max - Design intelligence rules for professional, accessible UI
---

# UI/UX Pro Max Design Rules

> Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (46.5k ⭐)
> Adapted for Maison De Son perfume review website (Next.js + Tailwind)

## Design System (Maison De Son)

- **Primary**: `#0D7377` (Teal)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Border Radius**: 8px–24px
- **Shadows**: Soft, layered
- **Icons**: Lucide React (SVG only, NO emojis)

## 8 Rule Groups (by Priority)

### CRITICAL — Must Apply

1. **Color Contrast**: ≥ 4.5:1 ratio for all text
2. **Focus States**: `:focus-visible` with 2px outline on all interactive elements
3. **Alt Text**: Every `<Image>` must have descriptive `alt`
4. **Form Labels**: Every input needs `<label>` or `aria-label`
5. **Keyboard Nav**: All interactive elements reachable via Tab
6. **Touch Targets**: ≥ 44x44px on mobile (set via `min-h-[44px] min-w-[44px]`)
7. **Cursor Pointer**: All clickable elements → `cursor-pointer`
8. **Hover Feedback**: Visual change on hover with `transition` (150–300ms)

### HIGH — Important

9. **Image Optimization**: Use `next/image` with `sizes` prop, lazy loading
10. **Reduced Motion**: Respect `prefers-reduced-motion: reduce`
11. **Viewport Meta**: Properly set (Next.js handles automatically)
12. **Font Size**: ≥ 16px base on mobile to prevent zoom
13. **No Horizontal Scroll**: `overflow-x: hidden` on body

### MEDIUM — Should Have

14. **Line Height**: ≥ 1.5 for body text
15. **Line Length**: `max-width: 65ch` for prose/article content
16. **Font Pairing**: Heading font ≠ Body font
17. **Animation Duration**: 150–300ms for transitions
18. **Transform Only**: Animate `transform` and `opacity` only (no `width`/`height`/`margin`)

## Pre-Delivery Checklist

### Images
- [ ] No emoji icons — use Lucide SVG
- [ ] All icons from same set (Lucide)
- [ ] Hover doesn't break layout (use `transform` only)
- [ ] All images have `alt` text

### Interaction
- [ ] Clickable → `cursor-pointer`
- [ ] Hover → visual feedback (150–300ms transition)
- [ ] `:focus-visible` states visible
- [ ] Loading states on async buttons

### Layout & Responsive
- [ ] No content hidden by fixed navbar (use `scroll-mt-*`)
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Touch targets ≥ 44x44px

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

## CSS Globals (Already Applied)

```css
/* prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Keyboard focus */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Prose comfort */
.prose p, .prose li { max-width: 65ch; }
```
