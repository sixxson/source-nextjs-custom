"use client";
import { useEffect } from "react";

export function useStickElementToEdge() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[stick-to-edge]");
    targets.forEach((el) => {
      const position = el.getAttribute("stick-to-edge");
      const unstick = parseInt(el.getAttribute("unstick-min") || "1200", 10);
      const offset = (window.innerWidth - (document.querySelector(".default-container-js")?.clientWidth || 0)) / 2;

      if (position === "left") {
        el.style.marginLeft = `-${offset}px`;
      }
      if (position === "right") {
        el.style.marginRight = `-${offset}px`;
      }
      if (window.innerWidth < unstick) {
        el.removeAttribute("style");
      }
    });
  }, []);
}