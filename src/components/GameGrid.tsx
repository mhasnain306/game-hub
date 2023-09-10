import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import CardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          cards.map((card) => (
            <GameCardContainer key={card}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
