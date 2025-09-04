"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// Sample data for demonstration
const categories = ["All", "Web Design", "Development", "Branding", "Other"]
const projects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  description: "This is a description of the project, detailing the work completed and results achieved.",
  tags: ["tag1", "tag2", "tag3"].slice(0, Math.floor(Math.random() * 3) + 1),
  image: `/placeholder.svg?height=200&width=400&text=Project+${i + 1}`,
}))

export function Integrations() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Portfolio</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">Showcasing my selected works and projects</p>
        </div>

        <Tabs defaultValue="All" className="mb-10">
          <TabsList className="mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    >
                      <Card key={project.id} className="overflow-hidden">
                        <div className="aspect-video w-full bg-muted">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{project.description}</p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="my-16 rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Want to work together?</h2>
          <p className="mb-6 text-muted-foreground">I'm always open to discussing new projects and opportunities.</p>
          <Button size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
