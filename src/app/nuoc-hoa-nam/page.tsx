import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";

const now = new Date();
const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

export const metadata: Metadata = {
    title: `Nước hoa Nam Chính Hãng - Review & Bảng Giá ${currentMonthYear} | Maison de SON`,
    description: "Bộ sưu tập nước hoa nam chính hãng từ phân khúc đại trà đến cao cấp: Sauvage, Bleu de Chanel, Aventus... Đánh giá chuyên sâu và so sánh giá thực tế.",
    alternates: {
        canonical: "https://www.maisondeson.com/nuoc-hoa-nam-chinh-hang",
    },
    openGraph: {
        title: "Nước Hoa Nam Chính Hãng | Maison de SON",
        description: "Review và bảng giá nước hoa nam từ phân khúc đại trà đến cao cấp.",
    },
};

export default async function NamGioiPage() {
    const products = await getProductsByGender("nam");
    return (
        <CategoryLayout
            title="Dành Cho Nam"
            description={`${products.length || 0} mẫu nước hoa nam từ phân khúc đại trà đến niche cao cấp, được đánh giá và chấm điểm chi tiết.`}
            products={products}
            breadcrumbLabel="Nước Hoa Nam"
        />
    );
}