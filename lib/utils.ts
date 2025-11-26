import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function mg(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
