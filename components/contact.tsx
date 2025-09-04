"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, MapPin, Phone, Check, Linkedin, Github, Twitter, ExternalLink, Send, Calendar } from "lucide-react"
import { CalEmbed } from "@/components/cal-embed"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailInput, setEmailInput] = useState("")
  const [contactRevealed, setContactRevealed] = useState(false)
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  const handleRevealContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput.includes("@") && emailInput.includes(".")) {
      setContactRevealed(true)
    }
  }

  return (
    <div className="min-h-screen py-20 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Contact Me</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Get in touch to discuss your project or schedule a meeting
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Enter your email to reveal my contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRevealContact} className="flex gap-2 mb-6">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Reveal
                    </Button>
                  </form>

                  <AnimatePresence>
                    {contactRevealed ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-4"
                        >
                          <Phone className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Phone</p>
                            <p className="text-neutral-600 dark:text-neutral-400">(219) 804-0780</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <Mail className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-neutral-600 dark:text-neutral-400">Briancordero11@gmail.com</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex items-center gap-4"
                        >
                          <MapPin className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-neutral-600 dark:text-neutral-400">Bloomington, IL</p>
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      <div className="text-center py-4 text-neutral-500 dark:text-neutral-400">
                        <div className="text-neutral-500 dark:text-neutral-400">
                          Enter your email above to see contact information
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Find me on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/brian-cordero-5a7a8416b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-sm font-medium">LinkedIn</p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Connect professionally</p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>

                    <a
                      href="https://github.com/briancordero11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-sm font-medium">GitHub</p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">View my code</p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>

                    <a
                      href="https://twitter.com/Brian_CoRderoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Twitter className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Twitter/X</p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Follow for updates</p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form with Tabs for Message and Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full relative overflow-hidden">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Send me a message or schedule a meeting directly using my calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex border-b mb-6">
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === "message" ? "border-primary text-primary" : "border-transparent text-neutral-500"
                    }`}
                    onClick={() => setActiveTab("message")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === "schedule" ? "border-primary text-primary" : "border-transparent text-neutral-500"
                    }`}
                    onClick={() => setActiveTab("schedule")}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </button>
                </div>

                {activeTab === "message" ? (
                  submitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
                      <Check className="h-12 w-12 text-green-500" />
                      <h3 className="text-xl font-bold">Message Sent!</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )
                ) : (
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        Click the button below to open my calendar and schedule a meeting at a time that works for you.
                      </p>
                    </div>

                    {/* Cal.com Embed Button */}
                    <div className="flex justify-center">
                      <CalEmbed
                        calLink="briancordero/15min"
                        namespace="15min"
                        config={{
                          layout: "month_view",
                          hideEventTypeDetails: false,
                        }}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                      <p>You'll receive a confirmation email with meeting details after scheduling.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
