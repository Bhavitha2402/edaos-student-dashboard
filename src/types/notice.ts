export type NoticeCategory =
  | "all"
  | "announcements"
  | "academic"
  | "holidays"
  | "exams"
  | "school-events";

export type NoticeAccent = "blue" | "pink" | "purple";

export interface NoticeItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<NoticeCategory, "all">;
  accent: NoticeAccent;
}

export interface NoticeGroup {
  id: string;
  label: string;
  items: NoticeItem[];
}
