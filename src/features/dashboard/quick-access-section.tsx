import {
  ATMCardIcon,
  CardEditIcon,
  CardPlusIcon,
  CardShiedIcon,
} from "../../components/icons";
import { DashboardCard } from "./dashboard-card";
import { QuickAccessCard } from "./quick-access-card";

export function QuickAccessSection() {
  return (
    <DashboardCard className="space-y-3">
      <h2 className="font-medium">Your Quick Access</h2>
      <div className="grid grid-cols-4 gap-2">
        <QuickAccessCard icon={<CardShiedIcon />} message="Manage a Card" />
        <QuickAccessCard
          icon={<ATMCardIcon />}
          message="Issue Instant Card"
        />
        <QuickAccessCard
          icon={<CardEditIcon />}
          message="Issue Personalized Card"
        />
        <QuickAccessCard
          icon={<CardPlusIcon />}
          message="Review Card Requests"
        />
      </div>
    </DashboardCard>
  );
}