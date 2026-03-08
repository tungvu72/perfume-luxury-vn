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
        <section className="bg-[#FAF8F5] border-t border-[var(--border)] py-14 md:py-20">
            <div className="max-w-[600px] mx-auto px-4 sm:px-5 text-center">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[3px] text-primary md:mb-4 md:tracking-[4px]">
                    Cộng đồng tinh hoa
                </span>
                <h2 className="mb-3 text-[28px] font-serif leading-tight md:mb-4 md:text-4xl">
                    Gia nhập thế giới mùi hương
                </h2>
                <p className="mb-6 text-sm leading-6 text-gray-500 md:mb-8 md:leading-relaxed">
                    Nhận tin về các deal nước hoa độc quyền, bài đánh giá mới nhất
                    và kiến thức chuyên sâu từ Maison de SON.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary py-4">
                        <span>✓</span> Cảm ơn bạn! Chúng tôi sẽ gửi tin sớm nhất.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
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
                            className="rounded-lg bg-foreground px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary active:scale-95"
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
