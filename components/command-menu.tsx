"use client";

import { useRouter } from "next/navigation";
import { Circle, Laptop, Link, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "./ui/button";
import { DialogProps } from "@radix-ui/react-dialog";
import { categoriesData, headerData, quickLinksData } from "../config/data";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);


  // Xử lý khi input thay đổi
  const handleInputChange = (value: string) => {
    setSearchValue(value);
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
    }, 300); // debounce 300ms
  };

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none px-2 md:pr-12 md:w-40 lg:w-56 xl:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="hidden md:inline-flex lg:hidden">Search...</span>
        <span className="block md:hidden ">
          <Search />
        </span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={handleInputChange}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>         
          <CommandGroup heading="Links">
            {headerData.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <Link />
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Links">
            {quickLinksData.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <Circle className="h-3 w-3" />
                </div>
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Category Production">
            {categoriesData.map((i) => (
              <CommandItem
                key={i.title}
                value={i.title}
                onSelect={() => {
                  runCommand(() => router.push(i.href as string));
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <Circle className="h-3 w-3" />
                </div>
                {i.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
