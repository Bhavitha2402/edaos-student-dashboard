import { StickyNote } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NoticeAccent, NoticeItem } from "@/types/notice";

interface NoticeCardProps {
  notice: NoticeItem;
}

const containerStyles: Record<NoticeAccent, string> = {
  blue: "bg-[#eef2fd]",
  pink: "bg-[#fdedf0]",
  purple: "bg-[#f1eefb]",
};

const iconWrapperStyles: Record<NoticeAccent, string> = {
  blue: "bg-[#d7e3fb] text-[#3b6fe0]",
  pink: "bg-[#f8d6de] text-[#c0435f]",
  purple: "bg-[#ded6f7] text-[#6a4fc4]",
};

const iconStyles: Record<NoticeAccent, string> = {
  blue: "bg-[#3b6fe0] text-white",
  pink: "bg-[#c0435f] text-white",
  purple: "bg-[#6a4fc4] text-white",
};

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl p-5",
        containerStyles[notice.accent],
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-full",
          iconWrapperStyles[notice.accent],
        )}
      >
        <span
          className={cn(
            "flex size-6 items-center justify-center rounded-md",
            iconStyles[notice.accent],
          )}
        >
          <StickyNote className="size-3.5" />
        </span>
      </span>

      <div className="min-w-0">
        <h3 className="text-base font-bold text-[#1e2a3b]">{notice.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {notice.description}
        </p>
      </div>
    </div>
  );
}
