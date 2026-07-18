import {
  Atom,
  Calculator,
  Dna,
  FlaskConical,
  Globe,
  Languages,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { ExamAccent, ExamItem } from "@/types/exam";

interface ExamListItemProps {
  exam: ExamItem;
}

const iconMap: Record<ExamItem["icon"], LucideIcon> = {
  calculator: Calculator,
  languages: Languages,
  globe: Globe,
  flaskConical: FlaskConical,
  dna: Dna,
  atom: Atom,
};

const containerStyles: Record<ExamAccent, string> = {
  neutral: "bg-[#f4f5f7]",
  primary: "bg-[#4f7df5]",
  danger: "bg-[#fdeef2]",
  info: "bg-[#eaf1fe]",
};

const iconStyles: Record<ExamAccent, string> = {
  neutral: "bg-white text-[#4a5568]",
  primary: "bg-white/15 text-white",
  danger: "bg-white text-[#e0435a]",
  info: "bg-white text-[#3b6fe0]",
};

const subjectStyles: Record<ExamAccent, string> = {
  neutral: "text-[#5a6274]",
  primary: "text-white",
  danger: "text-[#1e2a3b]",
  info: "text-[#1e2a3b]",
};

const syllabusStyles: Record<ExamAccent, string> = {
  neutral: "text-[#8a92a3]",
  primary: "text-white/85",
  danger: "text-[#7a5560]",
  info: "text-[#4a5568]",
};

const dayBoxStyles: Record<ExamAccent, string> = {
  neutral: "border-[#dfe2e8] bg-white text-[#1e2a3b]",
  primary: "border-white/30 bg-white/10 text-white",
  danger: "border-[#f3d2dc] bg-white text-[#1e2a3b]",
  info: "border-[#cfe0fb] bg-white text-[#1e2a3b]",
};

export function ExamListItem({ exam }: ExamListItemProps) {
  const Icon = iconMap[exam.icon];

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl p-4 sm:p-5",
        containerStyles[exam.accent],
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-full",
          iconStyles[exam.accent],
        )}
      >
        <Icon className="size-5" />
      </span>

      <div className="min-w-0 flex-1">
        <h3
          className={cn(
            "text-sm font-bold uppercase tracking-wide",
            subjectStyles[exam.accent],
          )}
        >
          {exam.subject}
        </h3>
        <p className={cn("mt-1 text-sm leading-relaxed", syllabusStyles[exam.accent])}>
          <span className="font-semibold">Syllabus :</span> {exam.syllabus}
        </p>
      </div>

      <div
        className={cn(
          "flex shrink-0 items-start rounded-xl border px-3 py-1.5",
          dayBoxStyles[exam.accent],
        )}
      >
        <span className="text-3xl font-extrabold leading-none">{exam.day}</span>
        <span className="mt-0.5 text-xs font-semibold">{exam.ordinal}</span>
      </div>
    </div>
  );
}
