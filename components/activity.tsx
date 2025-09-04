"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, Monitor, Palette, Server } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications",
    content:
      "I build responsive, high-performance websites and web applications tailored to your specific needs using modern technologies like React, Next.js, and Node.js.",
    icon: <FileText className="h-12 w-12" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences",
    content:
      "I create user-centered designs that are not only visually appealing but also provide seamless and intuitive experiences for your users.",
    icon: <Palette className="h-12 w-12" />,
  },
  {
    id: 3,
    title: "Frontend Development",
    description: "Responsive and interactive interfaces",
    content:
      "I develop clean, efficient, and maintainable frontend code that brings designs to life with smooth animations and responsive layouts.",
    icon: <Monitor className="h-12 w-12" />,
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Robust server-side solutions",
    content:
      "I build secure, scalable backend systems that power your applications, handle data efficiently, and integrate with various third-party services.",
    icon: <Server className="h-12 w-12" />,
  },
]

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "I work on a variety of projects including web applications, e-commerce sites, corporate websites, and custom software solutions. Each project is approached with careful consideration to meet the specific needs of my clients.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. A typical website project can take anywhere from 4-8 weeks, while more complex applications may take 2-6 months. I'll provide a more accurate timeline after our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing options including project-based fees and hourly rates. The pricing depends on the scope, complexity, and specific requirements of your project.",
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, I provide ongoing support options to ensure your project continues to run smoothly and remains up-to-date after the initial deployment.",
  },
  {
    question: "Can we schedule a consultation to discuss my project?",
    answer:
      "You can contact me through the contact form on this website to schedule a consultation where we can discuss your project requirements in detail.",
  },
]

export function Activity() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Services</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Professional services I offer to help you achieve your goals
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-muted p-2 text-primary dark:text-primary-foreground">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-neutral-900 dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-neutral-600 dark:text-neutral-300">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 dark:text-neutral-300">{service.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">My Process</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "Discovery",
                description:
                  "I learn about your business, goals, and requirements to understand the full scope of your project.",
              },
              {
                step: "Planning",
                description:
                  "I create a detailed roadmap including design mockups, technical specifications, and project timeline.",
              },
              {
                step: "Execution",
                description:
                  "I develop your solution with regular updates and opportunities for feedback and adjustments.",
              },
              {
                step: "Delivery",
                description:
                  "I finalize, test, and deploy your project, ensuring everything works perfectly before handover.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{step.step}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-neutral-200 dark:border-neutral-700">
                  <AccordionTrigger className="text-neutral-900 dark:text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-neutral-700 dark:text-neutral-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="rounded-lg bg-primary p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Ready to get started?</h2>
          <p className="mb-6">Contact me today to discuss your project requirements.</p>
          <Button size="lg" variant="secondary" onClick={() => (window.location.hash = "#contact")}>
            Contact Me
          </Button>
        </motion.section>
      </motion.div>
    </div>
  )
}
