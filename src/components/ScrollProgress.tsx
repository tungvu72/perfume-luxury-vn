"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const total = document.documentElement.scrollHeight - window.innerHeight;
                    const current = window.scrollY;
                    setProgress(total > 0 ? (current / total) * 100 : 0);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (progress <= 0) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[999] h-[2px] bg-transparent">
            <div
                className="h-full bg-primary transition-[width] duration-100 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
