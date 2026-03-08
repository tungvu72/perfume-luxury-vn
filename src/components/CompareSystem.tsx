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
        <div className="fixed bottom-0 left-0 right-0 z-[90] animate-fade-up border-t-2 border-primary bg-white shadow-2xl">
            <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3">
                <Scale size={16} className="text-primary flex-shrink-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex-shrink-0 hidden md:block">
                    So sánh ({items.length}/3)
                </span>
                <div className="flex flex-1 gap-2 overflow-x-auto sm:gap-3">
                    {items.map(p => (
                        <div key={p.id} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-gray-50 px-2.5 py-1.5 sm:px-3">
                            <div className="w-7 h-7 bg-gray-100 rounded-full overflow-hidden relative">
                                <Image src={p.image} alt={p.name} fill sizes="28px" className="object-cover" />
                            </div>
                            <span className="max-w-[78px] truncate text-[10px] font-semibold sm:max-w-[100px]">{p.name}</span>
                            <button onClick={() => remove(p.id)}><X size={10} className="text-gray-400" /></button>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <button onClick={clear} className="text-[10px] font-bold text-gray-400 hover:text-red-500 transition-colors">Xoá</button>
                    {items.length >= 2 && (
                        <Link href="/so-sanh" className="rounded-full bg-primary px-3.5 py-2 text-[10px] font-bold text-white transition-colors hover:bg-primary/90 sm:px-4">
                            So sánh
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
