import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface WelcomeBannerProps {
  firstName: string;
  classesToday: number;
  nextClassMinutes: number;
  nextClassRoom: string;
  onViewSchedule?: () => void;
}

export function WelcomeBanner({
  firstName,
  classesToday,
  nextClassMinutes,
  nextClassRoom,
  onViewSchedule,
}: WelcomeBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f6fed] via-[#5b8ff2] to-[#bcd6fb] px-6 py-8 sm:px-8 sm:py-10"
    >
      <div className="relative z-10 max-w-md">
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
          Hello, {firstName}! Ready for today&apos;s classes?
        </h1>
        <p className="mt-3 text-sm text-white/85 sm:text-base">
          You have {classesToday} classes today. Your first lecture starts in{" "}
          {nextClassMinutes} minutes in Room {nextClassRoom}.
        </p>
        <Button
          onClick={onViewSchedule}
          className="mt-6 h-11 rounded-full bg-white px-6 font-semibold text-[#2f6fed] hover:bg-white/90"
        >
          View Schedule
        </Button>
      </div>

      {/* Decorative open-book silhouette */}
      <svg
        viewBox="0 0 260 200"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-2 h-44 w-56 text-white/25 sm:h-52 sm:w-64"
      >
        <path
          d="M130 30 C110 15 60 8 20 15 L20 165 C60 158 110 165 130 180 C150 165 200 158 240 165 L240 15 C200 8 150 15 130 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />
        <path d="M130 30 L130 180" stroke="currentColor" strokeWidth="6" />
      </svg>
    </motion.div>
  );
}
