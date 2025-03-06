import { cn } from "../../utils";
import { VariantProps, cva } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";

const buttonVariants = cva(
  "relative px-4 py-3 flex items-center justify-center rounded-sm font-medium leading-[1.2em] transition-all duration-150 ease-in cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        primary:
          "bg-primary border border-primary text-white data-[disabled=false]:hover:bg-primary-600 focus:ring-primary-500",
        secondary:
          "bg-gray-100 border border-gray-200 text-gray-800 data-[disabled=false]:hover:bg-gray-200 focus:ring-gray-400",
        success:
          "bg-green-600 border border-green-600 text-white data-[disabled=false]:hover:bg-green-700 focus:ring-green-500",
        danger:
          "bg-red-600 border border-red-600 text-white data-[disabled=false]:hover:bg-red-700 focus:ring-red-500",
        warning:
          "bg-amber-500 border border-amber-500 text-white data-[disabled=false]:hover:bg-amber-600 focus:ring-amber-400",
        info: "bg-blue-500 border border-blue-500 text-white data-[disabled=false]:hover:bg-blue-600 focus:ring-blue-400",
        outline:
          "bg-transparent border border-gray-300 text-gray-700 data-[disabled=false]:hover:bg-gray-50 focus:ring-gray-400",
        ghost:
          "bg-transparent border-none text-gray-700 data-[disabled=false]:hover:bg-gray-100 focus:ring-gray-400",
        link: "bg-transparent border-none text-primary underline-offset-4 hover:underline p-0 h-auto focus:ring-primary-400",
      },
      size: {
        xs: "text-xs py-1.5 px-3",
        sm: "text-xs py-2 px-3.5",
        md: "text-sm py-2.5 px-4",
        lg: "text-base py-3 px-5",
        xl: "text-lg py-3.5 px-6",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      rounded: "sm",
    },
  }
);

interface ButtonVariants
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

type WithLabel = {
  label: string;
  children?: undefined;
};

type WithChildren = {
  label?: undefined;
  children: ReactNode;
};

type LabelAndChildren = WithLabel | WithChildren;

interface IButtonProps extends ButtonVariants {
  className?: ComponentProps<"div">["className"];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  spinnerSize?: string | number;
  contentClassName?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export type ButtonProps = IButtonProps & LabelAndChildren;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading,
      disabled,
      leftIcon,
      rightIcon,
      className,
      spinnerSize,
      spinnerColor,
      label,
      children,
      contentClassName,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = isLoading || disabled;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        data-disabled={isDisabled}
        className={cn(buttonVariants(props), className)}
        {...props}
      >
        {isLoading && (
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
            <svg
              width={spinnerSize ?? "20"}
              height={spinnerSize ?? "20"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke={spinnerColor || "currentColor"}
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill={spinnerColor || "currentColor"}
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
        <span
          className={cn(
            "flex items-center justify-center gap-2",
            isLoading ? "opacity-0" : "opacity-100",
            contentClassName
          )}
        >
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          {label || children}
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
