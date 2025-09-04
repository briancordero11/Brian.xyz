"use client"

import { motion } from "framer-motion"

export function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Contact Me</h2>
      {/* Add your contact form or contact information here */}
    </motion.div>
  )
}
