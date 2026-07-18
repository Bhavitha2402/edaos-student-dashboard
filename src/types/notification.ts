export type NotificationAccent = "pink" | "purple" | "blue";
export type NotificationIcon = "flaskConical" | "sigma" | "languages";

export interface NotificationItem {
  id: string;
  title: string;
  timeAgoLabel: string;
  icon: NotificationIcon;
  accent: NotificationAccent;
  unread: boolean;
}

export interface NotificationGroup {
  id: string;
  label: string;
  items: NotificationItem[];
}
