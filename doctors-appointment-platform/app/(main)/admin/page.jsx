import { TabsContent } from "@/components/ui/tabs";
import { PendingDoctors } from "./components/pending-doctors";
import { VerifiedDoctors } from "./components/verified-doctors";
import { PendingPayouts } from "./components/pending-payouts";

import AppointmentBarChart from "./components/AppointmentBarChart";
import UsersLineChart from "./components/UsersLineChart";

import {
  getPendingDoctors,
  getVerifiedDoctors,
  getPendingPayouts,
} from "@/actions/admin";

export default async function AdminPage() {
  const [pendingDoctorsData, verifiedDoctorsData, pendingPayoutsData] =
    await Promise.all([
      getPendingDoctors(),
      getVerifiedDoctors(),
      getPendingPayouts(),
    ]);

  return (
    <>
      <TabsContent value="pending" className="border-none p-0">
        <PendingDoctors doctors={pendingDoctorsData.doctors || []} />
      </TabsContent>

      <TabsContent value="doctors" className="border-none p-0">
        <VerifiedDoctors doctors={verifiedDoctorsData.doctors || []} />
      </TabsContent>

      <TabsContent value="payouts" className="border-none p-0">
        <PendingPayouts payouts={pendingPayoutsData.payouts || []} />
      </TabsContent>

      {/* ⭐ NEW TAB FOR ANALYTICS ⭐ */}
      <TabsContent value="analytics" className="border-none p-6 space-y-10">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Users Registered Per Week
          </h3>
          <UsersLineChart />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Appointments (Booked vs Completed)
          </h3>
          <AppointmentBarChart />
        </div>

      </TabsContent>
    </>
  );
}
