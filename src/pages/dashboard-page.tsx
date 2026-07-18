import { useNavigate } from "react-router-dom";

import { AttendanceCard } from "@/components/dashboard/attendance-card";
import { CalendarNoteCard } from "@/components/dashboard/calendar-note-card";
import { HomeworkPanel } from "@/components/dashboard/homework-panel";
import { MiniCalendar } from "@/components/dashboard/mini-calendar";
import { NoticeBoard } from "@/components/dashboard/notice-board";
import { ProfileCard } from "@/components/dashboard/profile-card";
import { SubjectsGrid } from "@/components/dashboard/subjects-grid";
import { TimetableSection } from "@/components/dashboard/timetable-section";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import {
  attendanceSummary,
  calendarDays,
  calendarMonthLabel,
  calendarNote,
  calendarWeekdayLabels,
  homeworkItems,
  noticeItems,
  studentProfile,
  subjects,
  todaysSchedule,
} from "@/data/mock-dashboard";

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      {/* Hero row: welcome banner + profile card */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <WelcomeBanner
          firstName={studentProfile.name.split(" ")[0]}
          classesToday={todaysSchedule.length}
          nextClassMinutes={20}
          nextClassRoom="402"
          onViewSchedule={() => navigate("/timetable")}
        />
        <ProfileCard
          profile={studentProfile}
          onViewProfile={() => navigate("/profile")}
        />
      </div>

      {/* Main content column + persistent calendar sidebar */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-4">
          <TimetableSection classes={todaysSchedule} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <HomeworkPanel items={homeworkItems} />
            <NoticeBoard items={noticeItems} />
            <AttendanceCard summary={attendanceSummary} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MiniCalendar
            monthLabel={calendarMonthLabel}
            weekdayLabels={calendarWeekdayLabels}
            days={calendarDays}
          />
          <CalendarNoteCard note={calendarNote} />
        </div>
      </div>

      <SubjectsGrid subjects={subjects} />
    </div>
  );
}
