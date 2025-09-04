"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { ComesInGoesOutUnderline } from "@/components/ui/underline"

export function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-8 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {["Overview", "Portfolio", "Services", "Testimonials", "Blog", "Contact"].map((item) => (
              <div key={item}>
                <ComesInGoesOutUnderline
                  label={item}
                  className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/brian-cordero-5a7a8416b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/briancordero11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/Brian_CoRderoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter/X</span>
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-4 pt-4 text-center text-neutral-600 dark:text-neutral-400">
          <p>© 2025 Brian Cordero. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
