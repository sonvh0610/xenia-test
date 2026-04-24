import { useQuery } from "@tanstack/react-query";

import { fetchAnimals } from "@/lib/fetch-animals";

const oneMinute = 1000 * 60;

/**
 * Wraps the standard React Query implementation to encapsulate the data fetching logic and cache invalidation rules for zoo animals, ensuring components don't need to know the underlying API specifics.
 */
export function useZooAnimals() {
  return useQuery({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
    staleTime: oneMinute,
    refetchInterval: oneMinute,
    retry: 2,
  });
}
