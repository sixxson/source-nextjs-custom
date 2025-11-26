"use client";
import { useEffect } from "react";

export function useScrollToDiv(selector: string, spacing: number = 0) {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(selector);
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const hash = link.hash;
        if (hash) {
          const target = document.querySelector(hash);
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - spacing,
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, [selector, spacing]);
}