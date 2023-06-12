import { HamburgerIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import {IoIosArrowForward} from '@chakra-ui/icons'
import { BsDiscord, BsTwitter } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { PhoneNav } from "./PhoneNav";
import { NavComp } from "../reusable/NavComp";
import { Heading } from "../reusable/Heading";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center
      // bgGradient="linear(to-r, #480048, #182848)"
        width={"100%"}
        position={"fixed"}
        top={"0"}
        bg={"#182848"}
        zIndex={10}
        display={["none", "none", "none", "block"]}
      >
        <Flex
          // position={"fixed"}
          width={"60%"}
          m={"auto"}
          justify={"space-between"}
          zIndex={10}
          alignItems={"center"}
          bg={"transparent"}
          style={{ transition: "all 300ms ease " }}
        >
          <Box m={"2rem"}>
            <Heading />
          </Box>
          <Stack
            bg={"transparent"}
            direction={"row"}
            spacing="24px"
            alignItems={"center"}
            _hover={{ ".nav_text": { opacity: 1 } }}
          >
            <NavComp child={"Home"} to={'#'} />
            <NavComp child={"Market"} to={'#market'} />
            <NavComp child={"About us"} to={'#about'} />
            <NavComp child={"Join Us"} to={'#contact'} />
          </Stack>
          <Stack direction={"row"} spacing="24px">
            <NavComp child={<BsTwitter />} />
            <NavComp child={<BsDiscord />} />
          </Stack>
        </Flex>
      </Center>
      <PhoneNav />
    </>
  );
};
