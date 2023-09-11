import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bullEye from "../assets/bullseye.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "30px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
