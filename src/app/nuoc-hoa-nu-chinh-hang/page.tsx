import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";
import { buildGenderCategoryJsonLd } from "@/lib/categorySeo";
import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import "../nuoc-hoa-theo-nhu-cau/nhucau.css";

const PATH = "/nuoc-hoa-nu-chinh-hang";
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

export default async function NuGioiPage() {
    const products = await getProductsByGender("nu");
    const { breadcrumb, collection } = buildGenderCategoryJsonLd({
        gender: "nu",
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
                breadcrumbLabel="Nước hoa nữ"
                description={`${products.length} mẫu nước hoa nữ — hoa nhẹ, ấm ngọt, quả tươi hay musk sạch. Lọc theo gu và lúc bạn thường xịt.`}
                intro={
                    <>
                        <p>
                            Nước hoa nữ ở đây không xếp theo “sang nhất” hay “hot trend”, mà theo cảm giác dùng:
                            mùi hoa thanh lịch cho ban ngày, hướng ấm–ngọt cuốn hơn cho buổi tối, hoặc các lựa
                            chọn sạch, gọn khi cần đi làm và ở gần người khác. Cùng một nốt hoa hồng hay vani
                            vẫn có thể rất khác nhau tùy nồng độ và cách mùi mở trên da.
                        </p>
                        <p>
                            Nếu bạn hay phân vân giữa mùi “dễ thương” và mùi có chiều sâu, hãy bắt đầu từ nốt
                            hương bạn đã thích (hoa, musk, trái cây, gỗ nhẹ), rồi đối chiếu review theo hoàn
                            cảnh thực tế. Trang này là nơi duyệt cả bộ sưu tập; các hub theo nhu cầu và nốt
                            hương giúp thu hẹp nhanh hơn trước khi đọc chi tiết từng chai.
                        </p>
                    </>
                }
                relatedLinks={[
                    { href: "/theo-not-huong", label: "Theo nốt hương" },
                    { href: "/theo-nhu-cau", label: "Chọn theo nhu cầu" },
                    { href: "/kien-thuc", label: "Kiến thức nước hoa" },
                    { href: "/nuoc-hoa-nam-chinh-hang", label: "Nước hoa nam" },
                ]}
                products={products}
            />
        </>
    );
}
