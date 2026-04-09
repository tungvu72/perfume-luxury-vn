"use client";

import type { ExpertScore } from "@/types";

interface ScoreDisplayProps {
  score: ExpertScore;
  verdictShort: string;
  verdict: string;
}

function scoreTone(score: number): string {
  if (score >= 9.0) return "text-emerald-600";
  if (score >= 8.0) return "text-[var(--color-primary)]";
  if (score >= 7.0) return "text-amber-600";
  return "text-[var(--color-text-secondary)]";
}

const SCORE_CATEGORIES = [
  { key: "scent" as const, label: "Mùi hương", desc: "Tổng thể" },
  { key: "uniqueness" as const, label: "Độc đáo", desc: "Khác biệt" },
  { key: "compliments" as const, label: "Sức hút", desc: "Thiện cảm" },
  { key: "value" as const, label: "Đáng tiền", desc: "Giá trị" },
];

export default function ScoreDisplay({ score, verdictShort, verdict }: ScoreDisplayProps) {
  return (
    <div>
      {/* Main score + verdict */}
      <div className="flex items-start gap-4">
        <div className="score-circle flex-shrink-0">
          <span className="score-circle__value">{score.total}</span>
          <span className="score-circle__label">/10</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">Nhận xét nhanh</div>
          <h2 className="mt-1 font-sans text-base sm:text-lg font-semibold leading-snug text-[var(--color-text)]">
            {verdictShort}
          </h2>

        </div>
      </div>

      {/* Sub-scores */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SCORE_CATEGORIES.map((cat) => {
          const val = score[cat.key];
          return (
            <div
              key={cat.key}
              className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-3 text-center transition-colors hover:border-[var(--color-primary-light)]"
            >
              <div className={`text-2xl font-sans font-bold tabular-nums ${scoreTone(val)}`}>
                {val}
                <span className="text-xs font-normal text-[var(--color-text-muted)]">/10</span>
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                {cat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
