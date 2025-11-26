"use client";
import { useEffect } from "react";
import { CountUp } from "countup.js";

export function useCountUp() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".countup");
    elements.forEach((el) => {
      const targetNumber = el.getAttribute("data-number");
      if (!targetNumber) return;
      const isDecimal = targetNumber.includes(".");
      const countUp = new CountUp(el, parseFloat(targetNumber), {
        duration: 4,
        separator: ".",
        decimal: ",",
        enableScrollSpy: true,
        decimalPlaces: isDecimal ? 2 : 0,
      });
      if (!countUp.error) countUp.start();
    });
  }, []);
}