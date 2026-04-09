import { MASTER_PERFUMES } from '@/constants/mockData'
import type { Perfume } from '@/types'
import { cache } from 'react'
import { filterValidProducts } from '@/lib/productValidation'
import { findProductByNewSlug, isProductSlug } from '@/lib/productUrl'

// ─── DATA LAYER ─────────────────────────────────────────────────────────────
// Sanity CMS not configured — all functions return local mockData directly.
// Zero-latency: no network calls, fully static-renderable.
// To re-enable Sanity CMS: configure NEXT_PUBLIC_SANITY_PROJECT_ID in env
// and restore the client.fetch() calls from git history.
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
    return filterValidProducts(
        MASTER_PERFUMES.filter(p =>
            p.isPublished === true &&
            (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-')) === brandSlug
        )
    );
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
    const brandMap = new Map<string, any>();
    MASTER_PERFUMES.filter(p => p.isPublished === true).forEach(p => {
        const slug = p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-');
        const existing = brandMap.get(slug);
        if (existing) {
            existing.productCount += 1;
        } else {
            brandMap.set(slug, { _id: slug, name: p.brand, slug, productCount: 1 });
        }
    });
    return Array.from(brandMap.values());
})

export const getBrandBySlug = cache(async (slug: string) => {
    const brands = await getAllBrands();
    return brands.find((b: any) => b.slug === slug) || null;
})
