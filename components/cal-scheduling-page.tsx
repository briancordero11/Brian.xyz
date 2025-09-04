"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CalSchedulingPageProps {
  calLink?: string
  namespace?: string
  config?: Record<string, any>
}

export function CalSchedulingPage({
  calLink = "briancordero/15min",
  namespace = "scheduling-page",
  config = {
    layout: "month_view",
    hideEventTypeDetails: false,
    hideGdprBanner: true,
    hideBranding: true,
  },
}: CalSchedulingPageProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal("ui", {
        ...config,
        styles: {
          branding: {
            brandColor: "#000000",
          },
        },
      })

      // Inline embed
      cal("inline", {
        elementOrSelector: "#cal-booking-place-" + namespace,
        calLink: calLink,
        config: config,
      })
    })()
  }, [calLink, namespace, config])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Schedule a Meeting</CardTitle>
        <CardDescription>Select a date and time that works for you</CardDescription>
      </CardHeader>
      <CardContent>
        {/* This div will be replaced by the Cal.com inline embed */}
        <div
          id={`cal-booking-place-${namespace}`}
          style={{ minHeight: "600px", width: "100%" }}
          className="rounded-md overflow-hidden"
        />
      </CardContent>
    </Card>
  )
}
