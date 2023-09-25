import useGameQueryStore from "../store";
import useGenres from "./useGenres";

const useGenre = () => {
    const { data } = useGenres();
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    return data?.results.find(
        (genre) => genre.id === genreId
    );
}

export default useGenre;