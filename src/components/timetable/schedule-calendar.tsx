import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { CalendarCell } from "@/types/timetable";

interface ScheduleCalendarProps {
  monthLabel: string;
  weekdayLabels: string[];
  cells: CalendarCell[];
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

export function ScheduleCalendar({
  monthLabel,
  weekdayLabels,
  cells,
  onPrevMonth,
  onNextMonth,
}: ScheduleCalendarProps) {
  return (
    <div className="rounded-2xl bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#1e2a3b]">{monthLabel}</h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrevMonth}
            aria-label="Previous month"
            className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={onNextMonth}
            aria-label="Next month"
            className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {weekdayLabels.map((day) => (
          <span
            key={day}
            className="text-[11px] font-medium uppercase text-muted-foreground/70"
          >
            {day}
          </span>
        ))}

        {cells.map((cell, index) => (
          <div key={`${cell.date}-${index}`} className="flex items-center justify-center py-0.5">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
                cell.isCurrentMonth ? "text-[#1e2a3b]" : "text-muted-foreground/40",
                cell.isSelected && "bg-[#2f6fed] font-semibold text-white",
                cell.isHighlighted &&
                  !cell.isSelected &&
                  "ring-1 ring-[#1e2a3b]/60",
              )}
            >
              {cell.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
