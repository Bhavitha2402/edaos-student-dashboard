import type {
  CalendarCell,
  ScheduleListItem,
  TimelineEntry,
} from "@/types/timetable";

export const timetableDateLabel = "Today is Monday, Jan 12th";

export const dailyTimeline: TimelineEntry[] = [
  {
    id: "tl_001",
    time: "09:00 AM",
    status: "live",
    subject: "Advanced Mathematics",
    teacher: "Dr. Sarah Smith",
    room: "Room 402B",
  },
  {
    id: "tl_002",
    time: "10:00 AM",
    status: "upcoming",
    subject: "Theoretical Physics",
    teacher: "Prof. James Miller",
    room: "Room 105",
    durationLabel: "45 MINUTES",
  },
  {
    id: "tl_003",
    time: "11:00 AM",
    status: "break",
    breakLabel: "COFFEE BREAK & SOCIAL",
  },
  {
    id: "tl_004",
    time: "12:00 PM",
    status: "upcoming",
    subject: "Organic Chemistry Lab",
    teacher: "Dr. Elena Rodriguez",
    room: "Lab 3",
    durationLabel: "90 MINUTES",
  },
  {
    id: "tl_005",
    time: "02:00 PM",
    status: "upcoming",
    subject: "Introduction to Ethics",
    teacher: "Prof. Marcus Thorne",
    room: "Main Hall",
    durationLabel: "60 MINUTES",
  },
  {
    id: "tl_006",
    time: "03:00 PM",
    status: "upcoming",
    subject: "Data Structures",
    teacher: "Dr. Alan T.",
    room: "Seminar Room 1",
    durationLabel: "45 MINUTES",
  },
];

export const timetableCalendarMonthLabel = "January 2025";
export const timetableCalendarWeekdayLabels = [
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su",
];

const janRows: Array<Array<{ date: number; currentMonth: boolean }>> = [
  [
    { date: 29, currentMonth: false },
    { date: 30, currentMonth: false },
    { date: 31, currentMonth: false },
    { date: 1, currentMonth: true },
    { date: 2, currentMonth: true },
    { date: 3, currentMonth: true },
    { date: 4, currentMonth: true },
  ],
  [
    { date: 5, currentMonth: true },
    { date: 6, currentMonth: true },
    { date: 7, currentMonth: true },
    { date: 8, currentMonth: true },
    { date: 9, currentMonth: true },
    { date: 10, currentMonth: true },
    { date: 11, currentMonth: true },
  ],
  [
    { date: 12, currentMonth: true },
    { date: 13, currentMonth: true },
    { date: 14, currentMonth: true },
    { date: 15, currentMonth: true },
    { date: 16, currentMonth: true },
    { date: 17, currentMonth: true },
    { date: 18, currentMonth: true },
  ],
];

export const timetableCalendarCells: CalendarCell[] = janRows
  .flat()
  .map(({ date, currentMonth }) => ({
    date,
    isCurrentMonth: currentMonth,
    isSelected: currentMonth && date === 12,
    isHighlighted: currentMonth && date === 16,
  }));

export const sideScheduleDateLabel = "16th Jan Schedule";

export const sideScheduleItems: ScheduleListItem[] = [
  { id: "ss_001", subject: "Maths", time: "09:00", teacher: "Prof. Sheetal Shah" },
  { id: "ss_002", subject: "English", time: "10:00", teacher: "Prof. Sheetal Shah" },
  { id: "ss_003", subject: "P.T", time: "11:30", teacher: "Prof. Sheetal Shah" },
  { id: "ss_004", subject: "Science", time: "12:30", teacher: "Prof. Sheetal Shah" },
  { id: "ss_005", subject: "Geography", time: "13:30", teacher: "Prof. Sheetal Shah" },
];
