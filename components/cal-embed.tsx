"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface CalEmbedProps {
  calLink?: string
  namespace?: string
  config?: Record<string, any>
  className?: string
}

export function CalEmbed({
  calLink = "briancordero/15min",
  namespace = "15min",
  config = { layout: "month_view", hideEventTypeDetails: false },
  className = "",
}: CalEmbedProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal("ui", config)
    })()
  }, [namespace, config])

  return (
    <div className="w-full">
      <Button
        data-cal-namespace={namespace}
        data-cal-link={calLink}
        data-cal-config={JSON.stringify(config)}
        className={`w-full ${className}`}
        onClick={() => {
          // This will trigger the Cal.com popup
          // No need to navigate away
        }}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Schedule a Meeting
      </Button>
    </div>
  )
}
