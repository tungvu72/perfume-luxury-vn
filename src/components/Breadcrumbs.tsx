"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home size={12} />
            </Link>

            {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                    <ChevronRight size={10} className="text-gray-300" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-600 cursor-default">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}
