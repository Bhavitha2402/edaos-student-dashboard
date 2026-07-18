import { FlaskConical, Microscope, Sigma, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Assignment, AssignmentBadge } from "@/types/homework";

interface AssignmentListItemProps {
  assignment: Assignment;
  onViewDetails?: (assignment: Assignment) => void;
  onUpload?: (assignment: Assignment) => void;
}

const iconMap: Record<Assignment["icon"], LucideIcon> = {
  sigma: Sigma,
  microscope: Microscope,
  flaskConical: FlaskConical,
};

const iconAccent: Record<Assignment["icon"], string> = {
  sigma: "bg-[#eef1fd] text-[#4f7df5]",
  microscope: "bg-[#f6f2fb] text-[#7a5aa8]",
  flaskConical: "bg-[#f2f4f6] text-[#4a5568]",
};

const badgeStyles: Record<AssignmentBadge, string> = {
  overdue: "bg-[#fdeef0] text-[#e0435a]",
  "due-today": "bg-[#f5e9ee] text-[#c04a70]",
  "due-tomorrow": "bg-[#eef0f3] text-[#4a5568]",
  submitted: "bg-[#eaf5ee] text-[#2f9e5c]",
};

const badgeLabel: Record<AssignmentBadge, string> = {
  overdue: "Overdue",
  "due-today": "Due Today",
  "due-tomorrow": "Due Tomorrow",
  submitted: "Submitted",
};

export function AssignmentListItem({
  assignment,
  onViewDetails,
  onUpload,
}: AssignmentListItemProps) {
  const Icon = iconMap[assignment.icon];

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4">
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-full",
          iconAccent[assignment.icon],
        )}
      >
        <Icon className="size-5" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-[#1e2a3b]">{assignment.title}</h3>
          <Badge
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
              badgeStyles[assignment.badge],
            )}
          >
            {badgeLabel[assignment.badge]}
          </Badge>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {assignment.subject} &bull; {assignment.attachmentsLabel}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={() => onViewDetails?.(assignment)}
          className="text-sm font-semibold text-[#3b6fe0] hover:underline"
        >
          View Details
        </button>
        <Button
          size="sm"
          disabled={!assignment.canUpload}
          onClick={() => onUpload?.(assignment)}
          className={cn(
            "h-9 rounded-full px-5 font-medium",
            assignment.canUpload
              ? "bg-[#4f7df5] hover:bg-[#4169e0]"
              : "bg-[#c7cdd8] text-white hover:bg-[#c7cdd8] disabled:opacity-100",
          )}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
