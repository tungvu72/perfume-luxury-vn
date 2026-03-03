import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="flex flex-col items-center justify-center py-32 px-5 text-center">
                <div className="max-w-md animate-fade-up">
                    <span className="text-[100px] md:text-[150px] font-serif font-bold text-gray-100 leading-none">404</span>
                    <h1 className="text-2xl md:text-3xl font-serif mb-6 -mt-8 relative z-10">Mùi hương này đã bay xa...</h1>
                    <p className="text-sm text-gray-500 mb-10 leading-relaxed">
                        Chai nước hoa hoặc bài viết bạn đang tìm kiếm không còn tồn tại hoặc đã được chuyển đến một phân vùng khác trong thư viện của chúng tôi.
                    </p>
                    <Link
                        href="/"
                        className="inline-block border-2 border-foreground px-10 py-4 text-xs font-bold uppercase tracking-[2px] hover:bg-foreground hover:text-white transition-all active:scale-95"
                    >
                        Trở về trang chủ
                    </Link>

                    <div className="mt-20 border-t border-gray-100 pt-10 grid grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tìm kiếm?</h4>
                            <p className="text-[10px] text-gray-400">Sử dụng thanh tìm kiếm phía trên để tìm chai nước hoa yêu thích của bạn.</p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Hỗ trợ?</h4>
                            <p className="text-[10px] text-gray-400">Nhắn tin trực tiếp qua Zalo để chúng tôi hỗ trợ bạn nhanh nhất.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
