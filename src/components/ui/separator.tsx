import { cn } from "../../utils";

export function Separator({
  orientation = "horizontal",
  className,
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gray-400",
        {
          "h-px w-full": orientation === "horizontal",
          "h-full w-px": orientation === "vertical",
        },
        className
      )}
      aria-hidden
    />
  );
}
