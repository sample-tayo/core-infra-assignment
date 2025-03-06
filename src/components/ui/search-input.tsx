import { Search } from "lucide-react";
import { Input } from "./input";
import { useDebounce } from "../../hooks/useDebounce";
import { useCallback } from "react";

interface SearchInputProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  debounceMs?: number;
}

export function SearchInput({
  onSearch,
  placeholder = "Search",
  value,
  onChange,
  className,
  debounceMs = 300,
}: SearchInputProps) {
  const debouncedSearch = useDebounce((value: string) => {
    onSearch?.(value);
  }, debounceMs);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      debouncedSearch?.(e.target.value);
    },
    [debouncedSearch, onChange]
  );

  return (
    <Input
      leftIcon={<Search className="size-5 stroke-grey" />}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={handleSearch}
    />
  );
}
