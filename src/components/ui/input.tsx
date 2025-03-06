import { VariantProps, cva } from "class-variance-authority";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "relative px-3 py-2 flex items-center justify-center gap-2 rounded-lg transition-all select-none shadow-xs focus-within:ring-2 focus-within:ring-primary/70 focus-within:ring-offset-1",
  {
    variants: {
      intent: {
        default: "border-solid border border-grey-300 text-foreground bg-white",
      },
      inputSize: {
        sm: "text-sm py-2.5",
        md: "text-base py-3",
        lg: "text-lg py-4",
      },
    },
    defaultVariants: {
      intent: "default",
      inputSize: "sm",
    },
  },
);

export interface InputVariants
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputVariants> {}

interface TextInputProps extends InputVariants {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isPasswordVisible?: boolean;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      type,
      isLoading,
      disabled,
      onChange,
      placeholder,
      intent,
      inputSize,
      ...props
    },
    ref,
  ) => {
    const classNames = twMerge(
      inputVariants({ intent, inputSize }),
      className,
      disabled || isLoading ? "cursor-not-allowed border opacity-80" : "",
    );
    return (
      <div className={classNames}>
        {leftIcon && leftIcon}
        <input
          onChange={onChange}
          type={type}
          className={twMerge(
            "hide-caret w-full bg-transparent outline-none placeholder:text-grey",
            (disabled ?? isLoading) ? "cursor-not-allowed" : "",
          )}
          placeholder={placeholder ?? "Placeholder"}
          disabled={isLoading ?? disabled}
          ref={ref}
          {...props}
        />
        {rightIcon && rightIcon}
      </div>
    );
  },
);
Input.displayName = "Input";
