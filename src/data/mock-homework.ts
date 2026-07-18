import type {
  Assignment,
  DeadlineItem,
  StatusBreakdownItem,
  WeeklyProgress,
} from "@/types/homework";

export const assignments: Assignment[] = [
  {
    id: "asg_001",
    title: "Quantum Mechanics Problem Set",
    subject: "Physics",
    icon: "sigma",
    attachmentsLabel: "2 attachments",
    badge: "overdue",
    filterStatus: "overdue",
    canUpload: false,
  },
  {
    id: "asg_002",
    title: "Cell Structure Diagram",
    subject: "Biology",
    icon: "microscope",
    attachmentsLabel: "1 attachment",
    badge: "due-today",
    filterStatus: "pending",
    canUpload: true,
  },
  {
    id: "asg_003",
    title: "Organic Synthesis Report",
    subject: "Chemistry",
    icon: "flaskConical",
    attachmentsLabel: "No attachments",
    badge: "due-tomorrow",
    filterStatus: "pending",
    canUpload: true,
  },
  {
    id: "asg_004",
    title: "Quantum Mechanics Problem Set",
    subject: "Physics",
    icon: "sigma",
    attachmentsLabel: "2 attachments",
    badge: "overdue",
    filterStatus: "overdue",
    canUpload: false,
  },
  {
    id: "asg_005",
    title: "Cell Structure Diagram",
    subject: "Biology",
    icon: "microscope",
    attachmentsLabel: "1 attachment",
    badge: "due-today",
    filterStatus: "pending",
    canUpload: true,
  },
];

export const weeklyProgress: WeeklyProgress = {
  percentage: 78,
  tasksCompleted: 14,
  tasksRemaining: 3,
};

export const statusBreakdown: StatusBreakdownItem[] = [
  { id: "st_overdue", label: "Overdue", count: 1, dotColor: "#e0435a" },
  { id: "st_due_today", label: "Due Today", count: 2, dotColor: "#c04a70" },
  { id: "st_pending", label: "Pending", count: 3, dotColor: "#7a5aa8" },
  { id: "st_completed", label: "Completed", count: 14, dotColor: "#2f6fed" },
];

export const upcomingDeadlines: DeadlineItem[] = [
  {
    id: "dl_001",
    title: "Math Quiz",
    whenLabel: "Today, 2:00 PM",
    dotColor: "#e0435a",
  },
  {
    id: "dl_002",
    title: "Physics Lab",
    whenLabel: "Tomorrow, 10:30 AM",
    dotColor: "#7a5aa8",
  },
  {
    id: "dl_003",
    title: "Literature Essay",
    whenLabel: "Friday, 11:59 PM",
    dotColor: "#1e2a5c",
  },
];
