import { ChevronRight } from "lucide-react";

import { ClassCard } from "@/components/dashboard/class-card";
import type { ScheduleClass } from "@/types/dashboard";

interface TimetableSectionProps {
  classes: ScheduleClass[];
  onViewWeekly?: () => void;
}

export function TimetableSection({
  classes,
  onViewWeekly,
}: TimetableSectionProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#1e2a3b]">
          Today&apos;s Timetable
        </h2>
        <button
          type="button"
          onClick={onViewWeekly}
          className="flex items-center gap-0.5 text-sm font-medium text-[#3b6fe0] hover:underline"
        >
          View Weekly
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {classes.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
