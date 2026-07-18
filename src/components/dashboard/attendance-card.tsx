import type { AttendanceSummary } from "@/types/dashboard";

interface AttendanceCardProps {
  summary: AttendanceSummary;
}

const SIZE = 168;
const STROKE = 12;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function AttendanceCard({ summary }: AttendanceCardProps) {
  const presentRatio = summary.percentage / 100;
  const presentLength = CIRCUMFERENCE * presentRatio;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-5">
      <div className="mb-2 flex items-center justify-end">
        <span className="rounded-full bg-[#eef1fd] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4f7df5]">
          Current Status
        </span>
      </div>

      <div className="relative mx-auto mt-4 flex flex-1 items-center justify-center">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#f2495c"
            strokeWidth={STROKE}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#2f6fed"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${presentLength} ${CIRCUMFERENCE - presentLength}`}
            strokeDashoffset={CIRCUMFERENCE * 0.25}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-extrabold text-[#1e2a3b]">
            {summary.percentage}%
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Attendance
          </span>
        </div>

        <div className="absolute -left-2 top-1 flex flex-col items-center rounded-full bg-[#fdeef0] px-3 py-1.5 text-center shadow-sm">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-[#e0435a]">
            Days Absent
          </span>
          <span className="text-lg font-bold text-[#e0435a]">
            {summary.daysAbsent}
          </span>
        </div>

        <div className="absolute -right-2 bottom-2 flex flex-col items-center rounded-full bg-[#eaf1fe] px-3 py-1.5 text-center shadow-sm">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-[#2f6fed]">
            Days Present
          </span>
          <span className="text-lg font-bold text-[#2f6fed]">
            {summary.daysPresent}
          </span>
        </div>
      </div>
    </div>
  );
}
