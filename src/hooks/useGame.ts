import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenre";
export interface Platform {
    id: number,
    name: string,
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    genres: Genre[],
    rating_top: number
}

const useGame = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => {
            return apiClient.get<FetchResponse<Game>>("/games", {
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchInput
                }
            }).then(res => res.data)
        }
    })
}

export default useGame;