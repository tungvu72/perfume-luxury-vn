import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/sanity/lib/fetchers";
import Breadcrumbs from "@/components/Breadcrumbs";

const now = new Date();
const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

export const metadata: Metadata = {
    title: `Nước hoa Nữ Chính Hãng - Review & Bảng Giá ${currentMonthYear} | Maison de SON`,
    description: "Bộ sưu tập nước hoa nữ chính hãng từ kinh điển đến Niche: Miss Dior, YSL Libre, Coco Mademoiselle, Delina... Đánh giá chuyên sâu về độ bám tỏa.",
    alternates: {
        canonical: "https://www.maisondeson.com/nu-gioi",
    },
    openGraph: {
        title: "Nước Hoa Nữ Chính Hãng | Maison de SON",
        description: "Review và bảng giá nước hoa nữ từ kinh điển đến Niche.",
    },
};

export default async function NuGioiPage() {
    const products = await getProductsByGender("nu");
    return (
        <div className="pt-8">
            <div className="max-w-[1200px] mx-auto px-5">
                <Breadcrumbs items={[{ label: 'Nữ' }]} />
            </div>
            <CategoryLayout
                title="Dành Cho Nữ"
                description={`${products.length || 0} mẫu nước hoa nữ từ kinh điển đến Niche, được chuyên gia đánh giá chi tiết.`}
                products={products}
            />
        </div>
    );
}
