import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NoticeHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-extrabold text-[#1e2a3b] sm:text-4xl">
        Notice Board
      </h1>
      <Button variant="ghost" size="icon" className="rounded-full" aria-label="Search notices">
        <Search className="size-4" />
      </Button>
    </div>
  );
}
