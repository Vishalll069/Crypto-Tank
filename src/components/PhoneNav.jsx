import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { HStack, Box, Flex, Spacer, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Heading } from "../reusable/Heading";

export const PhoneNav = () => {
  const [boolean, setBoolean] = useState(false);

  return (
    <Box display={["block", "block", "block", "none"]} color={"white"} p={"2%"}>
      <Flex alignItems={"center"}>
        <Box m={"1rem"} cursor={"pointer"}>
          <Heading/>
        </Box>
        <Spacer />
        <Box
          size={"35px"}
          onClick={() => {
            setBoolean(!boolean);
          }}
          cursor={"pointer"}
        >
          {boolean ? (
            <HamburgerIcon fontSize={"35px"} />
          ) : (
            <CloseIcon fontSize={"25px"} />
          )}
        </Box>
      </Flex>
    </Box>
  );
};
