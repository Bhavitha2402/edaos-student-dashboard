import { Bell, HelpCircle, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface PanelActionsProps {
  unreadCount?: number;
}

export function PanelActions({ unreadCount = 0 }: PanelActionsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end gap-1.5">
      <Button
        variant="ghost"
        size="icon"
        className="relative rounded-full text-[#2a4fa0]"
        aria-label="Notifications"
      >
        <Bell className="size-4" />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full text-[#2a4fa0]" aria-label="Help & support">
        <HelpCircle className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-[#2a4fa0]"
        aria-label="Settings"
        onClick={() => navigate("/settings")}
      >
        <Settings className="size-4" />
      </Button>
    </div>
  );
}
