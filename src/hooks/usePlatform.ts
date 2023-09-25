import useGameQueryStore from "../store";
import usePlatforms from "./usePlatforms";

const usePlatform = () => {
    const { data: platformData } = usePlatforms();
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);

    return platformData.results.find(
        (platform) => platform.id === platformId
    );
}

export default usePlatform