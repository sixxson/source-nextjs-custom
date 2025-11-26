"use client";
import { useState, useRef, useEffect } from "react";

export function ExpandContent({
  children,
  initItem = 3,
  gap = 0,
}: {
  children: React.ReactNode;
  initItem?: number;
  gap?: number;
}) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!parentRef.current) return;
    const items = parentRef.current.querySelectorAll(".item");
    const itemHeight = items[0]?.getBoundingClientRect().height || 0;
    const initHeight = itemHeight * initItem + gap;
    parentRef.current.style.height = expanded ? "auto" : `${initHeight}px`;
  }, [expanded, initItem, gap]);

  return (
    <div>
      <div ref={parentRef} className="expand-parent">
        {children}
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Rút gọn" : "Xem thêm"}
      </button>
    </div>
  );
}