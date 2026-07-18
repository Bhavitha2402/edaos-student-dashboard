import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ContactAdminIllustration } from "@/components/auth/auth-illustrations";
import { AuthShell } from "@/components/auth/auth-shell";
import { SchoolCrest } from "@/components/auth/school-crest";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { schoolInfo } from "@/data/mock-school";
import { useContactAdminMutation } from "@/hooks/use-auth";
import {
  contactAdminSchema,
  type ContactAdminFormValues,
} from "@/lib/validations/auth";

export function ContactAdminPage() {
  const contactMutation = useContactAdminMutation();

  const form = useForm<ContactAdminFormValues>({
    resolver: zodResolver(contactAdminSchema),
    defaultValues: {
      enrollmentNumber: "",
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: ContactAdminFormValues) {
    contactMutation.mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <AuthShell illustration={<ContactAdminIllustration />}>
      <div className="flex flex-col items-center text-center">
        <SchoolCrest />
        <h1 className="mt-4 text-xl font-bold uppercase tracking-wide text-[#1e2a3b]">
          Contact Admin
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Need help? Contact the administrator with your enrollment number
          and password. We&apos;ll review your request and get back to you
          soon.
        </p>
      </div>

      {contactMutation.isSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col items-center gap-2 rounded-xl bg-[#eaf5ee] px-4 py-6 text-center"
        >
          <CheckCircle2 className="size-8 text-[#2f9e5c]" />
          <p className="text-sm font-medium text-[#1e2a3b]">
            Your details were sent. The admin team will get back to you soon.
          </p>
        </motion.div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-5"
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input variant="underline" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      variant="underline"
                      placeholder="Phone no."
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div whileTap={{ scale: 0.98 }} className="mt-1">
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="h-12 w-full rounded-xl bg-[#4f7df5] text-base font-semibold shadow-[0_10px_20px_-8px_rgba(79,125,245,0.6)] hover:bg-[#4169e0]"
              >
                {contactMutation.isPending ? "Sending..." : "Send Details"}
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl bg-[#f3f7fe] px-4 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e2ecfd] text-[#3b6fe0]">
                  <Mail className="size-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <span className="text-sm font-medium text-[#3b6fe0]">
                    {schoolInfo.contactEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-[#f3f7fe] px-4 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e2ecfd] text-[#3b6fe0]">
                  <Phone className="size-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-muted-foreground">Phone</span>
                  <span className="text-sm font-medium text-[#3b6fe0]">
                    {schoolInfo.contactPhone}
                  </span>
                </div>
              </div>
            </div>
          </form>
        </Form>
      )}

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remembered your details?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#3b6fe0] hover:underline"
        >
          Back to Sign In
        </Link>
      </p>
    </AuthShell>
  );
}
