import { useLocation, useNavigate } from "react-router";
import { cn } from "../../utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BREADCRUMBS_NAV_LINKS } from "../../constants";
import { ReactNode, useMemo } from "react";

interface BreadcrumbItemProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
}

// Single breadcrumb item component
const BreadcrumbItem = ({
  label,
  icon,
  isActive = false,
}: BreadcrumbItemProps) => (
  <div className="flex items-center gap-1">
    {icon}
    <p
      className={cn("text-gray-600", {
        "font-bold": isActive,
      })}
    >
      {label}
    </p>
  </div>
);

// Back button component
const BackButton = ({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    className="group/back-breadcrumb flex cursor-pointer items-center gap-3 text-gray-600 [&_p_~_*]:text-sm"
    onClick={onClick}
  >
    <ChevronLeft className="size-6" />
    <p className="leading-none duration-150 group-hover/back-breadcrumb:-translate-x-1">
      Back
    </p>
    {icon}
  </button>
);

export function Breadcrumbs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathSegments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  // Handle single-level navigation (home or direct section)
  if (pathSegments.length <= 1) {
    const segment = pathSegments[0] || "overview";
    const navLink = BREADCRUMBS_NAV_LINKS[segment];

    return (
      <div className="flex items-center gap-3 text-primary-400">
        {navLink.icon}
        <p className="text-xs">{navLink.label}</p>
      </div>
    );
  }

  // Handle multi-level navigation with breadcrumb trail
  return (
    <div className="flex items-center gap-3 text-xs">
      {/* Back button */}
      <BackButton
        icon={BREADCRUMBS_NAV_LINKS[pathSegments[0]]?.icon}
        onClick={() => navigate(-1)}
      />

      {/* Breadcrumb trail */}
      {pathSegments.map((segment, index, segments) => {
        const navLink = BREADCRUMBS_NAV_LINKS[segment];

        return (
          <div key={`${segment}-${index}`} className="flex items-center gap-3">
            <ChevronRight className="size-5 stroke-gray-300" />
            <BreadcrumbItem
              label={navLink.label}
              icon={navLink.icon}
              isActive={index === segments.length - 1}
            />
          </div>
        );
      })}
    </div>
  );
}
