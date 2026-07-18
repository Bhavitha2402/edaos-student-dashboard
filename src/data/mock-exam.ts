import type { CalendarDay, CalendarNote } from "@/types/dashboard";
import type { ExamItem } from "@/types/exam";

export const upcomingExams: ExamItem[] = [
  {
    id: "exm_maths",
    subject: "Maths",
    syllabus:
      "Motion, Force and Laws, Work and Energy, Gravitation, Waves, Electricity",
    day: 17,
    ordinal: "th",
    icon: "calculator",
    accent: "neutral",
  },
  {
    id: "exm_english",
    subject: "English",
    syllabus:
      "Motion, Force and Laws, Work and Energy, Gravitation, Waves, Electricity",
    day: 19,
    ordinal: "th",
    icon: "languages",
    accent: "neutral",
  },
  {
    id: "exm_geography",
    subject: "Geography",
    syllabus:
      "Motion, Force and Laws, Work and Energy, Gravitation, Waves, Electricity",
    day: 20,
    ordinal: "th",
    icon: "globe",
    accent: "neutral",
  },
  {
    id: "exm_chemistry",
    subject: "Chemistry",
    syllabus: "Basic Concepts, Atomic Structure, Chemical Bonding Organic Chemistry",
    day: 21,
    ordinal: "st",
    icon: "flaskConical",
    accent: "primary",
  },
  {
    id: "exm_biology",
    subject: "Biology",
    syllabus: "Cell Structure, Human Body Systems, Genetics, Plant Physiology",
    day: 22,
    ordinal: "nd",
    icon: "dna",
    accent: "danger",
  },
  {
    id: "exm_physics",
    subject: "Physics",
    syllabus:
      "Motion, Force and Laws, Work and Energy, Gravitation, Waves, Electricity",
    day: 23,
    ordinal: "rd",
    icon: "atom",
    accent: "info",
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

export const examCalendarMonthLabel = "August 2026";
export const examCalendarWeekdayLabels = [
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su",
];

export const examCalendarDays: CalendarDay[] = [
  28, 29, 30,
  1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
].map((date) => ({
  date,
  status: statusByDate[date] ?? "none",
  isSelected: date === 15,
}));

export const examCalendarNote: CalendarNote = {
  dateLabel: "15th August",
  title: "Holiday",
  description:
    "All students are informed that the school is going to have a holiday on 23rd due to PTM and every student should be there to attend it.",
};
