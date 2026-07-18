import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { queryClient } from "@/lib/query-client";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
