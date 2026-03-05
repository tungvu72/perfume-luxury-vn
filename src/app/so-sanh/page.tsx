"use client";

import Header from "@/components/Header";
import { useCompare } from "@/components/CompareSystem";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Droplet, Clock, Wind, Star, DollarSign } from "lucide-react";

export default function ComparePage() {
    const { items, remove, clear } = useCompare();

    if (items.length < 2) {
        return (
            <main className="min-h-screen bg-white pb-20">
                <Header />
                <div className="max-w-[800px] mx-auto px-5 py-20 text-center">
                    <div className="text-5xl mb-6">⚖️</div>
                    <h1 className="text-3xl font-serif mb-4">So sánh nước hoa</h1>
                    <p className="text-sm text-gray-400 mb-8">Hãy chọn ít nhất 2 chai nước hoa từ Bảng xếp hạng hoặc trang Chi tiết để bắt đầu so sánh.</p>
                    <Link href="/bang-xep-hang" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                        <ArrowLeft size={14} /> Đến Bảng xếp hạng
                    </Link>
                </div>
            </main>
        );
    }

    const rows = [
        { label: "Tổng điểm", icon: <Star size={14} className="text-primary" />, render: (p: typeof items[0]) => <span className="text-2xl font-serif font-bold text-primary">{p.score.total}/10</span> },
        { label: "Mùi hương", icon: null, render: (p: typeof items[0]) => <span className="font-semibold">{p.score.scent}/10</span> },
        { label: "Độc đáo", icon: null, render: (p: typeof items[0]) => <span className="font-semibold">{p.score.uniqueness}/10</span> },
        { label: "Nịnh mũi", icon: null, render: (p: typeof items[0]) => <span className="font-semibold">{p.score.compliments}/10</span> },
        { label: "Đáng giá", icon: null, render: (p: typeof items[0]) => <span className="font-semibold">{p.score.value}/10</span> },
        {
            label: "Độ lưu hương", icon: <Clock size={14} className="text-gray-400" />, render: (p: typeof items[0]) => (
                <div className="flex gap-0.5">{Array.from({ length: 10 }).map((_, i) => <div key={i} className={`w-3 h-3 rounded-sm ${i < (p.longevity || 0) ? 'bg-primary' : 'bg-gray-200'}`} />)}</div>
            )
        },
        {
            label: "Độ toả hương", icon: <Wind size={14} className="text-gray-400" />, render: (p: typeof items[0]) => (
                <div className="flex gap-0.5">{Array.from({ length: 10 }).map((_, i) => <div key={i} className={`w-3 h-3 rounded-sm ${i < (p.sillage || 0) ? 'bg-primary' : 'bg-gray-200'}`} />)}</div>
            )
        },
        { label: "Hương đầu", icon: <Droplet size={14} className="text-amber-400" />, render: (p: typeof items[0]) => <span className="text-xs">{p.topNotes.map(n => n.name).join(", ")}</span> },
        { label: "Hương giữa", icon: <Droplet size={14} className="text-rose-400" />, render: (p: typeof items[0]) => <span className="text-xs">{p.middleNotes.map(n => n.name).join(", ")}</span> },
        { label: "Hương cuối", icon: <Droplet size={14} className="text-gray-500" />, render: (p: typeof items[0]) => <span className="text-xs">{p.baseNotes.map(n => n.name).join(", ")}</span> },
        { label: "Giá tham khảo", icon: <DollarSign size={14} className="text-emerald-500" />, render: (p: typeof items[0]) => <span className="font-bold text-sm">{p.basePrice.toLocaleString()}đ</span> },
        {
            label: "Hành động",
            icon: null,
            render: (p: typeof items[0]) => (
                <Link href={`/san-pham/${p.id}`} className="inline-block bg-black text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-primary transition-colors active:scale-95">
                    Xem chi tiết
                </Link>
            )
        },
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />
            <div className="max-w-[1200px] mx-auto px-5 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link href="/bang-xep-hang" className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-primary mb-2">
                            <ArrowLeft size={12} /> Quay lại
                        </Link>
                        <h1 className="text-3xl font-serif">So sánh nước hoa</h1>
                    </div>
                    <button onClick={clear} className="text-xs text-gray-400 hover:text-red-500 font-semibold">Xoá tất cả</button>
                </div>

                {/* COMPARISON TABLE */}
                <div className="overflow-x-auto -mx-5 px-5" style={{ scrollbarWidth: 'none' }}>
                    <table className="w-full min-w-[500px]">
                        {/* HEADER: Product images & names */}
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="w-[120px] md:w-[160px] p-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider"></th>
                                {items.map(p => (
                                    <th key={p.id} className="p-3 text-center">
                                        <Link href={`/san-pham/${p.id}`} className="group">
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl mx-auto mb-3 overflow-hidden relative">
                                                <Image src={p.image} alt={p.name} fill sizes="96px" className="object-contain p-2 group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="text-[9px] font-bold text-primary tracking-wider uppercase">{p.brand}</div>
                                            <div className="text-sm font-serif font-semibold group-hover:text-primary transition-colors">{p.name}</div>
                                        </Link>
                                        <button onClick={() => remove(p.id)} className="text-[9px] text-gray-400 hover:text-red-500 mt-1">Xoá</button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, ri) => (
                                <tr key={ri} className={`border-b border-gray-50 ${ri === 0 ? 'bg-primary/5' : ''}`}>
                                    <td className="p-3 text-xs font-semibold text-gray-500">
                                        <div className="flex items-center gap-2">
                                            {row.icon}
                                            {row.label}
                                        </div>
                                    </td>
                                    {items.map(p => (
                                        <td key={p.id} className="p-3 text-center text-sm text-gray-700">
                                            {row.render(p)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
