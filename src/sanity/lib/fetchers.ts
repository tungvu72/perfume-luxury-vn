import { client } from './client'
import { MASTER_PERFUMES } from '@/constants/mockData'
import type { Perfume } from '@/types'
import { cache } from 'react'

// â”€â”€â”€ GROQ query fields â€” aligned with actual Sanity product schema â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Schema notes:
//   brand       â†’ reference to brand doc  â†’ use brand->name, brand->slug.current
//   mainImage   â†’ image asset             â†’ "image": mainImage.asset->url
//   score       â†’ flat fields: scoreScents, scoreUniqueness, scoreCompliments, scoreValue
//   seasons     â†’ flat fields: seasonSpring, seasonSummer, seasonFall, seasonWinter
//   dayNight    â†’ flat fields: dayUse, nightUse
//   notes       â†’ arrays of strings (topNotes, middleNotes, baseNotes)
const PRODUCT_QUERY_FIELDS = `
    _id,
    "id": slug.current,
    "brand": brand->name,
    "brandSlug": brand->slug.current,
    name,
    subName,
    gender,
    "image": mainImage.asset->url,
    "images": images[]{
        "url": asset->url,
        caption,
        source
    },
    description,
    verdict,
    verdictShort,
    "score": {
        "scent": scoreScents,
        "uniqueness": scoreUniqueness,
        "compliments": scoreCompliments,
        "value": scoreValue,
        "total": round((scoreScents + scoreUniqueness + scoreCompliments + scoreValue) / 4 * 10) / 10
    },
    vibes,
    longevity,
    sillage,
    "seasons": {
        "spring": seasonSpring,
        "summer": seasonSummer,
        "fall": seasonFall,
        "winter": seasonWinter
    },
    "dayNight": {
        "day": dayUse,
        "night": nightUse
    },
    "topNotes": topNotes[]{ "name": @ },
    "middleNotes": middleNotes[]{ "name": @ },
    "baseNotes": baseNotes[]{ "name": @ },
    accords,
    tags,
    sizes,
    basePrice,
    "shopeeOffers": marketPlaceLinks[]{ "label": platform, "seller": platform, "price": price, "link": url, "image": "" },
    perfumer
`

export const getAllProducts = cache(async (): Promise<Perfume[]> => {
    try {
        const products = await client.fetch(`*[_type == "product"] { ${PRODUCT_QUERY_FIELDS} }`)
        const merged = new Map<string, Perfume>();

        MASTER_PERFUMES.forEach((product) => {
            merged.set(product.id, product);
        });

        products.forEach((product: Perfume) => {
            if (product?.id) {
                merged.set(product.id, { ...merged.get(product.id), ...product });
            }
        });

        return Array.from(merged.values());
    } catch (error) {
        console.error("Sanity fetch error (getAllProducts):", error);
        return MASTER_PERFUMES;
    }
})

export const getProductBySlug = cache(async (slug: string): Promise<Perfume | null> => {
    try {
        const product = await client.fetch(
            `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_QUERY_FIELDS} }`,
            { slug }
        )
        return product || MASTER_PERFUMES.find(p => p.id === slug) || null;
    } catch (error) {
        console.error(`Sanity fetch error (getProductBySlug - ${slug}):`, error);
        return MASTER_PERFUMES.find(p => p.id === slug) || null;
    }
})

export const getProductsByGender = cache(async (gender: string): Promise<Perfume[]> => {
    const mockProducts = MASTER_PERFUMES.filter((p) => p.gender === gender);

    try {
        const products = await client.fetch(
            `*[_type == "product" && gender == $gender] { ${PRODUCT_QUERY_FIELDS} }`,
            { gender }
        )

        const merged = new Map<string, Perfume>();

        mockProducts.forEach((product) => {
            merged.set(product.id, product);
        });

        products.forEach((product: Perfume) => {
            if (product?.id) {
                merged.set(product.id, { ...merged.get(product.id), ...product });
            }
        });

        return Array.from(merged.values());
    } catch (error) {
        return mockProducts;
    }
})

export const getProductsByBrand = cache(async (brandSlug: string): Promise<Perfume[]> => {
    const mockProducts = MASTER_PERFUMES.filter(
        (p) => (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-')) === brandSlug
    );

    try {
        const products = await client.fetch(
            `*[_type == "product" && brand->slug.current == $brandSlug] { ${PRODUCT_QUERY_FIELDS} }`,
            { brandSlug }
        )

        const merged = new Map<string, Perfume>();

        mockProducts.forEach((product) => {
            merged.set(product.id, product);
        });

        products.forEach((product: Perfume) => {
            if (product?.id) {
                merged.set(product.id, { ...merged.get(product.id), ...product });
            }
        });

        return Array.from(merged.values());
    } catch (error) {
        return mockProducts;
    }
})

export const searchProducts = async (searchTerm: string): Promise<Perfume[]> => {
    try {
        const products = await client.fetch(
            `*[_type == "product" && (name match $searchTerm || brand->name match $searchTerm || $searchTerm in tags)] { ${PRODUCT_QUERY_FIELDS} }`,
            { searchTerm: `*${searchTerm}*` }
        )
        return products.length > 0 ? products : MASTER_PERFUMES.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 10);
    } catch (error) {
        return MASTER_PERFUMES.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 10);
    }
}

export const getTopRankedProducts = cache(async (): Promise<Perfume[]> => {
    try {
        const products = await client.fetch(
            `*[_type == "product"] | order(score.total desc) [0...20] { ${PRODUCT_QUERY_FIELDS} }`
        )
        return products.length > 0 ? products : [...MASTER_PERFUMES].sort((a, b) => b.score.total - a.score.total).slice(0, 20);
    } catch (error) {
        return [...MASTER_PERFUMES].sort((a, b) => b.score.total - a.score.total).slice(0, 20);
    }
})

export const getRelatedProducts = cache(async (currentSlug: string, brandName: string, gender: string): Promise<Perfume[]> => {
    try {
        const products = await client.fetch(
            `*[_type == "product" && slug.current != $currentSlug && (brand == $brandName || gender == $gender)] [0...4] { ${PRODUCT_QUERY_FIELDS} }`,
            { currentSlug, brandName, gender }
        )
        return products.length > 0 ? products : MASTER_PERFUMES.filter(p => p.id !== currentSlug && (p.brand === brandName || p.gender === gender)).slice(0, 4);
    } catch (error) {
        return MASTER_PERFUMES.filter(p => p.id !== currentSlug && (p.brand === brandName || p.gender === gender)).slice(0, 4);
    }
})

export const getAllBrands = cache(async () => {
    const buildMockBrands = () => {
        const brandMap = new Map();
        MASTER_PERFUMES.forEach(p => {
            const slug = p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-');
            const existing = brandMap.get(slug);
            if (existing) {
                existing.productCount += 1;
            } else {
                brandMap.set(slug, { _id: slug, name: p.brand, slug, productCount: 1 });
            }
        });
        return Array.from(brandMap.values());
    };

    try {
        const brands = await client.fetch(`*[_type == "brand"] { _id, name, "slug": slug.current }`)
        const mockBrands = buildMockBrands();
        const merged = new Map<string, any>();

        mockBrands.forEach((brand: any) => {
            merged.set(brand.slug, brand);
        });

        brands.forEach((brand: any) => {
            const existing = merged.get(brand.slug);
            merged.set(brand.slug, {
                ...existing,
                ...brand,
                productCount: existing?.productCount || 0,
            });
        });

        return Array.from(merged.values());
    } catch (error) {
        return buildMockBrands();
    }
})

export const getBrandBySlug = cache(async (slug: string) => {
    try {
        const brand = await client.fetch(
            `*[_type == "brand" && slug.current == $slug][0] { _id, name, "slug": slug.current }`,
            { slug }
        )
        if (brand) return brand;
        const brands = await getAllBrands();
        return brands.find((b: any) => b.slug === slug) || null;
    } catch (error) {
        const brands = await getAllBrands();
        return brands.find((b: any) => b.slug === slug) || null;
    }
})
