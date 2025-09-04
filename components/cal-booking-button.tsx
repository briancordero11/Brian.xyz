"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { getCalLink } from "@/lib/api/cal"

interface CalBookingButtonProps {
  text?: string
  eventSlug?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function CalBookingButton({
  text = "Find a Time",
  eventSlug = "initial-consultation",
  className = "",
  variant = "default",
}: CalBookingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)

    // In a real implementation, this might include analytics tracking
    // or other pre-booking logic

    // For now, just open the Cal.com link in a new tab
    window.open(getCalLink(eventSlug), "_blank")

    setIsLoading(false)
  }

  return (
    <Button onClick={handleClick} className={className} variant={variant} disabled={isLoading}>
      {isLoading ? "Loading..." : text}
    </Button>
  )
}
