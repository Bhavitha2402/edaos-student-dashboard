import type { StatSummary } from "@/types/user";

export const mockStats: StatSummary[] = [
  { id: "stat_revenue", label: "Revenue", value: "$48,290", delta: 12.4, trend: "up" },
  { id: "stat_users", label: "Active users", value: "3,182", delta: 4.1, trend: "up" },
  { id: "stat_churn", label: "Churn rate", value: "1.9%", delta: -0.6, trend: "down" },
  { id: "stat_tickets", label: "Open tickets", value: "27", delta: 0, trend: "flat" },
];
