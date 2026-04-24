"use client";

import { useEffect, useRef } from "react";

import { AnimalNeedMeters } from "@/components/animal-need-meters";
import type { ZooAnimal } from "@/schemas/zoo-animal";

type AnimalDetailDialogProps = {
  animal: ZooAnimal | null;
  onClose: () => void;
};

/**
 * Presents a modal overlay with comprehensive details and keeper notes for a single animal, keeping the user in the context of the dashboard.
 */
export function AnimalDetailDialog({
  animal,
  onClose,
}: AnimalDetailDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  // Watch the selected animal prop to open or close the native dialog element
  useEffect(() => {
    if (!ref.current) return;
    if (animal) {
      if (!ref.current.open) {
        ref.current.showModal();
      }
    } else {
      ref.current.close();
    }
  }, [animal]);

  return (
    <dialog
      ref={ref}
      className="fixed left-1/2 top-1/2 z-50 w-[min(100%,36rem)] max-h-[min(90vh,40rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-[var(--border)] bg-[#111522] p-0 text-[var(--foreground)] shadow-2xl backdrop:bg-black/70"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {animal && (
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold">{animal.name}</h2>
              <p className="text-sm text-[var(--muted)]">{animal.species}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-3 py-1 text-sm text-[var(--muted)] hover:bg-white/5"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm text-sky-300/90">
            Enclosure: <span className="text-white">{animal.enclosure}</span>
          </p>
          <div className="mt-6">
            <p className="text-xs font-medium uppercase text-[var(--muted)]">
              Current needs
            </p>
            <div className="mt-3">
              <AnimalNeedMeters
                hunger={animal.hunger}
                thirst={animal.thirst}
                hygiene={animal.hygiene}
              />
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-white/5 bg-white/5 p-4">
            <p className="text-xs font-medium uppercase text-[var(--muted)]">
              Keeper notes
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#dbe3f0]">
              {animal.notes}
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}
