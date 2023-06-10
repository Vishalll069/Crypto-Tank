import { TOP_FOUR, TOP_FOUR_LOAD, TOP_TEN, TOP_TEN_LOAD } from "./actionTypes";

const initialState = {
    coins : [],
    topCoins:[],
    coin :{},
    isHomeLoad :false,
    isError:false,
    isTableLoad :false
}

export const reducer =(state = {...initialState}, action)=>{
    const {type , payload} = action;

    switch(type){
        case TOP_FOUR:
            return {...state, topCoins:payload, isHomeLoad:false};
        case TOP_FOUR_LOAD:
            return {...state, isHomeLoad:payload}
        case TOP_TEN_LOAD:
            return {...state, isTableLoad:payload}
        case TOP_TEN:
            return {...state, coins:payload, isTableLoad:false}
        default:
            return state;
    }
}


