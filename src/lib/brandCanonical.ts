/**
 * Canonical brand slug resolver.
 *
 * Production must expose one brand entity / URL per house.
 * Aliases permanently resolve to the canonical slug used in mockData brandSlug.
 *
 * YSL decision (2026-07-14 audit):
 * - Dominant brandSlug in catalog: "ysl"
 * - Minority alias: "yves-saint-laurent" → /ysl
 *
 * BATCH_00 entity redirects (workbook APPROVED_TECHNICAL_ACTION):
 * - /armani → /giorgio-armani
 * - /mfk → /maison-francis-kurkdjian
 * - /jpg → /jean-paul-gaultier
 */

/** alias slug → canonical slug */
export const BRAND_SLUG_ALIASES: Record<string, string> = {
  "yves-saint-laurent": "ysl",
  armani: "giorgio-armani",
  mfk: "maison-francis-kurkdjian",
  jpg: "jean-paul-gaultier",
};

/** Preferred display name when normalizing known aliases */
export const BRAND_DISPLAY_CANONICAL: Record<string, string> = {
  ysl: "YVES SAINT LAURENT",
  "giorgio-armani": "GIORGIO ARMANI",
  "maison-francis-kurkdjian": "MAISON FRANCIS KURKDJIAN",
  "jean-paul-gaultier": "JEAN PAUL GAULTIER",
};

export function resolveBrandSlug(slug: string | undefined | null): string {
  if (!slug) return "";
  const key = slug.toLowerCase().trim();
  return BRAND_SLUG_ALIASES[key] || key;
}

export function rawBrandSlugFromProduct(product: {
  brandSlug?: string;
  brand: string;
}): string {
  return (
    product.brandSlug ||
    product.brand.toLowerCase().replace(/\s+/g, "-")
  ).toLowerCase();
}

/** Brand slug used for brand pages, sitemap brands, and PDP brand links */
export function getCanonicalBrandSlug(product: {
  brandSlug?: string;
  brand: string;
}): string {
  return resolveBrandSlug(rawBrandSlugFromProduct(product));
}

export function getCanonicalBrandDisplayName(product: {
  brandSlug?: string;
  brand: string;
}): string {
  const slug = getCanonicalBrandSlug(product);
  return BRAND_DISPLAY_CANONICAL[slug] || product.brand;
}

/** True if two slug strings refer to the same brand entity */
export function brandSlugsMatch(a: string, b: string): boolean {
  return resolveBrandSlug(a) === resolveBrandSlug(b);
}
