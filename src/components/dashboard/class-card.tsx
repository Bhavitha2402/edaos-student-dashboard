import { cn } from "@/lib/utils";
import type { ScheduleClass } from "@/types/dashboard";

interface ClassCardProps {
  item: ScheduleClass;
}

export function ClassCard({ item }: ClassCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-[210px] flex-1 flex-col gap-4 rounded-xl border border-border/70 bg-white p-4",
        item.active && "border-l-4 border-l-[#4f7df5] bg-[#eef4ff]",
      )}
    >
      <div>
        <h3 className="text-base font-bold text-[#1e2a3b]">{item.subject}</h3>
        <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
          <span>{item.startTime}</span>
          <span>{item.endTime}</span>
        </div>
        {item.active && (
          <div className="mt-1 h-1 rounded-full bg-[#e4ecfb]">
            <div className="h-1 w-1/4 rounded-full bg-[#4f7df5]" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <img
          src={item.teacherPhotoUrl}
          alt={item.teacher}
          className="size-8 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#1e2a3b]">
            {item.teacher}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#4f7df5]">
            {item.room}
          </p>
        </div>
      </div>
    </div>
  );
}
