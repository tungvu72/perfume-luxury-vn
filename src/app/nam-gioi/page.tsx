import CategoryLayout from "@/components/CategoryLayout";
import { Metadata } from "next";
import { getProductsByGender } from "@/sanity/lib/fetchers";
import Breadcrumbs from "@/components/Breadcrumbs";

const now = new Date();
const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

export const metadata: Metadata = {
    title: `Nước hoa Nam Chính Hãng - Review & Bảng Giá ${currentMonthYear} | Maison de SON`,
    description: "Bộ sưu tập nước hoa nam chính hãng từ Niche đến Designer: Sauvage, Bleu de Chanel, Aventus... Đánh giá chuyên sâu và so sánh giá thực tế.",
};

export default async function NamGioiPage() {
    const products = await getProductsByGender("nam");
    return (
        <div className="pt-8">
            <div className="max-w-[1200px] mx-auto px-5">
                <Breadcrumbs items={[{ label: 'Nam' }]} />
            </div>
            <CategoryLayout
                title="Dành Cho Nam"
                description={`${products.length || 0} mẫu nước hoa nam từ Designer đến Niche, được chuyên gia đánh giá và chấm điểm chi tiết.`}
                products={products}
            />
        </div>
    );
}
