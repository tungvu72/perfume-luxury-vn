"use client";

import { Clock, Wind, Sun, Moon, CloudSun, Flower2, Snowflake, Leaf } from "lucide-react";

interface PerformanceBarsProps {
  longevity?: number;
  sillage?: number;
  seasons?: { spring: number; summer: number; fall: number; winter: number };
  dayNight?: { day: number; night: number };
}

function getSegmentColor(filled: boolean, active: boolean): string {
  if (!filled) return "bg-[var(--color-bg-muted)]";
  return active ? "bg-[var(--color-primary)]" : "bg-[var(--color-primary)]";
}

function longevityDesc(val: number): string {
  if (val >= 8) return "Rất lâu — mùi bám rõ cả ngày";
  if (val >= 6) return "Khá ổn cho nhu cầu hằng ngày";
  return "Gọn nhẹ, không bám quá mạnh";
}

function sillageDesc(val: number): string {
  if (val >= 8) return "Tỏa mạnh — hiện diện rõ trong không gian";
  if (val >= 6) return "Vừa phải — dễ dùng cho đa số";
  return "Khá kín đáo, thiên riêng tư";
}

export default function PerformanceBars({ longevity, sillage, seasons, dayNight }: PerformanceBarsProps) {
  if (!longevity && !sillage && !seasons) return null;

  return (
    <div className="space-y-6">
      {/* Longevity + Sillage */}
      {(longevity || sillage) && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">
            Hiệu năng thực chiến
          </h3>
          <div className="space-y-4">
            {longevity && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                    <Clock size={15} className="text-[var(--color-primary)]" />
                    Độ lưu hương
                  </span>
                  <span className="text-sm font-bold text-[var(--color-primary)]">{longevity}/10</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all ${i < longevity ? "bg-[var(--color-primary)]" : "bg-[var(--color-bg-muted)]"}`}
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-[var(--color-text-muted)]">{longevityDesc(longevity)}</p>
              </div>
            )}
            {sillage && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                    <Wind size={15} className="text-[var(--color-primary)]" />
                    Độ tỏa hương
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
                <p className="mt-1.5 text-[11px] text-[var(--color-text-muted)]">{sillageDesc(sillage)}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Seasons + Day/Night */}
      {seasons && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">
            Mùa & thời điểm
          </h3>
          <div className="space-y-2.5">
            {[
              { label: "Xuân", icon: <Flower2 size={14} />, val: seasons.spring, color: "bg-green-400" },
              { label: "Hè", icon: <Sun size={14} />, val: seasons.summer, color: "bg-amber-400" },
              { label: "Thu", icon: <Leaf size={14} />, val: seasons.fall, color: "bg-orange-400" },
              { label: "Đông", icon: <Snowflake size={14} />, val: seasons.winter, color: "bg-blue-400" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex w-16 items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-text-muted)]">{s.icon}</span>
                  {s.label}
                </div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-muted)]">
                  <div className={`h-full rounded-full ${s.color} transition-all duration-500`} style={{ width: `${s.val}%` }} />
                </div>
                <div className="w-10 text-right text-xs font-bold text-[var(--color-text-muted)]">{s.val}%</div>
              </div>
            ))}
            {dayNight && (
              <>
                <div className="border-t border-[var(--color-border-subtle)] pt-2.5 mt-1">
                  <div className="flex items-center gap-3">
                    <div className="flex w-16 items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                      <CloudSun size={14} className="text-amber-500" />
                      Ngày
                    </div>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-muted)]">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${dayNight.day}%` }} />
                    </div>
                    <div className="w-10 text-right text-xs font-bold text-[var(--color-text-muted)]">{dayNight.day}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex w-16 items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                    <Moon size={14} className="text-indigo-400" />
                    Đêm
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-muted)]">
                    <div className="h-full rounded-full bg-indigo-400" style={{ width: `${dayNight.night}%` }} />
                  </div>
                  <div className="w-10 text-right text-xs font-bold text-[var(--color-text-muted)]">{dayNight.night}%</div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
