"use client"

import { motion } from "framer-motion"

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern web applications built with React and Next.js",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design with intuitive interfaces",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Portfolio</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-12 text-center max-w-2xl mx-auto">
          Explore my recent projects and see how I can help bring your ideas to life with clean, modern, and functional
          design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
