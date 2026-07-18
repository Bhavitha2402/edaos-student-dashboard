import { PageTitle } from "@/components/common/page-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { studentProfile } from "@/data/mock-dashboard";
import { profileDetails } from "@/data/mock-profile";

const detailRows: { label: string; value: string }[] = [
  { label: "Email", value: profileDetails.email },
  { label: "Phone", value: profileDetails.phone },
  { label: "Class Teacher", value: profileDetails.classTeacher },
  { label: "Blood Group", value: profileDetails.bloodGroup },
  { label: "Date of Birth", value: profileDetails.dateOfBirth },
  { label: "Admission Number", value: profileDetails.admissionNumber },
  { label: "Address", value: profileDetails.address },
];

export function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="Profile" subtitle="Your personal and academic details" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
        <Card className="overflow-hidden rounded-2xl border-0 shadow-none">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src={studentProfile.photoUrl}
              alt={studentProfile.name}
              className="size-full object-cover"
            />
          </div>
          <CardContent className="flex flex-col items-center gap-2 pt-4 text-center">
            <h2 className="text-lg font-bold text-[#1e2a3b]">
              {studentProfile.name}
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{studentProfile.grade}</Badge>
              <Badge variant="outline">{studentProfile.studentId}</Badge>
            </div>
            <Button className="mt-2 w-full rounded-full bg-[#4f7df5] hover:bg-[#4169e0]">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-none">
          <CardContent className="p-6">
            <h3 className="text-base font-bold text-[#1e2a3b]">
              Personal Information
            </h3>
            <Separator className="my-4" />
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detailRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[#1e2a3b]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
