import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/lib/dataFetchers";

const now = new Date();
const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

export const metadata: Metadata = {
    title: `Nước hoa Nữ Chính Hãng - Review & Bảng Giá ${currentMonthYear} | Maison de SON`,
    description: "Bộ sưu tập nước hoa nữ chính hãng từ dòng kiến điển đến cao cấp: Miss Dior, YSL Libre, Coco Mademoiselle, Delina... Đánh giá chuyên sâu về độ bám tỏa.",
    alternates: {
        canonical: "https://www.maisondeson.com/nuoc-hoa-nu-chinh-hang",
    },
    openGraph: {
        title: "Nước Hoa Nữ Chính Hãng | Maison de SON",
        description: "Review và bảng giá nước hoa nữ từ dòng kiến điển đến cao cấp.",
    },
};

export default async function NuGioiPage() {
    const products = await getProductsByGender("nu");
    return (
        <CategoryLayout
            title="Dành Cho Nữ"
            description={`${products.length || 0} mẫu nước hoa nữ từ dòng kiến điển đến cao cấp, được đánh giá chi tiết.`}
            products={products}
            breadcrumbLabel="Nước Hoa Nữ"
        />
    );
}