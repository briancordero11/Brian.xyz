"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="bg-white dark:bg-neutral-800">
        <CardContent className="pt-6">
          <blockquote className="text-xl italic text-neutral-800 dark:text-neutral-200">
            "Brian's expertise and dedication to our project was exceptional. His innovative solutions and attention to
            detail resulted in a product that exceeded our expectations."
          </blockquote>
        </CardContent>
        <CardFooter className="text-right">
          <cite className="not-italic font-semibold text-neutral-700 dark:text-neutral-300">
            - Jane Doe, CEO of Tech Innovations
          </cite>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
