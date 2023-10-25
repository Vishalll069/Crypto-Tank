import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoin } from "../redux/action";
import DOMPurify from "dompurify";

export const Coin = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { coin, isCoinLoad } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCoin(coinId));
  }, [coinId]);

  console.log(coin);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const h24 = coin.market_data ? coin.market_data.price_change_24h : "";

  return (
    <Box m={"25rem auto"} w={"60%"} color={"white"} position={"relative"}>
      {coin && <Flex width={"100%"} gap={"10rem"}>
        {isCoinLoad ? (
          <Center mt={"2rem"}>
            <Spinner color="red.500" thickness="4px" size={"xl"} />
          </Center>
        ) : (
          <Box width={'20%'} textAlign={"center"}>
            <Box mb={"4rem"}>
              {coin.image ? (
                <Image src={coin.image.large} alt={coin.id} />
              ) : null}
            </Box>
            <Heading fontSize={"4rem"}>{coin.id ? coin.name : ""}</Heading>
            <Text fontSize={"2rem"}>Rank : #{coin.coingecko_rank}</Text>
          </Box>
        )}
        <Box>
          <Divider color={"white"} orientation="vertical" />
        </Box>
        <Box fontSize={"2rem"} width={"75%"}>
          {isCoinLoad ? (
            <Center mt={"2rem"}>
              <Spinner color="red.500" thickness="4px" size={"xl"} />
            </Center>
          ) : (
            <>
              <Flex width={"100%"} justifyContent={'space-between'}>
                <Flex gap={"1rem"}>
                  <Text>24h Change :</Text>
                  <Text
                    color={
                      h24 <= 0 ? "red" : "green"
                    }
                  >
                    {coin.market_data ? coin.market_data.price_change_percentage_24h?.toFixed(2) +
                      "%" : " "}
                  </Text>
                </Flex>
                <Flex gap={"1rem"}>
                  <Text>Price :</Text>
                  <Text color={"green"}>
                  {coin.market_data
                      ? "$" +
                        numberWithCommas(
                          coin.market_data.current_price.usd.toFixed(2)
                        )
                      : null}
                  </Text>
                </Flex>
                <Flex gap={"1rem"}>
                  <Text>Symbol :</Text>
                  <Text>{coin.symbol}</Text>
                </Flex>
              </Flex>
              <Box
                mt={"4rem"}
                width={"100%"}
                overflowY={"auto"}
                height={"40rem"}
                className="description"
              >
                <Text dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}></Text>
              </Box>
            </>
          )}
        </Box>
      </Flex>}
    </Box>
  );
};
