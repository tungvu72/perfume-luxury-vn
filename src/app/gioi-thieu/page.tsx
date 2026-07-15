import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star, Users, Database, Sparkles, Heart } from "lucide-react";
import { Metadata } from "next";

import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import { AboutPolicyAnchors } from "@/components/commercial/CommercialTrustSections";

const CORE = getCommercialCoreSeo("/gioi-thieu")!;

export const metadata: Metadata = {
    title: CORE.title,
    description: CORE.description,
    alternates: {
        canonical: CORE.canonical,
    },
    openGraph: {
        title: CORE.title,
        description: CORE.description,
        url: CORE.canonical,
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-main-v2.png"
                    alt="Maison de SON Boutique"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="relative z-10 text-center px-5 max-w-4xl">
                    <div className="text-primary font-bold tracking-[6px] uppercase text-xs mb-4">Since 2026</div>
                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
                        {CORE.h1}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Maison de SON không chỉ là một website, đó là hành trình tìm kiếm sự thật đằng sau những nốt hương hoa mỹ.
                    </p>
                </div>
            </section>

            {/* MISSION SECTION */}
            <section className="py-24 px-5 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-snug">
                            Sứ mệnh của <br /> <span className="text-primary italic">Maison de SON</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Minh bạch tuyệt đối</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Chúng tôi không nhận tài trợ từ các nhãn hàng để viết bài tâng bốc. Mọi đánh giá đều xuất phát từ trải nghiệm thực tế và sự so sánh khách quan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <Database size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Giải thích mùi hương rõ ràng</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Không còn những lời mô tả mơ hồ. Maison de SON diễn giải mùi hương bằng ngôn ngữ dễ hiểu, trải nghiệm thực tế và các chỉ số quan trọng như độ lưu hương, độ tỏa hương và mức độ đáng tiền.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Vì cộng đồng Việt</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Chúng tôi hiểu rõ khí hậu và phong cách của người Việt Nam. Một chai nước hoa ngon ở Pháp chưa chắc đã phù hợp với cái nắng gắt của Sài Gòn hay độ ẩm của Hà Nội.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200"
                            alt="Perfume Art"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <div className="text-4xl font-serif mb-2">9.5/10</div>
                            <div className="uppercase tracking-widest text-xs opacity-70">Thang điểm chuẩn</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE GOLD STANDARD SECTION */}
            <section className="bg-[#1a1a1a] py-32 text-white">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-[4px] uppercase text-[10px] block mb-4">Tiêu chuẩn Maison</span>
                        <h2 className="text-4xl md:text-5xl font-serif">Quy trình thẩm định 5 bước</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { step: "01", title: "Giải mã cấu trúc mùi", desc: "Bóc tách từng tầng hương và cảm giác thực tế theo cách người Việt dễ hình dung." },
                            { step: "02", title: "Thử nghiệm nóng", desc: "Xịt trực tiếp lên da trong môi trường khí hậu Việt Nam 8-12 tiếng." },
                            { step: "03", title: "Kiểm định thực tế", desc: "Thu thập phản hồi từ người xung quanh để đo lường sức hút (Compliments)." },
                            { step: "04", title: "Đối chiếu thị trường", desc: "Kiểm tra nguồn gốc, phân loại fullbox/chiết và mức giá hợp lý nhất." },
                            { step: "05", title: "Chấm điểm vàng", desc: "Tổng hợp dữ liệu và xuất bài đánh giá chuẩn lên website." }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                                <div className="text-primary text-4xl font-serif mb-6 opacity-30 group-hover:opacity-100 transition-opacity">{item.step}</div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMERCIAL POLICY ANCHORS — visible without JS interaction */}
            <section className="bg-[#F9F9F9] py-16 px-5">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-8 max-w-3xl">
                        <span className="text-primary font-bold tracking-[4px] uppercase text-[10px] block mb-3">
                            Chính sách thương mại & biên tập
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif">
                            Tiêu chuẩn, giá tham khảo, affiliate và chỉnh sửa
                        </h2>
                        <p className="mt-3 text-gray-500 leading-relaxed">
                            Maison de Son không phải cửa hàng hay đại lý chính hãng. Các mục dưới đây giải thích
                            cách chúng tôi viết review, nói về giá và công bố quan hệ đối tác — có neo liên kết ổn định để chia sẻ.
                        </p>
                        <nav className="mt-5 flex flex-wrap gap-2 text-sm" aria-label="Neo chính sách">
                            <a href="#tieu-chuan-bien-tap" className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40">
                                #tieu-chuan-bien-tap
                            </a>
                            <a href="#gia-tham-khao" className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40">
                                #gia-tham-khao
                            </a>
                            <a href="#minh-bach-affiliate" className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40">
                                #minh-bach-affiliate
                            </a>
                            <a href="#chinh-sach-chinh-sua" className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40">
                                #chinh-sach-chinh-sua
                            </a>
                        </nav>
                    </div>
                    <AboutPolicyAnchors />
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="py-24 px-5 text-center bg-white">
                <div className="max-w-2xl mx-auto">
                    <Sparkles className="mx-auto text-primary mb-8" size={48} />
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">"Chúng tôi không bán nước hoa, <br /> chúng tôi giúp bạn chọn sáng suốt hơn."</h2>
                    <p className="text-gray-500 text-lg mb-12">
                        Đội ngũ Maison de SON tin rằng mỗi mùi hương là một chữ ký cá nhân. Hãy dùng review, tiêu chí nguồn mua
                        và giá tham khảo để thu hẹp lựa chọn — rồi xác nhận giao dịch trên kênh bán bạn tin cậy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                            Về trang chủ
                        </Link>
                        <Link href="/nuoc-hoa-theo-nhu-cau" className="bg-white border border-[var(--border)] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                            Lọc nước hoa
                        </Link>
                        <Link href="/tac-gia" className="bg-white border border-[var(--border)] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                            Tác giả & tiêu chuẩn
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
