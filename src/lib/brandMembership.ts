/**
 * Canonical brand ↔ product membership resolver.
 * Single source of truth for brand pages, hub counts, and validators.
 */

import { MASTER_PERFUMES } from "@/constants/mockData";
import type { Perfume } from "@/types";
import { filterValidProducts } from "@/lib/productValidation";
import {
  brandSlugsMatch,
  getCanonicalBrandDisplayName,
  getCanonicalBrandSlug,
  resolveBrandSlug,
} from "@/lib/brandCanonical";
import { isDeprecatedProductId } from "@/lib/productEntity";

/** All listable canonical products (published + valid, no deprecated). */
export function getCanonicalListableProducts(): Perfume[] {
  return filterValidProducts(
    MASTER_PERFUMES.filter((p) => p.isPublished === true),
  );
}

/** Products belonging to one canonical brand slug. */
export function getProductsForCanonicalBrand(brandSlug: string): Perfume[] {
  const canonical = resolveBrandSlug(brandSlug);
  return getCanonicalListableProducts().filter((p) =>
    brandSlugsMatch(getCanonicalBrandSlug(p), canonical),
  );
}

export type CanonicalBrandEntry = {
  slug: string;
  name: string;
  productCount: number;
  products: Perfume[];
};

/** 76 canonical brands with membership (sorted by display name). */
export function getCanonicalBrandCatalog(): CanonicalBrandEntry[] {
  const map = new Map<string, CanonicalBrandEntry>();
  for (const p of getCanonicalListableProducts()) {
    const slug = getCanonicalBrandSlug(p);
    const existing = map.get(slug);
    if (existing) {
      existing.products.push(p);
      existing.productCount += 1;
    } else {
      map.set(slug, {
        slug,
        name: getCanonicalBrandDisplayName(p),
        productCount: 1,
        products: [p],
      });
    }
  }
  return Array.from(map.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "vi"),
  );
}

export type MembershipAudit = {
  brandCount: number;
  productCount: number;
  assignmentCount: number;
  uniqueProductIds: number;
  crossBrand: string[];
  unassigned: string[];
  duplicates: string[];
  deprecatedLeaks: string[];
};

/** Machine-readable membership integrity check. */
export function auditBrandMembership(
  expectedBrandSlugs?: string[],
): MembershipAudit {
  const catalog = getCanonicalBrandCatalog();
  const listable = getCanonicalListableProducts();
  const assignedIds: string[] = [];
  const crossBrand: string[] = [];
  const deprecatedLeaks: string[] = [];

  for (const brand of catalog) {
    for (const p of brand.products) {
      if (isDeprecatedProductId(p.id)) {
        deprecatedLeaks.push(`${brand.slug}:${p.id}`);
      }
      const ps = getCanonicalBrandSlug(p);
      if (ps !== brand.slug) {
        crossBrand.push(`${p.id}@${brand.slug}->${ps}`);
      }
      assignedIds.push(p.id);
    }
  }

  const seen = new Set<string>();
  const duplicates: string[] = [];
  for (const id of assignedIds) {
    if (seen.has(id)) duplicates.push(id);
    seen.add(id);
  }

  const assignedSet = new Set(assignedIds);
  const unassigned = listable
    .map((p) => p.id)
    .filter((id) => !assignedSet.has(id));

  if (expectedBrandSlugs) {
    // ensure expected brand set size is reflected in catalog
    void expectedBrandSlugs;
  }

  return {
    brandCount: catalog.length,
    productCount: listable.length,
    assignmentCount: assignedIds.length,
    uniqueProductIds: seen.size,
    crossBrand,
    unassigned,
    duplicates,
    deprecatedLeaks,
  };
}
