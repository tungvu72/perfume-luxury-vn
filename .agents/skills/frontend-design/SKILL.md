---
description: Frontend Design Skill - Creative design techniques for distinctive, non-generic frontends
---

# Frontend Design Skill (Creative Layer)

> Source: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
> Official Anthropic plugin — use as CREATIVE ACCENT on top of UI/UX Pro Max base

## When to Use
- Hero sections that need "wow factor"
- Landing pages where first impression matters
- Brand showcase sections
- **NOT** for content-heavy areas (article body, product specs)

## Core Principles

### 1. Distinctive Typography
- Use **unique display fonts** for headings (not just Inter/Roboto)
- Pair with refined body font for readability
- Maison De Son: Playfair Display (already distinctive ✅)

### 2. Mesh & Texture
Create depth with CSS-only techniques:
```css
/* Gradient mesh background */
.hero-mesh {
  background: 
    radial-gradient(at 20% 80%, rgba(13,115,119,0.3) 0%, transparent 50%),
    radial-gradient(at 80% 20%, rgba(13,115,119,0.15) 0%, transparent 50%),
    radial-gradient(at 50% 50%, rgba(255,255,255,0.9) 0%, transparent 70%);
}

/* Noise texture overlay */
.texture-noise::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,...") repeat;
  opacity: 0.03;
  pointer-events: none;
}
```

### 3. Bold Color Strategy
- Use **dominant primary** with sharp accents
- NOT timid, even color distributions
- Maison De Son: Teal dominant + white/dark accents ✅

### 4. Orchestrated Motion
Staggered reveal animations (high-impact, not scattered):
```css
/* Staggered entry */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 80ms; }
.card:nth-child(3) { animation-delay: 160ms; }

@keyframes revealUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Anti-Patterns (AVOID)
- ❌ Generic purple/pink AI gradients
- ❌ Perfectly symmetrical layouts everywhere
- ❌ Default system fonts (Arial, sans-serif)
- ❌ Flat, depthless cards without shadow hierarchy
- ❌ Random micro-interactions without purpose

## When NOT to Use
- Article body content → keep clean, readable
- Data tables / comparison grids → clarity > creativity
- Forms → accessibility > aesthetics
- Navigation → convention > innovation
