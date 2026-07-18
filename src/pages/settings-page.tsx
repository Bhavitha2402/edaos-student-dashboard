import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";
import { PageTitle } from "@/components/common/page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [notifyHomework, setNotifyHomework] = useState(true);
  const [notifyNotices, setNotifyNotices] = useState(true);
  const [notifyFees, setNotifyFees] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="Settings" subtitle="Manage your account preferences" />

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="p-6">
          <h3 className="text-base font-bold text-[#1e2a3b]">Appearance</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose how EdaOS looks on this device.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const active = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setTheme(option.value)}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="size-4" />
                  {option.label}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="p-6">
          <h3 className="text-base font-bold text-[#1e2a3b]">
            Notification Preferences
          </h3>
          <Separator className="my-4" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-homework" className="text-sm font-medium">
                  Homework reminders
                </Label>
                <p className="text-xs text-muted-foreground">
                  Get notified before assignments are due.
                </p>
              </div>
              <Switch
                id="notify-homework"
                checked={notifyHomework}
                onCheckedChange={setNotifyHomework}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-notices" className="text-sm font-medium">
                  Notice board updates
                </Label>
                <p className="text-xs text-muted-foreground">
                  Get notified when the school posts a new notice.
                </p>
              </div>
              <Switch
                id="notify-notices"
                checked={notifyNotices}
                onCheckedChange={setNotifyNotices}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-fees" className="text-sm font-medium">
                  Fee payment reminders
                </Label>
                <p className="text-xs text-muted-foreground">
                  Get notified before a fee installment is due.
                </p>
              </div>
              <Switch
                id="notify-fees"
                checked={notifyFees}
                onCheckedChange={setNotifyFees}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <h3 className="text-base font-bold text-[#1e2a3b]">Sign out</h3>
            <p className="text-sm text-muted-foreground">
              End your session on this device.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem("auth_token");
              window.location.href = "/login";
            }}
          >
            Log out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
