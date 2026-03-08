import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#FAF9F8] border-t border-[var(--border)] pt-16 pb-8">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Cột 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-serif tracking-[3px] uppercase mb-6 block">
                            Maison de SON
                        </Link>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">
                            Trang web chia sẻ kiến thức, trải nghiệm thực tế và định hướng chọn mua nước hoa cho người Việt. Maison de SON ưu tiên thông tin rõ ràng, dễ hiểu và hữu ích trước khi nói đến chuyện mua bán.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all">
                                <Instagram size={16} />
                            </Link>
                            <Link href="#" className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all">
                                <Facebook size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Cột 2: Danh Mục */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[2px] mb-6">Khám phá</h4>
                        <ul className="space-y-4 text-xs font-semibold text-gray-500">
                            <li><Link href="/nam-gioi" className="hover:text-primary transition-colors py-1 block">Nước hoa Nam</Link></li>
                            <li><Link href="/nu-gioi" className="hover:text-primary transition-colors py-1 block">Nước hoa Nữ</Link></li>
                            <li><Link href="/unisex" className="hover:text-primary transition-colors py-1 block">Nước hoa Unisex</Link></li>
                            <li><Link href="/thuong-hieu" className="hover:text-primary transition-colors py-1 block">Thương hiệu A-Z</Link></li>
                            <li><Link href="/theo-nhu-cau" className="hover:text-primary transition-colors py-1 block">Theo nhu cầu</Link></li>
                            <li><Link href="/theo-not-huong" className="hover:text-primary transition-colors py-1 block">Theo nốt hương</Link></li>
                            <li><Link href="/bang-xep-hang" className="hover:text-primary transition-colors py-1 block">Bảng xếp hạng</Link></li>
                        </ul>
                    </div>

                    {/* Cột 3: Hỗ Trợ */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[2px] mb-6">Hỗ trợ</h4>
                        <ul className="space-y-4 text-xs font-semibold text-gray-500">
                            <li><Link href="/kien-thuc" className="hover:text-primary transition-colors py-1 block">Kiến thức nước hoa</Link></li>
                            <li><Link href="/gioi-thieu" className="hover:text-primary transition-colors py-1 block">Về Maison de SON</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors py-1 block">Chính sách bảo hành</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors py-1 block">Liên hệ hợp tác</Link></li>
                        </ul>
                    </div>

                    {/* Cột 4: Liên hệ */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[2px] mb-6">Liên hệ</h4>
                        <ul className="space-y-4 text-xs font-semibold text-gray-500 text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={14} className="mt-0.5" />
                                <span>L3-456, Vinhomes Central Park,<br />Bình Thạnh, TP. HCM</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} />
                                <span>090 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={14} />
                                <span>contact@maisondeson.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        © {currentYear} Maison de SON · Kiến thức, review & trải nghiệm thực tế
                    </p>
                    <div className="flex gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        <Link href="#" className="hover:text-primary transition-colors py-1 block">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors py-1 block">Terms of Service</Link>
                    </div>
                </div>

                {/* Disclaimer - Rất quan trọng cho SEO */}
                <div className="mt-8 p-4 bg-gray-100/50 rounded-lg">
                    <p className="text-[9px] text-gray-400 leading-relaxed italic text-center">
                        Maison de SON là nền tảng đánh giá độc lập. Chúng tôi cung cấp thông tin trung thực dựa trên trải nghiệm thực tế và gợi ý nơi mua uy tín cho người dùng.
                    </p>
                </div>
            </div>
        </footer>
    );
}
