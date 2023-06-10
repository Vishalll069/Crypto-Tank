import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopFour } from "../redux/action";
import { Link } from "react-router-dom";

export const Intro = () => {
  const [coins, setCoins] = useState([]);

  const { topCoins, isHomeLoad } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(topCoins,"coins");

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    dispatch(getTopFour());
    setCoins(topCoins);

  }, [dispatch]);

  return (
    <>
      <Box position={'relative'} m={"25rem auto"} w={"80%"} color={"white"}>
        <Center flexDirection={"column"}>
          <Heading letterSpacing={2} as={"h1"} fontSize={"8rem"}>
            TRACK AND TRADE
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
            CRYPTO CURRENCIES
          </Heading>
        </Center>

        <Center mt={"5rem"}>
          {isHomeLoad ? (
            <Spinner color="red.500" thickness="4px" size={"xl"} />
          ) : (
            <Stack direction={"row"} spacing={"15rem"}>
              {topCoins?.map((coin) => (
                <Link to={`/coin/${coin?.id}`} key={coin?.id}>
                  <Flex style={{ transition: "all 300ms ease " }} _hover={{transform: "scale(1.1)"}} justify={"center"} gap={'1rem'} flexDirection={"column"}>
                    <Center flexDirection={'column'}>
                    <SkeletonCircle size={"15rem"} isLoaded={!isHomeLoad}>
                      <Image width={"100%"} src={coin?.image} alt={coin?.name} />
                    </SkeletonCircle>
                    <SkeletonText
                      isLoaded={!isHomeLoad}
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    >

                      <Flex gap={'1rem'} fontWeight={'500'} fontSize={'2rem'}>
                       <Text >{coin?.name}{"  "}</Text>
                       <Text color={(coin?.price_change_percentage_24h <=0)?"red":"green"}>{coin?.price_change_percentage_24h?.toFixed(2) + "%"}</Text>
                      </Flex>
                      <Text fontSize={'2rem'}>{"$ " + numberWithCommas(coin?.current_price?.toFixed(2))}</Text>
                    </SkeletonText>
                      </Center>
                  </Flex>
                </Link>
              ))}
            </Stack>
          )}
        </Center>
      </Box>
    </>
  );
};
