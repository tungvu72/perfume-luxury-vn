import type { Perfume } from '@/types';
import { getCanonicalBrandSlug } from '@/lib/brandCanonical';
import { resolveProductId } from '@/lib/productEntity';

/**
 * Generate URL mới cho product: /nuoc-hoa-{gender}-{brand}-{product}
 * VD: /nuoc-hoa-nam-dior-sauvage-elixir
 *
 * Brand segment uses canonical brandSlug (alias-resolved) so split brand
 * entities like ysl / yves-saint-laurent do not generate dual product URL families.
 * Product id uses canonical entity id so duplicate product records share one URL.
 */
type ProductUrlInput = { id: string; gender?: string; brandSlug?: string; brand: string };

export function getProductUrl(product: ProductUrlInput): string {
    const gender = product.gender || 'unisex';
    const brand = getCanonicalBrandSlug(product);
    const id = resolveProductId(product.id);
    return `/nuoc-hoa-${gender}-${brand}-${id}`;
}

/**
 * Parse URL slug mới để tìm product ID
 * Input: "nuoc-hoa-nam-dior-sauvage-elixir"
 * Output: "sauvage-elixir" (hoặc null nếu không match)
 */
export function parseProductSlug(slug: string): { gender: string; brandSlug: string; productId: string } | null {
    const match = slug.match(/^nuoc-hoa-(nam|nu|unisex)-(.+?)-((?:(?!\1).)+)$/);
    if (!match) return null;

    // Better approach: try to split after the known prefix
    const prefix = `nuoc-hoa-${match[1]}-`;
    const rest = slug.slice(prefix.length);

    // We need to find the brandSlug and productId from `rest`
    // Strategy: try all possible split points and return the first valid one
    return { gender: match[1], brandSlug: '', productId: rest };
}

/**
 * Find product by new URL slug
 * Looks up product by trying to match the slug pattern
 */
export function findProductByNewSlug(slug: string, products: Perfume[]): Perfume | null {
    // Direct match: generate URL for each product and compare
    for (const product of products) {
        const expectedSlug = getProductUrl(product).slice(1); // Remove leading /
        if (expectedSlug === slug) {
            return product;
        }
    }
    return null;
}

/**
 * Check if a slug looks like a product URL (starts with nuoc-hoa-)
 */
export function isProductSlug(slug: string): boolean {
    return slug.startsWith('nuoc-hoa-');
}
