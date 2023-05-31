import axios from "axios";
import { TOP_FOUR, TOP_FOUR_LOAD } from "./actionTypes";

const urlTop4 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
`;

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

export { getTopFour };
