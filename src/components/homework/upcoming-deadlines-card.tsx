import type { DeadlineItem } from "@/types/homework";

interface UpcomingDeadlinesCardProps {
  items: DeadlineItem[];
}

export function UpcomingDeadlinesCard({ items }: UpcomingDeadlinesCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5">
      <h3 className="text-base font-bold text-[#1e2a3b]">
        Upcoming Deadlines
      </h3>

      <div className="mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-2.5">
            <span
              className="mt-1.5 size-2 shrink-0 rounded-full"
              style={{ backgroundColor: item.dotColor }}
            />
            <div>
              <p className="text-sm font-semibold text-[#1e2a3b]">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.whenLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
