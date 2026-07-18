import { NoticeCard } from "@/components/notices/notice-card";
import type { NoticeGroup } from "@/types/notice";

interface NoticeTimelineProps {
  groups: NoticeGroup[];
}

export function NoticeTimeline({ groups }: NoticeTimelineProps) {
  return (
    <div className="flex flex-col gap-8">
      {groups.map((group) => (
        <div key={group.id}>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {group.label}
          </p>

          <div className="relative pl-7">
            <div className="absolute bottom-2 left-[5px] top-2 w-px bg-[#2f6fed]/30" />

            <div className="flex flex-col gap-4">
              {group.items.map((notice) => (
                <div key={notice.id} className="relative">
                  <span className="absolute -left-7 top-6 size-2.5 rounded-full bg-[#2f6fed]" />
                  <NoticeCard notice={notice} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
