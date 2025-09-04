"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { type SubstackPost, getSubstackPosts } from "@/lib/api/substack"

interface SubstackPreviewProps {
  count?: number
  showReadMore?: boolean
}

export function SubstackPreview({ count = 3, showReadMore = true }: SubstackPreviewProps) {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true)
        const fetchedPosts = await getSubstackPosts()
        setPosts(fetchedPosts.slice(0, count))
        setError(null)
      } catch (err) {
        setError("Failed to load blog posts")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [count])

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 dark:text-neutral-300">{post.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}

      {showReadMore && (
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <a href="https://briancordero.substack.com" target="_blank" rel="noopener noreferrer">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}
