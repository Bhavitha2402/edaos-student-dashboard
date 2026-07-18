import type { NotificationGroup } from "@/types/notification";

export const notificationGroups: NotificationGroup[] = [
  {
    id: "grp_today",
    label: "Today",
    items: [
      {
        id: "ntf_001",
        title: "Bio lab report due in 40 minutes",
        timeAgoLabel: "40 mins ago",
        icon: "flaskConical",
        accent: "pink",
        unread: true,
      },
      {
        id: "ntf_002",
        title: "Homework alert: Maths due in 2 hrs",
        timeAgoLabel: "2 hours ago",
        icon: "sigma",
        accent: "purple",
        unread: true,
      },
      {
        id: "ntf_003",
        title: "English essay deadline is getting close",
        timeAgoLabel: "15 hours ago",
        icon: "languages",
        accent: "blue",
        unread: false,
      },
    ],
  },
  {
    id: "grp_yesterday",
    label: "Yesterday",
    items: [
      {
        id: "ntf_004",
        title: "Literature assignment due very soon",
        timeAgoLabel: "1 day ago",
        icon: "languages",
        accent: "blue",
        unread: false,
      },
      {
        id: "ntf_005",
        title: "Homework hub: 3 assignments still due",
        timeAgoLabel: "1 day ago",
        icon: "flaskConical",
        accent: "pink",
        unread: false,
      },
    ],
  },
];
