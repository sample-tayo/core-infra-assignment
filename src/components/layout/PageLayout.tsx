import { ReactNode } from "react";
import { cn } from "../../utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  title: string;
  subtitle?: string;
}

export function PageLayout({
  children,
  title,
  subtitle,
  className,
}: PageLayoutProps) {
  return (
    <div className={cn("w-full", className)}>
      <PageHeader title={title} subtitle={subtitle} />
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-lg font-bold">{title}</h1>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  );
}
