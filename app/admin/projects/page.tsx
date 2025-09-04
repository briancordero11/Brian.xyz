import { Suspense } from "react"
import Link from "next/link"
import { getProjects } from "@/lib/supabase/actions"
import { ProjectCardSkeleton } from "@/components/ui/skeleton-loaders"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Plus, Edit, Trash2 } from "lucide-react"

async function ProjectsList() {
  const projects = await getProjects()

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-24 w-24 text-gray-400">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No projects yet</h3>
        <p className="mt-2 text-gray-500">Get started by creating your first project.</p>
        <div className="mt-6">
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-start">
          <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
            <OptimizedImage
              src={project.image || ""}
              alt={project.title}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-md"
              fallbackSrc="/placeholder.svg?height=96&width=96&text=Project"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 truncate">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                <p className="text-gray-700 line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags?.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags && project.tags.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-2 mt-4 sm:mt-0 sm:ml-4">
                <Link
                  href={`/admin/projects/${project.id}`}
                  className="inline-flex items-center p-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Edit className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center p-2 border border-red-300 rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProjectsList />
      </Suspense>
    </div>
  )
}
