import { ArrowRight, FlaskConical, Languages, Sigma } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { HomeworkItem } from "@/types/dashboard";

interface HomeworkPanelProps {
  items: HomeworkItem[];
}

const iconMap = {
  microscope: FlaskConical,
  sigma: Sigma,
  languages: Languages,
} as const;

const iconAccent = {
  microscope: "bg-[#fdeef2] text-[#e0507a]",
  sigma: "bg-[#eef1fd] text-[#4f7df5]",
  languages: "bg-[#eef6fd] text-[#3aa0d1]",
} as const;

export function HomeworkPanel({ items }: HomeworkPanelProps) {
  const pending = items.filter((item) => item.status === "pending");
  const overdue = items.filter((item) => item.status === "overdue");

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#1e2a3b]">Homework</h3>
        {pending.length > 0 && (
          <Badge className="rounded-full bg-[#eef6ee] text-[#2f9e5c] hover:bg-[#eef6ee]">
            {pending.length} New
          </Badge>
        )}
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="mb-3 border-b border-border/70 pb-2">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="flex flex-col gap-2.5">
          {pending.map((item) => (
            <HomeworkRow key={item.id} item={item} />
          ))}
        </TabsContent>

        <TabsContent value="overdue" className="flex flex-col gap-2.5">
          {overdue.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Nothing overdue. You&apos;re all caught up.
            </p>
          ) : (
            overdue.map((item) => <HomeworkRow key={item.id} item={item} />)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function HomeworkRow({ item }: { item: HomeworkItem }) {
  const Icon = iconMap[item.icon];

  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#f6f8fc] p-3">
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          iconAccent[item.icon],
        )}
      >
        <Icon className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#1e2a3b]">
          {item.subject}
        </p>
        <p className="text-xs text-muted-foreground">{item.dueLabel}</p>
      </div>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
    </div>
  );
}
