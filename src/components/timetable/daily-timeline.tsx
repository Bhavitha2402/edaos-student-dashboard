import { TimelineRow } from "@/components/timetable/timeline-row";
import type { TimelineEntry } from "@/types/timetable";

interface DailyTimelineProps {
  entries: TimelineEntry[];
}

export function DailyTimeline({ entries }: DailyTimelineProps) {
  return (
    <div className="flex flex-col gap-4">
      {entries.map((entry) => (
        <TimelineRow key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
