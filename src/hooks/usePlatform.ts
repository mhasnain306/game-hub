import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client"

interface Platforms {
  id: number,
  name: string,
  slug: string
}

const usePlatform = () => {
  return useQuery<FetchResponse<Platforms>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient
      .get<FetchResponse<Platforms>>("/platforms/lists/parents")
      .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.count, results: platforms.results }
  });
}

export default usePlatform;