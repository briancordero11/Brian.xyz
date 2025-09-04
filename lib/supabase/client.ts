"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./database.types"

// Create a single instance of the Supabase client for client components
let clientInstance: ReturnType<typeof createClientComponentClient<Database>> | null = null

export const createClient = () => {
  if (clientInstance) return clientInstance

  clientInstance = createClientComponentClient<Database>()
  return clientInstance
}
