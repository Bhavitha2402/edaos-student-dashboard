import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { LoginIllustration } from "@/components/auth/auth-illustrations";
import { AuthShell } from "@/components/auth/auth-shell";
import { PasswordInput } from "@/components/auth/password-input";
import { SchoolCrest } from "@/components/auth/school-crest";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { schoolInfo } from "@/data/mock-school";
import { useLoginMutation } from "@/hooks/use-auth";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      enrollmentNumber: "",
      password: "",
      rememberMe: true,
    },
  });

  function onSubmit(values: LoginFormValues) {
    loginMutation.mutate(values, {
      onSuccess: () => navigate("/dashboard", { replace: true }),
    });
  }

  return (
    <AuthShell illustration={<LoginIllustration />}>
      <div className="flex flex-col items-center text-center">
        <SchoolCrest />
        <h1 className="mt-4 text-xl font-bold uppercase tracking-wide text-[#1e2a3b]">
          {schoolInfo.name}
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#4f7df5]">
          {schoolInfo.panelLabel}
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 flex flex-col gap-5"
          noValidate
        >
          <FormField
            control={form.control}
            name="enrollmentNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    variant="underline"
                    placeholder="Enrollment number"
                    autoComplete="username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    variant="underline"
                    placeholder="Password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {loginMutation.isError && (
            <p className="-mt-2 text-sm font-medium text-destructive">
              {loginMutation.error instanceof Error
                ? loginMutation.error.message
                : "Something went wrong. Please try again."}
            </p>
          )}

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <label className="cursor-pointer text-sm text-[#1e2a3b]">
                    Remember me
                  </label>
                </FormItem>
              )}
            />

            <Link
              to="#"
              className="text-sm font-medium text-[#3b6fe0] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <motion.div whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="h-12 w-full rounded-full bg-[#4f7df5] text-base font-semibold shadow-[0_10px_20px_-8px_rgba(79,125,245,0.6)] hover:bg-[#4169e0]"
            >
              {loginMutation.isPending ? "Signing in..." : "Sign In"}
            </Button>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              to="/contact-admin"
              className="font-semibold text-[#3b6fe0] hover:underline"
            >
              Contact Admin
            </Link>
          </p>
        </form>
      </Form>
    </AuthShell>
  );
}
