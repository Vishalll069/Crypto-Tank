import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopTen } from "../redux/action";
import { Link } from "react-router-dom";

export const Market = () => {
  const [currPage, setCurrPage] = useState(1);

  const { coins, isTableLoad } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(coins, "table");
  console.log(currPage, "page");
  useEffect(() => {
    dispatch(getTopTen(currPage))
  }, [currPage]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrPage(i)}
        className={i === currPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <Box m={"20rem auto"} w={"60%"} color={"white"} position={"relative"}>
        <Box>
          <Text as={"h1"} fontWeight={"500"} fontSize={"5rem"}>
            Market Values
          </Text>
        </Box>
        <Box>
          <Box>
            <Box
              bgGradient={"linear-gradient(to right, #ff00cc, #FFD700)"}
              className="market-content__coin-list__top"
            >
              <p>Coin</p>
              <p>Price</p>
              <p>24h Change</p>
              <p>Market Cap</p>
            </Box>
            {isTableLoad ? (
                <Center mt={'2rem'}>
                    <Spinner color="red.500" thickness="4px" size={"xl"} />
                </Center>
            ) : (
              <Box className="market-content__coin-list__row">
                {coins.map((item) => (
                  <Link
                    to={`/coin/${item.id}`}
                    className="coin-row"
                    key={item.id}
                  >
                    <span>
                      <img src={item.image} alt={item.name} /> {item.name}
                    </span>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h >= 0
                          ? "green-text"
                          : "red-text")
                      }
                    >
                      {item.price_change_percentage_24h?.toFixed(2) + " %"}
                    </p>
                    <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                  </Link>
                ))}
              </Box>
            )}
          </Box>
          <Box color={'black'} className="market-content__coin-list__pagination">
            {paginationButtons}
          </Box>
        </Box>
      </Box>
    </>
  );
};
