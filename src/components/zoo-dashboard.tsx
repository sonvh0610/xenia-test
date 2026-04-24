"use client";

import { useState } from "react";

import { AnimalDetailDialog } from "@/components/animal-detail-dialog";
import { AnimalList } from "@/components/animal-list";
import { DashboardErrorState } from "@/components/dashboard-error-state";
import { DashboardLoadingState } from "@/components/dashboard-loading-state";
import { useZooAnimals } from "@/hooks/use-zoo-animals";
import type { ZooAnimal } from "@/schemas/zoo-animal";

/**
 * Orchestrates the data fetching and interactive state of the main dashboard, coordinating loading states, errors, and displaying the list of animals and their details.
 */
export function ZooDashboard() {
  const {
    data,
    isPending,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useZooAnimals();

  const [selected, setSelected] = useState<ZooAnimal | null>(null);

  if (isPending && !data) {
    return <DashboardLoadingState />;
  }

  if (isError) {
    return (
      <DashboardErrorState
        message={error?.message ?? "Something broke"}
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs text-[var(--muted)]">
            {data.animals.length} animals · poll every 60s
            {isFetching && data ? " (fetching…)" : ""}
          </p>
          {dataUpdatedAt != null ? (
            <p className="text-xs text-[var(--muted)]">
              Fetched {new Date(dataUpdatedAt).toLocaleTimeString()}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => {
            void refetch();
          }}
          className="self-start rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-500/20"
        >
          Refresh now
        </button>
      </div>
      <AnimalList
        animals={data.animals}
        onSelect={(animal) => setSelected(animal)}
      />
      <AnimalDetailDialog animal={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
