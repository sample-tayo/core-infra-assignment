interface DashboardHeaderProps {
  userName: string;
  lastLogin: string;
}

export function DashboardHeader({ userName, lastLogin }: DashboardHeaderProps) {
  return (
    <div className="space-y-1.5">
      <h2 className="text-lg font-bold">
        Hi {userName}, what would you like to do today?
      </h2>
      <p className="text-xs font-light">
        <span className="font-normal">Last login:</span> {lastLogin}
      </p>
    </div>
  );
}
