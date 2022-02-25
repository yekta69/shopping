import {ADD_To_CART} from './action'


export const cartReducer=(state =[] ,action) =>{
switch (action.type){
case ADD_To_CART:
    return [...state ,action.payload];
    default:
    return state;

}
}