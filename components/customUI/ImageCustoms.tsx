'use client'
import { useEffect } from "react";
import lozad from "lozad";
import { cn } from "@/lib/utils";

export default function ImageCustoms({
  src='/img/1.jpg',
  className,
  alt,
}: {
  src?: string;
  className?: string;
  alt?: string;
}) {
  useEffect(() => {
    const observer = lozad(); // khởi tạo observer
    observer.observe();
  }, []);

  return (
    <img
      data-src={src}
      alt={alt}
      className={cn("lozad", className)}
    />
  );
}

  