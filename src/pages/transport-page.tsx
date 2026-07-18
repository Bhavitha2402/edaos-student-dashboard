import { Bus, Clock, MapPin, Phone } from "lucide-react";

import { PageTitle } from "@/components/common/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { transportDetails } from "@/data/mock-profile";

export function TransportPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="Transport" subtitle="Your assigned route and pickup details" />

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-full bg-[#eef1fd] text-[#4f7df5]">
              <Bus className="size-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-[#1e2a3b]">
                {transportDetails.routeName}
              </h2>
              <p className="text-sm text-muted-foreground">
                Bus No. {transportDetails.busNumber}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="rounded-2xl border-0 shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-[#1e2a3b]">
              <Clock className="size-4" />
              <h3 className="text-sm font-bold">Pickup</h3>
            </div>
            <p className="mt-2 text-2xl font-extrabold text-[#1e2a3b]">
              {transportDetails.pickupTime}
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              {transportDetails.pickupStop}
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-[#1e2a3b]">
              <Clock className="size-4" />
              <h3 className="text-sm font-bold">Drop</h3>
            </div>
            <p className="mt-2 text-2xl font-extrabold text-[#1e2a3b]">
              {transportDetails.dropTime}
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              {transportDetails.dropStop}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-0 shadow-none">
        <CardContent className="p-6">
          <h3 className="text-base font-bold text-[#1e2a3b]">Driver Details</h3>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1e2a3b]">
                {transportDetails.driverName}
              </p>
              <p className="text-xs text-muted-foreground">Bus Driver</p>
            </div>
            <a
              href={`tel:${transportDetails.driverPhone}`}
              className="flex items-center gap-2 rounded-full bg-[#eef1fd] px-4 py-2 text-sm font-medium text-[#3b6fe0] hover:bg-[#e2e9fc]"
            >
              <Phone className="size-4" />
              {transportDetails.driverPhone}
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
