export type AssignmentFilter = "all" | "pending" | "submitted" | "overdue";

export type AssignmentBadge = "overdue" | "due-today" | "due-tomorrow" | "submitted";

export type AssignmentIcon = "sigma" | "microscope" | "flaskConical";

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  icon: AssignmentIcon;
  attachmentsLabel: string;
  badge: AssignmentBadge;
  filterStatus: AssignmentFilter;
  canUpload: boolean;
}

export interface WeeklyProgress {
  percentage: number;
  tasksCompleted: number;
  tasksRemaining: number;
}

export interface StatusBreakdownItem {
  id: string;
  label: string;
  count: number;
  dotColor: string;
}

export interface DeadlineItem {
  id: string;
  title: string;
  whenLabel: string;
  dotColor: string;
}
