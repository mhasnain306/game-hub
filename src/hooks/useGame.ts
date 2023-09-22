import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatform";

export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    genres: Genre[],
    rating_top: number
}
const apiClient = new APIClient<Game>("/games");

const useGame = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchInput,
                    page: pageParam
                }
            }),
        getNextPageParam: (lastpage, allpages) => {
            return lastpage.next ? allpages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000
    })
}

export default useGame;