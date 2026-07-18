import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import type { StudentProfile } from "@/types/dashboard";

interface ProfileCardProps {
  profile: StudentProfile;
  onViewProfile?: () => void;
}

export function ProfileCard({ profile, onViewProfile }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#4f7df5] p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-bold uppercase leading-tight text-white">
          {profile.name}
        </h2>
        <div className="text-right text-[11px] text-white/85">
          <p>S.ID: {profile.studentId}</p>
          <p>{profile.grade}</p>
        </div>
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden rounded-xl">
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="h-full min-h-40 w-full object-cover"
        />
      </div>

      <Button
        variant="secondary"
        onClick={onViewProfile}
        className="absolute inset-x-4 bottom-4 h-9 rounded-lg bg-white/95 text-sm font-medium text-[#1e2a3b] hover:bg-white"
      >
        View Profile
      </Button>
    </motion.div>
  );
}
