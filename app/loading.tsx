export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 pb-16">
      {/* Skeleton header */}
      <div className="sticky top-0 z-50 bg-gray-800 h-14 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 pt-12">
        {/* Title skeleton */}
        <div className="text-center space-y-3 mb-8">
          <div className="h-10 bg-gray-700 rounded-xl w-64 mx-auto animate-pulse" />
          <div className="h-5 bg-gray-700 rounded w-80 mx-auto animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border-2 border-gray-700 bg-gray-800/60 p-6 space-y-4 animate-pulse">
              <div className="h-5 bg-gray-700 rounded w-24" />
              <div className="h-8 bg-gray-700 rounded w-20" />
              <div className="h-4 bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-700 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
