export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />
      <div
        className="absolute left-0 right-0 top-0 -z-10 h-full w-full bg-white dark:bg-gray-950 [mask-image:radial-gradient(circle_at_center,transparent_20%,black)]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 transform-gpu blur-3xl" />
        <div
          className="absolute inset-0 bg-gradient-to-tl from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 transform-gpu blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>
    </div>
  )
}

