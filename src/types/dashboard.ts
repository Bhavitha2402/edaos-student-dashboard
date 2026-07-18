export interface StudentProfile {
  name: string;
  studentId: string;
  grade: string;
  photoUrl: string;
}

export interface ScheduleClass {
  id: string;
  subject: string;
  startTime: string;
  endTime: string;
  teacher: string;
  teacherPhotoUrl: string;
  room: string;
  active?: boolean;
}

export type HomeworkStatus = "pending" | "overdue";

export interface HomeworkItem {
  id: string;
  subject: string;
  icon: "microscope" | "sigma" | "languages";
  dueLabel: string;
  status: HomeworkStatus;
}

export interface NoticeItem {
  id: string;
  title: string;
  description: string;
}

export interface AttendanceSummary {
  percentage: number;
  daysAbsent: number;
  daysPresent: number;
}

export type CalendarDayStatus = "present" | "absent" | "holiday" | "none";

export interface CalendarDay {
  date: number;
  status: CalendarDayStatus;
  isSelected?: boolean;
  isHighlighted?: boolean;
}

export interface CalendarNote {
  dateLabel: string;
  title: string;
  description: string;
}

export interface SubjectItem {
  id: string;
  name: string;
  icon: "calculator" | "languages" | "flaskConical" | "globe" | "atom" | "beaker";
  accent: string;
}
