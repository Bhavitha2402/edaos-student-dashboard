import { User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types/timetable";

interface TimelineRowProps {
  entry: TimelineEntry;
}

export function TimelineRow({ entry }: TimelineRowProps) {
  if (entry.status === "break") {
    return (
      <div className="flex gap-4">
        <div className="w-20 shrink-0 pt-1 text-right">
          <p className="text-xs font-medium text-muted-foreground/60">
            {entry.time}
          </p>
        </div>
        <div className="flex flex-1 items-center gap-3 border-t border-dashed border-border py-3">
          <Badge
            variant="secondary"
            className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {entry.breakLabel}
          </Badge>
          <div className="h-px flex-1 border-t border-dashed border-border" />
        </div>
      </div>
    );
  }

  const isLive = entry.status === "live";

  return (
    <div className="flex gap-4">
      <div className="w-20 shrink-0 pt-4 text-right">
        <p
          className={cn(
            "text-sm font-semibold",
            isLive ? "text-[#4f7df5]" : "text-[#1e2a3b]",
          )}
        >
          {entry.time}
        </p>
        {isLive && (
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Active
          </p>
        )}
      </div>

      <div
        className={cn(
          "flex-1 rounded-xl bg-[#eef1f6] p-4",
          isLive &&
            "border border-l-4 border-[#c9d6fb] border-l-[#4f7df5] bg-white shadow-[0_10px_30px_-15px_rgba(79,125,245,0.45)]",
        )}
      >
        <div className="flex items-center justify-between">
          {isLive ? (
            <Badge className="gap-1.5 rounded-full bg-[#eef1fd] text-[10px] font-semibold uppercase tracking-wide text-[#4f7df5] hover:bg-[#eef1fd]">
              <span className="size-1.5 rounded-full bg-[#4f7df5]" />
              Live
            </Badge>
          ) : (
            <span className="text-sm text-muted-foreground">{entry.room}</span>
          )}

          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {isLive ? entry.room : entry.durationLabel}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold text-[#1e2a3b]">
          {entry.subject}
        </h3>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <User className="size-3.5" />
          {entry.teacher}
        </div>
      </div>
    </div>
  );
}
