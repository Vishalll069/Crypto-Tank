import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <Link to={'/'}>
    <Text
      cursor={"pointer"}
      color={"white"}
      fontSize={"4rem"}
      fontWeight={"bold"}
    >
      <span
        style={{
          color: "#fede51",
          background: "linear-gradient(to right, #F2CF05, #FFDD80, #CFAB08)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CRYPTOTANK
      </span>
    </Text>
    
    </Link>
  );
};
