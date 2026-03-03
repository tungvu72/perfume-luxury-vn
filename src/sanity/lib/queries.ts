import { groq } from 'next-sanity'

// ═══════════════════════════════════════
// 📦 PRODUCT QUERIES
// ═══════════════════════════════════════

// Fragment dùng chung cho danh sách (card view)
const productCardFields = groq`
    _id,
    name,
    subName,
    "slug": slug.current,
    gender,
    "image": mainImage.asset->url,
    description,
    verdict,
    verdictShort,
    "brand": brand->name,
    "brandSlug": brand->slug.current,
    scoreScents,
    scoreUniqueness,
    scoreCompliments,
    scoreValue,
    longevity,
    sillage,
    basePrice,
    tags,
    vibes,
    "score": {
        "scent": scoreScents,
        "uniqueness": scoreUniqueness,
        "compliments": scoreCompliments,
        "value": scoreValue,
        "total": math::round(((scoreScents + scoreUniqueness + scoreCompliments + scoreValue) / 4) * 10) / 10
    }
`

// Fragment đầy đủ cho trang chi tiết
const productDetailFields = groq`
    ${productCardFields},
    "images": images[]{"url": asset->url, caption, source},
    topNotes,
    middleNotes,
    baseNotes,
    accords,
    seasonSpring,
    seasonSummer,
    seasonFall,
    seasonWinter,
    dayUse,
    nightUse,
    sizes,
    marketPlaceLinks,
    article,
    "seasons": {
        "spring": seasonSpring,
        "summer": seasonSummer,
        "fall": seasonFall,
        "winter": seasonWinter
    },
    "dayNight": {
        "day": dayUse,
        "night": nightUse
    }
`

// Lấy tất cả sản phẩm (danh sách)
export const allProductsQuery = groq`
    *[_type == "product"] | order(scoreScents desc) {
        ${productCardFields}
    }
`

// Lấy sản phẩm theo slug
export const productBySlugQuery = groq`
    *[_type == "product" && slug.current == $slug][0] {
        ${productDetailFields}
    }
`

// Lấy sản phẩm theo giới tính
export const productsByGenderQuery = groq`
    *[_type == "product" && gender == $gender] | order(scoreScents desc) {
        ${productCardFields}
    }
`

// Lấy sản phẩm theo thương hiệu
export const productsByBrandQuery = groq`
    *[_type == "product" && brand->slug.current == $brandSlug] | order(scoreScents desc) {
        ${productCardFields}
    }
`

// Tìm kiếm sản phẩm (cho Search Bar)
export const searchProductsQuery = groq`
    *[_type == "product" && (
        name match $searchTerm + "*" ||
        brand->name match $searchTerm + "*" ||
        $searchTerm in topNotes ||
        $searchTerm in middleNotes ||
        $searchTerm in baseNotes
    )] | order(scoreScents desc)[0..9] {
        ${productCardFields}
    }
`

// Lấy top ranking (theo điểm)
export const topRankedProductsQuery = groq`
    *[_type == "product"] | order(
        ((scoreScents + scoreUniqueness + scoreCompliments + scoreValue) / 4) desc
    )[0..19] {
        ${productCardFields}
    }
`

// Lấy sản phẩm gợi ý
export const relatedProductsQuery = groq`
    *[_type == "product" && slug.current != $currentSlug && (brand->name == $brandName || gender == $gender)] | order(scoreScents desc)[0..3] {
        ${productCardFields}
    }
`

// ═══════════════════════════════════════
// 🏷️ BRAND QUERIES
// ═══════════════════════════════════════

export const allBrandsQuery = groq`
    *[_type == "brand"] | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        "productCount": count(*[_type == "product" && references(^._id)])
    }
`

export const brandBySlugQuery = groq`
    *[_type == "brand" && slug.current == $slug][0] {
        _id,
        name,
        "slug": slug.current,
        description,
        logo
    }
`

// ═══════════════════════════════════════
// 📰 POST/BLOG QUERIES
// ═══════════════════════════════════════

export const allPostsQuery = groq`
    *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "author": author->name
    }
`

export const postBySlugQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        body,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "author": author->name
    }
`
