export type ExamAccent = "neutral" | "primary" | "danger" | "info";

export type ExamIcon =
  | "calculator"
  | "languages"
  | "globe"
  | "flaskConical"
  | "dna"
  | "atom";

export interface ExamItem {
  id: string;
  subject: string;
  syllabus: string;
  day: number;
  ordinal: "st" | "nd" | "rd" | "th";
  icon: ExamIcon;
  accent: ExamAccent;
}
