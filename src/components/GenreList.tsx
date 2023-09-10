import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              height={"30px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={7}
              marginRight={1}
            />
            <Text fontSize={18}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
