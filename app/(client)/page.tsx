"use client"
import Banner from "@/components/client/Home/Banner/Banner"

import { useMenuSpy } from "../../hooks/help/useMenuSpy"
export default function Page() {
  useMenuSpy()
  return (
    <>
      <Banner />
      
    </>
  )
}
