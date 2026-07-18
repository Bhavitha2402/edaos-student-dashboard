import type { WeeklyProgress } from "@/types/homework";

interface WeeklyProgressCardProps {
  progress: WeeklyProgress;
}

const SIZE = 140;
const STROKE = 12;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function WeeklyProgressCard({ progress }: WeeklyProgressCardProps) {
  const filled = CIRCUMFERENCE * (progress.percentage / 100);

  return (
    <div className="rounded-2xl bg-white p-5">
      <h3 className="text-base font-bold text-[#1e2a3b]">
        Your Weekly Progress
      </h3>

      <div className="relative mx-auto mt-4 flex items-center justify-center">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#eef1f6"
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
            strokeDasharray={`${filled} ${CIRCUMFERENCE - filled}`}
            strokeDashoffset={CIRCUMFERENCE * 0.25}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-extrabold text-[#1e2a3b]">
            {progress.percentage}%
          </span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-[#1e2a3b]">
          {progress.tasksCompleted} Tasks Completed
        </p>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
          {progress.tasksRemaining} Tasks Remaining This Week
        </p>
      </div>
    </div>
  );
}
