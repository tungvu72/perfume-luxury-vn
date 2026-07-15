/**
 * Product entity canonicalization.
 *
 * COMMERCIAL_V4_ENTITY_FIX_01:
 * - ysl-libre-intense-edp is a duplicate of libre-intense (same YSL Libre Intense EDP)
 * - Keep libre-intense as the only indexable / listable product entity
 * - MASTER_PERFUMES retains both source records (catalog count 277)
 */

/** alias product id → canonical product id */
export const PRODUCT_ID_ALIASES: Record<string, string> = {
  "ysl-libre-intense-edp": "libre-intense",
};

/** Product IDs that must not appear in listings, sitemap, or search */
export const DEPRECATED_PRODUCT_IDS = new Set(Object.keys(PRODUCT_ID_ALIASES));

export function resolveProductId(id: string | undefined | null): string {
  if (!id) return "";
  return PRODUCT_ID_ALIASES[id] || id;
}

export function isDeprecatedProductId(id: string | undefined | null): boolean {
  if (!id) return false;
  return DEPRECATED_PRODUCT_IDS.has(id);
}
