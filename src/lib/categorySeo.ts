import type { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";

const SITE = "https://www.maisondeson.com";

export type GenderCategoryKey = "nam" | "nu" | "unisex";

export function buildGenderCategoryJsonLd(opts: {
    gender: GenderCategoryKey;
    name: string;
    description: string;
    path: string;
    products: Perfume[];
}) {
    const url = `${SITE}${opts.path}`;

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: `${SITE}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: opts.name,
                item: url,
            },
        ],
    };

    const itemList = {
        "@type": "ItemList",
        numberOfItems: opts.products.length,
        itemListElement: opts.products.map((p, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE}${getProductUrl(p)}`,
            name: `${p.brand} ${p.name}`.trim(),
        })),
    };

    const collection = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: opts.name,
        description: opts.description,
        url,
        isPartOf: {
            "@type": "WebSite",
            name: "Maison de SON",
            url: `${SITE}/`,
        },
        mainEntity: itemList,
    };

    return { breadcrumb, collection };
}
