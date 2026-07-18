import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Wallet,
  Bus,
  Megaphone,
  Settings,
} from "lucide-react";

import type { NavSection } from "@/types/nav";

export const navSections: NavSection[] = [
  {
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "Timetable", href: "/timetable", icon: CalendarDays },
      { title: "Homework", href: "/homework", icon: ClipboardList },
      { title: "Exams", href: "/exams", icon: GraduationCap },
      { title: "Fee Management", href: "/fees", icon: Wallet },
      { title: "Transport", href: "/transport", icon: Bus },
      { title: "Notices", href: "/notices", icon: Megaphone },
      { title: "Settings", href: "/settings", icon: Settings },
    ],
  },
];
