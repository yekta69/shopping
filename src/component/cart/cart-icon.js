import React from "react"
import './style.css'
import'bootstrap/dist/css/bootstrap.min.css'

export const CartIcon =() =>{
return(
    <div className="Cart">
    <span className="badge">5</span>
    <img width="5px" className="cart" src={require("./image/shopping-cart.png")}/>
    
    </div>
)}