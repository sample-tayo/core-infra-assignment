import { cn } from "../../utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import React, { RefCallback, RefObject } from "react";

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps {
  rightIcon?: React.ReactNode;
}

type MergedSelectTriggerProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Trigger
> &
  SelectTriggerProps;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  MergedSelectTriggerProps & { className?: string }
>(({ className, rightIcon, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "border-grey-300 relative flex w-full items-center justify-between gap-4 rounded-lg border bg-transparent px-4 py-2 text-sm text-foreground transition-all select-none disabled:cursor-not-allowed disabled:opacity-50 md:px-4 md:py-2.5 data-[placeholder]:[&_span]:text-gray-500",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      {rightIcon ? rightIcon : <ChevronDown className="size-5 shrink-0" />}
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    className?: string;
    position?: "item-aligned" | "popper";
  }
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] min-w-[8rem] overflow-hidden rounded-lg bg-white text-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        {
          className,
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":
            position === "popper",
        }
      )}
      position={position}
      {...props}
    >
      <ScrollAreaPrimitive.Root type="auto" className="h-full w-full">
        <SelectPrimitive.Viewport
          asChild
          className={cn("bg-white-100", {
            "max-h-[min(var(--radix-select-content-available-height),_200px)] w-full min-w-[var(--radix-select-trigger-width)] p-2":
              position === "popper",
          })}
        >
          <ScrollAreaPrimitive.Viewport className="h-full w-full">
            {children}
          </ScrollAreaPrimitive.Viewport>
        </SelectPrimitive.Viewport>
        <ScrollAreaPrimitive.Scrollbar
          className="w-2 px-0.5 py-2.5"
          orientation="vertical"
        >
          <ScrollAreaPrimitive.Thumb className="bg-grey-200 rounded-lg" />
        </ScrollAreaPrimitive.Scrollbar>
      </ScrollAreaPrimitive.Root>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pr-2 pl-8 text-sm font-medium", {
      className,
    })}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default items-center justify-between overflow-hidden rounded p-1.5 text-left text-sm text-foreground duration-150 outline-none select-none hover:bg-primary-200 focus:bg-primary-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-primary-300",
      {
        className,
      }
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={className} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

type SelectProps = {
  changeHandler?: (value: string) => void;
  selectName: string;
  selectedValue?: string;
  placeholder: string;
  options: string[];
  className?: string;
  ref: RefObject<HTMLButtonElement> | RefCallback<HTMLButtonElement>;
};

export function SelectInput({
  selectName,
  placeholder,
  options,
  changeHandler,
  className,
  defaultValue,
  value,
  triggerClassName,
  contentClassName,
  ref,
}: SelectProps & {
  defaultValue?: string;
  value?: string;
  triggerClassName?: string;
  contentClassName?: string;
}) {
  return (
    <div className={className}>
      <Select
        name={selectName}
        onValueChange={changeHandler}
        defaultValue={defaultValue}
        value={value}
      >
        <SelectTrigger
          className={cn("overflow-clip [&_span]:truncate", triggerClassName)}
          ref={ref}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          {options.map((value) => (
            <SelectItem key={value} value={value} className="capitalize">
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
