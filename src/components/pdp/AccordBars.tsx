"use client";

import type { Accord } from "@/types";

interface AccordBarsProps {
  accords: Accord[];
}

export default function AccordBars({ accords }: AccordBarsProps) {
  if (!accords || accords.length === 0) return null;

  return (
    <div className="space-y-1">
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-1">
        Nhóm hương chính
      </h3>
      <p className="text-[11px] text-[var(--color-text-muted)] mb-3">
        Thanh càng dài = hương đó càng rõ trong chai nước hoa
      </p>
      <div className="space-y-2">
        {accords.map((accord, i) => (
          <div key={i} className="accord-row">
            <span className="accord-label">{accord.name}</span>
            <div className="accord-track">
              <div
                className="accord-bar"
                style={{
                  width: `${accord.value}%`,
                  backgroundColor: accord.color,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
