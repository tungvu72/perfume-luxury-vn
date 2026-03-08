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
            <main className="min-h-screen bg-[#fcfaf7] pb-20">
                <Header />
                <div className="max-w-[900px] mx-auto px-4 sm:px-5 py-12 sm:py-20 text-center">
                    <div className="rounded-[28px] border border-[#eadfce] bg-white px-5 py-10 shadow-[0_20px_60px_rgba(27,18,13,0.05)] sm:px-8">
                        <div className="text-5xl mb-5">⚖️</div>
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Compare Tool</p>
                        <h1 className="text-3xl font-serif mb-4 leading-tight sm:text-4xl">So sánh nước hoa trước khi xuống tiền</h1>
                        <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500 mb-8 sm:text-base">
                            Chọn ít nhất 2 chai từ bảng xếp hạng hoặc trang chi tiết để đặt cạnh nhau về mùi hương, độ lưu, độ tỏa, mức giá và mức độ đáng tiền.
                        </p>
                        <Link href="/bang-xep-hang" className="inline-flex items-center gap-2 rounded-full border border-[#decfbd] px-5 py-3 text-sm font-bold text-[#4b3b30] hover:border-primary hover:text-primary">
                            <ArrowLeft size={14} /> Đến Bảng xếp hạng
                        </Link>
                    </div>
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
                <Link href={`/${p.id}`} className="inline-block rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary active:scale-95">
                    Xem chi tiết
                </Link>
            )
        },
    ];

    return (
        <main className="min-h-screen bg-[#fcfaf7] pb-20">
            <Header />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-6 sm:py-8">
                <div className="mb-6 flex items-center justify-between rounded-[24px] border border-[#eadfce] bg-white p-4 shadow-[0_12px_35px_rgba(27,18,13,0.03)] sm:mb-8 sm:p-5">
                    <div>
                        <Link href="/bang-xep-hang" className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-primary mb-2">
                            <ArrowLeft size={12} /> Quay lại
                        </Link>
                        <h1 className="text-[28px] font-serif leading-tight sm:text-3xl">So sánh nước hoa</h1>
                    </div>
                    <button onClick={clear} className="text-xs text-gray-400 hover:text-red-500 font-semibold">Xoá tất cả</button>
                </div>

                {/* COMPARISON TABLE */}
                <div className="overflow-x-auto -mx-4 px-4 sm:-mx-5 sm:px-5" style={{ scrollbarWidth: 'none' }}>
                    <table className="w-full min-w-[560px] overflow-hidden rounded-[24px] border border-[#eadfce] bg-white shadow-[0_16px_40px_rgba(27,18,13,0.04)]">
                        {/* HEADER: Product images & names */}
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="w-[120px] md:w-[160px] p-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider"></th>
                                {items.map(p => (
                                    <th key={p.id} className="p-3 text-center">
                                        <Link href={`/san-pham/${p.id}`} className="group">
                                            <div className="relative mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl bg-gray-50 md:h-24 md:w-24">
                                                <Image src={p.image} alt={p.name} fill sizes="96px" className="object-contain p-2 group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="text-[9px] font-bold text-primary tracking-wider uppercase">{p.brand}</div>
                                            <div className="text-xs font-serif font-semibold leading-snug group-hover:text-primary transition-colors md:text-sm">{p.name}</div>
                                        </Link>
                                        <button onClick={() => remove(p.id)} className="mt-1 text-[10px] text-gray-400 hover:text-red-500">Xoá</button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, ri) => (
                                <tr key={ri} className={`border-b border-gray-50 ${ri === 0 ? 'bg-primary/5' : ''}`}>
                                    <td className="p-3 text-[11px] font-semibold text-gray-500 md:text-xs">
                                        <div className="flex items-center gap-2">
                                            {row.icon}
                                            {row.label}
                                        </div>
                                    </td>
                                    {items.map(p => (
                                        <td key={p.id} className="p-3 text-center text-xs text-gray-700 md:text-sm">
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
