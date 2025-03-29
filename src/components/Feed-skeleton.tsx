export default function FeedSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex animate-pulse gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="flex-1">
              <div className="flex gap-2">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-4 w-32 rounded bg-gray-200"></div>
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-4 w-full rounded bg-gray-200"></div>
                <div className="h-4 w-full rounded bg-gray-200"></div>
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="h-6 w-12 rounded-full bg-gray-200"></div>
                <div className="h-6 w-12 rounded-full bg-gray-200"></div>
                <div className="h-6 w-12 rounded-full bg-gray-200"></div>
                <div className="h-6 w-12 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
