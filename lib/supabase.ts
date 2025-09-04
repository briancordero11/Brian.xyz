import { createClient } from "@supabase/supabase-js"

// Types for our database
export type Project = {
  id: number
  title: string
  caption: string
  description: string
  image: string
  category: string
  tags: string[]
  created_at?: string
}

export type Testimonial = {
  id: number
  name: string
  position: string
  quote: string
  image: string
  category: string
  created_at?: string
}

export type BlogPost = {
  id: number
  title: string
  subtitle: string
  description: string
  content: string
  cover_image: string
  published_at: string
  created_at?: string
}

export type Service = {
  id: number
  title: string
  description: string
  content: string
  icon: string
  created_at?: string
}

export type FaqItem = {
  id: number
  question: string
  answer: string
  category: string
  created_at?: string
}

// Server-side Supabase client
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Client-side Supabase client (singleton pattern to prevent multiple instances)
let clientSupabaseClient: ReturnType<typeof createClient> | null = null

export const createClientSupabaseClient = () => {
  if (clientSupabaseClient) return clientSupabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  clientSupabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return clientSupabaseClient
}
