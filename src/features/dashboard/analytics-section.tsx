import { CircleAlert } from "lucide-react";
import {
  CardCheckIcon,
  CardEditIcon,
  HourglassIcon,
} from "../../components/icons";
import { AnalyticsCard, AnalyticsCardInsights } from "./analytics-card";

export function AnalyticsSection() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <AnalyticsCard
        icon={
          <span className="text-success">
            <CardCheckIcon />
          </span>
        }
        title="Total Active Cards"
        value="26,478"
        insights={
          <AnalyticsCardInsights
            change="positive"
            stat="+9%"
            period="this month"
          />
        }
      />
      <AnalyticsCard
        icon={
          <span className="text-[#8020E7]">
            <CardEditIcon />
          </span>
        }
        title="Total Personalized Cards"
        value="15,703"
        insights={
          <AnalyticsCardInsights
            change="positive"
            stat="8.5%"
            period="this month"
          />
        }
      />
      <AnalyticsCard
        icon={
          <span className="text-success">
            <CardCheckIcon />
          </span>
        }
        title="Today's Revenue"
        value={`9300000`}
        insights={
          <AnalyticsCardInsights
            change="negative"
            stat="-9%"
            period="vs yesterday"
          />
        }
      />
      <AnalyticsCard
        icon={
          <span className="text-pending">
            <HourglassIcon />
          </span>
        }
        title="Pending Requests"
        value="38"
        insights={
          <p className="flex items-center gap-1 text-xs text-pending">
            <CircleAlert className="size-3" />
            Requires attention
          </p>
        }
      />
    </div>
  );
}
