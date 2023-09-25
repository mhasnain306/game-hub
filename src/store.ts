import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchInput?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (id: number) => void;
    setPlatformId: (id: number) => void;
    setSortOrder: (value: string) => void;
    setSearchText: (value: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
    setPlatformId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
    setSortOrder: (value) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: value } })),
    setSearchText: (value) => set(() => ({ gameQuery: { searchInput: value } })),

}))

if (process.env.NODE_ENV === "development")
    mountStoreDevtool("Game Query", useGameQueryStore);

export default useGameQueryStore;