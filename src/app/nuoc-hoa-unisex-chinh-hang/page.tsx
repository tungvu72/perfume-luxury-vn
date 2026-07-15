import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";
import { buildGenderCategoryJsonLd } from "@/lib/categorySeo";
import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import "../nuoc-hoa-theo-nhu-cau/nhucau.css";

const PATH = "/nuoc-hoa-unisex-chinh-hang";
const CORE = getCommercialCoreSeo(PATH)!;
const H1 = CORE.h1;
const PAGE_TITLE = CORE.title;
const META_DESCRIPTION = CORE.description;
const CANONICAL = CORE.canonical;

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    alternates: {
        canonical: CANONICAL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: META_DESCRIPTION,
        url: CANONICAL,
    },
};

export default async function UnisexPage() {
    const products = await getProductsByGender("unisex");
    const { breadcrumb, collection } = buildGenderCategoryJsonLd({
        gender: "unisex",
        name: H1,
        description: META_DESCRIPTION,
        path: PATH,
        products,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
            />
            <CategoryLayout
                title={H1}
                breadcrumbLabel="Nước hoa unisex"
                description={`${products.length} mẫu nước hoa unisex — mùi trung tính, linh hoạt cho cả hai giới khi gu quan trọng hơn nhãn “nam/nữ”.`}
                intro={
                    <>
                        <p>
                            Nước hoa unisex là những mùi không bị khóa cứng theo giới tính marketing: gỗ, musk,
                            trà, da thuộc, hoa khô hay hương sạch tối giản… đều có thể hợp nam hoặc nữ tùy da
                            và cách xịt. Nhiều người bắt đầu từ unisex khi muốn mùi hiện đại, ít “nồng mùi
                            giới” nhưng vẫn có cá tính.
                        </p>
                        <p>
                            Khi duyệt, hãy nghĩ theo hoàn cảnh (đi làm, dạo phố, buổi tối) và nốt bạn thích hơn
                            là theo “chai dành cho ai”. Nếu cần nền tảng khái niệm, đọc bài giải thích unisex;
                            nếu đã rõ gu, dùng hub theo nốt hương hoặc theo nhu cầu để thu hẹp danh sách trước
                            khi đọc review từng chai trên trang sản phẩm.
                        </p>
                    </>
                }
                relatedLinks={[
                    { href: "/nuoc-hoa-unisex-la-gi", label: "Nước hoa unisex là gì?" },
                    { href: "/theo-not-huong", label: "Theo nốt hương" },
                    { href: "/kien-thuc", label: "Kiến thức nước hoa" },
                    { href: "/nuoc-hoa-nu-chinh-hang", label: "Nước hoa nữ" },
                ]}
                products={products}
            />
        </>
    );
}
