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
        <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
            {isOpen && (
                <div className="flex flex-col gap-2 animate-fade-up">
                    <Link
                        href={`https://zalo.me/${ZALO_NUMBER}`}
                        target="_blank"
                        onClick={handleZaloClick}
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        <div className="w-8 h-8 bg-[#0068FF] rounded-full flex items-center justify-center">
                            <MessageCircle size={16} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-bold">Chat Zalo</div>
                            <div className="text-[10px] text-gray-400">Phan hoi trong 5 phut</div>
                        </div>
                    </Link>
                    <Link
                        href={`tel:${HOTLINE}`}
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Phone size={16} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xs font-bold">Hotline</div>
                            <div className="text-[10px] text-gray-400">{HOTLINE}</div>
                        </div>
                    </Link>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${isOpen
                    ? "bg-gray-800 text-white rotate-0"
                    : "bg-[#0068FF] text-white hover:scale-110"
                    }`}
                aria-label="Ho tro khach hang"
            >
                {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </button>
        </div>
    );
}