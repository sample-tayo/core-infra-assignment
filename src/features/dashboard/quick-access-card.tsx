import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

export function QuickAccessCard({
  icon,
  message,
}: {
  message: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-sm bg-primary-200 px-4 py-2">
      <div className="rounded-full bg-primary p-1.5 text-white">{icon}</div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">{message}</p>
        <ChevronRight className="text-xs text-[808080]" />
      </div>
    </div>
  );
}
