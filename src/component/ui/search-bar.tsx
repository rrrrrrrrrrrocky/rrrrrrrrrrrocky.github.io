"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";
import { Box } from "./box";
import { FormEvent, useRef } from "react";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  return (
    <Box
      component="form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputRef.current?.value) return;
        const searchParams = new URLSearchParams({
          keyword: inputRef.current?.value,
        }).toString();
        replace(`${pathname}?${searchParams}`);
      }}>
      <Input
        ref={inputRef}
        type="search"
        className="h-9"
        name="keyword"
        placeholder="Search blog posts..."
        defaultValue={keyword}
      />
    </Box>
  );
};

export default SearchBar;
