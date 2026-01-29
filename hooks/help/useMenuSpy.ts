"use client";

import { useEffect } from "react";

export function useMenuSpy() {
  useEffect(() => {
    let menuSpyInstance: any;

    const init = async () => {
      const MenuSpy = (await import("menuspy")).default;

      const elm = document.querySelector("#menu-spy") as HTMLElement;
      if (!elm) return;

      menuSpyInstance = new MenuSpy(elm, {
        activeClass: "active",
        threshold: 300,
      });
    };

    init();

    return () => {
      // cleanup nếu lib hỗ trợ
      menuSpyInstance?.destroy?.();
    };
  }, []);
}
