"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Brain, Briefcase, TrendingUp, Lightbulb, BarChart3, LineChart } from "lucide-react"
import { Gallery4 } from "./ui/gallery4"

export function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8 pb-8"
    >
      {/* Hero Section */}
      <section className="py-16 rounded-xl mt-4">
        <div className="container flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-xl flex-col gap-4 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-neutral-900 dark:text-white">
                Brian Cordero
              </h1>
            </div>
            <h2 className="text-2xl font-medium text-neutral-600 dark:text-neutral-300">
              Entrepreneur | Product Leader | AI Specialist
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Entrepreneur and business leader with 9+ years of experience scaling startups, driving product innovation,
              and fostering community engagement. Currently seeking full-time leadership/product management roles.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button
                onClick={() => {
                  // Set the active page in the parent component
                  window.dispatchEvent(new CustomEvent("navigate", { detail: "Contact" }))
                  // Scroll to top
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Find a Time
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-xl flex items-center justify-center"
          >
            <img src="/images/brian-profile.png" alt="Brian Cordero" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Professional Journey - Smaller Version with improved spacing */}
      <section className="container py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl font-bold text-neutral-900 dark:text-white"
        >
          Professional Journey
        </motion.h2>

        <div className="relative border-l-2 border-primary/30 pl-12 ml-20 space-y-12">
          {/* Section 1: Executive Chair at Stanford/MIT Venture Lab */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="h-3 w-3 rounded-full bg-background"></span>
            </div>
            <div className="absolute -left-[160px] font-bold text-sm text-neutral-900 dark:text-white bg-white dark:bg-neutral-950 px-3 py-2 rounded">
              Present
            </div>
            <Card className="overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Executive Chair at Stanford/MIT Venture Lab</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg overflow-hidden">
                    <img src="/images/vlab-event.png" alt="VLAB event" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-sm text-center md:text-left">
                      A non-profit organization dedicated to fostering innovation and entrepreneurship by connecting
                      industry leaders, entrepreneurs, and technology enthusiasts. Hosts high-impact events across
                      multiple industries, providing networking and knowledge-sharing opportunities. Connected 40,000+
                      member community with industry leaders across multiple sectors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2: Founder & CEO at Greenclick */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="h-3 w-3 rounded-full bg-background"></span>
            </div>
            <div className="absolute -left-[160px] font-bold text-sm text-neutral-900 dark:text-white bg-white dark:bg-neutral-950 px-3 py-2 rounded">
              2021-2025
            </div>
            <Card className="overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Founder & CEO at Greenclick</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 aspect-video bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/box%20and%20app-SxGrNt8CqdZLXbsTLAHvbrq9IiCoXE.png"
                      alt="Greenclick app and box"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-sm text-center md:text-left">
                      A pioneering mobility and hospitality tech platform revolutionizing car sharing by creating a 24/7
                      marketplace specifically designed for hotel guests. Connects mid-market fleets across multiple
                      cities, offering instant booking solutions for travelers across the United States. Built
                      car-sharing marketplace with 500 cars across 7 states.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3: Head of Growth at SpeedLegal.io */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="h-3 w-3 rounded-full bg-background"></span>
            </div>
            <div className="absolute -left-[160px] font-bold text-sm text-neutral-900 dark:text-white bg-white dark:bg-neutral-950 px-3 py-2 rounded">
              2021-2022
            </div>
            <Card className="overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Head of Growth at SpeedLegal.io</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 aspect-video bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
                    <img
                      src="/images/speedlegal-logo.png"
                      alt="SpeedLegal logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-sm text-center md:text-left">
                      An innovative data extraction tool for the legal industry, recognized for winning the Stanford GSB
                      Hackathon. Leverages advanced technology to streamline legal data processing, helping legal
                      professionals optimize their workflow. Helps legal professionals extract critical information more
                      efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: Industries & Markets Impacted */}
      <section className="container py-12 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Industries & Markets Impacted</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            My cross-industry experience has allowed me to identify emerging trends and create innovative solutions
            across multiple sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI & Machine Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">AI & Machine Learning</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      Pioneered AI implementations across multiple business domains, from generative models for biotech
                      to predictive analytics for enterprise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                        OpenAI Forum Fellow
                      </span>
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                        Generative AI
                      </span>
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                        LLM Integration
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobility & Transportation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <LineChart className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                      Mobility & Transportation
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      Transformed hotel transportation with innovative car-sharing marketplace, scaling to 500 vehicles
                      across 7 states.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                        Greenclick Founder
                      </span>
                      <span className="text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                        Marketplace
                      </span>
                      <span className="text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                        Hospitality Tech
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Venture Capital */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Venture Capital</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      Connected startups with investors through VLAB events, facilitating funding opportunities and
                      strategic partnerships.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full">
                        Stanford/MIT VLAB
                      </span>
                      <span className="text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full">
                        Startup Ecosystem
                      </span>
                      <span className="text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full">
                        Investment
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Legal Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Briefcase className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Legal Tech</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      Revolutionized legal data extraction with SpeedLegal.io, as first internal growth member after a
                      Stanford Hackathon spinout.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded-full">
                        SpeedLegal.io
                      </span>
                      <span className="text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded-full">
                        Data Extraction
                      </span>
                      <span className="text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-1 rounded-full">
                        Legal Innovation
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Biotech - Updated copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <Lightbulb className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Biotech</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      After exploring the current state of Drug Discovery incepted Linear Bio, pioneering generative
                      models for small molecule drug discovery target identification and signing on leading commercial
                      generative models for students.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full">
                        Linear Bio
                      </span>
                      <span className="text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full">
                        Drug Discovery
                      </span>
                      <span className="text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full">
                        AI in Healthcare
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enterprise Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 -z-10 opacity-80"></div>
            <Card className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Enterprise Solutions</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-center">
                      Developed AI-driven reporting tools, enhancing predictive analytics for logistics planning.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="text-xs font-medium bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300 px-2 py-1 rounded-full">
                        Predictive Analytics
                      </span>
                      <span className="text-xs font-medium bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300 px-2 py-1 rounded-full">
                        Enterprise AI
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Market Insights & Trends</h3>
          <div className="max-w-3xl mx-auto bg-white/50 dark:bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  <span className="font-semibold">AI Integration:</span> Businesses across all sectors are rapidly
                  adopting AI, with those implementing generative AI seeing 20-30% efficiency gains.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  <span className="font-semibold">Mobility Evolution:</span> The shift from ownership to access-based
                  models is transforming transportation, with hotel-integrated solutions showing 40% higher adoption
                  rates.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  <span className="font-semibold">Legal Tech Automation:</span> Data extraction and document processing
                  automation is reducing legal review time by up to 70%, creating significant competitive advantages.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Skills and Expertise with Bento Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container py-12"
      >
        <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 h-auto min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="h-12 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dddbeb6c-5e87-4259-9cd1-b2a7be4d0148-o05Rx4Ci3CaTPTuB9q7LFxcL1t2dwM.jpeg"
                  alt="Leadership Skills"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Leadership Skills</h3>
              <ul className="space-y-2 flex-grow">
                {[
                  "Strategic Leadership",
                  "Program Management",
                  "Business Development",
                  "Venture Capital",
                  "Strategic Partnerships",
                  "Product Development & Shipping",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 h-auto min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="h-12 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3fbff9c3-da02-4651-adc9-df55d58e4cba-mOF6uTTi7kOe2ZTNINr8kDHxGvdMaZ.jpeg"
                  alt="Technical Expertise"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Technical Expertise</h3>
              <ul className="space-y-2 flex-grow">
                {["AI & Machine Learning (Expert)", "Hugging Face (Intermediate)", "Data Analysis (Intermediate)"].map(
                  (skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </div>
          </Card>

          <Card className="p-6 h-auto min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="h-12 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/86970580-5c8c-4768-b425-595f16f053a6-4JUivqyQhdKlaX0i0vWkP9wHUh9ENQ.jpeg"
                  alt="Interpersonal Strengths"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Interpersonal Strengths</h3>
              <ul className="space-y-2 flex-grow">
                {[
                  "Public Speaking",
                  "Community Building",
                  "Cross-Functional Collaboration",
                  "Stakeholder Management",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 h-auto min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="h-12 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce2fbf8a-f7ee-4dff-8cfc-99fb6986faf0-OcWtpQY8P4EOGNr2sIMbfwCJhcxlGX.jpeg"
                  alt="Programming Skills"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Programming Skills</h3>
              <ul className="space-y-2 flex-grow">
                {[
                  "Generative AI/LLM Coding (Expert)",
                  "Next.JS & React (Intermediate)",
                  "HTML/CSS (Intermediate)",
                  "PostgreSQL (Proficient)",
                  "Java (Intermediate)",
                  "Open AI API & Stable Diffusion API",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 h-auto min-h-[300px]">
            <div className="flex flex-col h-full">
              <div className="h-12 w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd29c095-9047-4c31-a0d7-968299b9ab48-XRDTNPDa7DVwTDLG2QgmLrNTHKSkOv.jpeg"
                  alt="Tools"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Tools</h3>
              <ul className="space-y-2 flex-grow">
                {[
                  "VS code, Windsurf, Cursor, GitHub",
                  "Asana, Microsoft Teams",
                  "Zendesk, Salesforce, Hubspot",
                  "LinkedIn Navigator",
                  "TikTok & X Campaigns",
                  "Apollo, Rocket Reach",
                  "Figma, Bubble",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* CTA Section with Border Trail */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-visible mt-2 mb-0"
      >
        <Gallery4
          title="Transforming Industries"
          description="Discover how I've applied my five transformative frameworks to help companies solve complex problems and drive growth."
        />
      </motion.section>
    </motion.div>
  )
}
