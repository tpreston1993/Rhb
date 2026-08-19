"use client"

import { cn } from "@/lib/utils"

interface PillLabelProps {
  children: React.ReactNode
  className?: string
}

export function PillLabel({ children, className }: PillLabelProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-ribe-accent px-6 py-2 text-sm font-bold uppercase tracking-wider text-ribe-primary",
        className
      )}
    >
      {children}
    </span>
  )
}
