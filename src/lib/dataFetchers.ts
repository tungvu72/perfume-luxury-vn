import { MASTER_PERFUMES } from '@/constants/mockData'
import type { Perfume } from '@/types'
import { cache } from 'react'
import { filterValidProducts } from '@/lib/productValidation'
import { findProductByNewSlug, isProductSlug } from '@/lib/productUrl'
import { resolveBrandSlug } from '@/lib/brandCanonical'
import {
    getCanonicalBrandCatalog,
    getProductsForCanonicalBrand,
} from '@/lib/brandMembership'

// ─── DATA LAYER ─────────────────────────────────────────────────────────────
// Sanity CMS not configured — all functions return local mockData directly.
// Zero-latency: no network calls, fully static-renderable.
// ─────────────────────────────────────────────────────────────────────────────

export const getAllProducts = cache(async (): Promise<Perfume[]> => {
    return filterValidProducts(MASTER_PERFUMES.filter(p => p.isPublished === true));
})

export const getProductBySlug = cache(async (slug: string): Promise<Perfume | null> => {
    if (isProductSlug(slug)) {
        const all = filterValidProducts(MASTER_PERFUMES);
        return findProductByNewSlug(slug, all) || null;
    }
    return MASTER_PERFUMES.find(p => p.id === slug) || null;
})

export const getPublishedProducts = cache(async (): Promise<Perfume[]> => {
    return filterValidProducts(MASTER_PERFUMES.filter(p => p.isPublished === true));
})

export const getProductsByGender = cache(async (gender: string): Promise<Perfume[]> => {
    return filterValidProducts(MASTER_PERFUMES.filter(p => p.isPublished === true && p.gender === gender));
})

export const getProductsByBrand = cache(async (brandSlug: string): Promise<Perfume[]> => {
    return getProductsForCanonicalBrand(brandSlug);
})

export const searchProducts = async (searchTerm: string): Promise<Perfume[]> => {
    const q = searchTerm.toLowerCase();
    return MASTER_PERFUMES.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.subName && p.subName.toLowerCase().includes(q)) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
    ).slice(0, 10);
}

export const getTopRankedProducts = cache(async (): Promise<Perfume[]> => {
    return filterValidProducts(
        [...MASTER_PERFUMES].filter(p => p.isPublished === true).sort((a, b) => b.score.total - a.score.total).slice(0, 20)
    );
})

export const getRelatedProducts = cache(async (currentSlug: string, brandName: string, gender: string): Promise<Perfume[]> => {
    return filterValidProducts(
        MASTER_PERFUMES.filter(p =>
            p.isPublished === true && p.id !== currentSlug && (p.brand === brandName || p.gender === gender)
        ).slice(0, 4)
    );
})

export const getAllBrands = cache(async () => {
    return getCanonicalBrandCatalog().map((b) => ({
        _id: b.slug,
        name: b.name,
        slug: b.slug,
        productCount: b.productCount,
    }));
})

export const getBrandBySlug = cache(async (slug: string) => {
    const brands = await getAllBrands();
    const canonical = resolveBrandSlug(slug);
    return brands.find((b: any) => b.slug === canonical) || null;
})
