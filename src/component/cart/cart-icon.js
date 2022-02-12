
import "../cart/style.css"
import React from "react"
import bootstrap from "bootstrap"
export const CartIcon =() =>{

return(
    <div>
    <img className="cart" src={require("./image/shopping-cart.png")}/>
    <span class="badge badge-pill badge-danger">Danger</span>
    </div>
)}