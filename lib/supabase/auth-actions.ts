"use server"

import { createServerClient } from "./server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Sign in with email and password
export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const supabase = createServerClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      error: error.message,
    }
  }

  return { success: true }
}

// Sign out
export async function signOut() {
  const supabase = createServerClient()
  await supabase.auth.signOut()

  // Clear cookies
  cookies().delete("supabase-auth-token")

  // Redirect to login page
  redirect("/admin/login")
}

// Get the current session
export async function getSession() {
  const supabase = createServerClient()

  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    return { session: null }
  }

  return { session: data.session }
}

// Check if the user is authenticated
export async function checkAuth() {
  const { session } = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session
}

// Get the current user profile
export async function getProfile() {
  const { session } = await getSession()

  if (!session) {
    return { profile: null }
  }

  const supabase = createServerClient()

  const { data, error } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  if (error || !data) {
    return { profile: null }
  }

  return { profile: data }
}
