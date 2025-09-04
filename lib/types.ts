// Type definitions based on our database schema

// Auth and profile types
export interface User {
  id: string
  email?: string
}

export interface Profile {
  id: string // This matches the auth.users id
  username: string | null
  avatar_url: string | null
  updated_at: string | null
}

// Content types
export interface Project {
  id: number
  title: string
  caption: string | null
  description: string | null
  image: string | null
  category: string | null
  tags: string[] | null
  created_at: string
  updated_at: string
  user_id: string
}

export interface Testimonial {
  id: number
  name: string
  position: string | null
  quote: string
  image: string | null
  category: string | null
  created_at: string
  updated_at: string
  user_id: string
}

export interface BlogPost {
  id: number
  title: string
  subtitle: string | null
  description: string | null
  content: string
  cover_image: string | null
  published_at: string
  created_at: string
  updated_at: string
  user_id: string
}

export interface Service {
  id: number
  title: string
  description: string | null
  content: string | null
  icon: string | null
  created_at: string
  updated_at: string
  user_id: string
}

export interface FaqItem {
  id: number
  question: string
  answer: string
  category: string | null
  created_at: string
  updated_at: string
  user_id: string
}

// Database tables enum for type safety
export enum Tables {
  PROFILES = "profiles",
  PROJECTS = "projects",
  TESTIMONIALS = "testimonials",
  BLOG_POSTS = "blog_posts",
  SERVICES = "services",
  FAQ_ITEMS = "faq_items",
}
