"use client";

import { useState, useEffect } from "react";
import { Heart, Star, Crown } from "lucide-react";

interface EngagementButtonsProps {
  productId: string;
}

type EngagementType = "have" | "want" | "signature";

const BUTTONS = [
  { type: "have" as EngagementType, label: "I Have It", icon: Heart, activeColor: "bg-rose-500" },
  { type: "want" as EngagementType, label: "I Want It", icon: Star, activeColor: "bg-amber-500" },
  { type: "signature" as EngagementType, label: "My Signature", icon: Crown, activeColor: "bg-[var(--color-primary)]" },
];

function getStorageKey(productId: string, type: EngagementType): string {
  return `mds_engage_${productId}_${type}`;
}

export default function EngagementButtons({ productId }: EngagementButtonsProps) {
  const [active, setActive] = useState<Record<EngagementType, boolean>>({
    have: false,
    want: false,
    signature: false,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const newState: Record<EngagementType, boolean> = { have: false, want: false, signature: false };
    for (const btn of BUTTONS) {
      try {
        newState[btn.type] = localStorage.getItem(getStorageKey(productId, btn.type)) === "1";
      } catch { /* SSR safe */ }
    }
    setActive(newState);
  }, [productId]);

  const toggle = (type: EngagementType) => {
    setActive((prev) => {
      const next = { ...prev, [type]: !prev[type] };
      try {
        if (next[type]) {
          localStorage.setItem(getStorageKey(productId, type), "1");
        } else {
          localStorage.removeItem(getStorageKey(productId, type));
        }
      } catch { /* quota exceeded */ }
      return next;
    });
  };

  return (
    <div className="flex gap-2">
      {BUTTONS.map((btn) => {
        const Icon = btn.icon;
        const isActive = active[btn.type];
        return (
          <button
            key={btn.type}
            onClick={() => toggle(btn.type)}
            className={`engage-btn ${isActive ? "engage-btn--active" : ""}`}
            style={isActive ? { backgroundColor: btn.type === "signature" ? "var(--color-primary)" : undefined } : undefined}
          >
            <Icon size={18} fill={isActive ? "currentColor" : "none"} />
            <span>{btn.label}</span>
          </button>
        );
      })}
    </div>
  );
}
