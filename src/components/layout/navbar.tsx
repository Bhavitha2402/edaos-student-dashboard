import { HelpCircle, Menu, Search } from "lucide-react";

import { NotificationsMenu } from "@/components/layout/notifications-menu";
import { UserMenu } from "@/components/layout/user-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onOpenMobileSidebar: () => void;
}

export function Navbar({ onOpenMobileSidebar }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-3 bg-[#f4f7fd] px-4 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onOpenMobileSidebar}
        aria-label="Open navigation menu"
      >
        <Menu className="size-4" />
      </Button>

      <div className="relative w-full max-w-xl flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search courses, teachers..."
          className="h-11 rounded-full border-border/70 bg-white pl-11 shadow-sm"
          aria-label="Search"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        <Button variant="ghost" size="icon" className="rounded-full text-[#2a4fa0]" aria-label="Help & support">
          <HelpCircle className="size-5" />
        </Button>
        <ThemeToggle />
        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  );
}
