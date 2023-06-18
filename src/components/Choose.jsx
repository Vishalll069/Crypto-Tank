import React from "react";
import bitGirl from "../assets/bit-girl.png";
import manBit from "../assets/man-bit.png";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaWallet, FaPencilRuler,FaBolt,FaSatelliteDish,FaChessKnight} from "react-icons/fa";
import {MdStackedBarChart} from 'react-icons/md'
import { ChooseBox } from "../reusable/ChooseBox";

export const Choose = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row", sm:"column" });

  return (
    <Box
      id="market"
      m={"20rem auto"}
      w={"70%"}
      color={"white"}
      position={"relative"}
    >
      <Center gap={"3rem"} flexDirection={"row"}>
        <Heading letterSpacing={2} as={"h1"} fontSize={"8rem"}>
          Why{" "}
        </Heading>
        <Heading
          letterSpacing={4}
          as={"h1"}
          fontSize={"8rem"}
          background="linear-gradient(to right, #ff00cc, #FFD700)"
          backgroundClip="text"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
        >
          Choose Us
        </Heading>
      </Center>
      <Flex
        gap={"1rem"}
        mt={"6rem"}
        justifyContent={"space-between"}
        direction={['column', 'column', 'column','row']}
        // flexDirection={flexDirection}
      >
        <Box>
          <Stack spacing={'3rem'}>
            <ChooseBox
              title={"CONNECT YOUR WALLET"}
              icon={<FaWallet />}
              desc={
                "Use Trust Wallet, Metamask or to connect to the app."
              }
            />
            <ChooseBox
              title={"SELECT YOUR QUANTITY"}
              icon={<FaPencilRuler />}
              desc={
                "Upload your crypto and set a title, description and price."
              }
            />
            <ChooseBox
              title={"SELECT YOUR QUANTITY"}
              icon={<FaBolt />}
              desc={
                "Upload your crypto and set a title, description and price."
              }
            />
          </Stack>
        </Box>
        <Flex justifyContent={'center'} width={"50%"} >
          <Image width={"100%"} src={manBit} />
        </Flex>
        <Box>
          <Stack spacing={'3rem'}>
           {/* <ChooseBox title={'RECEIVE YOUR OWN NFTS'} icon={<FaSatelliteDish/>}  desc={'Invest all your crypto at one place on one platform.'}  /> */}
           <ChooseBox
              title={"CONNECT YOUR WALLET"}
              icon={<FaSatelliteDish />}
              desc={
                "Use Trust Wallet, Metamask or to connect to the app."
              }
            />
           <ChooseBox
              title={"CONNECT YOUR WALLET"}
              icon={<FaChessKnight />}
              desc={
                "Use Trust Wallet, Metamask or to connect to the app."
              }
            />
           <ChooseBox
              title={"CONNECT YOUR WALLET"}
              icon={<MdStackedBarChart />}
              desc={
                "Use Trust Wallet, Metamask or to connect to the app."
              }
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
