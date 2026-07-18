import { NavLink } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

interface NavLinkItemProps {
  item: NavItem;
  collapsed?: boolean;
  onNavigate?: () => void;
}

export function NavLinkItem({ item, collapsed, onNavigate }: NavLinkItemProps) {
  const Icon = item.icon;

  const link = (
    <NavLink
      to={item.href}
      end={item.href === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive &&
            "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs",
          collapsed && "justify-center px-0",
        )
      }
    >
      <Icon className="size-4 shrink-0" />
      {!collapsed && <span className="truncate">{item.title}</span>}
      {!collapsed && item.badge !== undefined && (
        <Badge variant="secondary" className="ml-auto">
          {item.badge}
        </Badge>
      )}
    </NavLink>
  );

  if (!collapsed) return link;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent side="right">{item.title}</TooltipContent>
    </Tooltip>
  );
}
