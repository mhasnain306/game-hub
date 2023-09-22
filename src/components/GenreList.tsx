import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectedGenre: (genreId: number) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
                borderRadius={8}
                marginRight={1}
              />
              <Button
                onClick={() => onSelectedGenre(genre.id)}
                variant="link"
                fontSize="lg"
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
