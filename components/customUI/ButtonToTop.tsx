"use client";
import { useEffect } from "react";

export function ButtonToTop() {
  useEffect(() => {
    const btn = document.querySelector(".button-to-top");
    if (!btn) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight > documentHeight - windowHeight) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <button className="button-to-top">Top</button>;
}