import type { User } from "@/types/user";

export const mockUsers: User[] = [
  {
    id: "usr_001",
    name: "Ava Whitfield",
    email: "ava.whitfield@northstar.io",
    role: "admin",
    status: "active",
    createdAt: "2025-01-14T09:30:00Z",
  },
  {
    id: "usr_002",
    name: "Marcus Chen",
    email: "marcus.chen@northstar.io",
    role: "editor",
    status: "active",
    createdAt: "2025-02-02T11:12:00Z",
  },
  {
    id: "usr_003",
    name: "Priya Natarajan",
    email: "priya.n@northstar.io",
    role: "editor",
    status: "invited",
    createdAt: "2025-03-19T15:45:00Z",
  },
  {
    id: "usr_004",
    name: "Diego Alvarez",
    email: "diego.alvarez@northstar.io",
    role: "viewer",
    status: "active",
    createdAt: "2025-04-05T08:05:00Z",
  },
  {
    id: "usr_005",
    name: "Sofia Bergström",
    email: "sofia.b@northstar.io",
    role: "viewer",
    status: "suspended",
    createdAt: "2025-05-27T13:20:00Z",
  },
];

export const currentUser: User = {
  id: "usr_000",
  name: "Jordan Blake",
  email: "jordan.blake@northstar.io",
  role: "admin",
  status: "active",
  createdAt: "2024-11-01T10:00:00Z",
};
