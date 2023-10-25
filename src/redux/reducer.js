import {
  COIN_LOAD,
  GET_COIN,
  TOP_FOUR,
  TOP_FOUR_LOAD,
  TOP_TEN,
  TOP_TEN_LOAD,
} from "./actionTypes";

const initialState = {
  coins: [],
  topCoins: [],
  coin: {},
  isHomeLoad: false,
  isError: false,
  isTableLoad: false,
  isCoinLoad: false,
};

export const reducer = (state = { ...initialState }, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOP_FOUR:
      return { ...state, topCoins: payload, isHomeLoad: false };
    case TOP_FOUR_LOAD:
      return { ...state, isHomeLoad: payload };
    case TOP_TEN_LOAD:
      return { ...state, isTableLoad: payload };
    case TOP_TEN:
      return { ...state, coins: payload, isTableLoad: false };
    case GET_COIN:
      return { ...state, coin: payload, isCoinLoad: false };
    case COIN_LOAD:
      return { ...state, isCoinLoad: payload };
    default:
      return state;
  }
};
