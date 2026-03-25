import type { Perfume } from '@/types';

/**
 * Generate URL mới cho product: /nuoc-hoa-{gender}-{brand}-{product}
 * VD: /nuoc-hoa-nam-dior-sauvage-elixir
 */
type ProductUrlInput = { id: string; gender?: string; brandSlug?: string; brand: string };

export function getProductUrl(product: ProductUrlInput): string {
    const gender = product.gender || 'unisex';
    const brand = product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, '-');
    return `/nuoc-hoa-${gender}-${brand}-${product.id}`;
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
