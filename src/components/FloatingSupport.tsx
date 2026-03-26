"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, X } from "lucide-react";
import { trackClick } from "@/lib/tracking";

const ZALO_NUMBER = "0961226169";
const HOTLINE = "0961226169";

export default function FloatingSupport() {
    const [isOpen, setIsOpen] = useState(false);

    const handleZaloClick = () => {
        trackClick('zalo', 'support-button');
    };

    return (
        <div className="fixed bottom-5 right-5 z-[100] hidden lg:flex flex-col items-end gap-3 md:bottom-6 md:right-6">
            {isOpen && (
                <div className="flex flex-col gap-2 animate-fade-up">
                    <Link
                        href={`https://zalo.me/${ZALO_NUMBER}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        onClick={handleZaloClick}
                        className="flex min-w-[188px] items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(27,18,13,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0D7377] text-white">
                            <MessageCircle size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#1b120d]">Nhắn Zalo</div>
                            <div className="text-[10px] text-gray-400">Tư vấn nhanh theo nhu cầu</div>
                        </div>
                    </Link>

                    <Link
                        href={`tel:${HOTLINE}`}
                        className="flex min-w-[188px] items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(27,18,13,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <Phone size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-[#1b120d]">Gọi điện</div>
                            <div className="text-[10px] text-gray-400">0961 226 169</div>
                        </div>
                    </Link>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all active:scale-90 ${isOpen
                    ? "bg-gray-800 text-white"
                    : "bg-[#0D7377] text-white hover:scale-105"
                    }`}
                aria-label="Liên hệ Maison de SON"
            >
                {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </button>
        </div>
    );
}
