import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewMode = "daily" | "weekly";

interface TimetableHeaderProps {
  dateLabel: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  avatarUrl?: string;
}

export function TimetableHeader({
  dateLabel,
  viewMode,
  onViewModeChange,
  avatarUrl,
}: TimetableHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-[#1e2a3b] sm:text-4xl">
          My Timetable
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{dateLabel}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5 rounded-full bg-[#eef1f6] p-1">
          <ToggleButton
            active={viewMode === "daily"}
            onClick={() => onViewModeChange("daily")}
          >
            Daily
          </ToggleButton>
          <ToggleButton
            active={viewMode === "weekly"}
            onClick={() => onViewModeChange("weekly")}
          >
            Weekly
          </ToggleButton>
        </div>

        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Search">
          <Search className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>

        <Avatar className="size-9">
          <AvatarImage src={avatarUrl} alt="Profile" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-white text-[#1e2a3b] shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
