import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client"

export interface Platform {
  id: number,
  name: string,
  slug: string
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.count, results: platforms.results }
  });
}

export default usePlatform;