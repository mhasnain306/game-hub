import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const IconsMap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  mac: FaApple,
  pc: FaWindows,
  linux: FaLinux,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlateformList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        return (
          <Icon
            key={platform.id}
            as={IconsMap[platform.slug]}
            color="gray.500"
          ></Icon>
        );
      })}
    </HStack>
  );
};

export default PlateformList;
