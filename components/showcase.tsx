"use client"

import { motion } from "framer-motion"
import { ProjectCarousel } from "./project-carousel"

export function Showcase() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white"
      >
        My Work
      </motion.h2>
      <ProjectCarousel />
    </div>
  )
}
