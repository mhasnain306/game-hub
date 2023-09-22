import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
    const { data: platformData } = usePlatforms();

    return platformData.results.find(
        (platform) => platform.id === platformId
    );
}

export default usePlatform