"use client"

import { motion } from "framer-motion"

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">About Me</h2>
      <p className="text-lg mb-6 text-neutral-800 dark:text-neutral-200">
        Hi, I'm Brian Cordero. I'm a passionate developer with expertise in web technologies and a keen eye for design.
      </p>
      <ul className="text-left list-disc list-inside text-neutral-700 dark:text-neutral-300">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          5+ years of experience in full-stack development
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Specialized in React, Node.js, and cloud technologies
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Passionate about creating intuitive and performant user experiences
        </motion.li>
      </ul>
    </motion.div>
  )
}
