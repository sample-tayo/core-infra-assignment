import { ComponentProps, ReactNode } from "react";

type RadioGroupProps = Omit<ComponentProps<"input">, "type" | "checked"> & {
  renderRadio: (value: string, index: number) => ReactNode;
  values: string[];
  checked?: (value: string) => boolean;
  className?: string;
};

export function RadioGroup({
  renderRadio,
  className,
  values,
  checked,
  ...props
}: RadioGroupProps) {
  return (
    <div className={className}>
      {values.map((value, i) => (
        <div className="relative" key={value}>
          <input
            type="radio"
            className="peer absolute inset-0 opacity-0"
            value={value}
            checked={checked ? checked(value) : undefined}
            {...props}
          />
          {renderRadio(value, i)}
        </div>
      ))}
    </div>
  );
}
