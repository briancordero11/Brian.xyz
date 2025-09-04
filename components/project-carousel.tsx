"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "./3d-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Task Manager",
    description: "A web app for efficient task management and collaboration.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping experience with secure payments.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts and health metrics.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Data Visualizer",
    description: "An interactive dashboard for complex data visualization.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Social Media Analytics",
    description: "A tool for analyzing and optimizing social media performance.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex justify-center items-center space-x-4">
        {[-1, 0, 1].map((offset) => {
          const index = (currentIndex + offset + projects.length) % projects.length
          const project = projects[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: offset * 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={offset === 0 ? "z-10" : "z-0"}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          )
        })}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
