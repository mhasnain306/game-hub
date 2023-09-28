import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video src={first?.data[480]} controls poster={first?.preview} />
  ) : null;
};

export default GameTrailer;
