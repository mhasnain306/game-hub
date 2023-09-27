import { Heading, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Expandable from "../components/Expandable";
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
    </>
  );
};

export default GameDetailsPage;
