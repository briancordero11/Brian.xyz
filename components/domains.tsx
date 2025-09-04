"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Brian transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. His attention to detail and technical expertise exceeded our expectations.",
    name: "Sarah Johnson",
    position: "Marketing Director, TechSolutions Inc.",
    category: "Web Development",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    id: 2,
    quote:
      "Working with Brian was a pleasure from start to finish. He took the time to understand our business needs and delivered a custom application that streamlined our operations and increased productivity by 30%.",
    name: "Michael Chen",
    position: "Operations Manager, Innovate LLC",
    category: "App Development",
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    id: 3,
    quote:
      "Brian's UI/UX expertise transformed our product. User engagement increased by 45% after implementing his design recommendations, and customer feedback has been overwhelmingly positive.",
    name: "Emily Rodriguez",
    position: "Product Owner, DesignWorks",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=100&width=100&text=ER",
  },
  {
    id: 4,
    quote:
      "We hired Brian to optimize our e-commerce platform, and the results were immediate. Page load times decreased by 60%, and our conversion rate improved by 25%. His technical knowledge and problem-solving skills are exceptional.",
    name: "David Thompson",
    position: "E-commerce Director, RetailPlus",
    category: "Web Development",
    image: "/placeholder.svg?height=100&width=100&text=DT",
  },
  {
    id: 5,
    quote:
      "Brian developed a custom CRM solution that perfectly fits our unique business processes. His ability to translate complex requirements into an intuitive system made the transition seamless for our team.",
    name: "Jessica Lee",
    position: "CTO, ServiceFirst",
    category: "App Development",
    image: "/placeholder.svg?height=100&width=100&text=JL",
  },
  {
    id: 6,
    quote:
      "The branding work Brian did for our startup helped us stand out in a crowded market. His strategic approach to design and messaging resonated with our target audience and contributed to our successful launch.",
    name: "Alex Patel",
    position: "Founder, LaunchPad Startups",
    category: "Branding",
    image: "/placeholder.svg?height=100&width=100&text=AP",
  },
]

// Extract unique categories for the tabs
const categories = ["All", ...Array.from(new Set(testimonials.map((t) => t.category)))]

export function Domains() {
  return (
    <div className="min-h-screen py-20">
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
                      <Card className="h-full overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-16 rounded-lg bg-primary p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Ready to join my satisfied clients?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your goals and create a solution tailored to your specific needs.
          </p>
          <Button size="lg" variant="secondary" onClick={() => (window.location.hash = "#contact")}>
            Get in Touch
          </Button>
        </motion.div>

        {/* Featured Clients Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-neutral-900 dark:text-white">
            Trusted by Companies Like
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, index) => (
              <div
                key={index}
                className="h-12 w-32 bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-center text-neutral-500 dark:text-neutral-400"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
