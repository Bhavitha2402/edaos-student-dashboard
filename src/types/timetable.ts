export type TimelineEntryStatus = "live" | "upcoming" | "break";

export interface TimelineEntry {
  id: string;
  time: string;
  status: TimelineEntryStatus;
  subject?: string;
  teacher?: string;
  room?: string;
  durationLabel?: string;
  breakLabel?: string;
}

export interface CalendarCell {
  date: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  isHighlighted?: boolean;
}

export interface ScheduleListItem {
  id: string;
  subject: string;
  time: string;
  teacher: string;
}
