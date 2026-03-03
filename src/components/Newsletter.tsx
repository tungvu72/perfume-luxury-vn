"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <section className="bg-[#FAF8F5] py-20 border-t border-[var(--border)]">
            <div className="max-w-[600px] mx-auto px-5 text-center">
                <span className="text-[10px] font-bold text-primary tracking-[4px] uppercase mb-4 block">
                    Cộng đồng tinh hoa
                </span>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Gia nhập thế giới mùi hương
                </h2>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                    Nhận tin về các deal nước hoa độc quyền, bài đánh giá mới nhất
                    và kiến thức chuyên sâu từ Maison de SON.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary py-4">
                        <span>✓</span> Cảm ơn bạn! Chúng tôi sẽ gửi tin sớm nhất.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email của bạn"
                            required
                            className="flex-1 px-5 py-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary transition-colors bg-white"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-foreground text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-primary transition-colors active:scale-95"
                        >
                            Đăng ký
                        </button>
                    </form>
                )}

                <p className="text-[9px] text-gray-400 mt-4">
                    Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
                </p>
            </div>
        </section>
    );
}
