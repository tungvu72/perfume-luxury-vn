'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error('Website Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5 text-center">
            <div className="text-6xl mb-6">🌿</div>
            <h2 className="text-3xl font-serif mb-4">Ối! Có lỗi nhỏ vừa xảy ra</h2>
            <p className="text-gray-400 text-sm max-w-md mb-8">
                Maison de SON đang được tinh chỉnh để mang lại trải nghiệm tốt nhất.
                Vui lòng thử tải lại trang hoặc quay lại sau giây lát.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={() => reset()}
                    className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                    Thử lại ngay
                </button>
                <Link
                    href="/"
                    className="bg-gray-100 text-gray-600 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                    Về trang chủ
                </Link>
            </div>
            <div className="mt-12 text-[10px] text-gray-300 font-mono">
                Error ID: {error.digest || 'unknown'}
            </div>
        </div>
    );
}
