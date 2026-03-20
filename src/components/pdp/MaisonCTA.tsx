"use client";

import { Shield, MessageCircle } from "lucide-react";

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

      {/* Zalo CTA */}
      <a
        href="https://zalo.me/0961226169"
        target="_blank"
        rel="noopener noreferrer"
        className="maison-cta__btn w-full mt-4"
      >
        <MessageCircle size={16} />
        Tư vấn qua Zalo: 0961 226 169
      </a>
    </div>
  );
}
