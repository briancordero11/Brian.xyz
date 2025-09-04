"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, FolderOpen, MessageSquare, FileText, Settings, Users, HelpCircle, LogOut } from "lucide-react"
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

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <>
      {/* Fixed Toggle Button */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-200 h-14 flex items-center px-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="ml-4 text-lg font-semibold text-gray-900">Admin Dashboard</h1>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeSidebar} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 border-r-4 border-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-4 h-6 w-6" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-3 text-base font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
          >
            <LogOut className="mr-4 h-6 w-6" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
