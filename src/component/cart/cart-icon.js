
import  'bootstrap/dist/css/bootstrap.min.css'
import "../cart/style.css"
import React from "react"
export const CartIcon =() =>{
return(
    <div>
    <img with="20"className="cart" src={require("./image/shopping-cart.png")}/>
    <span className="badge badge-danger badge-pill">5</span>
    </div>
)}