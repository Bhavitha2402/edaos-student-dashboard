import type {
  AttendanceSummary,
  CalendarDay,
  CalendarNote,
  HomeworkItem,
  NoticeItem,
  ScheduleClass,
  StudentProfile,
  SubjectItem,
} from "@/types/dashboard";

export const studentProfile: StudentProfile = {
  name: "Ojas Sharma",
  studentId: "#EDA-2024-098",
  grade: "Grade 11-A",
  photoUrl:
    "https://images.unsplash.com/photo-1610631066894-62452ccb927c?w=256&h=320&fit=crop&crop=faces",
};

export const todaysSchedule: ScheduleClass[] = [
  {
    id: "cls_001",
    subject: "Maths",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
    teacher: "Dr. Sarah Jenkins",
    teacherPhotoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces",
    room: "ROOM-101",
    active: true,
  },
  {
    id: "cls_002",
    subject: "English",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    teacher: "Prof. Michael Chen",
    teacherPhotoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
    room: "ROOM-101",
  },
  {
    id: "cls_003",
    subject: "English",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    teacher: "Prof. Michael Chen",
    teacherPhotoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
    room: "ROOM-101",
  },
  {
    id: "cls_004",
    subject: "English",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    teacher: "Prof. Michael Chen",
    teacherPhotoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
    room: "ROOM-101",
  },
];

export const homeworkItems: HomeworkItem[] = [
  {
    id: "hw_001",
    subject: "Biology Lab",
    icon: "microscope",
    dueLabel: "Due: Today, 12:00 AM",
    status: "pending",
  },
  {
    id: "hw_002",
    subject: "Maths",
    icon: "sigma",
    dueLabel: "Due: 9th May, 10:00 AM",
    status: "pending",
  },
  {
    id: "hw_003",
    subject: "English",
    icon: "languages",
    dueLabel: "Due: 9th May, 11:00 AM",
    status: "pending",
  },
];

export const noticeItems: NoticeItem[] = [
  {
    id: "ntc_001",
    title: "Exam is in next 4 days",
    description: "first subject will be maths and...",
  },
  {
    id: "ntc_002",
    title: "Exam is in next 4 days",
    description: "first subject will be maths and...",
  },
  {
    id: "ntc_003",
    title: "Exam is in next 4 days",
    description: "first subject will be maths and...",
  },
];

export const attendanceSummary: AttendanceSummary = {
  percentage: 75,
  daysAbsent: 15,
  daysPresent: 112,
};

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
  15: "present",
  16: "present",
  19: "present",
  20: "present",
  21: "present",
  22: "present",
};

export const calendarMonthLabel = "August 2026";
export const calendarWeekdayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const calendarDays: CalendarDay[] = [
  28, 29, 30,
  1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
].map((date) => ({
  date,
  status: statusByDate[date] ?? "none",
  isSelected: date === 23,
}));

export const calendarNote: CalendarNote = {
  dateLabel: "23rd August 2026",
  title: "Holiday",
  description:
    "All students are informed that the school is going to have a holiday on 23rd due to PTM and every student should be there to attend it.",
};

export const subjects: SubjectItem[] = [
  { id: "sub_maths", name: "Maths", icon: "calculator", accent: "#eef1fd" },
  { id: "sub_english", name: "English", icon: "languages", accent: "#eef6fd" },
  { id: "sub_biology", name: "Biology", icon: "flaskConical", accent: "#fdeef2" },
  { id: "sub_geography", name: "Geography", icon: "globe", accent: "#eef4fd" },
  { id: "sub_physics", name: "Physics", icon: "atom", accent: "#fdf6ee" },
  { id: "sub_chemistry", name: "Chemistry", icon: "beaker", accent: "#eef1f3" },
];
