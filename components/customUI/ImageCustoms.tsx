import { useEffect } from "react";
import lozad from "lozad";
import { mg } from "@/lib/utils";

export default function ImageCustoms({
  src,
  className,
  alt,
}: {
  src: string;
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
      className={mg("lozad", className)}
    />
  );
}