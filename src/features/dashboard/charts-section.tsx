import { Link } from "react-router";
import { EnlargeIcon } from "../../components/icons";
import { RecentCardRequestsTable } from "../card-request/recent-card-requests-table";
import { CardStatusDistributionChart } from "./card-status-distribution-chart";
import { MonthlyInsuranceChart } from "./monthly-insurance-chart";
import { WeekIncomeChart } from "./week-income-chart";
import { DashboardCard } from "./dashboard-card";

interface ChartsSectionProps {
  routes: typeof import("../../constants").ROUTES;
}

export function ChartsSection({ routes }: ChartsSectionProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-2 space-y-2">
        <DashboardCard className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium">Monthly Insurance</h3>
            <Link to="/insurance" className="text-lg text-gray-300 shrink-0">
              <EnlargeIcon />
            </Link>
          </div>
          <MonthlyInsuranceChart />
        </DashboardCard>
        <DashboardCard className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium">This Week's income</h3>
            <Link to="/income" className="text-lg text-gray-300 shrink-0">
              <EnlargeIcon />
            </Link>
          </div>
          <WeekIncomeChart />
        </DashboardCard>
      </div>
      <div className="col-span-2 space-y-2">
        <DashboardCard className="space-y-5 overflow-hidden">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium">Recent Card Requests</h3>
            <Link
              to={`/${routes.CARDS.REQUEST.LIST}`}
              className="text-lg text-gray-300 shrink-0"
            >
              <EnlargeIcon />
            </Link>
          </div>
          <RecentCardRequestsTable />
        </DashboardCard>
        <DashboardCard className="space-y-5">
          <h3 className="text-lg font-medium">Card Status Distribution</h3>
          <CardStatusDistributionChart />
        </DashboardCard>
      </div>
    </div>
  );
}
