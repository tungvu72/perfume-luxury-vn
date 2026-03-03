import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star, Users, Database, Sparkles, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Về Maison de SON | Sứ mệnh định nghĩa lại Review nước hoa Việt Nam",
    description: "Khám phá hành trình xây dựng cộng đồng nước hoa Maison de SON. Nơi kiến thức chuyên sâu và sự minh bạch được đặt lên hàng đầu.",
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
                        Kiến tạo chuẩn mực <br /> <span className="italic font-normal">Review nước hoa mới</span>
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
                                    <h3 className="text-xl font-bold mb-2">Dữ liệu hóa mùi hương</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Không còn những lời mô tả mơ hồ. Maison de SON dùng hệ thống 10 chỉ số từ Scent DNA cho đến hiệu năng (Longevity, Sillage) để bạn có cái nhìn chính xác nhất.
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
                            <div className="uppercase tracking-widest text-xs opacity-70">Standard Scoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE GOLD STANDARD SECTION */}
            <section className="bg-[#1a1a1a] py-32 text-white">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-[4px] uppercase text-[10px] block mb-4">The Maison Standard</span>
                        <h2 className="text-4xl md:text-5xl font-serif">Quy trình thẩm định 5 bước</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { step: "01", title: "Phân tích DNA", desc: "Bóc tách từng nốt hương bằng khứu giác nhạy bén của chuyên gia." },
                            { step: "02", title: "Thử nghiệm nóng", desc: "Xịt trực tiếp lên da trong môi trường khí hậu Việt Nam 8-12 tiếng." },
                            { step: "03", title: "Kiểm định thực tế", desc: "Thu thập phản hồi từ người xung quanh để đo lường sức hút (Compliments)." },
                            { step: "04", title: "Đối chiếu thị trường", desc: "Kiểm tra nguồn gốc, phân loại fullbox/chiết và mức giá hợp lý nhất." },
                            { step: "05", title: "Chấm điểm vàng", desc: "Tổng hợp dữ liệu và xuất bài Review 'Gold Standard' lên website." }
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

            {/* TRUST SECTION */}
            <section className="py-32 px-5 text-center bg-[#F9F9F9]">
                <div className="max-w-2xl mx-auto">
                    <Sparkles className="mx-auto text-primary mb-8" size={48} />
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">"Chúng tôi không bán nước hoa, <br /> chúng tôi bán sự thông thái khi chọn hương."</h2>
                    <p className="text-gray-500 text-lg mb-12">
                        Đội ngũ Maison de SON tin rằng mỗi mùi hương là một chữ ký cá nhân. Hãy để chúng tôi giúp bạn tìm thấy dấu ấn riêng của mình bằng dữ liệu thực tế nhất.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                            Khám phá Tủ hương
                        </Link>
                        <Link href="/bang-xep-hang" className="bg-white border border-[var(--border)] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                            Bảng xếp hạng
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
