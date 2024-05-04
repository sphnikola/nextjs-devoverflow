"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import sun from "@/public/assets/icons/sun.svg";
import moon from "@/public/assets/icons/moon.svg";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image src={sun} width={20} height={20} alt="sun" />
          ) : (
            <Image src={moon} width={20} height={20} alt="moon" />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((items) => (
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={items.value}
              onClick={() => {
                setMode(items.value);

                if (items.value !== "system") {
                  localStorage.theme = items.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={items.icon}
                alt={items.value}
                width={16}
                height={16}
                className={`${mode === items.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${mode === items.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {items.label}
              </p>
            </MenubarItem>
          ))}
          {/* <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem> */}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
