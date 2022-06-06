import { createStore } from "redux";
import { cartReducer } from "./reducer";

export const CartStore = createStore(cartReducer);
