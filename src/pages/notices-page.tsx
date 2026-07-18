import { useMemo, useState } from "react";

import { MiniCalendar } from "@/components/dashboard/mini-calendar";
import { PanelActions } from "@/components/common/panel-actions";
import { NoticeFilters } from "@/components/notices/notice-filters";
import { NoticeHeader } from "@/components/notices/notice-header";
import { NoticeTimeline } from "@/components/notices/notice-timeline";
import {
  noticeCalendarDays,
  noticeCalendarMonthLabel,
  noticeCalendarWeekdayLabels,
  noticeGroups,
  unreadNoticeCount,
} from "@/data/mock-notices";
import type { NoticeCategory } from "@/types/notice";

export function NoticesPage() {
  const [activeCategory, setActiveCategory] = useState<NoticeCategory>("all");

  const filteredGroups = useMemo(() => {
    if (activeCategory === "all") return noticeGroups;

    return noticeGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.category === activeCategory),
      }))
      .filter((group) => group.items.length > 0);
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
      <div className="flex flex-col gap-4">
        <NoticeHeader />
        <NoticeFilters active={activeCategory} onChange={setActiveCategory} />

        {filteredGroups.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-white/60 p-10 text-center text-sm text-muted-foreground">
            No notices in this category yet.
          </div>
        ) : (
          <NoticeTimeline groups={filteredGroups} />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <PanelActions unreadCount={unreadNoticeCount} />
        <MiniCalendar
          monthLabel={noticeCalendarMonthLabel}
          weekdayLabels={noticeCalendarWeekdayLabels}
          days={noticeCalendarDays}
        />
      </div>
    </div>
  );
}
