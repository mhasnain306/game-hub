import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: platformData } = usePlatform();
  const { data: genreData } = useGenre();
  const selectedPlatform = platformData.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const selectedGenre = genreData.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={6} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
