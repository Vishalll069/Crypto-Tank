import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const NavComp = ({ child }) => {
  return (
    <Flex
      bg={"transparent"}
      style={{ transition: "all 300ms ease " }}
      _hover={{
        transform: "scale(1.2)",
        zIndex: "2",
        fontWeight: "800",
        background: "linear-gradient(to right, #ff00cc, #FFD700)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      cursor={"pointer"}
    >
      <Text
        className="nav_text"
        ml={"1rem"}
        fontSize={"2rem"}
        fontWeight={"500"}
        color={"white"}
      >
        {child}
      </Text>
    </Flex>
  );
};
