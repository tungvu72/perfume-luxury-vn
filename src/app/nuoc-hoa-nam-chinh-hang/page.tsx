import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";
import { buildGenderCategoryJsonLd } from "@/lib/categorySeo";
import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import "../nuoc-hoa-theo-nhu-cau/nhucau.css";

const PATH = "/nuoc-hoa-nam-chinh-hang";
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

export default async function NamGioiPage() {
    const products = await getProductsByGender("nam");
    const { breadcrumb, collection } = buildGenderCategoryJsonLd({
        gender: "nam",
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
                breadcrumbLabel="Nước hoa nam"
                description={`${products.length} mẫu nước hoa nam — từ mùi sạch dễ dùng đến các hướng gỗ, cay, tươi mát. Chọn theo hoàn cảnh, không theo mốt.`}
                intro={
                    <>
                        <p>
                            Nước hoa nam trên trang này được xếp theo mùi và trải nghiệm dùng thực tế: có chai
                            sạch, gọn để đi làm; có hướng gỗ–cay chững chạc cho buổi tối; có lựa chọn tươi,
                            thoáng hơn khi thời tiết nóng ẩm. Bạn không cần “mùi nam điển hình” theo khuôn mẫu —
                            quan trọng là mùi hợp da, hợp khoảng cách và nhịp sống của bạn.
                        </p>
                        <p>
                            Khi mới bắt đầu, hãy ưu tiên mùi dễ kiểm soát ban ngày, rồi mới thử các hướng đậm
                            hơn cho hẹn hò hay sự kiện. Nếu đang phân vân giữa designer và niche, đọc thêm hướng
                            dẫn chọn mùi theo nhu cầu hoặc theo nốt hương quen thuộc (gỗ, cam bergamot, xạ hương)
                            trước khi chốt chai.
                        </p>
                    </>
                }
                relatedLinks={[
                    { href: "/lan-dau-mua-nuoc-hoa-nam-nen-chon-gi", label: "Lần đầu mua nước hoa nam" },
                    { href: "/theo-nhu-cau", label: "Chọn theo nhu cầu" },
                    { href: "/theo-not-huong", label: "Theo nốt hương" },
                    { href: "/nuoc-hoa-unisex-chinh-hang", label: "Nước hoa unisex" },
                ]}
                products={products}
            />
        </>
    );
}
