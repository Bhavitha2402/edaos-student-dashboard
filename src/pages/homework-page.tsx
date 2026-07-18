import { useMemo, useState } from "react";

import { AssignmentFilters } from "@/components/homework/assignment-filters";
import { AssignmentListItem } from "@/components/homework/assignment-list-item";
import { HomeworkHeader } from "@/components/homework/homework-header";
import { StatusBreakdownCard } from "@/components/homework/status-breakdown-card";
import { UpcomingDeadlinesCard } from "@/components/homework/upcoming-deadlines-card";
import { WeeklyProgressCard } from "@/components/homework/weekly-progress-card";
import { studentProfile } from "@/data/mock-dashboard";
import {
  assignments,
  statusBreakdown,
  upcomingDeadlines,
  weeklyProgress,
} from "@/data/mock-homework";
import type { AssignmentFilter } from "@/types/homework";

export function HomeworkPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<AssignmentFilter>("pending");

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const matchesFilter =
        activeFilter === "all" || assignment.filterStatus === activeFilter;
      const matchesSearch = assignment.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="flex flex-col gap-6">
      <HomeworkHeader
        subtitle="Manage and track all your assignments"
        avatarUrl={studentProfile.photoUrl}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <AssignmentFilters
            search={search}
            onSearchChange={setSearch}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="flex flex-col gap-3">
            {filteredAssignments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white/60 p-10 text-center text-sm text-muted-foreground">
                No assignments match this filter.
              </div>
            ) : (
              filteredAssignments.map((assignment) => (
                <AssignmentListItem
                  key={assignment.id}
                  assignment={assignment}
                />
              ))
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <WeeklyProgressCard progress={weeklyProgress} />
          <StatusBreakdownCard items={statusBreakdown} />
          <UpcomingDeadlinesCard items={upcomingDeadlines} />
        </div>
      </div>
    </div>
  );
}
