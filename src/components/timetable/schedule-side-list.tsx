import type { ScheduleListItem } from "@/types/timetable";

interface ScheduleSideListProps {
  dateLabel: string;
  items: ScheduleListItem[];
}

export function ScheduleSideList({ dateLabel, items }: ScheduleSideListProps) {
  return (
    <div className="px-1">
      <h3 className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-[#1e2a3b]">
        {dateLabel}
      </h3>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3"
          >
            <span className="text-base font-semibold text-[#1e2a3b]">
              {item.subject}
            </span>
            <div className="border-l border-border pl-3 text-right">
              <p className="text-xs text-muted-foreground">{item.time}</p>
              <p className="text-xs text-muted-foreground">{item.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
