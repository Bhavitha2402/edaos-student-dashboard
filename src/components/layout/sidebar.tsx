import { ChevronsLeft, GraduationCap } from "lucide-react";

import { NavLinkItem } from "@/components/layout/nav-link-item";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { navSections } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: () => void;
  className?: string;
}

export function Sidebar({
  collapsed = false,
  onToggleCollapse,
  onNavigate,
  className,
}: SidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col bg-sidebar text-sidebar-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center gap-2.5 px-4",
          collapsed && "justify-center px-0",
        )}
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5b8ff2] to-[#2f6fed] text-white">
          <GraduationCap className="size-5" />
        </div>
        {!collapsed && (
          <div className="min-w-0 leading-tight">
            <p className="truncate text-base font-extrabold text-[#3b6fe0]">
              {siteConfig.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>
        )}
      </div>

      <Separator className="bg-sidebar-border" />

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="flex flex-col gap-6">
          {navSections.map((section, index) => (
            <div key={section.label ?? index} className="flex flex-col gap-1">
              {section.label && !collapsed && (
                <span className="px-3 pb-1 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
                  {section.label}
                </span>
              )}
              {section.items.map((item) => (
                <NavLinkItem
                  key={item.href}
                  item={item}
                  collapsed={collapsed}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ))}
        </nav>
      </ScrollArea>

      {onToggleCollapse && (
        <div className="border-t border-sidebar-border p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className={cn(
              "w-full justify-start gap-2 text-sidebar-foreground/70",
              collapsed && "justify-center",
            )}
          >
            <ChevronsLeft
              className={cn(
                "size-4 transition-transform",
                collapsed && "rotate-180",
              )}
            />
            {!collapsed && "Collapse"}
          </Button>
        </div>
      )}
    </div>
  );
}
