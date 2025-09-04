"use server"

import { createServerClient } from "./server"
import type { Tables } from "../types"
import { revalidatePath } from "next/cache"

// Generic function to fetch all items from a table
export async function fetchAll<T>(table: Tables): Promise<T[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false })

  if (error) {
    console.error(`Error fetching from ${table}:`, error)
    return []
  }

  return data as T[]
}

// Generic function to fetch a single item by ID
export async function fetchById<T>(table: Tables, id: number): Promise<T | null> {
  const supabase = createServerClient()

  const { data, error } = await supabase.from(table).select("*").eq("id", id).single()

  if (error) {
    console.error(`Error fetching ${table} with id ${id}:`, error)
    return null
  }

  return data as T
}

// Generic function to create a new item
export async function createItem<T>(
  table: Tables,
  item: Omit<T, "id" | "created_at" | "updated_at">,
): Promise<T | null> {
  const supabase = createServerClient()

  // Get the current user ID
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    console.error("No authenticated user found")
    return null
  }

  // Add the user_id to the item
  const itemWithUserId = {
    ...item,
    user_id: session.user.id,
  }

  const { data, error } = await supabase.from(table).insert(itemWithUserId).select().single()

  if (error) {
    console.error(`Error creating item in ${table}:`, error)
    return null
  }

  // Revalidate the path to update the UI
  revalidatePath(`/admin/${table}`)

  return data as T
}

// Generic function to update an item
export async function updateItem<T>(table: Tables, id: number, updates: Partial<T>): Promise<T | null> {
  const supabase = createServerClient()

  // Get the current user ID
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    console.error("No authenticated user found")
    return null
  }

  // Add updated_at timestamp
  const updatesWithTimestamp = {
    ...updates,
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from(table)
    .update(updatesWithTimestamp)
    .eq("id", id)
    .eq("user_id", session.user.id) // Ensure the user owns this item
    .select()
    .single()

  if (error) {
    console.error(`Error updating item in ${table}:`, error)
    return null
  }

  // Revalidate the path to update the UI
  revalidatePath(`/admin/${table}`)
  revalidatePath(`/admin/${table}/${id}`)

  return data as T
}

// Generic function to delete an item
export async function deleteItem(table: Tables, id: number): Promise<boolean> {
  const supabase = createServerClient()

  // Get the current user ID
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    console.error("No authenticated user found")
    return false
  }

  const { error } = await supabase.from(table).delete().eq("id", id).eq("user_id", session.user.id) // Ensure the user owns this item

  if (error) {
    console.error(`Error deleting item from ${table}:`, error)
    return false
  }

  // Revalidate the path to update the UI
  revalidatePath(`/admin/${table}`)

  return true
}
