export type UserRole = "admin" | "editor" | "viewer";
export type UserStatus = "active" | "invited" | "suspended";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
}

export interface StatSummary {
  id: string;
  label: string;
  value: string;
  delta: number;
  trend: "up" | "down" | "flat";
}
