import { cn } from "../../utils";
import { ReactNode } from "react";

export function InputErrorMessage({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-sm text-brand-error", className)}>{children}</p>
  );
}
