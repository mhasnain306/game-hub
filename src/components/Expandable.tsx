import { Button, Text } from "@chakra-ui/react";
import React, { Children, ReactNode, useState } from "react";

interface Props {
  children: string;
}
const Expandable = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const shortTextLength = 200;
  if (!children) return null;
  if (children.length <= shortTextLength) return <Text>{children}</Text>;
  const summary = isExpanded
    ? children
    : children.slice(0, shortTextLength) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          colorScheme="yellow"
          size={"xs"}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default Expandable;
