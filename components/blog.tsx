"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { SubstackPreview } from "@/components/substack-preview"

export function Blog() {
  return (
    <div className="min-h-screen py-20 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Blog</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Insights, thoughts, and updates from my professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Latest Posts</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                My latest thoughts and insights on technology, business, and innovation.
              </p>
            </div>

            <SubstackPreview count={4} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 dark:text-white">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Search blog posts..." className="dark:bg-neutral-800 dark:border-neutral-700" />
                  <Button variant="secondary" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 dark:text-white">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-neutral-700 dark:text-neutral-300">{category}</span>
                      <span className="rounded-full bg-muted px-2 py-1 text-xs">
                        {blogPosts.filter((post) => post.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 dark:text-white">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-900 dark:text-white">Newsletter</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-400">
                  Stay updated with my latest articles and insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="dark:bg-neutral-800 dark:border-neutral-700"
                />
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2025",
    excerpt: "Exploring emerging AI trends and technologies that will shape the business landscape in the coming year.",
    date: "March 1, 2025",
    category: "AI & Machine Learning",
    tags: ["ai", "business", "trends"],
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=AI+Trends",
  },
  {
    id: 2,
    title: "Building Successful Tech Communities: Lessons from VLAB",
    excerpt: "Insights from my experience leading Stanford/MIT Venture Lab and creating thriving tech ecosystems.",
    date: "February 15, 2025",
    category: "Community Building",
    tags: ["community", "leadership", "events"],
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=Tech+Communities",
  },
  {
    id: 3,
    title: "From Idea to Launch: The Greenclick Journey",
    excerpt: "The story of building a car-sharing marketplace from concept to 500 vehicles across 7 states.",
    date: "February 1, 2025",
    category: "Entrepreneurship",
    tags: ["startup", "mobility", "entrepreneurship"],
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=400&text=Greenclick",
  },
  {
    id: 4,
    title: "Leveraging AI for Better Business Reporting",
    excerpt: "How we implemented AI-driven reporting tools at Motorola Solutions for improved decision-making.",
    date: "January 15, 2025",
    category: "AI & Machine Learning",
    tags: ["ai", "reporting", "enterprise"],
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=AI+Reporting",
  },
  {
    id: 5,
    title: "The Art of Strategic Partnerships in Tech",
    excerpt: "A comprehensive guide to building and maintaining valuable strategic partnerships in the tech industry.",
    date: "January 1, 2025",
    category: "Business Strategy",
    tags: ["partnerships", "strategy", "business"],
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=Strategic+Partnerships",
  },
  {
    id: 6,
    title: "Prompt Engineering: The Key to Better AI Results",
    excerpt: "Learn how to craft effective prompts for AI systems to get more accurate and useful responses.",
    date: "December 15, 2024",
    category: "AI & Machine Learning",
    tags: ["ai", "prompts", "engineering"],
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=Prompt+Engineering",
  },
]

const categories = [
  "AI & Machine Learning",
  "Entrepreneurship",
  "Business Strategy",
  "Community Building",
  "Product Development",
]
const popularTags = ["ai", "business", "entrepreneurship", "community", "product"]
