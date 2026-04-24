/**
 * Provides persistent top-level navigation and context about the dashboard's purpose and data refresh constraints.
 */
export function SiteHeader() {
  return (
    <header className="mb-10 border-b border-[var(--border)] pb-6">
      <p className="text-xs font-medium uppercase tracking-widest text-sky-400/90">
        Today
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Who needs what
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
        Pulled from /api/animals — fake numbers, refreshes every minute. Nothing
        saved.
      </p>
    </header>
  );
}
