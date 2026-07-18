import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";

/**
 * Central Axios instance. Point VITE_API_BASE_URL at your backend in
 * .env / .env.local. Falls back to a relative "/api" path in dev so
 * requests can be proxied by Vite if desired.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const message =
      error.response?.data?.message ?? error.message ?? "Something went wrong";

    if (error.response?.status === 401) {
      // Centralized place to handle session expiry, e.g. redirect to /login.
      localStorage.removeItem("auth_token");
    }

    return Promise.reject(new Error(message));
  },
);

export default api;
