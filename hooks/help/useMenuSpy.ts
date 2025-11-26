"use client";
import { useEffect } from "react";
import MenuSpy from "menuspy";

export function useMenuSpy() {
  useEffect(() => {
    const elm = document.querySelector("#menu-spy");
    if (!elm) return;

    new MenuSpy(elm as HTMLElement, {
      activeClass: "active",
      threshold: 300,
      callback: (currentItem) => {
        console.log("Active item:", currentItem);
      },
    });
  }, []);
}