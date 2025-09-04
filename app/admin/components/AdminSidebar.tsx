"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FolderOpen, MessageSquare, FileText, Settings, Users, HelpCircle, LogOut } from "lucide-react"
import { signOut } from "@/lib/supabase/auth-actions"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Projects", href: "/admin/projects", icon: FolderOpen },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Services", href: "/admin/services", icon: Settings },
  { name: "FAQ", href: "/admin/faq", icon: HelpCircle },
  { name: "Users", href: "/admin/users", icon: Users },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="flex flex-col w-64 bg-white shadow-lg h-screen">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-700"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
