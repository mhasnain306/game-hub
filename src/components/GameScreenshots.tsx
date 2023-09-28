import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return data?.results ? (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
