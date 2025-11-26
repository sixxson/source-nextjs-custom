"use client";
import { useEffect } from "react";

export function useIndicatorSlide() {
  useEffect(() => {
    const items = document.querySelectorAll(".indicator-swipe");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          setTimeout(() => entry.target.classList.remove("active"), 3000);
        }
      });
    });
    items.forEach((item) => observer.observe(item));
  }, []);
}