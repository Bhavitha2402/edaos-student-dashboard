import { CalendarNoteCard } from "@/components/dashboard/calendar-note-card";
import { MiniCalendar } from "@/components/dashboard/mini-calendar";
import { PanelActions } from "@/components/common/panel-actions";
import { DownloadTimetableButton } from "@/components/timetable/download-timetable-button";
import { ExamHeader } from "@/components/exam/exam-header";
import { ExamListItem } from "@/components/exam/exam-list-item";
import {
  examCalendarDays,
  examCalendarMonthLabel,
  examCalendarNote,
  examCalendarWeekdayLabels,
  upcomingExams,
} from "@/data/mock-exam";

export function ExamResultPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
      <div className="flex flex-col gap-4">
        <ExamHeader sectionLabel="Upcoming Exams" />

        <div className="flex flex-col gap-4">
          {upcomingExams.map((exam) => (
            <ExamListItem key={exam.id} exam={exam} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <PanelActions />

        <MiniCalendar
          monthLabel={examCalendarMonthLabel}
          weekdayLabels={examCalendarWeekdayLabels}
          days={examCalendarDays}
        />
        <CalendarNoteCard note={examCalendarNote} />
        <DownloadTimetableButton />
      </div>
    </div>
  );
}
