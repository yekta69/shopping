import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
//import { addtoCart, cartstore } from "../productCard/redux";

export const CartIcon = () => {
  const count = useSelector((state) => {
    console.log("count", state.length);
    return state.length;
  });

  return (
    <div className="CartCard">
      {count > 0 && <span className="badge">{count}</span>}

      <img
        className="cart"
        src={require("./image/shopping-cart.png")}
        alt="img"
      />
    </div>
  );
};
