import { Plus } from "lucide-react";

import type { NoticeItem } from "@/types/dashboard";

interface NoticeBoardProps {
  items: NoticeItem[];
}

export function NoticeBoard({ items }: NoticeBoardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-5">
      <h3 className="mb-3 text-base font-bold text-[#1e2a3b]">
        Notice board
      </h3>

      <div className="flex flex-1 flex-col gap-2.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-xl bg-[#f6f8fc] p-3"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4f7df5]" />
              <div>
                <p className="text-sm font-semibold text-[#1e2a3b]">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Expand notice"
              className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
