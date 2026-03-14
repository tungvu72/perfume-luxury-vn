import type { Perfume } from '@/types';

/**
 * Validates that a product has the minimum required data to be displayed on the site.
 * Products missing critical fields (id, name, brand, score, image) should not be rendered
 * in any listing, homepage section, or related products block.
 * 
 * This prevents "shell" products or incomplete Sanity entries from creating 404 links.
 */
export function isValidProduct(product: Perfume | null | undefined): product is Perfume {
    if (!product) return false;
    if (!product.id || typeof product.id !== 'string' || product.id.trim() === '') return false;
    if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') return false;
    if (!product.brand || typeof product.brand !== 'string' || product.brand.trim() === '') return false;
    if (!product.score || typeof product.score.total !== 'number' || product.score.total <= 0) return false;
    if (!product.image || typeof product.image !== 'string' || product.image.trim() === '') return false;
    return true;
}

/**
 * Filters a list of products to only include valid, renderable products.
 * Use this before passing products to any component that renders product cards/links.
 */
export function filterValidProducts(products: Perfume[]): Perfume[] {
    return products.filter(isValidProduct);
}
