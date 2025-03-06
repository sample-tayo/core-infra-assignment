import { CalendarIcon } from "../components/icons";
import { ROUTES } from "../constants";
import { DashboardHeader } from "../features/dashboard/dashboard-header";
import { QuickAccessSection } from "../features/dashboard/quick-access-section";
import { AnalyticsSection } from "../features/dashboard/analytics-section";
import { ChartsSection } from "../features/dashboard/charts-section";
import { formatDateTime } from "../utils/date";

export default function DashboardPage() {
  const currentDateTime = formatDateTime();
  const today = new Date().toLocaleDateString("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="space-y-3">
      <h1 className="sr-only">Dashboard Overview Page</h1>

      {/* Header with greeting and date */}
      <div className="flex items-center justify-between gap-4">
        <DashboardHeader userName="Nazeer" lastLogin={currentDateTime} />

        <div className="flex items-center gap-2 rounded-sm border border-gray-300 px-3 py-2 text-xs">
          <p className="flex items-center gap-1 font-medium">
            <span className="text-xs">
              <CalendarIcon />
            </span>
            Today
          </p>
          <div className="h-3 w-px bg-gray-300" />
          <p className="font-light">{today}</p>
        </div>
      </div>

      {/* Quick Access Section */}
      <QuickAccessSection />

      {/* Analytics Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">Analytics</h2>
          <div className="h-px w-full grow bg-gray-200" />
        </div>

        {/* Analytics Cards and Charts */}
        <AnalyticsSection />

        {/* Charts Section */}
        <ChartsSection routes={ROUTES} />
      </div>
    </div>
  );
}
