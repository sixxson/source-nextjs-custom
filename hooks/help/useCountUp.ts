"use client";
import { useEffect } from "react";
import { CountUp } from "countup.js";

export function useCountUp() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".countup");

    elements.forEach((el) => {
      // ✅ chặn init lại nhiều lần
      if (el.dataset.counted === "true") return;

      const targetNumber = el.dataset.number;
      if (!targetNumber) return;

      const isDecimal = targetNumber.includes(".");

      const countUp = new CountUp(el, Number(targetNumber), {
        duration: 4,
        separator: ".",
        decimal: ",",
        decimalPlaces: isDecimal ? 2 : 0,
        enableScrollSpy: true,
        // scrollSpyOnce: true, // ✅ chỉ chạy 1 lần khi vào viewport
      });

      if (!countUp.error) {
        countUp.start();
        el.dataset.counted = "true"; // ✅ đánh dấu đã chạy
      }
    });
  }, []);
}
