import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { NoticeCategory } from "@/types/notice";

interface NoticeFiltersProps {
  active: NoticeCategory;
  onChange: (category: NoticeCategory) => void;
}

const categories: { value: NoticeCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "announcements", label: "Announcements" },
  { value: "academic", label: "Academic" },
  { value: "holidays", label: "Holidays" },
  { value: "exams", label: "Exams" },
  { value: "school-events", label: "School events" },
];

export function NoticeFilters({ active, onChange }: NoticeFiltersProps) {
  return (
    <Tabs value={active} onValueChange={(value) => onChange(value as NoticeCategory)}>
      <TabsList className="gap-8 border-b border-border/70 pb-3">
        {categories.map((category) => (
          <TabsTrigger key={category.value} value={category.value} className="text-sm">
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
