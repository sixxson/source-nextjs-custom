"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./logo";
import { headerData } from "../config/data";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex">
      <Logo className='' spanDesign='' />
      <nav className="flex w-full px-4 justify-between items-center gap-4 text-sm xl:gap-6">
        {headerData?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-shop_light_green hoverEffect relative group ${
              pathname === item?.href && "text-shop_light_green"
            }`}
          >
            {item?.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${
                pathname === item?.href && "w-1/2"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0 ${
                pathname === item?.href && "w-1/2"
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
