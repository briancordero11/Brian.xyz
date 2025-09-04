// This file defines the database schema types for Supabase
// These types match our SQL schema

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
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
        Insert: {
          id?: number
          title: string
          caption?: string | null
          description?: string | null
          image?: string | null
          category?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: number
          title?: string
          caption?: string | null
          description?: string | null
          image?: string | null
          category?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
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
        Insert: {
          id?: number
          name: string
          position?: string | null
          quote: string
          image?: string | null
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: number
          name?: string
          position?: string | null
          quote?: string
          image?: string | null
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
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
        Insert: {
          id?: number
          title: string
          subtitle?: string | null
          description?: string | null
          content: string
          cover_image?: string | null
          published_at?: string
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: number
          title?: string
          subtitle?: string | null
          description?: string | null
          content?: string
          cover_image?: string | null
          published_at?: string
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          id: number
          title: string
          description: string | null
          content: string | null
          icon: string | null
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          id?: number
          title: string
          description?: string | null
          content?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: number
          title?: string
          description?: string | null
          content?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      faq_items: {
        Row: {
          id: number
          question: string
          answer: string
          category: string | null
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          id?: number
          question: string
          answer: string
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: number
          question?: string
          answer?: string
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "faq_items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
