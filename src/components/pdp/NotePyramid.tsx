"use client";

import type { FragranceNote } from "@/types";

interface NotePyramidProps {
  topNotes: FragranceNote[];
  middleNotes: FragranceNote[];
  baseNotes: FragranceNote[];
}

const LAYERS = [
  {
    key: "top",
    title: "Hương đầu",
    desc: "Bay sau 15–30 phút",
    chipClass: "note-chip--top",
    dotColor: "bg-orange-400",
  },
  {
    key: "middle",
    title: "Hương giữa",
    desc: "Kéo dài 3–5 tiếng",
    chipClass: "note-chip--middle",
    dotColor: "bg-rose-400",
  },
  {
    key: "base",
    title: "Hương cuối",
    desc: "Bám 6–12+ tiếng",
    chipClass: "note-chip--base",
    dotColor: "bg-stone-400",
  },
] as const;

export default function NotePyramid({ topNotes, middleNotes, baseNotes }: NotePyramidProps) {
  const notesByKey = { top: topNotes, middle: middleNotes, base: baseNotes };

  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-5">
        Các tầng hương
      </h3>
      <div className="relative space-y-6 pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-orange-300 before:via-rose-200 before:to-stone-200">
        {LAYERS.map((layer) => {
          const notes = notesByKey[layer.key];
          if (!notes || notes.length === 0) return null;
          return (
            <div key={layer.key} className="relative">
              {/* Timeline dot */}
              <div className={`absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full border-[3px] border-white ${layer.dotColor} shadow-sm`} />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="min-w-[110px] flex-shrink-0">
                  <div className="text-sm font-bold text-[var(--color-text)]">{layer.title}</div>
                  <div className="text-[11px] italic text-[var(--color-text-muted)] mt-0.5">{layer.desc}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {notes.map((note, i) => (
                    <span
                      key={i}
                      className={`note-chip ${layer.chipClass}`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {note.icon && <span>{note.icon}</span>}
                      {note.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
