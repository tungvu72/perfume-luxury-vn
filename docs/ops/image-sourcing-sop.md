# Image Sourcing SOP

**Status:** Active  
**Owner:** Maison De Son  
**Last Updated:** 2026-03-15

## 1. Purpose
This document is the **single source of truth** for product image sourcing at Maison De Son.

If any older note, session log, or legacy rule conflicts with this SOP, **this SOP wins**.

---

## 2. Official Rule (Current)
Each product must have **2 standard images**:

### Image A — Main / Hero
- Format: **bottle + box**
- Role: primary product image
- Used for:
  - main `image` field
  - hero image
  - product card thumbnail
  - default listing/ranking image

### Image B — Gallery / Secondary
- Format: **bottle only**
- Role: secondary support image
- Used for:
  - `images[]` gallery
  - secondary product image

### Mandatory order
1. **Main image = bottle + box**
2. **Second image = bottle only**

Do not reverse this order.

---

## 3. Preferred Source
### Primary source: Amazon
Preferred image source:
- `m.media-amazon.com`

Search method:
- Search by exact product name + concentration/version
- Examples:
  - `"Bleu de Chanel Parfum" amazon`
  - `"Terre d'Hermes Parfum" amazon`
  - `"YSL Libre Le Parfum" amazon`

### Why Amazon
- Better consistency for packshots
- Often has both **bottle + box** and **bottle-only** images
- Easier to standardize across the catalog

---

## 4. Verification Checklist
Every image must be verified manually before approval.

Check all of the following:
1. Correct **brand**
2. Correct **product name**
3. Correct **concentration**
   - EDT / EDP / Parfum / Extrait / Cologne / Eau Fraîche / etc.
4. Correct **flanker / version**
5. Correct **bottle design**
6. If using bottle + box image, the **box must match the bottle**
7. If packaging version is uncertain (old/new/limited/collector/reformulation), mark as **Pending**

### Never approve if:
- wrong variant
- wrong concentration
- wrong bottle
- wrong packaging
- user-uploaded looking image
- dirty background / messy seller image
- ambiguous or low-confidence match

---

## 5. Decision Rules
### ✅ Done
Mark a product as **Done** only if:
- Image A found and verified: **bottle + box**
- Image B found and verified: **bottle only**
- Both images clearly match the exact product

### ⏳ Pending
Mark as **Pending** if:
- cannot find correct Amazon image
- cannot find both required image types
- variant/concentration is ambiguous
- packaging cannot be confirmed confidently
- needs CEO/manual support link

### Important
If confidence is low, **do not guess**.
Pending is better than using the wrong image.

---

## 6. File Naming Convention
Store local files in:
- `/public/images/products/`

Naming:
- Main image (bottle + box): `{id}-main.jpg`
- Bottle-only image: `{id}-bottle.jpg`

Example:
- `bleu-de-chanel-parfum-main.jpg`
- `bleu-de-chanel-parfum-bottle.jpg`

---

## 7. Frontend Usage Rule
For every product:
- Primary image shown first = `{id}-main.jpg`
- Secondary gallery image = `{id}-bottle.jpg`

If only one valid image exists, do **not** fake completion.
Leave the product as Pending until both required images are resolved.

---

## 8. Batch Workflow
When processing image batches:
1. Search Amazon for exact product
2. Find **bottle + box** image
3. Find **bottle-only** image
4. Verify both manually
5. Save using standard naming
6. Mark Done or Pending
7. Move on quickly if the case is ambiguous

### Throughput rule
- easy products: process immediately
- difficult products: note and skip
- do not let 1 hard case block the whole batch

---

## 9. Reporting Format
Each batch report must include:

```text
# Product Status
1 [Product Name] ✅ Done
  - Image A: bottle + box
  - Image B: bottle only

2 [Product Name] ⏳ Pending — [reason]

## Batch Summary
- X/Y products done
- N pending

## Pending needs support
- [Product] — [reason]

## Commit
- Hash: [hash]
- Push: [status]
```

---

## 10. Legacy Rule Handling
Legacy references may still mention:
- `fimgs.net`
- Fragrantica CDN
- Fragrantica community gallery
- old publishing standards written before this SOP

### Official instruction
Those are now **legacy references** for product image sourcing.
They are **not the active sourcing standard** unless explicitly reinstated.

For current work, follow this SOP:
- source priority = Amazon
- 2-image rule = bottle+box first, bottle-only second
- standard naming = `-main` and `-bottle`

---

## 11. Escalation Rule
If the product is too difficult to verify:
- mark Pending
- add a short note explaining what is missing
- wait for manual support link or confirmation

Do not improvise.

---

## 12. Final Standard
The current Maison De Son product image standard is:
- **Source priority:** Amazon
- **Image 1:** bottle + box
- **Image 2:** bottle only
- **Main display image:** bottle + box
- **If not confident:** Pending, not guessed

This SOP is the official rule until replaced by a newer version.
