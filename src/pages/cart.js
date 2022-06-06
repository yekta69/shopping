import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "../component/Cart";

export const CartPage = () => {
  const products = useSelector((state) => {
    console.log("page", state);
    return state;
  });
  return <Cart products={products} />;
};
