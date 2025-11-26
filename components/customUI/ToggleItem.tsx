"use client";
import { useState } from "react";

export function ToggleItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="item-toggle">
      <div className={`title ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        {title}
      </div>
      {open && <div className="content">{children}</div>}
    </div>
  );
}