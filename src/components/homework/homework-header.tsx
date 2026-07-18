import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface HomeworkHeaderProps {
  subtitle: string;
  avatarUrl?: string;
}

export function HomeworkHeader({ subtitle, avatarUrl }: HomeworkHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold text-[#1e2a3b] sm:text-4xl">
          Homework &amp; Tasks
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
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
