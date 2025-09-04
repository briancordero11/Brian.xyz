"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"
import { LogosCarousel } from "./ui/logos-carousel"

export function Testimonials() {
  return (
    <div className="min-h-screen py-20 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Client Testimonials</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">What my clients say about working with me</p>
        </div>

        <Tabs defaultValue="All" className="mb-10">
          <TabsList className="mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials
                  .filter((testimonial) => category === "All" || testimonial.category === category)
                  .map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden bg-white dark:bg-neutral-800">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="mb-4 text-primary">
                            <Quote size={24} />
                          </div>
                          <p className="mb-6 flex-grow text-neutral-700 dark:text-neutral-300 italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center mt-auto">
                            <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</p>
                              <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Clients Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20"
        >
          <LogosCarousel
            heading="Trusted by Companies Like"
            logos={[
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
              {
                id: "logo-8",
                description: "Silicon Valley Bank",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SVB_logo_SiliconValleyBank_Extreme_Horizontal_2colorNavyBlue_RGB%20%281%29-hzVOdCFHMPQtY3331DbuwxXPruCAC0.png",
                className: "h-10 w-auto",
              },
            ]}
          />
        </motion.section>
      </motion.div>
    </div>
  )
}

// Testimonial categories
const categories = ["All", "Client Testimonials", "Venture Partners", "Team Members", "Event Attendees"]

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Brian's strategic approach to AI implementation transformed our reporting capabilities at Samsung. His expertise delivered results that exceeded our expectations in just a few weeks.",
    name: "John Smith",
    position: "Director of Innovation, Samsung",
    category: "Client Testimonials",
    image: "/placeholder.svg?height=100&width=100&text=JS",
  },
  {
    id: 2,
    quote:
      "Working with Brian at VLAB has been exceptional. His ability to connect the right people and secure strategic partnerships has been instrumental to our success.",
    name: "Sarah Johnson",
    position: "Managing Partner, Venture Capital Firm",
    category: "Venture Partners",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    id: 3,
    quote:
      "Brian's leadership style combines vision with practical execution. He empowers his team while maintaining clear direction and accountability.",
    name: "Michael Chen",
    position: "Developer at Greenclick",
    category: "Team Members",
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    id: 4,
    quote:
      "The VLAB events organized by Brian were among the most valuable networking opportunities I've experienced. The content was cutting-edge and the connections were invaluable.",
    name: "Emily Rodriguez",
    position: "CEO, Tech Startup",
    category: "Event Attendees",
    image: "/placeholder.svg?height=100&width=100&text=ER",
  },
  {
    id: 5,
    quote:
      "Brian's expertise in AI implementation helped us navigate complex challenges and deliver a solution that truly met our business needs at Samsung. His strategic thinking and technical knowledge are impressive.",
    name: "David Thompson",
    position: "CTO, Samsung Enterprise Division",
    category: "Client Testimonials",
    image: "/placeholder.svg?height=100&width=100&text=DT",
  },
  {
    id: 6,
    quote:
      "As a venture partner working with Brian, I've been consistently impressed by his ability to identify opportunities and execute on them. His entrepreneurial mindset and technical expertise make him a valuable asset.",
    name: "Jessica Lee",
    position: "Investment Director, VC Fund",
    category: "Venture Partners",
    image: "/placeholder.svg?height=100&width=100&text=JL",
  },
]
