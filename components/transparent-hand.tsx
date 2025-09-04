"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TransparentHand() {
  const [hover, setHover] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setRotation({
      x: y * 20, // Rotate based on vertical mouse position
      y: x * -20, // Rotate based on horizontal mouse position
    })
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  // Pulse animation
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      style={{ perspective: "1000px" }}
    >
      {/* Main hand container */}
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Outer transparent shell */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden">
          {/* Inner green glow */}
          <motion.div
            className="absolute inset-4 bg-emerald-500/20 rounded-2xl"
            animate={{
              opacity: pulse ? 0.3 : 0.15,
            }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          {/* Circuit patterns */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 10 H80 V30 H50 V70 H80 V90 H20 V70 H50 V30 H20 Z"
                fill="none"
                stroke="rgba(120, 255, 180, 0.3)"
                strokeWidth="1"
              />
              <circle cx="20" cy="10" r="3" fill="rgba(120, 255, 180, 0.5)" />
              <circle cx="80" cy="30" r="3" fill="rgba(120, 255, 180, 0.5)" />
              <circle cx="50" cy="50" r="5" fill="rgba(120, 255, 180, 0.7)" />
              <circle cx="80" cy="90" r="3" fill="rgba(120, 255, 180, 0.5)" />
              <circle cx="20" cy="70" r="3" fill="rgba(120, 255, 180, 0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Hand shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-3/4 h-3/4 text-emerald-400/80"
            style={{ filter: "drop-shadow(0 0 10px rgba(120, 255, 180, 0.5))" }}
          >
            {/* Simplified hand shape */}
            <path
              d="M30,50 L30,20 Q30,15 35,15 Q40,15 40,20 L40,45 L50,45 L50,15 Q50,10 55,10 Q60,10 60,15 L60,45 L70,45 L70,20 Q70,15 75,15 Q80,15 80,20 L80,60 Q80,80 60,85 L40,85 Q20,80 20,60 L20,55 Q20,50 25,50 L30,50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            {/* Finger joints - animated */}
            <motion.circle
              cx="35"
              cy="20"
              r="2"
              fill="rgba(120, 255, 180, 0.8)"
              animate={{ scale: pulse ? 1.5 : 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.circle
              cx="55"
              cy="15"
              r="2"
              fill="rgba(120, 255, 180, 0.8)"
              animate={{ scale: pulse ? 1 : 1.5 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.circle
              cx="75"
              cy="20"
              r="2"
              fill="rgba(120, 255, 180, 0.8)"
              animate={{ scale: pulse ? 1.5 : 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.circle
              cx="60"
              cy="70"
              r="3"
              fill="rgba(120, 255, 180, 0.8)"
              animate={{ scale: pulse ? 1 : 1.5 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </svg>
        </div>

        {/* Data points with animations */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          animate={{
            opacity: hover ? 0.5 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
