import { useState } from "react";
import {useEffect} from "react";
import '../productCard/style.css';
import React from "react";

export const ProductCard =(props) =>{

    const [data,setData] = useState(props.data);
    useEffect(() =>{
     setData(props.data);
     console.log("object",props.data)
     },[props.data]);
         if(!data){
         return <div>...loading</div>  
     }
    return(
      <div>
    
       { data.length>0? data.map((item)=>(
        <div className="productCard">
        <div className='mainCard'>
         <div className='card'>
             <h5 className='productname'>{data.firtname}</h5>
             <img src={require("../productCard/images/product1.jpg")} alt="Product"/>
             <h5 className='Price'>قیمت</h5>
             <button type="button" className="btn btn-danger"><img className='buy' src={require("../productCard/images/shopping-cart-Pre.png")} alt= "product"/></button>
         </div>
         </div>
         </div>
      )
       ):<div></div>
      }   
            </div>
    );
  }