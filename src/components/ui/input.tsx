import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "underline";
}

function Input({ className, type, variant = "default", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(
        "flex h-9 w-full min-w-0 bg-transparent text-sm transition-colors outline-none",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        variant === "default" &&
          cn(
            "rounded-md border border-input px-3 py-1 shadow-xs",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          ),
        variant === "underline" &&
          cn(
            "rounded-none border-0 border-b border-border px-0 py-2.5",
            "focus-visible:border-b-2 focus-visible:border-primary focus-visible:pb-[9px]",
          ),
        className,
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
