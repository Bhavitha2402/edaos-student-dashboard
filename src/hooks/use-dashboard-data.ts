import { useQuery } from "@tanstack/react-query";

import { mockStats } from "@/data/mock-stats";
import { mockUsers } from "@/data/mock-users";
import { notificationGroups } from "@/data/mock-notifications";
import type { NotificationGroup } from "@/types/notification";
import type { StatSummary, User } from "@/types/user";

/**
 * These hooks simulate network latency around the local mock data so
 * pages can be built against a realistic TanStack Query + Axios shape
 * from day one. Swap the resolver body for a real `api.get(...)` call
 * once a backend endpoint exists — the hook's call sites won't change.
 */

function delay<T>(value: T, ms = 350): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function useDashboardStats() {
  return useQuery<StatSummary[]>({
    queryKey: ["dashboard", "stats"],
    queryFn: () => delay(mockStats),
  });
}

export function useTeamMembers() {
  return useQuery<User[]>({
    queryKey: ["team", "members"],
    queryFn: () => delay(mockUsers),
  });
}

export function useNotifications() {
  return useQuery<NotificationGroup[]>({
    queryKey: ["notifications"],
    queryFn: () => delay(notificationGroups),
  });
}
