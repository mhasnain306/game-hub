import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string,
    slug: string
}


const useGenre = () => {

    const fetchGenres = () => {
        return apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data)
    }

    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: fetchGenres,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres }
    })
};

export default useGenre