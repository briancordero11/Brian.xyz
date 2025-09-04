"use client"

import { NavigationBar } from "../navigation-bar"
import { useState, useEffect } from "react"
import { Overview } from "../overview"
import { Footer } from "../footer"

// Add these imports at the top of the file
import { Portfolio } from "../portfolio"
import { Services } from "../services"
import { Testimonials } from "../testimonials"
import { Blog } from "../blog"
import { Contact } from "../contact"

// New component for a gradient background with subtle animation
function GradientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-neutral-950 dark:to-black"></div>
      <div
        className="absolute -inset-[100px] opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(14, 165, 233, 0.15), transparent 40%), radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.15), transparent 30%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.15), transparent 35%)",
          backgroundSize: "100% 100%",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}

export default function BackgroundPaths({
  title = "Brian Cordero",
}: {
  title?: string
}) {
  const [activePage, setActivePage] = useState("Overview")

  // Check for hash in URL on initial load and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#contact") {
        setActivePage("Contact")
      }
    }

    // Check hash on initial load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Add an event listener for the custom navigate event
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      setActivePage(e.detail)
    }

    window.addEventListener("navigate", handleNavigate as EventListener)

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener)
    }
  }, [])

  // Update the component to make the footer global across all pages
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* Use the new GradientBackground for the entire page */}
      <GradientBackground />

      <NavigationBar activePage={activePage} setActivePage={setActivePage} />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        {activePage === "Overview" && <Overview />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Services" && <Services />}
        {activePage === "Testimonials" && <Testimonials />}
        {activePage === "Blog" && <Blog />}
        {activePage === "Contact" && <Contact />}
      </div>

      <Footer />
    </div>
  )
}
