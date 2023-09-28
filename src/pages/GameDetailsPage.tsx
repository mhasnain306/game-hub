import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import Expandable from "../components/Expandable";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import { Game } from "../hooks/useGames";

const GameDetailsPage = () => {
  const { id } = useParams();
  const { data: game, error, isLoading } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw new Error("Unexpected error occured");
  return (
    <>
      <Heading>{game.name}</Heading>
      <Expandable>{game.description_raw}</Expandable>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
