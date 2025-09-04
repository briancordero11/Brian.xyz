"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Briefcase, Megaphone } from "lucide-react"

export function Portfolio() {
  return (
    <div className="min-h-screen py-20 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Portfolio Showcase</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">Showcasing my selected works and projects</p>
        </div>

        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ai-ml">AI & ML Projects</TabsTrigger>
            <TabsTrigger value="venture-capital">Venture Capital</TabsTrigger>
            <TabsTrigger value="business">Business Solutions</TabsTrigger>
            <TabsTrigger value="community">Community Initiatives</TabsTrigger>
          </TabsList>

          {/* All Projects Tab */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* AI & ML Projects Tab */}
          <TabsContent value="ai-ml">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "AI & ML")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          {/* Venture Capital Tab */}
          <TabsContent value="venture-capital">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Venture Capital")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          {/* Business Solutions Tab */}
          <TabsContent value="business">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Business Solutions")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          {/* Community Initiatives Tab */}
          <TabsContent value="community">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Community Initiatives")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Fellowships Section */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Fellowships</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Open AI Fellowship - Updated text with removed bullet points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Forum Fellow at Open AI</CardTitle>
                  <CardDescription>Remote, In-Person | Nov 2025 - Present</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
                    <img src="/images/openai-forum.png" alt="OpenAI Forum" className="w-full h-full object-cover" />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Chicago Forum Leader contributing to the discourse on AGI with the most talented people on the
                        globe
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* McKinsey Forward Fellow - Updated text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>McKinsey Forward Fellow</CardTitle>
                  <CardDescription>Remote | March 2025 - Present</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="w-full aspect-video bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
                    <img
                      src="/images/mckinsey-forward.png"
                      alt="McKinsey Forward Program"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Selected for McKinsey Forward Program (2025) – Mastered business strategy frameworks and
                        data-driven decision-making through McKinsey & Company's selective digital upskilling
                        initiative.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Perplexity Fellow - New card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Perplexity Business Fellow</CardTitle>
                  <CardDescription>Remote | April 2025 - Present</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="w-full aspect-video bg-teal-600 rounded-lg overflow-hidden flex items-center justify-center p-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perplexity%20Brand%20Studio%20Social%20Asset-IWG2tYtX1AVehaHuAtxW0rtrSpOS2a.png"
                      alt="Perplexity Business Fellowship"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Join roundtable discussions and training workshops on Generative AI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Speaking Section */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Speaking</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Speaking Engagements</CardTitle>
              <CardDescription>
                As Executive Chair at Stanford/MIT Venture Lab, I regularly speak on topics including AI innovation,
                product development, and entrepreneurship.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Coming Soon",
                    venue: "Coming Soon",
                    date: "2025",
                    image: "/placeholder.svg?height=150&width=300&text=Coming+Soon",
                  },
                  {
                    title: "Coming Soon",
                    venue: "Coming Soon",
                    date: "2025",
                    image: "/placeholder.svg?height=150&width=300&text=Coming+Soon",
                  },
                  {
                    title: "Coming Soon",
                    venue: "Coming Soon",
                    date: "2025",
                    image: "/placeholder.svg?height=150&width=300&text=Coming+Soon",
                  },
                ].map((talk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="aspect-video w-full bg-muted mb-3 rounded-lg overflow-hidden">
                        <img
                          src={talk.image || "/placeholder.svg"}
                          alt={talk.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{talk.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{talk.venue}</p>
                      <p className="text-xs mb-2">{talk.date}</p>
                      <p className="text-sm font-medium text-primary">Coming Soon</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="/contact" className="text-primary-foreground">
                  Request Speaking Engagement
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Awards Section */}
        <section className="my-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Awards & Competitions</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* P33 Chicago Competition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2 text-white dark:text-white">2nd Place</Badge>
                  <CardTitle>P33 Chicago Competition</CardTitle>
                  <CardDescription>Chicago, IL | July 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25k.PNG-b7VPN1q05BISs1GJcwU9qayXc1he7E.png"
                      alt="P33 Chicago Competition"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>$25,000 competition recognizing innovative business solutions.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Techrise Finalist - Updated with the damnn.png image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2 text-white dark:text-white">Semifinalist</Badge>
                  <CardTitle>Techrise Competition</CardTitle>
                  <CardDescription>Chicago, IL | Nov 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damnn.PNG-6h7vM26b5QynDaDPmyjRhlx2IUou1C.png"
                      alt="Techrise Competition"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>Top 16 finalist in $100,000 competition.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* LISA Startup Accelerator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2 text-white dark:text-white">Top 10 Finalist</Badge>
                  <CardTitle>LISA Startup Accelerator</CardTitle>
                  <CardDescription>Palo Alto, CA | January 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted mb-4 rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lisa_stanford_gsb_logo.jfif-nVKrb7nU0trEU0Z1R9oztKJZ4oDiYN.jpeg"
                      alt="LISA Startup Accelerator"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p>Stanford GSB-led accelerator program with demo days in front of top-tier VCs.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-16 rounded-lg bg-primary p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Want to work together?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, speaking opportunities, and collaborations.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
    >
      <Card className="h-full overflow-hidden flex flex-col">
        <div className="aspect-video w-full bg-muted">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.caption}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-neutral-700 dark:text-neutral-300">{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            {project.tags.map((tag) => {
              let tagColor = ""

              // Match tag colors to industries
              if (tag.toLowerCase().includes("ai") || tag.toLowerCase().includes("ml")) {
                tagColor = "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
              } else if (tag.toLowerCase().includes("mobility") || tag.toLowerCase().includes("marketplace")) {
                tagColor = "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
              } else if (tag.toLowerCase().includes("vc") || tag.toLowerCase().includes("investment")) {
                tagColor = "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300"
              } else if (tag.toLowerCase().includes("legal")) {
                tagColor = "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"
              } else if (tag.toLowerCase().includes("biotech") || tag.toLowerCase().includes("drug")) {
                tagColor = "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300"
              } else if (tag.toLowerCase().includes("enterprise") || tag.toLowerCase().includes("reporting")) {
                tagColor = "bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300"
              } else {
                tagColor = "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
              }

              return (
                <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-full ${tagColor}`}>
                  {tag}
                </span>
              )
            })}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Project Type
interface Project {
  id: number
  title: string
  caption: string
  description: string
  image: string
  category: string
  tags: string[]
}

// Project Data
const projects: Project[] = [
  {
    id: 1,
    title: "ClearCause.ai",
    caption: "Connecting Nonprofits with Tech Leaders",
    description:
      "Platform designed to bridge the technology gap for nonprofit organizations. Built with Next.js and AI integration to match tech volunteers with nonprofit needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aafd4efc-e99c-4057-97cf-8fcf73712a05-dhm08gEYD0uQD743ClywsHWvEOLDgx.jpeg",
    category: "AI & ML",
    tags: ["AI", "Next.js", "Nonprofit"],
  },
  {
    id: 2,
    title: "Linear Bio",
    caption: "Biotech innovation with generative models",
    description:
      "Innovative platform leveraging generative AI models for drug discovery acceleration. Pioneering partnerships with leading biotech companies to transform pharmaceutical research.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71c78030-2b16-4d3d-98d0-b0c4758ba267%20%281%29-Xt8NoJNlYJ2WMlFZ4kArwtho18V0qY.jpeg",
    category: "AI & ML",
    tags: ["Biotech", "AI", "Generative Models"],
  },
  {
    id: 3,
    title: "Greenclick",
    caption: "Revolutionizing hotel transportation",
    description:
      "Car-sharing marketplace with 500 vehicles across 7 states serving hotel guests with instant bookings. Published mobile apps in iOS/Google Play stores with complete backend infrastructure.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gc-logo%20%281%29-74IbiVHl0MLa4lYNfjZBIQeGTveTfZ.png",
    category: "Business Solutions",
    tags: ["Mobility", "Marketplace", "Mobile Apps"],
  },
  {
    id: 6,
    title: "VLAB Events",
    caption: "Tech industry leadership",
    description:
      "Community-driven platform connecting industry leaders, entrepreneurs, and technology enthusiasts through high-impact events. Creating networking opportunities and knowledge-sharing across multiple sectors.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vlab.jpg-7D4EKK3YEAm5sYSTdhny9eilk1MHEs.jpeg",
    category: "Community Initiatives",
    tags: ["Events", "Community", "Leadership"],
  },
  {
    id: 5,
    title: "SpeedLegal.io",
    caption: "Legal data extraction innovation",
    description:
      "Innovative data extraction platform for the legal industry that streamlines document processing. Transforming how legal professionals access and analyze critical information.",
    image:
      "https://sjc.microlink.io/pKJ6u7f5Dnfeu6JyxrXeCLVtQn-1FT5CDJ77lklyxdlPbVp0CW4D0-TDFQVLldATvDqo82p37HQ8_kHCqa-BGQ.jpeg",
    category: "Business Solutions",
    tags: ["Legal Tech", "Data Extraction", "Sales"],
  },
  {
    id: 4,
    title: "Enterprise Reporting",
    caption: "AI-driven analytics",
    description:
      "Custom AI-driven reporting tools leveraging generative AI APIs to improve predictive analytics and operational efficiency for large-scale logistics planning.",
    image: "/placeholder.svg?height=200&width=400&text=Enterprise+Reporting",
    category: "AI & ML",
    tags: ["AI", "Reporting", "Enterprise"],
  },
  {
    id: 7,
    title: "Venture Fund Analysis",
    caption: "AI-powered investment insights",
    description:
      "Developed a comprehensive analysis tool for venture capital firms to evaluate potential investments using AI-driven market trend analysis and startup success prediction.",
    image: "/placeholder.svg?height=200&width=400&text=Venture+Analysis",
    category: "Venture Capital",
    tags: ["VC", "Analysis", "Investment"],
  },
  {
    id: 8,
    title: "Startup Portfolio Optimization",
    caption: "Strategic portfolio management",
    description:
      "Created a portfolio optimization framework for venture capital firms to maximize returns while balancing risk across different investment stages and sectors.",
    image: "/placeholder.svg?height=200&width=400&text=Portfolio+Optimization",
    category: "Venture Capital",
    tags: ["Portfolio", "Strategy", "Optimization"],
  },
  {
    id: 9,
    title: "Deal Flow Pipeline",
    caption: "Streamlining VC deal evaluation",
    description:
      "Built a comprehensive deal flow management system that helps venture capital firms track, evaluate, and prioritize potential investments more efficiently.",
    image: "/placeholder.svg?height=200&width=400&text=Deal+Flow",
    category: "Venture Capital",
    tags: ["Deal Flow", "VC", "Evaluation"],
  },
]
