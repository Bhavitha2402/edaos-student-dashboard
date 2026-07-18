import type { CalendarNote } from "@/types/dashboard";

interface CalendarNoteCardProps {
  note: CalendarNote;
}

export function CalendarNoteCard({ note }: CalendarNoteCardProps) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white p-4">
      <h3 className="mb-3 text-sm font-bold text-[#1e2a3b]">
        {note.dateLabel}
      </h3>
      <div className="rounded-xl bg-[#f6f8fc] p-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#3ecf6a]" />
          <span className="text-sm font-semibold text-[#1e2a3b]">
            {note.title}
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {note.description}
        </p>
      </div>
    </div>
  );
}
