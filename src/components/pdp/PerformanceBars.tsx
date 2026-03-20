"use client";

import { Clock, Wind, Sun, Moon, CloudSun, Flower2, Snowflake, Leaf } from "lucide-react";

interface PerformanceBarsProps {
  longevity?: number;
  sillage?: number;
  seasons?: { spring: number; summer: number; fall: number; winter: number };
  dayNight?: { day: number; night: number };
}

function longevityToHours(val: number): string {
  if (val >= 9) return "10–12+ tiếng";
  if (val >= 8) return "8–10 tiếng";
  if (val >= 7) return "6–8 tiếng";
  if (val >= 6) return "5–6 tiếng";
  if (val >= 5) return "4–5 tiếng";
  if (val >= 4) return "3–4 tiếng";
  return "1–3 tiếng";
}

function sillageToDesc(val: number): string {
  if (val >= 9) return "Đi ngang là biết — tỏa rõ trong bán kính 1–2m";
  if (val >= 7) return "Người đứng gần (~1m) sẽ ngửi thấy";
  if (val >= 5) return "Phải đến gần mới cảm nhận được";
  return "Rất kín đáo, chỉ người ôm mới biết";
}

function seasonLabel(val: number): string {
  if (val >= 80) return "Rất hợp";
  if (val >= 50) return "Hợp";
  if (val >= 30) return "Tạm ổn";
  return "Không hợp";
}

function seasonBadge(val: number): string {
  if (val >= 80) return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (val >= 50) return "bg-blue-50 text-blue-600 border-blue-200";
  if (val >= 30) return "bg-amber-50 text-amber-600 border-amber-200";
  return "bg-gray-100 text-gray-500 border-gray-200";
}

export default function PerformanceBars({ longevity, sillage, seasons, dayNight }: PerformanceBarsProps) {
  if (!longevity && !sillage && !seasons) return null;

  return (
    <div className="space-y-6">
      {/* Longevity + Sillage */}
      {(longevity || sillage) && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">
            Hiệu năng
          </h3>
          <div className="space-y-4">
            {longevity && (
              <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                    <Clock size={15} className="text-[var(--color-primary)]" />
                    Lưu hương
                  </span>
                  <span className="text-sm font-bold text-[var(--color-primary)]">{longevityToHours(longevity)}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all ${i < longevity ? "bg-[var(--color-primary)]" : "bg-[var(--color-bg-muted)]"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-[12px] text-[var(--color-text-muted)]">
                  Mùi bám trên da khoảng {longevityToHours(longevity)} sau khi xịt
                </p>
              </div>
            )}
            {sillage && (
              <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                    <Wind size={15} className="text-[var(--color-primary)]" />
                    Tỏa hương
                  </span>
                  <span className="text-sm font-bold text-[var(--color-primary)]">{sillage}/10</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all ${i < sillage ? "bg-[var(--color-primary)]" : "bg-[var(--color-bg-muted)]"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-[12px] text-[var(--color-text-muted)]">
                  {sillageToDesc(sillage)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Seasons + Day/Night */}
      {seasons && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">
            Hợp mùa nào & lúc nào
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Xuân", icon: <Flower2 size={14} />, val: seasons.spring },
              { label: "Hè", icon: <Sun size={14} />, val: seasons.summer },
              { label: "Thu", icon: <Leaf size={14} />, val: seasons.fall },
              { label: "Đông", icon: <Snowflake size={14} />, val: seasons.winter },
            ].map((s) => (
              <div key={s.label} className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center ${seasonBadge(s.val)}`}>
                <span className="opacity-70">{s.icon}</span>
                <span className="text-xs font-bold">{s.label}</span>
                <span className="text-[11px] font-semibold">{seasonLabel(s.val)}</span>
              </div>
            ))}
          </div>
          {dayNight && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center ${seasonBadge(dayNight.day)}`}>
                <CloudSun size={14} className="opacity-70" />
                <span className="text-xs font-bold">Ban ngày</span>
                <span className="text-[11px] font-semibold">{seasonLabel(dayNight.day)}</span>
              </div>
              <div className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center ${seasonBadge(dayNight.night)}`}>
                <Moon size={14} className="opacity-70" />
                <span className="text-xs font-bold">Buổi tối</span>
                <span className="text-[11px] font-semibold">{seasonLabel(dayNight.night)}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
