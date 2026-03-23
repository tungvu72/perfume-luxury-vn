import { Perfume } from "@/types";
import { getRelatedProducts } from "@/sanity/lib/fetchers";
import Link from "next/link";
import Image from "next/image";
import { getProductUrl } from "@/lib/productUrl";

export default async function RelatedProducts({ current }: { current: Perfume }) {
    const related = await getRelatedProducts(current.id, current.brand, current.gender);

    if (related.length === 0) return null;

    return (
        <section className="border-t border-[var(--border)] pt-10 mt-10">
            <h2 className="text-2xl font-serif mb-8">Có thể bạn cũng thích</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                    <Link key={p.id} href={getProductUrl(p)} className="group">
                        <div className="aspect-[3/4] bg-[#F5F5F5] rounded-xl overflow-hidden mb-3 relative">
                            <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-primary border border-gray-100">
                                {p.score.total}
                            </div>
                        </div>
                        <div className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">{p.brand}</div>
                        <div className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{p.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{p.basePrice.toLocaleString()}đ</div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
