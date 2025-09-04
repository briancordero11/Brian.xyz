import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-gray-200", className)} />
}

export function CardSkeleton() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Skeleton className="h-6 w-2/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-start">
      <Skeleton className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4 rounded-md" />
      <div className="flex-1 w-full">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <div className="flex gap-1">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white shadow rounded-lg p-4 md:p-6">
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 mr-3 rounded" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-8 w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TableRowSkeleton({ count = 5 }: { count?: number }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="border-b border-gray-200 py-4 px-4">
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </>
  )
}
