/**
 * Displays a skeleton layout to serve as a placeholder while dashboard data is being fetched, preventing jarring layout shifts and improving perceived performance.
 */
export function DashboardLoadingState() {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2"
      role="status"
      aria-live="polite"
      aria-busy
    >
      {/* Just render 4 empty skeleton cards while we wait for the real data */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse-soft rounded-xl border border-[var(--border)] bg-[var(--card)]/80 p-5"
        >
          <div className="h-4 w-1/2 rounded bg-white/10" />
          <div className="mt-4 h-3 w-1/3 rounded bg-white/5" />
          <div className="mt-4 h-1.5 w-full rounded bg-white/5" />
          <div className="mt-2 h-1.5 w-4/5 rounded bg-white/5" />
        </div>
      ))}
      <span className="sr-only">Loading</span>
    </div>
  );
}
