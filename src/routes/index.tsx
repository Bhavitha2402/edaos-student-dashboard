import { Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "@/components/layout/app-layout";
import { ContactAdminPage } from "@/pages/contact-admin-page";
import { DashboardPage } from "@/pages/dashboard-page";
import { ExamResultPage } from "@/pages/exam-result-page";
import { FeeManagementPage } from "@/pages/fee-management-page";
import { HomeworkPage } from "@/pages/homework-page";
import { LoginPage } from "@/pages/login-page";
import { NoticesPage } from "@/pages/notices-page";
import { ProfilePage } from "@/pages/profile-page";
import { SettingsPage } from "@/pages/settings-page";
import { TimetablePage } from "@/pages/timetable-page";
import { TransportPage } from "@/pages/transport-page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact-admin" element={<ContactAdminPage />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/homework" element={<HomeworkPage />} />
        <Route path="/exams" element={<ExamResultPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/fees" element={<FeeManagementPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
