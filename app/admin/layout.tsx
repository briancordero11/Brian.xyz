import type React from "react"
import { checkAuth } from "@/lib/supabase/auth-actions"
import AdminSidebar from "./components/AdminSidebar"
import MobileSidebar from "./components/MobileSidebar"
import { Suspense } from "react"
import { CardSkeleton } from "@/components/ui/skeleton-loaders"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This will redirect to login if not authenticated
  await checkAuth()

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar - Only visible on mobile */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 pt-20 md:pt-6 transition-all duration-300">
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </main>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-6" />
      <CardSkeleton />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}
