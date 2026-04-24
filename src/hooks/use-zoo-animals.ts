import { useQuery } from "@tanstack/react-query";

import { fetchAnimals } from "@/lib/fetch-animals";

const oneMinute = 1000 * 60;

export function useZooAnimals() {
  return useQuery({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
    staleTime: oneMinute,
    refetchInterval: oneMinute,
    retry: 2,
  });
}
