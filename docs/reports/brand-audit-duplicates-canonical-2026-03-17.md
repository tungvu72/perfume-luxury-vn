# Brand Audit — Duplicates & Canonical Names

Date: 2026-03-17
Audited by: Anti
Source: `src/constants/mockData.ts` (209 products)

---

## Issues Found

### 1. Duplicate Slugs — Same slug, different brand names

| brandSlug | Current Values | Issue | Proposed Canonical | Evidence | Confidence |
|-----------|---------------|-------|-------------------|----------|------------|
| `chloe` | CHLOE / CHLOÉ | Accent missing on 2/3 entries | `CHLOÉ` | Official brand uses é | High |
| `hermes` | HERMES / HERMÈS | Accent missing on 1/6 entries | `HERMÈS` | Official brand uses è | High |
| `initio` | INITIO / INITIO PARFUMS PRIVÉS | Short vs full name | `INITIO PARFUMS PRIVÉS` | Full name is official, but INITIO alone is common | Medium |
| `kilian` | KILIAN / BY KILIAN | Missing "BY" prefix | `BY KILIAN` | Official brand is "By Kilian" but often shortened | Medium |

### 2. Duplicate Brand Names — Same brand, different slugs

| Brand Name | Slugs Found | Issue | Proposed Canonical Slug | Evidence | Confidence |
|-----------|-------------|-------|------------------------|----------|------------|
| GIORGIO ARMANI | `armani` (6) / `giorgio-armani` (2) | Two different slugs for same brand | `armani` (majority, simpler) | 6 vs 2 count, simpler slug preferred | High |
| MAISON FRANCIS KURKDJIAN | `maison-francis-kurkdjian` (2) / `mfk` (2) | Two different slugs for same brand | `maison-francis-kurkdjian` (full, canonical) | Full name is proper, mfk is abbreviation | High |
| DOLCE & GABBANA | `dolce-gabbana` (2) / `dg` (2) | Two different slugs for same brand | `dolce-gabbana` (readable, canonical) | Full name preferred for SEO | High |
| HUGO BOSS | `hugo-boss` (1) / `boss` (1) | Two different slugs for same brand | `hugo-boss` (canonical) | Official brand is Hugo Boss | High |

### 3. Spelling/Format Issues

| Current | Issue | Proposed | Confidence |
|---------|-------|----------|------------|
| VIKTOR&ROLF | Missing spaces around & | VIKTOR & ROLF | Medium |
| KAYALI FRAGRANCES vs KAYALI | Different slugs (`kayali-fragrances` vs `kayali`) | Merge to `kayali`, brand = KAYALI | High |

---

## Summary

| Metric | Count |
|--------|-------|
| Total unique brandSlug values | 72 |
| Duplicate slug issues (same slug, diff name) | 4 |
| Duplicate brand issues (same brand, diff slug) | 4 |
| Spelling/format issues | 2 |
| **Total issues** | **10** |

## Recommendation

1. **Do NOT auto-merge** — Coder should review and fix one-by-one
2. Priority: fix accent issues first (CHLOÉ, HERMÈS) — these affect URL consistency
3. Merge duplicate slugs second (armani, mfk, dg, boss)
4. Verify KAYALI situation — may be different sub-brands

## Not Merged Automatically

Per prompt rules: "không tự merge nếu chưa chắc" — all items above are flagged for Coder to action.
