import { ChevronRight } from "lucide-react";

import type { StatusBreakdownItem } from "@/types/homework";

interface StatusBreakdownCardProps {
  items: StatusBreakdownItem[];
  onSeeAll?: () => void;
}

export function StatusBreakdownCard({
  items,
  onSeeAll,
}: StatusBreakdownCardProps) {
  return (
    <div className="relative rounded-2xl bg-white p-5">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: item.dotColor }}
              />
              <span
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: item.dotColor }}
              >
                {item.label}
              </span>
            </div>
            <span className="flex size-7 items-center justify-center rounded-md border border-border/70 text-sm font-semibold text-[#1e2a3b]">
              {item.count}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onSeeAll}
        aria-label="See all statuses"
        className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
