import { Bell, FlaskConical, Languages, Sigma, type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useNotifications } from "@/hooks/use-dashboard-data";
import { cn } from "@/lib/utils";
import type { NotificationAccent, NotificationItem } from "@/types/notification";

const iconMap: Record<NotificationItem["icon"], LucideIcon> = {
  flaskConical: FlaskConical,
  sigma: Sigma,
  languages: Languages,
};

const iconAccent: Record<NotificationAccent, string> = {
  pink: "bg-[#fdeef2] text-[#c0435f]",
  purple: "bg-[#eef1fd] text-[#4f7df5]",
  blue: "bg-[#eef6fd] text-[#3aa0d1]",
};

const dotAccent: Record<NotificationAccent, string> = {
  pink: "bg-[#e0435a]",
  purple: "bg-[#4f7df5]",
  blue: "bg-[#3aa0d1]",
};

export function NotificationsMenu() {
  const { data: groups, isLoading } = useNotifications();
  const unreadCount =
    groups?.reduce(
      (total, group) => total + group.items.filter((item) => item.unread).length,
      0,
    ) ?? 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open notifications"
          className="relative flex size-9 items-center justify-center rounded-full text-[#2a4fa0] transition-colors hover:bg-accent"
        >
          <Bell className="size-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-white">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-[380px] rounded-2xl p-0"
      >
        <div className="px-5 pt-5">
          <h3 className="text-lg font-bold text-[#1e2a3b]">Notifications</h3>
          <div className="mt-3 flex items-center gap-1.5 border-b border-border/70 pb-3">
            <span className="text-sm font-semibold text-[#1e2a3b] underline underline-offset-4">
              All
            </span>
            {unreadCount > 0 && (
              <span className="flex size-4 items-center justify-center rounded-full bg-[#1e2a3b] text-[9px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        <div className="max-h-[420px] overflow-y-auto">
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2 px-5 py-3">
                <Skeleton className="h-3.5 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            ))}

          {!isLoading && groups?.length === 0 && (
            <p className="px-5 py-6 text-center text-sm text-muted-foreground">
              You&apos;re all caught up.
            </p>
          )}

          {!isLoading &&
            groups?.map((group) => (
              <div key={group.id}>
                <p className="px-5 pb-1 pt-3 text-xs font-medium text-muted-foreground">
                  {group.label}
                </p>
                {group.items.map((notification) => {
                  const Icon = iconMap[notification.icon];
                  return (
                    <div
                      key={notification.id}
                      className="flex items-center gap-3 border-b border-border/60 px-5 py-3 last:border-b-0 hover:bg-muted/50"
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-full",
                          iconAccent[notification.accent],
                        )}
                      >
                        <Icon className="size-4" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#1e2a3b]">
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.timeAgoLabel}
                        </p>
                      </div>

                      {notification.unread && (
                        <span
                          className={cn(
                            "size-2 shrink-0 rounded-full",
                            dotAccent[notification.accent],
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
