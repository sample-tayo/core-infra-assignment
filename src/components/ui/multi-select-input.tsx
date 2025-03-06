import { cn } from "../../utils";
import { Check, ChevronDown, X } from "lucide-react";
import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type SelectOption = {
  label: string;
  value: string;
};

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: SelectOption[];
  onValueChange: (value: SelectOption[]) => void;
  selectedValues?: SelectOption[];
  placeholder?: string;
  maxCount?: number;
  className?: string;
  showAllSelected?: boolean;
  showClose?: boolean;
  showSearch?: boolean;
  contentWidthInRem?: React.ComponentPropsWithoutRef<
    typeof PopoverContent
  >["contentWidthInRem"];
  renderTriggerSelectedOption?: (
    option: SelectOption,
    toggleOption: (option: SelectOption) => void
  ) => React.ReactNode;
  renderSelectOption?: (
    isSelected: boolean,
    option: SelectOption
  ) => React.ReactNode;
}

export const MultiSelectInput = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      selectedValues = [],
      placeholder = "Select options",
      maxCount = 3,
      className,
      showAllSelected = false,
      showClose = true,
      showSearch = true,
      contentWidthInRem,
      renderTriggerSelectedOption,
      renderSelectOption,
      ...props
    },
    ref
  ) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedOptions, setSelectedOptions] =
      React.useState<SelectOption[]>(selectedValues);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    const toggleOption = (option: SelectOption) => {
      let newSelectedOptions: SelectOption[];

      if (selectedOptions.some((item) => item.value === option.value)) {
        newSelectedOptions = selectedOptions.filter(
          (item) => item.value !== option.value
        );
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }

      setSelectedOptions(newSelectedOptions);
      onValueChange(newSelectedOptions);
    };

    const handleClear = () => {
      setSelectedOptions([]);
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
      setSearchTerm("");
    };

    const handleSearchChange = (value: string) => {
      setSearchTerm(value);
    };

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger className="w-full" asChild>
          <button
            ref={ref}
            {...props}
            onClick={handleTogglePopover}
            className={cn(
              "border-grey-200 flex items-center justify-between gap-2 rounded-lg border bg-inherit px-3 py-2 hover:bg-inherit",
              className
            )}
          >
            <div className="grow justify-items-start">
              {selectedOptions.length > 0 ? (
                <div className="flex w-full flex-wrap items-center gap-2">
                  {(showAllSelected
                    ? selectedOptions
                    : selectedOptions.slice(0, maxCount)
                  ).map((option) => {
                    if (renderTriggerSelectedOption) {
                      return renderTriggerSelectedOption(option, toggleOption);
                    }

                    return (
                      <MultiSelectTriggerSelectedOption
                        key={option.value}
                        option={option}
                        toggleOption={toggleOption}
                      />
                    );
                  })}
                  {!showAllSelected && selectedOptions.length > maxCount && (
                    <p className="text-foreground text-sm">
                      {`+ ${selectedOptions.length - maxCount} more`}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-foreground">{placeholder}</p>
              )}
            </div>
            <ChevronDown className="shrink-0 text-sm text-black" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          contentWidthInRem={contentWidthInRem}
          className="p-0"
          sideOffset={10}
        >
          <Command>
            {showSearch && (
              <CommandInput
                placeholder="Search..."
                value={searchTerm}
                onValueChange={handleSearchChange}
                clearSearchCallback={() => setSearchTerm("")}
              />
            )}
            <CommandList className="pb-0">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((option) => {
                  const isSelected = selectedOptions.some(
                    (item) => item.value === option.value
                  );

                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleOption(option)}
                      style={{ pointerEvents: "auto", opacity: 1 }}
                      className="gap-2"
                    >
                      {renderSelectOption ? (
                        renderSelectOption(isSelected, option)
                      ) : (
                        <MultiSelectOption
                          option={option}
                          isSelected={isSelected}
                        />
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>

              {showClose && (
                <CommandGroup className="sticky bottom-0 left-0 bg-white">
                  <div className="flex items-center justify-between">
                    {selectedOptions.length > 0 && (
                      <>
                        <CommandItem
                          onSelect={handleClear}
                          style={{ pointerEvents: "auto", opacity: 1 }}
                          className="flex-1 cursor-pointer justify-center rounded-none"
                        >
                          Clear
                        </CommandItem>
                        <CommandSeparator orientation="vertical" />
                      </>
                    )}
                    <CommandItem
                      onSelect={() => setIsPopoverOpen(false)}
                      style={{ pointerEvents: "auto", opacity: 1 }}
                      className="flex-1 cursor-pointer justify-center rounded-none"
                    >
                      Close
                    </CommandItem>
                  </div>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);
MultiSelectInput.displayName = "MultiSelectInput";

export function MultiSelectTriggerSelectedOption({
  option,
  toggleOption,
}: {
  option: SelectOption;
  toggleOption: (option: SelectOption) => void;
}) {
  return (
    <p className="border-grey-200 text-primary flex items-center gap-1 rounded-full border px-2 py-1 text-sm">
      <span className="line-clamp-1 text-left">{option.label}</span>
      <X
        className="cursor-pointer hover:scale-125"
        onClick={(event) => {
          event.stopPropagation();
          toggleOption(option);
        }}
      />
    </p>
  );
}

export function MultiSelectOption({
  isSelected,
  option,
}: {
  isSelected: boolean;
  option: SelectOption;
}) {
  return (
    <>
      <div
        className={cn(
          "border-grey-300 text-xxs text-primary flex size-4 items-center justify-center rounded border bg-white [&_svg]:hidden",
          {
            "border-primary bg-secondary [&_svg]:block": isSelected,
          }
        )}
      >
        <Check className="stroke-[10px]" />
      </div>
      <span className={cn(isSelected && "text-primary")}>{option.label}</span>
    </>
  );
}
