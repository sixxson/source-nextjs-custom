"use client";
import { useEffect } from "react";

export function useDetectClose(
  ref: React.RefObject<HTMLElement>,   // phần tử cần theo dõi
  onClose: () => void                  // hàm gọi khi đóng
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keyup", handleKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keyup", handleKey);
    };
  }, [ref, onClose]);
}