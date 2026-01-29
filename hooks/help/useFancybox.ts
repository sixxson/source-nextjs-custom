"use client";

import { useEffect } from "react";
import { Fancybox, type FancyboxOptions } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function useFancybox(
  options: Partial<FancyboxOptions> = {}
) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", options);

    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, [options]);
}
