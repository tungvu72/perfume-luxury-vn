"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-wider"
            title="Sao chép liên kết"
        >
            {copied ? (
                <>
                    <Check size={12} className="text-emerald-500" />
                    <span className="text-emerald-500">Đã sao chép!</span>
                </>
            ) : (
                <>
                    <Link2 size={12} />
                    <span className="hidden md:inline">Sao chép link</span>
                </>
            )}
        </button>
    );
}
