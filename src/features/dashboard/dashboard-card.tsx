import { cn } from "../../utils";
import { ReactNode } from "react";

export function DashboardCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[10px] border border-[#e2e2e2] bg-white px-4 py-4",
        className
      )}
    >
      {children}
    </article>
  );
}
