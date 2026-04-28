"use client";

type DashboardErrorStateProps = {
  message: string;
  onRetry: () => void;
};

/**
 * Renders a consistent error message boundary within the dashboard, ensuring users are informed of data fetching failures and providing a clear path to retry the action.
 */
export function DashboardErrorState({
  message,
  onRetry,
}: DashboardErrorStateProps) {
  return (
    <div
      className="rounded-xl border border-rose-500/40 bg-rose-950/30 p-6"
      role="alert"
    >
      <h2 className="text-sm font-semibold text-rose-200">That didn&apos;t work</h2>
      <p className="mt-2 text-sm text-rose-100/80">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg border border-rose-400/40 bg-rose-500/20 px-4 py-2 text-sm font-medium text-rose-50 transition hover:bg-rose-500/30"
      >
        Try again
      </button>
    </div>
  );
}
