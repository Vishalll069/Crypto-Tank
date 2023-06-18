import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const ChooseBox = ({ title, icon, desc }) => {
  return (
    <Box cursor={'pointer'}>
      <Flex
        borderRadius={"2.4rem"}
        bgColor={"rgba(255, 255, 255, 0.05)"}
        width={"100%"}
        p={"2.4rem"}
        gap={"4rem"}
        border={"1px solid rgba(131, 131, 131, 0.25)"}
      >
        <Box width={"30%"}>
          <Flex
            justifyContent={"center"}
            p={"1.6rem"}
            borderRadius={"1.4rem"}
            fontSize={"4rem"}
            bgGradient="linear(to-t, #ff00cc, #FFD700)"
          >
            {icon}
          </Flex>
        </Box>
        <Box>
          <Heading as={"h4"} fontSize={"2.5rem"}>
            {title}
          </Heading>
          <Text as={"p"} mt={"1rem"} fontSize={"1.8rem"}>
            {desc}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
