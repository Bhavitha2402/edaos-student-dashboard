import { useState } from "react";

import { DailyTimeline } from "@/components/timetable/daily-timeline";
import { DownloadTimetableButton } from "@/components/timetable/download-timetable-button";
import { ScheduleCalendar } from "@/components/timetable/schedule-calendar";
import { ScheduleSideList } from "@/components/timetable/schedule-side-list";
import { TimetableHeader } from "@/components/timetable/timetable-header";
import {
  dailyTimeline,
  sideScheduleDateLabel,
  sideScheduleItems,
  timetableCalendarCells,
  timetableCalendarMonthLabel,
  timetableCalendarWeekdayLabels,
  timetableDateLabel,
} from "@/data/mock-timetable";
import { studentProfile } from "@/data/mock-dashboard";

export function TimetablePage() {
  const [viewMode, setViewMode] = useState<"daily" | "weekly">("daily");

  return (
    <div className="flex flex-col gap-6">
      <TimetableHeader
        dateLabel={timetableDateLabel}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        avatarUrl={studentProfile.photoUrl}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        {viewMode === "daily" ? (
          <DailyTimeline entries={dailyTimeline} />
        ) : (
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-border bg-white/60 p-12 text-sm text-muted-foreground">
            Weekly view is coming soon.
          </div>
        )}

        <div className="flex flex-col gap-4 rounded-2xl bg-[#f0f2f7] p-4">
          <ScheduleCalendar
            monthLabel={timetableCalendarMonthLabel}
            weekdayLabels={timetableCalendarWeekdayLabels}
            cells={timetableCalendarCells}
          />
          <ScheduleSideList
            dateLabel={sideScheduleDateLabel}
            items={sideScheduleItems}
          />
          <DownloadTimetableButton />
        </div>
      </div>
    </div>
  );
}
