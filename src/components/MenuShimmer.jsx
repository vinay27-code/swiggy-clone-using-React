export default function MenuShimmer() {
  const placeholders = Array(6).fill(0); // Show 6 shimmer blocks

  return (
    <div className="space-y-6">
      {placeholders.map((_, idx) => (
        <div key={idx} className="flex justify-between animate-pulse">
          {/* Left side: text and lines */}
          <div className="w-[70%] space-y-2">
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-100 rounded w-1/3"></div>
            <div className="h-3 bg-gray-100 rounded w-4/5"></div>
          </div>

          {/* Right side: image placeholder */}
          <div className="w-[20%] h-36 bg-gray-200 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
}
