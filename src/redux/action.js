import axios from "axios";
import {
  GET_COIN,
  TOP_FOUR,
  TOP_FOUR_LOAD,
  TOP_TEN,
  TOP_TEN_LOAD,
} from "./actionTypes";

const urlTop4 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
`;

// const urlTop10 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
// `;

const getTopFour = () => {
  return (dispatch) => {
    dispatch({ type: TOP_FOUR_LOAD, payload: true });
    try {
      axios.get(urlTop4).then((res) => {
        dispatch({ type: TOP_FOUR, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const getTopTen = (currPage) => {
  return (dispatch) => {
    dispatch({ type: TOP_TEN_LOAD, payload: true });
    try {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currPage}&sparkline=false
      `
        )
        .then((res) => {
          dispatch({ type: TOP_TEN, payload: res.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};

const getCoin = (coinId) => {
  return (dispatch) => {
    try {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then((res) => {
          dispatch({ type: GET_COIN, payload: res.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export { getTopFour, getTopTen, getCoin };
