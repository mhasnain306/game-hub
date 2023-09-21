import axios, { AxiosRequestConfig } from "axios";

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

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return apiClient.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

}

export default APIClient;