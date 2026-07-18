import { PageTitle } from "@/components/common/page-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { feeInstallments, feeSummary } from "@/data/mock-profile";
import { cn } from "@/lib/utils";
import type { FeeInstallment } from "@/data/mock-profile";

const statusStyles: Record<FeeInstallment["status"], string> = {
  paid: "bg-[#eaf5ee] text-[#2f9e5c]",
  due: "bg-[#eef1fd] text-[#4f7df5]",
  overdue: "bg-[#fdeef0] text-[#e0435a]",
};

const statusLabel: Record<FeeInstallment["status"], string> = {
  paid: "Paid",
  due: "Due",
  overdue: "Overdue",
};

export function FeeManagementPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle
        title="Fee Management"
        subtitle="Track payments and upcoming installments"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="rounded-2xl border-0 shadow-none bg-[#4f7df5]">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Amount Due
            </p>
            <p className="mt-2 text-2xl font-extrabold text-white">
              {feeSummary.totalDue}
            </p>
            <p className="mt-1 text-xs text-white/80">
              Due by {feeSummary.nextDueDate}
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-none">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Total Paid
            </p>
            <p className="mt-2 text-2xl font-extrabold text-[#1e2a3b]">
              {feeSummary.totalPaid}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">This academic year</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-none">
          <CardContent className="flex flex-col justify-between p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Next Payment
            </p>
            <Button className="mt-3 h-10 rounded-full bg-[#4f7df5] hover:bg-[#4169e0]">
              Pay Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="p-6">
          <h3 className="text-base font-bold text-[#1e2a3b]">
            Payment History
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            {feeInstallments.map((installment) => (
              <div
                key={installment.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#f6f8fc] p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1e2a3b]">
                    {installment.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Due: {installment.dueDate}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#1e2a3b]">
                    {installment.amount}
                  </span>
                  <Badge
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      statusStyles[installment.status],
                    )}
                  >
                    {statusLabel[installment.status]}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
