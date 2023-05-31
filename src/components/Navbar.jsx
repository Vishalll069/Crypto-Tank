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
import { GrHomeRounded } from "react-icons/gr";
import { BiMovie } from "react-icons/bi";
import { CiBasketball } from "react-icons/ci";
import { MdOutlineComputer, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgProfile, CgHome } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
// import {IoIosArrowForward} from '@chakra-ui/icons'

import React from "react";
import { Link } from "react-router-dom";
import { PhoneNav } from "./PhoneNav";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <Center
      ml={"36rem"}
      width={"60%"}
      position={'sticky'}
      zIndex={10}
      display={["none", "none", "none", "block"]}
    >
      <Flex
        // position={"fixed"}
        justify={"space-between"}
        zIndex={10}
        alignItems={"center"}
        bg={"transparent"}
        style={{ transition: "all 300ms ease " }}
      >
        <Box m={"2rem"}>
          <Text cursor={'pointer'} color={"white"} fontSize={"4rem"} fontWeight={"bold"}>
            <span
              style={{
                color: "#fede51",
                background:
                  "linear-gradient(to right, #F2CF05, #FFDD80, #CFAB08)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COINTANK
            </span>
          </Text>
        </Box>
        <Stack
          bg={"transparent"}
          direction={"row"}
          spacing="24px"
          _hover={{ ".nav_text": { opacity: 1 } }}
        >
          <Flex
            bg={"transparent"}
            style={{ transition: "all 200ms ease " }}
            _hover={{
              transform: "scale(1.1)",
              zIndex: "2",
              fontWeight: "900",
              background: "linear-gradient(to right, #ff00cc, #FFD700)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            cursor={"pointer"}
          >
            <Link to={"/"}>
              <Text
                className="nav_text"
                ml={"1rem"}
                fontSize={"2rem"}
                fontWeight={"600"}
                color={"white"}
              >
                Home
              </Text>
            </Link>
          </Flex>
          <Flex
            bg={"transparent"}
            style={{ transition: "all 200ms ease " }}
            _hover={{
              transform: "scale(1.1)",
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
              Market
            </Text>
          </Flex>
          <Flex
            bg={"transparent"}
            style={{ transition: "all 200ms ease " }}
            _hover={{
              transform: "scale(1.1)",
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
              About Us
            </Text>
          </Flex>
          <Flex
            bg={"transparent"}
            style={{ transition: "all 200ms ease " }}
            _hover={{
              transform: "scale(1.1)",
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
              Join Us
            </Text>
          </Flex>
          <Box bg={'#242424'} position={'sticky'} display={["block","block","block","none"]} color={'blackAlpha.100'} p={"2%"} >
        <Flex>
            <Box size={"35px"}>
                <HamburgerIcon fontSize={"35px"} />
            </Box>
            <Spacer/>
            <Box>
                <Image src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />
            </Box>

        </Flex>

    </Box>
        </Stack>
      </Flex>
    </Center>
    <PhoneNav/>
    </>
  );
};
