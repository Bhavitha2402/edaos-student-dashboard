import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DownloadTimetableButtonProps {
  onClick?: () => void;
}

export function DownloadTimetableButton({
  onClick,
}: DownloadTimetableButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-12 w-full gap-2 rounded-xl bg-[#4f7df5] text-base font-semibold hover:bg-[#4169e0]"
    >
      <Download className="size-4" />
      Download Timetable
    </Button>
  );
}
