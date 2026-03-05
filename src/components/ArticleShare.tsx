"use client";

import { useState, useEffect } from "react";
import { Link2, Check, Facebook } from "lucide-react";

interface ArticleShareProps {
    title: string;
    url?: string;
}

export default function ArticleShare({ title }: ArticleShareProps) {
    const [copied, setCopied] = useState(false);
    const [pageUrl, setPageUrl] = useState("");

    useEffect(() => {
        setPageUrl(window.location.href);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const shareToFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
            "_blank",
            "width=600,height=400"
        );
    };

    const shareToZalo = () => {
        window.open(
            `https://zalo.me/share?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`,
            "_blank",
            "width=600,height=400"
        );
    };

    return (
        <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-gray-400">Chia sẻ bài viết</p>
            <div className="flex flex-wrap gap-2">
                {/* Facebook */}
                <button
                    onClick={shareToFacebook}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166FE5] text-white text-xs font-bold rounded-full transition-colors"
                    aria-label="Chia sẻ lên Facebook"
                >
                    <Facebook size={13} />
                    <span>Facebook</span>
                </button>

                {/* Zalo */}
                <button
                    onClick={shareToZalo}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0068FF] hover:bg-[#0055CC] text-white text-xs font-bold rounded-full transition-colors"
                    aria-label="Chia sẻ qua Zalo"
                >
                    <span className="text-sm leading-none font-black">Z</span>
                    <span>Zalo</span>
                </button>

                {/* Copy link */}
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full border transition-all ${copied
                            ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                            : "border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                        }`}
                    aria-label="Sao chép link"
                >
                    {copied ? (
                        <>
                            <Check size={13} />
                            <span>Đã sao chép!</span>
                        </>
                    ) : (
                        <>
                            <Link2 size={13} />
                            <span>Sao chép link</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
