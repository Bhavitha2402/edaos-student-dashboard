import {
  Atom,
  Beaker,
  Calculator,
  FlaskConical,
  Globe,
  Languages,
  type LucideIcon,
} from "lucide-react";

import type { SubjectItem } from "@/types/dashboard";

interface SubjectsGridProps {
  subjects: SubjectItem[];
}

const iconMap: Record<SubjectItem["icon"], LucideIcon> = {
  calculator: Calculator,
  languages: Languages,
  flaskConical: FlaskConical,
  globe: Globe,
  atom: Atom,
  beaker: Beaker,
};

export function SubjectsGrid({ subjects }: SubjectsGridProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-[#1e2a3b]">Your Subjects</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {subjects.map((subject) => {
          const Icon = iconMap[subject.icon];
          return (
            <div
              key={subject.id}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-white px-4 py-6"
            >
              <span
                className="flex size-12 items-center justify-center rounded-full text-[#3b6fe0]"
                style={{ backgroundColor: subject.accent }}
              >
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-semibold text-[#1e2a3b]">
                {subject.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
