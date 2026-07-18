interface ExamHeaderProps {
  sectionLabel: string;
}

export function ExamHeader({ sectionLabel }: ExamHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-[#1e2a3b] sm:text-4xl">
        Exam &amp; Result
      </h1>
      <p className="mt-6 text-sm font-medium text-[#1e2a3b]">{sectionLabel}</p>
    </div>
  );
}
