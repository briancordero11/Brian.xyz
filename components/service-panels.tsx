"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LineChart, TrendingUp, BarChart3, Users, CalendarClock, UserCheck, Mail } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

export function ServicePanels() {
  const [expandedPanel, setExpandedPanel] = useState(0)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const panels = [
    {
      id: 0,
      title: "Live Pricing",
      description: "Real-time stock prices and market movements with interactive charts.",
      icon: <LineChart />,
      action: "View Charts",
      gradientColor: "from-blue-500/30",
    },
    {
      id: 1,
      title: "Analyst Estimates",
      description: "Price targets and rating consensus from top Wall Street analysts.",
      icon: <TrendingUp />,
      action: "See Estimates",
      gradientColor: "from-purple-500/30",
    },
    {
      id: 2,
      title: "Company Financials",
      description: "Revenue, earnings, cash flow, and balance sheet metrics.",
      icon: <BarChart3 />,
      action: "View Financials",
      gradientColor: "from-emerald-500/30",
    },
    {
      id: 3,
      title: "Peer Analysis",
      description: "Compare performance against industry competitors and benchmarks.",
      icon: <Users />,
      action: "Compare",
      gradientColor: "from-amber-500/30",
    },
    {
      id: 4,
      title: "Historical Earnings",
      description: "Past quarterly results and earnings call transcripts archive.",
      icon: <CalendarClock />,
      action: "View History",
      gradientColor: "from-rose-500/30",
    },
    {
      id: 5,
      title: "Insider Transactions",
      description: "Recent buying and selling activity from company executives.",
      icon: <UserCheck />,
      action: "See Transactions",
      gradientColor: "from-cyan-500/30",
    },
    {
      id: 6,
      title: "Email Updates",
      description: "Customize alerts and notifications for portfolio events.",
      icon: <Mail />,
      action: "Subscribe",
      gradientColor: "from-indigo-500/30",
    },
  ]

  const handleMouseEnter = (id: number) => {
    setExpandedPanel(id)
  }

  return (
    <>
      <StyleTag />
      <div className="flex flex-1 space-x-2 overflow-x-auto pb-4 py-4 min-h-[600px] bg-gray-950 rounded-xl p-6 scrollbar-hide">
        <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
          {panels.map((panel) => (
            <motion.div
              key={panel.id}
              className={`flex h-full rounded-xl transition-all duration-500 ease-in-out relative backdrop-blur-sm
                       ${
                         expandedPanel === panel.id
                           ? "w-96 bg-gray-800/40 border border-gray-700/50"
                           : "w-20 bg-gray-800/20 border-gray-800/50 border"
                       }`}
              onMouseEnter={() => handleMouseEnter(panel.id)}
            >
              {/* Gradient background effect */}
              <div
                className={`absolute inset-0 rounded-xl opacity-20 bg-gradient-to-br to-transparent ${panel.gradientColor} -z-10`}
              />

              {/* Glass shine effect */}
              {expandedPanel === panel.id && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
              )}

              {/* Collapsed state */}
              {expandedPanel !== panel.id && (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className="transform -rotate-90 whitespace-nowrap text-sm font-medium tracking-wide text-gray-300 opacity-90">
                      {panel.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Expanded state */}
              {expandedPanel === panel.id && (
                <div className="flex flex-col p-5 h-full w-full overflow-hidden animate-fadeIn">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-gray-700/50 mr-3 text-white">{panel.icon}</div>
                    <h3 className="text-lg font-medium text-white">{panel.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-5 text-sm leading-relaxed">{panel.description}</p>

                  <div className="mt-auto">
                    <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                      <span>{panel.action}</span>
                      <span className="w-4 h-4 ml-2">{panel.icon}</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

// Add a CSS utility class to hide scrollbars while maintaining functionality
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

// Add a style tag to inject the CSS
const StyleTag = () => (
  <style jsx global>
    {scrollbarHideStyles}
  </style>
)
