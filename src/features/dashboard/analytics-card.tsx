import { MoveUpRightIcon } from "../../components/icons";
import { cn } from "../../utils";
import { ReactNode } from "react";
import { DashboardCard } from "./dashboard-card";

export function AnalyticsCard({
  icon,
  title,
  value,
  insights,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  insights?: ReactNode;
}) {
  return (
    <DashboardCard className="space-y-3 px-3 pt-3">
      <div className="flex flex-col gap-1">
        {icon}
        <h3 className="text-sm font-medium text-foreground/[0.56]">{title}</h3>
      </div>
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-2xl font-bold">{value}</p>
        {insights}
      </div>
    </DashboardCard>
  );
}

export function AnalyticsCardInsights({
  change,
  stat,
  period,
}: {
  change: "positive" | "negative";
  stat: string;
  period: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <p
        className={cn("flex items-center gap-1 rounded-sm p-0.5 px-2", {
          "bg-success-background text-success": change === "positive",
          "bg-red-100 text-red-500": change === "negative",
        })}
      >
        <span
          className={cn("text-[8px]", {
            "rotate-180": change === "negative",
          })}
        >
          <MoveUpRightIcon />
        </span>
        {stat}
      </p>
      <p className="text-foreground/[0.56]">{period}</p>
    </div>
  );
}
