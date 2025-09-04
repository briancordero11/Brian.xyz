"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export interface Gallery4Item {
  id: string
  title: string
  description: string
  href: string
  image: string
}

export interface Gallery4Props {
  title?: string
  description?: string
  items?: Gallery4Item[]
}

const data = [
  {
    id: "rapid-iteration",
    title: "Rapid Iteration Catalyst",
    description:
      "The 20-Day Momentum Model: Transform conceptual ideas into viable products by embracing aggressive timelines and strategic partnerships.",
    href: "#blog",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaa542d3-24c1-4092-ae84-be093730b688-mEkw3VTkYja3QxhyzWKnTmdRBUhxii.jpeg",
  },
  {
    id: "generative-ai",
    title: "Generative AI Amplification",
    description:
      "Intelligent Solution Engineering: Leverage cutting-edge AI technologies to augment human creativity and turn complex challenges into scalable solutions.",
    href: "#blog",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66f99b2c-1414-4977-87f9-f9895b52887a-yDz9zkZfpx2WJpYj0lD7ejaRoHjbJM.jpeg",
  },
  {
    id: "cross-industry",
    title: "Cross-Industry Connectivity",
    description:
      "Ecosystem Architecture: Build products that create bridges between industries, identifying unexpected synergies and translating technologies across sectors.",
    href: "#blog",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e781c4e3-01cf-4261-b18c-68ac912b71c3-ZbJ1AFm3GkkCSZMXQO0HelraXY7wqH.jpeg",
  },
  {
    id: "community-driven",
    title: "Community-Driven Development",
    description:
      "Collaborative Innovation Framework: Design products that are co-created with users, establishing feedback loops and engagement mechanisms.",
    href: "#blog",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/87ea7446-b411-42b8-a38f-85f2725ce29d-8A1QdckmTjCyTZyYxHKJkQFDSeLSWA.jpeg",
  },
  {
    id: "strategic-agility",
    title: "Strategic Agility Protocol",
    description:
      "Pivot-Ready Product Design: Construct flexible product architectures that can quickly adapt to market shifts, technological advances, and emerging opportunities.",
    href: "#blog",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10f6308e-c858-41de-9e28-41daedadfddc-JQ5BOoWppur9KiG2wMM7BEjW3BCHDS.jpeg",
  },
]

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how I've helped companies across various industries leverage technology to solve complex problems and drive growth.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    const interval = setInterval(() => {
      if (canScrollNext) {
        carouselApi.scrollNext()
      } else {
        carouselApi.scrollTo(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselApi, canScrollNext])

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-neutral-900 dark:text-white">{title}</h2>
            <p className="max-w-lg text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(0rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[280px] pl-[20px] lg:max-w-[300px]">
                <a href="/contact" className="group rounded-xl">
                  <div className="group relative h-full min-h-[24rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/50 to-black/80 mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">{item.title}</div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">{item.description}</div>
                      <div className="flex items-center text-sm">
                        Contact Me <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Gallery4 }
