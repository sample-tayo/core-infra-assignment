import { ReactNode } from "react";
import { Breadcrumbs } from "../ui/breadcrumbs";
import { BellIcon, UserIcon, LogoutIcon } from "../icons";
import { SidebarNavigation } from "../ui/navigation";
import { CardInfraLogo, LapoBankLogo } from "../ui/logo";
import { ScrollArea } from "../ui/scroll-area";
import { SearchInput } from "../ui/search-input";
import { cn } from "../../utils";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const sidebarWidth = "w-64";
  const mainMargin = "ml-64";

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <aside
          className={cn(
            "fixed left-0 top-0 z-20 flex h-screen flex-col justify-between border-r border-border bg-card px-3 pt-7 pb-8",
            sidebarWidth
          )}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="max-w-28">
                <LapoBankLogo />
              </div>
            </div>
            <div className="mt-8 h-[calc(100vh-320px)]">
              <ScrollArea className="h-full pr-3">
                <SidebarNavigation />
              </ScrollArea>
            </div>
          </div>

          <div className="sticky bottom-0 bg-card pt-4 border-t border-border">
            <div className="space-y-4 px-3">
              <button
                className={cn(
                  "flex w-full cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-2.5",
                  "text-foreground transition-colors duration-150 hover:text-destructive"
                )}
              >
                <LogoutIcon />
                <span className="text-xs">Logout</span>
              </button>
              <div className="space-y-1">
                <p className="text-[0.53rem] font-medium text-grey">
                  POWERED BY
                </p>
                <div className="max-w-24">
                  <CardInfraLogo />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className={cn(mainMargin)}>
          <div className="fixed left-64 right-0 top-0 z-10 border-b border-border bg-card">
            <Header />
          </div>

          <ScrollArea className="h-screen pt-14">
            <div
              className={cn(
                "mx-auto max-w-[1400px] px-4 py-2.5 mb-8 min-h-[calc(100vh-80px)]"
              )}
            >
              {children}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className={cn("flex h-14 items-center justify-between gap-4 px-4 py-2")}
    >
      <Breadcrumbs />
      <div className={cn("flex items-center gap-4")}>
        <SearchInput
          placeholder="Search..."
          className={cn("w-64 rounded-full")}
        />
        <button
          className={cn("p-2.5 text-xl sm:text-2xl")}
          title="Notifications"
        >
          <BellIcon />
        </button>
        <button
          className={cn(
            "rounded-full border border-gray-600 bg-gray-200",
            "p-1.5 sm:p-2 text-xl sm:text-2xl"
          )}
          title="User Profile"
        >
          <UserIcon />
        </button>
      </div>
    </div>
  );
}
