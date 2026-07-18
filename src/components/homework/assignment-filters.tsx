import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { AssignmentFilter } from "@/types/homework";

interface AssignmentFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeFilter: AssignmentFilter;
  onFilterChange: (filter: AssignmentFilter) => void;
}

const filters: { value: AssignmentFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "submitted", label: "Submitted" },
  { value: "overdue", label: "Overdue" },
];

export function AssignmentFilters({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: AssignmentFiltersProps) {
  return (
    <div className="rounded-2xl bg-white p-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search assignments..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="h-11 rounded-full border-border/70 bg-[#f7f8fb] pl-11"
        />
      </div>

      <Tabs
        value={activeFilter}
        onValueChange={(value) => onFilterChange(value as AssignmentFilter)}
        className="mt-3"
      >
        <TabsList className="gap-6 border-b border-border/70 pb-3">
          {filters.map((filter) => (
            <TabsTrigger
              key={filter.value}
              value={filter.value}
              className={cn(
                "text-sm",
                activeFilter === filter.value && "font-semibold",
              )}
            >
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
