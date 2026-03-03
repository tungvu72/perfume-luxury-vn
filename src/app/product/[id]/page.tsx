import { getProductBySlug } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import { Metadata } from "next";
import ProductClient from "./ProductClient";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollProgress from "@/components/ScrollProgress";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import RelatedProducts from "@/components/RelatedProducts";

// export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id: slug } = await params;
    const product = await getProductBySlug(slug);
    const now = new Date();
    const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    if (!product) {
        return { title: `Không tìm thấy sản phẩm | Maison de SON` };
    }

    return {
        title: `Mua nước hoa ${product.brand} ${product.name} ${product.subName || ''} chính hãng - Giá tốt ${currentMonthYear} | Maison de SON`,
        description: `Mua nước hoa ${product.brand} ${product.name} chính hãng giá tốt. Đánh giá chuyên sâu từ Maison de SON: Điểm ${product.score.total}/10. Độ lưu hương ${(product.longevity ?? 0) >= 8 ? 'Rất lâu' : 'Khá'}, tỏa hương ${(product.sillage ?? 0) >= 8 ? 'Cực mạnh' : 'Tốt'}. Có sẵn bản 10ml chiết dùng thử.`,
        keywords: [product.brand, product.name, "chiết 10ml", "giá nước hoa", "mua chính hãng", "review nước hoa"],
        openGraph: {
            title: `Bán ${product.brand} ${product.name} ${product.subName || ''} Chính Hãng`,
            description: product.verdict,
            images: [product.image],
        },
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const now = new Date();
    const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": `${product.brand} ${product.name}`,
        "image": product.image,
        "description": product.description,
        "brand": { "@type": "Brand", "name": product.brand },
        "sku": product.id,
        "mpn": product.id,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.score.total,
            "bestRating": "10",
            "worstRating": "1",
            "ratingCount": "1200"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://maisondeson.com/product/${product.id}`,
            "priceCurrency": "VND",
            "price": product.basePrice,
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ScrollProgress />
            <Header />
            <div className="max-w-[1200px] mx-auto px-5 py-10">
                <Breadcrumbs
                    items={[
                        { label: product.gender === 'nam' ? 'Nam' : product.gender === 'nu' ? 'Nữ' : 'Unisex', href: `/${product.gender === 'nam' ? 'nam-gioi' : product.gender === 'nu' ? 'nu-gioi' : 'unisex'}` },
                        { label: product.brand, href: `/thuong-hieu/${product.brandSlug || ''}` },
                        { label: product.name }
                    ]}
                />
                <ProductClient
                    product={product}
                    relatedProducts={
                        <Suspense fallback={<div className="h-40 animate-pulse bg-gray-50 rounded-xl mt-10" />}>
                            <RelatedProducts current={product} />
                        </Suspense>
                    }
                />
            </div>
        </main>
    );
}
