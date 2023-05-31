import { TOP_FOUR, TOP_FOUR_LOAD } from "./actionTypes";

const initialState = {
    coins : [],
    topCoins:[],
    coin :{},
    isHomeLoad :false,
    isError:false
}

export const reducer =(state = {...initialState}, action)=>{
    const {type , payload} = action;

    switch(type){
        case TOP_FOUR:
            return {...state, topCoins:payload, isHomeLoad:false};
        case TOP_FOUR_LOAD:
            return {...state, isHomeLoad:payload}
        default:
            return state;
    }
}


