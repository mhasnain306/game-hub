import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a3512e9055a64e759bda14af7d0f371c"
    }
})

export default apiClient;