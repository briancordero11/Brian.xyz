import { fetchById } from "@/lib/supabase/actions"
import { Tables, type Project } from "@/lib/types"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectForm from "../components/ProjectForm"

export default async function EditProjectPage({
  params,
}: {
  params: { id: string }
}) {
  // Convert string ID to number
  const projectId = Number.parseInt(params.id, 10)

  // Handle "new" project case
  if (params.id === "new") {
    return (
      <div>
        <div className="mb-6">
          <Link href="/admin/projects" className="text-indigo-600 hover:text-indigo-900">
            &larr; Back to Projects
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-6">Create New Project</h1>
        <ProjectForm />
      </div>
    )
  }

  // Fetch existing project
  const project = await fetchById<Project>(Tables.PROJECTS, projectId)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/projects" className="text-indigo-600 hover:text-indigo-900">
          &larr; Back to Projects
        </Link>
      </div>
      <h1 className="text-2xl font-semibold mb-6">Edit Project</h1>
      <ProjectForm project={project} />
    </div>
  )
}
