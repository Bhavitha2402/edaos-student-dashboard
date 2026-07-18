import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { CalendarDay } from "@/types/dashboard";

interface MiniCalendarProps {
  monthLabel: string;
  weekdayLabels: string[];
  days: CalendarDay[];
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const statusClasses: Record<CalendarDay["status"], string> = {
  present: "bg-[#3ecf6a] text-white",
  absent: "bg-[#f2495c] text-white",
  holiday: "bg-[#f5a524] text-white",
  none: "text-[#8a94a6]",
};

const legend: { label: string; className: string }[] = [
  { label: "Present", className: "bg-[#3ecf6a]" },
  { label: "Absent", className: "bg-[#f2495c]" },
  { label: "Holiday", className: "bg-[#f5a524]" },
];

export function MiniCalendar({
  monthLabel,
  weekdayLabels,
  days,
  onPrevMonth,
  onNextMonth,
}: MiniCalendarProps) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#1e2a3b]">{monthLabel}</h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrevMonth}
            aria-label="Previous month"
            className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={onNextMonth}
            aria-label="Next month"
            className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {weekdayLabels.map((day) => (
          <span
            key={day}
            className="pb-1 text-[10px] font-semibold uppercase text-muted-foreground"
          >
            {day}
          </span>
        ))}

        {days.map((day, index) => (
          <div key={`${day.date}-${index}`} className="flex items-center justify-center py-0.5">
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-md text-xs font-medium",
                statusClasses[day.status],
                day.isSelected && "ring-2 ring-[#2f6fed] ring-offset-1",
                day.status === "none" && day.isSelected && "bg-[#2f6fed] text-white",
                day.isHighlighted &&
                  !day.isSelected &&
                  "ring-2 ring-[#1e2a3b]/60 ring-offset-1",
              )}
            >
              {day.date}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={cn("size-2 rounded-full", item.className)} />
            <span className="text-[10px] font-medium uppercase text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
