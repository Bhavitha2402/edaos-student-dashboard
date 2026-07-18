# EdaOS — Student Portal

A production-ready React 19 + TypeScript student portal, built with Vite, Tailwind CSS v4, shadcn-style UI primitives, TanStack Query, React Hook Form + Zod, React Router, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`). No additional configuration, environment variables, or manual setup is required — all data is served from local mock data modules under `src/data/`.

```bash
npm run build     # production build (tsc -b && vite build) → dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Tech stack

| Concern | Library |
|---|---|
| Framework / build | React 19, Vite 8, TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), CSS-variable theme (light/dark) |
| UI primitives | Hand-built shadcn-style components on Radix UI (`src/components/ui`) |
| Routing | React Router DOM v7 |
| Server/async state | TanStack Query v5 (mock data wrapped in `useQuery`/`useMutation`) |
| HTTP client | Axios (`src/lib/api.ts`, pre-wired for a future real backend) |
| Forms & validation | React Hook Form + Zod |
| Animation | Framer Motion |
| Icons | lucide-react |

## Project structure

```
src/
  components/
    ui/            Reusable primitives (Button, Card, Input, Dialog/Sheet, Tabs, Switch, ...)
    layout/         AppLayout, Sidebar, Navbar, UserMenu, NotificationsMenu
    theme/           ThemeProvider (light/dark/system) + ThemeToggle
    auth/             Login/Contact-Admin shell, illustrations, password input
    dashboard/         Dashboard-specific widgets (also reused by Exams/Notices)
    timetable/          Timetable-specific widgets (DownloadTimetableButton reused by Exams)
    homework/            Homework-specific widgets
    exam/                 Exam & Result widgets
    notices/               Notice Board widgets
    common/                 Cross-page shared pieces (PageTitle, PanelActions)
  pages/            One file per route
  routes/            Central route table (src/routes/index.tsx)
  providers/          App-wide providers (QueryClientProvider + ThemeProvider)
  data/               Mock data per module
  types/               Shared TypeScript types per module
  hooks/               use-auth, use-dashboard-data, use-media-query
  lib/                 cn() utility, axios instance, query client, zod schemas
  config/               site.ts (branding), nav.ts (sidebar items)
```

## Routes

| Path | Page | Notes |
|---|---|---|
| `/login` | Student Login | Auth module, no sidebar/navbar |
| `/contact-admin` | Contact Admin | Auth module, no sidebar/navbar |
| `/dashboard` | Dashboard | Welcome banner, timetable strip, homework, notices, attendance, subjects |
| `/timetable` | My Timetable | Daily schedule + calendar sidebar |
| `/homework` | Homework & Tasks | Filterable assignment list + progress sidebar |
| `/exams` | Exam & Result | Upcoming exams + calendar sidebar |
| `/notices` | Notice Board | Category-filtered, grouped-by-day notices |
| `/fees` | Fee Management | Summary + payment history |
| `/transport` | Transport | Route/pickup/driver details |
| `/profile` | Profile | Student detail view |
| `/settings` | Settings | Theme, notification toggles, sign out |

All authenticated routes are nested under a single `<AppLayout>` (`src/components/layout/app-layout.tsx`), which renders the shared `Sidebar` and `Navbar` consistently on every page and exposes routed content via `<Outlet />`. Every page therefore automatically inherits the same `ThemeProvider` context (wired once in `main.tsx`), the same sidebar navigation, and the same top bar.

## On module scope (read this before assuming a design gap is a bug)

This app was built incrementally, module by module, against a series of Figma exports. Each module below was pixel-matched against an uploaded design:

- **Authentication** (Login, Contact Admin)
- **Dashboard**
- **Timetable**
- **Homework & Tasks**
- **Exam & Result** — this single page/route covers what a spec sheet might separately call "Exams" and "Results"; no separate Figma was provided for a standalone Results page, so one was not fabricated.
- **Notice Board**
- **Notifications** (the bell dropdown in the navbar)

**Attendance** is not a standalone route — it appears exactly where the source Figma files placed it: as the attendance ring + calendar on the Dashboard, and as the present/absent/holiday calendar reused on the Exam & Result and Notice Board pages. No separate "Attendance" page design was ever supplied.

**Profile, Settings, Fee Management, and Transport** are present as fully working routes (linked correctly from the sidebar and user menu, no dead links), built in the same visual language as the rest of the app and reusing the same `Card`/`Button`/`Badge`/`Switch` primitives — but no Figma was supplied for these four screens specifically. They are original, functional pages rather than pixel-matched reproductions. If exact designs exist for them, share them and these four pages can be brought to the same pixel-perfect standard as the rest.

## Mock data / no backend required

Every page reads from static mock data in `src/data/` via small `useQuery`/`useMutation` hooks that simulate network latency. This keeps the app fully runnable offline with `npm install && npm run dev` and no environment variables. `src/lib/api.ts` contains a pre-configured Axios instance (base URL via `VITE_API_BASE_URL`, bearer token + 401 interceptor) ready for swapping in a real backend later — replace the `queryFn`/`mutationFn` bodies in `src/hooks/*` with real `api.get/post` calls when one exists.

## Auth

Login is mock-authenticated (`src/hooks/use-auth.ts`): any enrollment number/password combination succeeds, except entering the demo enrollment number (`STU2026001`) with the wrong password deliberately triggers the error state so that UI path stays reachable. A token is written to `localStorage` on success; logging out (via the user menu or Settings page) clears it and returns to `/login`.
