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
      <p className="maison-cta__text">
        Cam kết hàng chính hãng 100%.
        <br />
        Nếu phát hiện hàng giả — <strong>đền bù 20 triệu đồng</strong>.
      </p>
      <a
        href="https://zalo.me/0961226169"
        target="_blank"
        rel="noopener noreferrer"
        className="maison-cta__btn"
      >
        <MessageCircle size={16} />
        Liên hệ tư vấn Zalo
      </a>
    </div>
  );
}
