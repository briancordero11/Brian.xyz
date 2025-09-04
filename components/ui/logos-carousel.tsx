"use client"

import { useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"

interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

interface LogosCarouselProps {
  heading?: string
  logos?: Logo[]
  className?: string
}

const LogosCarousel = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Motorola Solutions",
      image: "/placeholder.svg?height=60&width=120&text=Motorola+Solutions",
      className: "h-10 w-auto",
    },
    {
      id: "logo-2",
      description: "InSilico Medicine",
      image: "/placeholder.svg?height=60&width=120&text=InSilico+Medicine",
      className: "h-10 w-auto",
    },
    {
      id: "logo-3",
      description: "Stanford/MIT Venture Lab",
      image: "/placeholder.svg?height=60&width=120&text=Stanford/MIT+VLAB",
      className: "h-10 w-auto",
    },
    {
      id: "logo-4",
      description: "SpeedLegal.io",
      image: "/placeholder.svg?height=60&width=120&text=SpeedLegal.io",
      className: "h-10 w-auto",
    },
    {
      id: "logo-5",
      description: "SuperBio.AI",
      image: "/placeholder.svg?height=60&width=120&text=SuperBio.AI",
      className: "h-10 w-auto",
    },
    {
      id: "logo-6",
      description: "OpenAI Forum",
      image: "/placeholder.svg?height=60&width=120&text=OpenAI+Forum",
      className: "h-10 w-auto",
    },
    {
      id: "logo-7",
      description: "McKinsey Forward",
      image: "/placeholder.svg?height=60&width=120&text=McKinsey+Forward",
      className: "h-10 w-auto",
    },
  ],
}: LogosCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: false,
    align: "start",
  })

  // Continuous smooth scrolling implementation
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let startTime: number
    const duration = 30000 // 30 seconds for one complete scroll

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate position based on time
      const progress = (elapsed % duration) / duration
      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth

      // Set scroll position
      scrollContainer.scrollLeft = progress * scrollWidth

      // Continue animation
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Clean up on unmount
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Continuous auto-scroll implementation for Embla Carousel
  useEffect(() => {
    if (!emblaApi) return

    let animationFrameId: number
    const scrollSpeed = 0.5 // pixels per frame

    const autoScroll = () => {
      emblaApi.scrollNext(scrollSpeed)
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [emblaApi])

  return (
    <section className="py-12">
      <div className="container flex flex-col items-center text-center">
        <h3 className="my-6 text-pretty text-2xl font-bold lg:text-3xl text-neutral-900 dark:text-white">{heading}</h3>
      </div>
      <div className="pt-6 md:pt-10">
        <div className="relative mx-auto w-full overflow-hidden">
          {/* First implementation: CSS-based continuous scrolling */}
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-hidden whitespace-nowrap"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex animate-marquee">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="flex-none mx-4 w-[150px]">
                  <div className="flex h-20 items-center justify-center">
                    <img
                      src={logo.image || "/placeholder.svg"}
                      alt={logo.description}
                      className={logo.className || "max-h-16 max-w-full object-contain"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backup implementation: Embla Carousel */}
          <div className="hidden">
            <div className="w-full overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-[0_0_25%] min-w-0 sm:flex-[0_0_20%] md:flex-[0_0_16.666%] lg:flex-[0_0_14.285%] px-0"
                  >
                    <div className="mx-2 flex shrink-0 items-center justify-center h-20">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={logo.image || "/placeholder.svg"}
                          alt={logo.description}
                          className={logo.className || "max-h-16 max-w-full object-contain"}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { LogosCarousel }
