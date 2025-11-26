"use client";
import { useEffect } from "react";

export function useReplaceSvgImages() {
  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLImageElement>(".img-svg");
    imgs.forEach(async (img) => {
      const res = await fetch(img.src);
      const text = await res.text();
      const div = document.createElement("div");
      div.innerHTML = text;
      const svg = div.querySelector("svg");
      if (svg) {
        if (img.className) svg.classList.add(...img.className.split(" "));
        img.replaceWith(svg);
      }
    });
  }, []);
}