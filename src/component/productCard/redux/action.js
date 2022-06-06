export const ADD_To_CART = "[PRODUCT] ADD_TO_CARD";
export const REMOVE_FROM_CART = "[PRODUCT] ReMOVE_FROM_CART";

export const AddToCart = (product) => {
  return { type: ADD_To_CART, payload: product };
};

export const RemoveFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};
