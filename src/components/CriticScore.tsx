import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let colorName = score > 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={colorName}
      borderRadius={4}
      fontSize={"14px"}
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
