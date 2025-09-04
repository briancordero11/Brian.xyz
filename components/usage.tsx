"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt:
      "Exploring emerging trends and technologies that will shape the web development landscape in the coming year.",
    date: "March 1, 2025",
    category: "Web Development",
    tags: ["react", "nextjs", "trends"],
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=Web+Development",
  },
  {
    id: 2,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Deep dive into strategies for improving React application performance, from code splitting to memoization.",
    date: "February 15, 2025",
    category: "React",
    tags: ["react", "performance", "optimization"],
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=React+Performance",
  },
  {
    id: 3,
    title: "Building Accessible UIs: A Comprehensive Guide",
    excerpt:
      "Learn how to create web applications that are accessible to all users, including those with disabilities.",
    date: "February 1, 2025",
    category: "Accessibility",
    tags: ["a11y", "ui", "inclusive-design"],
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=400&text=Accessibility",
  },
  {
    id: 4,
    title: "The Power of Server Components in Next.js",
    excerpt: "Exploring how Server Components are changing the way we build React applications with Next.js.",
    date: "January 15, 2025",
    category: "Next.js",
    tags: ["nextjs", "server-components", "react"],
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=Server+Components",
  },
  {
    id: 5,
    title: "Mastering TypeScript for Frontend Development",
    excerpt: "A comprehensive guide to using TypeScript effectively in your frontend projects.",
    date: "January 1, 2025",
    category: "TypeScript",
    tags: ["typescript", "javascript", "frontend"],
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=TypeScript",
  },
  {
    id: 6,
    title: "Creating Stunning Animations with Framer Motion",
    excerpt: "Learn how to implement beautiful, performant animations in your React applications using Framer Motion.",
    date: "December 15, 2024",
    category: "Animation",
    tags: ["framer-motion", "animations", "react"],
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=Framer+Motion",
  },
]

const categories = ["Web Development", "React", "Accessibility", "Next.js", "TypeScript", "Animation"]
const popularTags = ["react", "nextjs", "typescript", "performance", "a11y"]

export function Usage() {
  return (
    <div className="min-h-screen py-20">
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
            {/* Featured Post */}
            <Card className="mb-10 overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span>•</span>
                  <span>{blogPosts[0].category}</span>
                </div>
                <CardTitle className="text-2xl text-neutral-900 dark:text-white">{blogPosts[0].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300">{blogPosts[0].excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline">Read Post</Button>
              </CardFooter>
            </Card>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card>
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-neutral-900 dark:text-white">{post.title}</CardTitle>
                      <CardDescription>{post.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-700 dark:text-neutral-300">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
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
