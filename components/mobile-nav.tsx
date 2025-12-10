"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { useMetaColor } from "@/hooks/use-meta-color"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import Logo from "./logo"
import { headerData } from "@/config/data"
import { MenuIcon } from "lucide-react"


export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { setMetaColor, metaColor } = useMetaColor()

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      setMetaColor(open ? "#09090b" : metaColor)
    },
    [setMetaColor, metaColor]
  )

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 !px-0 flex items-center gap-4 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <MenuIcon size={20}/>
          <span className="sr-only">Toggle Menu</span>
          <Logo />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            <Logo />
            {headerData?.map((item) =>
              item.href && (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                >
                  {item.title}
                </MobileLink>
              )
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn("text-[1.15rem]", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
