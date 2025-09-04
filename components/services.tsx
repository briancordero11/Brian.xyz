"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, TrendingUp, Users, Search, Lightbulb, Rocket, BarChart } from "lucide-react"
import { Gallery4 } from "./ui/gallery4"
// Import the FaqSection component
import { FaqSection } from "@/components/ui/faq-section"

export function Services() {
  return (
    <div className="min-h-screen py-20 mt-10">
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
          {/* AI & Machine Learning Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-muted p-2 text-primary dark:text-primary-foreground">
                  <Brain className="h-12 w-12" />
                </div>
                <div>
                  <CardTitle className="text-neutral-900 dark:text-white">AI & Machine Learning Consulting</CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    Expert AI implementation and strategy
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=AI+Consulting"
                    alt="AI visualization or consulting session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Expertise in leveraging generative AI for business solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Implementation of custom AI tools and reporting systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Integration of AI technologies with existing business processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Strategic planning for AI adoption and implementation roadmaps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Development & Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-muted p-2 text-primary dark:text-primary-foreground">
                  <Code className="h-12 w-12" />
                </div>
                <div>
                  <CardTitle className="text-neutral-900 dark:text-white">Product Development & Management</CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    From concept to launch
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Product+Development"
                    alt="Product development process visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Full-cycle product development from concept to launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Technology roadmap planning and execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Cross-functional team leadership for product delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>User experience optimization and feature prioritization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Strategy & Business Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-muted p-2 text-primary dark:text-primary-foreground">
                  <TrendingUp className="h-12 w-12" />
                </div>
                <div>
                  <CardTitle className="text-neutral-900 dark:text-white">
                    Growth Strategy & Business Development
                  </CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    Scaling businesses effectively
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Growth+Strategy"
                    alt="Growth chart or business development meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Sales playbook creation and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Strategic partnership development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Lead generation and pipeline management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Market expansion and customer acquisition strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Community & Event Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-muted p-2 text-primary dark:text-primary-foreground">
                  <Users className="h-12 w-12" />
                </div>
                <div>
                  <CardTitle className="text-neutral-900 dark:text-white">Community & Event Management</CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    Building engaged communities
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Community+Events"
                    alt="Community event or networking session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>High-profile event organization and production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Community engagement and growth strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Sponsorship acquisition and stakeholder management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Content programming and speaker curation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">
            Applying My Philosophy to All Business Cases & Frameworks
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "Discover",
                icon: <Search className="h-12 w-12 text-black dark:text-black" />,
                title: "Comprehensive analysis of business needs and market opportunities",
                description:
                  "Stakeholder interviews, market research, opportunity identification, and data-driven insights to inform strategy development.",
                bgColor:
                  "bg-gradient-to-br from-white via-slate-blue-400 to-navy-800 dark:from-white dark:via-slate-blue-500 dark:to-navy-900",
              },
              {
                step: "Design",
                icon: <Lightbulb className="h-12 w-12 text-black dark:text-black" />,
                title: "Strategic planning and solution architecture",
                description:
                  "Solution framework development, resource allocation and timeline planning, success metrics definition, and risk assessment and mitigation strategies.",
                bgColor:
                  "bg-gradient-to-br from-white via-slate-blue-400 to-navy-800 dark:from-white dark:via-slate-blue-500 dark:to-navy-900",
              },
              {
                step: "Deliver",
                icon: <Rocket className="h-12 w-12 text-black dark:text-black" />,
                title: "Execution with precision and adaptability",
                description:
                  "Agile implementation methodology, regular progress tracking and reporting, cross-functional team coordination, and iterative improvement based on feedback loops.",
                bgColor:
                  "bg-gradient-to-br from-white via-slate-blue-400 to-navy-800 dark:from-white dark:via-slate-blue-500 dark:to-navy-900",
              },
              {
                step: "Scale",
                icon: <BarChart className="h-12 w-12 text-black dark:text-black" />,
                title: "Optimization for growth and sustainability",
                description:
                  "Performance measurement against KPIs, iterative improvement and expansion, long-term strategy implementation, and knowledge transfer and capacity building.",
                bgColor:
                  "bg-gradient-to-br from-white via-slate-blue-400 to-navy-800 dark:from-white dark:via-slate-blue-500 dark:to-navy-900",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-6 ${step.bgColor}`}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-black dark:text-black">
                    {index + 1}
                  </div>
                  <div className="mb-2">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-black dark:text-black">{step.step}</h3>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-800 flex-grow">
                  <h4 className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-200">{step.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section - Removed redundant header and contact section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">Frequently Asked Questions</h2>
          <FaqSection
            title=""
            items={[
              {
                question: "What industries have you worked with?",
                answer:
                  "I've worked across a diverse range of industries including technology, legal tech, mobility, hospitality, nonprofit, and AI sectors. My experience spans from early-stage startups to established enterprises across multiple verticals, allowing me to bring cross-industry insights to each project.",
              },
              {
                question: "What size projects do you typically handle?",
                answer:
                  "I work with organizations of all sizes, from early-stage startups to established enterprise organizations. I'm comfortable leading small, agile teams or coordinating large cross-functional initiatives. My approach is scalable and adaptable to the specific needs of each project.",
              },
              {
                question: "Do you have experience with AI implementation?",
                answer:
                  "Yes, I have expert-level experience with AI & Machine Learning, including work with Open AI. I'm an Open AI Forum Fellow and have built multiple AI-powered solutions across different business domains. My approach focuses on practical applications that deliver measurable business value.",
              },
              {
                question: "What makes your approach unique?",
                answer:
                  "My combination of entrepreneurial experience, technical expertise, and community leadership allows me to bridge the gap between vision and execution. I focus on practical, scalable solutions that deliver measurable results. I also bring a unique perspective from working across multiple industries, allowing me to identify innovative approaches and cross-pollinate ideas.",
              },
              {
                question: "Are you available for speaking engagements?",
                answer:
                  "Yes, with extensive experience as Executive Chair at Stanford/MIT Venture Lab, I regularly speak on topics including AI innovation, product development, and entrepreneurship. I'm available for conferences, workshops, and corporate events. Please contact me with details about your event.",
              },
              {
                question: "How do you approach new projects?",
                answer:
                  "I begin with a thorough discovery phase to understand your business objectives, challenges, and opportunities. This involves stakeholder interviews, market research, and data analysis. From there, I develop a strategic roadmap with clear milestones and deliverables. Throughout the project, I maintain transparent communication and regular progress updates.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "My pricing is project-based and depends on the scope, complexity, and timeline of the work. I offer flexible engagement models including project-based contracts, retainers, and advisory roles. I'm happy to discuss your specific needs and provide a customized proposal.",
              },
              {
                question: "How quickly can you start on a new project?",
                answer:
                  "My availability varies depending on current commitments, but I typically can begin new projects within 2-4 weeks. For urgent needs, I may be able to accommodate faster timelines. The best approach is to reach out early in your planning process so we can align schedules.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, I offer various support options after the initial project is complete. This can include maintenance agreements, periodic check-ins, or training for your team. I'm committed to ensuring the long-term success of the solutions I help implement.",
              },
              {
                question: "How do you measure success in your projects?",
                answer:
                  "Success metrics are defined collaboratively at the beginning of each project and are aligned with your business objectives. These might include quantitative measures like increased revenue, improved efficiency, or user adoption rates, as well as qualitative outcomes like improved user experience or team capabilities.",
              },
            ]}
          />
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-4 mb-0"
        >
          <Gallery4
            title="Driving Results Across Industries"
            description="Explore how my services have helped businesses transform their operations and achieve their strategic goals."
          />
        </motion.section>
      </motion.div>
    </div>
  )
}
