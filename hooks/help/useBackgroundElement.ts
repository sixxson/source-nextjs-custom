"use client";
import { useEffect } from "react";

export function useBackgroundElement() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[setBackground]");
    elements.forEach((el) => {
      const background = el.getAttribute("setBackground");
      if (background) {
        el.style.backgroundImage = `url(${background})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center center";
      }
    });
  }, []);
}