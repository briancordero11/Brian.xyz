"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string | null | undefined
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width = 500,
  height = 300,
  className,
  fallbackSrc = "/placeholder.svg",
  priority = false,
}: OptimizedImageProps) {
  const [error, setError] = useState(false)

  // Handle different image source formats
  const imageSrc = getImageSrc(src, fallbackSrc, error)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isExternalImage(imageSrc) ? (
        // External image (can't use Next.js Image optimization)
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        // Local image (use Next.js Image optimization)
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  )
}

// Helper function to determine if image is external
function isExternalImage(src: string): boolean {
  return src.startsWith("http") || src.startsWith("data:")
}

// Helper function to get the appropriate image source
function getImageSrc(src: string | null | undefined, fallbackSrc: string, hasError: boolean): string {
  if (hasError || !src) {
    return fallbackSrc
  }

  // Handle relative URLs
  if (src.startsWith("/")) {
    return src
  }

  // If it's already a full URL, return as is
  if (src.startsWith("http") || src.startsWith("data:")) {
    return src
  }

  // Otherwise, assume it's a relative path and add leading slash
  return `/${src}`
}
