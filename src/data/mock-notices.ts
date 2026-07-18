import type { CalendarDay } from "@/types/dashboard";
import type { NoticeGroup } from "@/types/notice";

export const noticeGroups: NoticeGroup[] = [
  {
    id: "grp_today",
    label: "Today",
    items: [
      {
        id: "ntc_001",
        title: "Online Homework Portal Maintenance Downtime",
        description:
          "Due to scheduled maintenance, the online homework portal will be unavailable on @Saturday 6:00 PM. Please submit assignments before the downtime.",
        category: "academic",
        accent: "blue",
      },
      {
        id: "ntc_002",
        title: "School Fire Drill Announcement",
        description:
          "There will be a fire drill on @Friday 11:30 AM. Follow your teacher's instructions and assemble at your designated area.",
        category: "announcements",
        accent: "pink",
      },
      {
        id: "ntc_003",
        title: "Term 1 Fee Payment Deadline Reminder",
        description:
          "Fee payment for Term 1 closes on @May 25, 2026. Pay online or at the accounts office to avoid late charges.",
        category: "announcements",
        accent: "purple",
      },
    ],
  },
  {
    id: "grp_yesterday",
    label: "Yesterday",
    items: [
      {
        id: "ntc_004",
        title: "Science Exhibition Submission Deadline",
        description:
          "The science exhibition entries must be submitted by @Next Friday. Include project title, team members, and a short description.",
        category: "school-events",
        accent: "blue",
      },
      {
        id: "ntc_005",
        title: "Parent-Teacher Meeting Schedule Released",
        description:
          "The Term 1 parent-teacher meeting schedule is now available. Please check your assigned time slot with your class teacher.",
        category: "academic",
        accent: "purple",
      },
    ],
  },
];

const statusByDate: Record<number, CalendarDay["status"]> = {
  1: "present",
  2: "present",
  5: "present",
  6: "present",
  7: "absent",
  8: "present",
  9: "present",
  12: "present",
  13: "present",
  14: "holiday",
  16: "present",
  19: "present",
};

export const noticeCalendarMonthLabel = "August 2026";
export const noticeCalendarWeekdayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const noticeCalendarDays: CalendarDay[] = [
  28, 29, 30,
  1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
].map((date) => ({
  date,
  status: statusByDate[date] ?? "none",
  isSelected: date === 20,
  isHighlighted: date === 15,
}));

export const unreadNoticeCount = 2;
