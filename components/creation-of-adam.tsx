"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function CreationOfAdam() {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background with Renaissance-inspired texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent rounded-xl"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYyNWgyLjc1MmMxLjEyMSAwIDIuMDUuODQyIDIuMDUgMS45MjR2MS40NzZjMCAxLjA1LS44NTYgMS45MjQtMi4wNSAxLjkyNGgtMi43NTJ2NC42NzZjMCAxLjIzMi0uOTY4IDIuMi0yLjE5OCAyLjJoLTEuMzAyYy0xLjIzIDAtMi4xOTgtLjk2OC0yLjE5OC0yLjJWMzAuMzI0aC0yLjc1MmMtMS4xMjEgMC0yLjA1LS44NDItMi4wNS0xLjkyNHYtMS40NzZjMC0xLjA1Ljg1Ni0xLjkyNCAyLjA1LTEuOTI0aDIuNzUydi00LjhjMC0xLjIzMi45NjgtMi4yIDIuMTk4LTIuMmgxLjMwMnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>

      {/* Adam's Hand (Left) */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-2/3 h-full flex items-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: hover ? 10 : 0,
          opacity: 1,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="relative w-full h-64">
          {/* Subtle glow behind the hand */}
          <motion.div
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-24 rounded-full bg-emerald-500/10 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Adam's hand SVG - accurately recreated from the fresco */}
          <svg
            viewBox="0 0 300 150"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full"
            style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))" }}
          >
            {/* Wrist and palm */}
            <motion.path
              d="M30,75 C40,65 50,60 65,60 C80,60 90,65 100,70 C110,75 120,80 130,80"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Thumb */}
            <motion.path
              d="M65,60 C60,50 65,40 75,35 C85,30 95,35 100,45"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Index finger - the key element */}
            <motion.path
              d="M130,80 C140,78 150,75 160,70 C170,65 180,60 190,55 C200,50 210,48 220,45"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            />

            {/* Middle finger */}
            <motion.path
              d="M125,85 C135,90 145,95 155,95 C165,95 175,90 185,85"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.9 }}
            />

            {/* Ring finger */}
            <motion.path
              d="M120,90 C125,100 130,105 140,105 C150,105 160,100 165,95"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
            />

            {/* Pinky */}
            <motion.path
              d="M115,95 C118,105 120,110 125,110 C135,110 140,105 145,100"
              fill="none"
              stroke="rgba(16, 185, 129, 0.8)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Fingertip glow points */}
            <motion.circle
              cx="220"
              cy="45"
              r="3"
              fill="rgba(16, 185, 129, 0.9)"
              animate={{
                r: [3, 5, 3],
                opacity: [0.7, 1, 0.7],
                filter: [
                  "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))",
                  "drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))",
                  "drop-shadow(0 0 3px rgba(16, 185, 129, 0.5))",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Additional glow points at joints */}
            {[
              { cx: 100, cy: 70, r: 2, delay: 0.2 },
              { cx: 160, cy: 70, r: 2, delay: 0.4 },
              { cx: 155, cy: 95, r: 2, delay: 0.6 },
              { cx: 140, cy: 105, r: 2, delay: 0.8 },
              { cx: 125, cy: 110, r: 2, delay: 1.0 },
            ].map((point, i) => (
              <motion.circle
                key={i}
                cx={point.cx}
                cy={point.cy}
                r={point.r}
                fill="rgba(16, 185, 129, 0.7)"
                animate={{
                  r: [point.r, point.r * 1.5, point.r],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: point.delay,
                }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Divine Light/Energy (Right) */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full flex items-center justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        <div className="relative w-full h-64">
          {/* Divine energy glow */}
          <motion.div
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-l from-emerald-500/30 to-cyan-500/10 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Divine energy particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const distance = 30 + Math.random() * 20
            const size = 1 + Math.random() * 2
            const duration = 2 + Math.random() * 3

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-emerald-400"
                style={{
                  right: "25%",
                  top: "50%",
                }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  opacity: [0, 0.8, 0],
                  scale: [0, size, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            )
          })}

          {/* Divine finger tip - just a hint */}
          <motion.div
            className="absolute right-1/4 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50">
              <motion.path
                d="M50,25 C45,23 40,22 35,25"
                fill="none"
                stroke="rgba(16, 185, 129, 0.8)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="35"
                cy="25"
                r="3"
                fill="rgba(16, 185, 129, 0.9)"
                animate={{
                  r: [3, 5, 3],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* The spark/connection between */}
      <motion.div
        className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            "0 0 10px 2px rgba(16, 185, 129, 0.3)",
            "0 0 20px 5px rgba(16, 185, 129, 0.6)",
            "0 0 10px 2px rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Particles emanating from the connection */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        return (
          <motion.div
            key={i}
            className="absolute left-[60%] top-1/2 w-1 h-1 rounded-full bg-emerald-300"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: Math.cos(angle) * 20,
              y: Math.sin(angle) * 20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.25,
              ease: "easeOut",
            }}
          />
        )
      })}
    </div>
  )
}
