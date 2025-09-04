import { Suspense } from "react"
import { getProjects, getTestimonials, getBlogPosts, getServices } from "@/lib/supabase/actions"
import { StatsSkeleton } from "@/components/ui/skeleton-loaders"
import { FolderOpen, MessageSquare, FileText, Settings, Users, TrendingUp } from "lucide-react"

async function DashboardStats() {
  const [projects, testimonials, blogPosts, services] = await Promise.all([
    getProjects(),
    getTestimonials(),
    getBlogPosts(),
    getServices(),
  ])

  const stats = [
    {
      name: "Total Projects",
      value: projects.length,
      icon: FolderOpen,
      color: "bg-blue-500",
    },
    {
      name: "Testimonials",
      value: testimonials.length,
      icon: MessageSquare,
      color: "bg-green-500",
    },
    {
      name: "Blog Posts",
      value: blogPosts.length,
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      name: "Services",
      value: services.length,
      icon: Settings,
      color: "bg-orange-500",
    },
    {
      name: "Active Users",
      value: 1,
      icon: Users,
      color: "bg-pink-500",
    },
    {
      name: "Growth Rate",
      value: "12%",
      icon: TrendingUp,
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white shadow rounded-lg p-4 md:p-6">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function RecentActivity() {
  const [projects, blogPosts] = await Promise.all([getProjects(), getBlogPosts()])

  const recentProjects = projects.slice(0, 3)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Projects</h3>
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div key={project.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FolderOpen className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{project.title}</p>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Blog Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                <p className="text-sm text-gray-500">
                  {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Dashboard</h1>
        <div className="text-sm text-gray-500">Welcome back! Here's what's happening with your site.</div>
      </div>

      <Suspense fallback={<StatsSkeleton />}>
        <DashboardStats />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-200 rounded-lg animate-pulse" />}>
        <RecentActivity />
      </Suspense>
    </div>
  )
}
