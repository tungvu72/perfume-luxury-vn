"use client";

import { Shield, MessageCircle, Store, ExternalLink } from "lucide-react";

export default function MaisonCTA() {
  return (
    <div className="maison-cta">
      <div className="maison-cta__badge">
        <Shield size={12} />
        Chính hãng 100%
      </div>
      <h3 className="maison-cta__title">Mua tại Maison De Son</h3>

      {/* Trust badges */}
      <div className="mt-3 space-y-2">
        <p className="flex items-start gap-2 text-[13px] text-white/90 leading-relaxed">
          <span className="mt-0.5 text-emerald-300">✓</span>
          Cam kết hàng chính hãng 100%
        </p>
        <p className="flex items-start gap-2 text-[13px] text-white/90 leading-relaxed">
          <span className="mt-0.5 text-emerald-300">✓</span>
          Đền bù <strong className="text-white">10 triệu</strong> nếu phát hiện hàng giả
        </p>
        <p className="flex items-start gap-2 text-[13px] text-white/90 leading-relaxed">
          <span className="mt-0.5 text-emerald-300">✓</span>
          Nhiều ưu đãi tốt nhất thị trường
        </p>
      </div>

      {/* Shop links */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <a
          href="https://shopee.vn/maisondeson"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 backdrop-blur-sm px-3 py-2.5 text-[12px] font-bold text-white transition-all hover:bg-white/25"
        >
          <Store size={14} />
          Gian hàng Shopee
          <ExternalLink size={10} className="opacity-60" />
        </a>
        <a
          href="https://www.tiktok.com/@maisondeson"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 backdrop-blur-sm px-3 py-2.5 text-[12px] font-bold text-white transition-all hover:bg-white/25"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.51a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.18a8.16 8.16 0 004.76 1.52V7.25c-.34 0-.68-.04-1-.16z"/></svg>
          TikTok Shop
          <ExternalLink size={10} className="opacity-60" />
        </a>
      </div>

      {/* Zalo CTA */}
      <a
        href="https://zalo.me/0961226169"
        target="_blank"
        rel="noopener noreferrer"
        className="maison-cta__btn w-full"
      >
        <MessageCircle size={16} />
        Tư vấn qua Zalo: 0961 226 169
      </a>
    </div>
  );
}
