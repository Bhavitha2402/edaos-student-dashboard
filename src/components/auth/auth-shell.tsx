import { motion } from "framer-motion";

interface AuthShellProps {
  illustration: React.ReactNode;
  children: React.ReactNode;
}

export function AuthShell({ illustration, children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#eaf2fd] p-4 sm:p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_-15px_rgba(30,60,120,0.25)]"
      >
        <div className="relative hidden w-[42%] shrink-0 items-center justify-center bg-[#e8f1fe] p-10 md:flex">
          {illustration}
        </div>

        <div className="w-full px-6 py-10 sm:px-10 sm:py-12 md:w-[58%] md:px-12">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
