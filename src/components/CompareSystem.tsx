"use client";

// Comparison System using React Context
import { useState, createContext, useContext, ReactNode } from "react";
import { Perfume } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { X, Scale } from "lucide-react";

// Simple comparison context
interface CompareContextType {
    items: Perfume[];
    add: (p: Perfume) => void;
    remove: (id: string) => void;
    clear: () => void;
}

const CompareContext = createContext<CompareContextType>({
    items: [], add: () => { }, remove: () => { }, clear: () => { }
});

export function CompareProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Perfume[]>([]);
    const add = (p: Perfume) => setItems(prev => prev.length >= 3 || prev.find(x => x.id === p.id) ? prev : [...prev, p]);
    const remove = (id: string) => setItems(prev => prev.filter(x => x.id !== id));
    const clear = () => setItems([]);

    return (
        <CompareContext.Provider value={{ items, add, remove, clear }}>
            {children}
            {items.length > 0 && <CompareBar items={items} remove={remove} clear={clear} />}
        </CompareContext.Provider>
    );
}

export function useCompare() {
    return useContext(CompareContext);
}

// Bottom Bar UI
function CompareBar({ items, remove, clear }: { items: Perfume[]; remove: (id: string) => void; clear: () => void }) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[90] bg-white border-t-2 border-primary shadow-2xl animate-fade-up">
            <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center gap-4">
                <Scale size={16} className="text-primary flex-shrink-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex-shrink-0 hidden md:block">
                    So sánh ({items.length}/3)
                </span>
                <div className="flex gap-3 flex-1 overflow-x-auto">
                    {items.map(p => (
                        <div key={p.id} className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full flex-shrink-0">
                            <div className="w-7 h-7 bg-gray-100 rounded-full overflow-hidden relative">
                                <Image src={p.image} alt={p.name} fill sizes="28px" className="object-cover" />
                            </div>
                            <span className="text-[10px] font-semibold truncate max-w-[100px]">{p.name}</span>
                            <button onClick={() => remove(p.id)}><X size={10} className="text-gray-400" /></button>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <button onClick={clear} className="text-[10px] font-bold text-gray-400 hover:text-red-500 transition-colors">Xoá</button>
                    {items.length >= 2 && (
                        <Link href="/so-sanh" className="text-[10px] font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                            So sánh
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
