import { useMutation } from "@tanstack/react-query";

import { mockAuthCredentials } from "@/data/mock-school";
import type {
  ContactAdminFormValues,
  LoginFormValues,
} from "@/lib/validations/auth";

function delay<T>(value: T, ms = 700): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/**
 * Simulated login call. Any enrollment number/password combination is
 * accepted except when it deliberately matches a "wrong password" demo
 * case, so the form's error-state UI stays reachable. Swap the resolver
 * body for `api.post("/auth/login", values)` once a real endpoint exists.
 */
export function useLoginMutation() {
  return useMutation({
    mutationFn: async (values: LoginFormValues) => {
      await delay(null);

      if (
        values.enrollmentNumber === mockAuthCredentials.enrollmentNumber &&
        values.password !== mockAuthCredentials.password
      ) {
        throw new Error("Incorrect enrollment number or password.");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("auth_token", "mock-token");
        localStorage.setItem(
          "auth_remember",
          values.rememberMe ? "true" : "false",
        );
      }

      return { enrollmentNumber: values.enrollmentNumber };
    },
  });
}

export function useContactAdminMutation() {
  return useMutation({
    mutationFn: async (values: ContactAdminFormValues) => {
      await delay(null);
      return values;
    },
  });
}
