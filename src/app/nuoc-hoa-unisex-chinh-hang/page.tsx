import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";
import Breadcrumbs from "@/components/Breadcrumbs";
import "../nuoc-hoa-theo-nhu-cau/nhucau.css";

const now = new Date();
const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

export const metadata: Metadata = {
    title: `Nước hoa Unisex Chính Hãng - Review & Bảng Giá ${currentMonthYear} | Maison de SON`,
    description: "Bộ sưu tập nước hoa Unisex chính hãng: Baccarat Rouge 540, Santal 33, Another 13... Đánh giá chi tiết cho cả Nam và Nữ.",
    alternates: {
        canonical: "https://www.maisondeson.com/nuoc-hoa-unisex-chinh-hang",
    },
    openGraph: {
        title: "Nước Hoa Unisex Chính Hãng | Maison de SON",
        description: "Review và bảng giá nước hoa Unisex — cho cả Nam và Nữ.",
    },
};

export default async function UnisexPage() {
    const products = await getProductsByGender("unisex");
    return (
        <div className="pt-8">
            <div className="max-w-[1200px] mx-auto px-5">
                <Breadcrumbs items={[{ label: 'Unisex' }]} />
            </div>
            <CategoryLayout
                title="Unisex"
                description={`${products.length || 0} mẫu nước hoa Unisex - dành cho cả hai giới, từ những nhà sáng tạo hàng đầu thế giới.`}
                products={products}
            />
        </div>
    );
}

