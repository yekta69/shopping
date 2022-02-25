import { useState } from "react";
import {useEffect} from "react";
import ApiService from "../../service/apiService";
import {ProductCard} from '../../component/productCard'

export const ProductCardPage =() => {

    const [data,setData] = useState([]);
    useEffect (() =>{
        ApiService.getProductCard()
        .then((res) =>{
        setData((Prev) => res);
        })
        .catch((err) => console.log(err));
    },[]);
    return(
    <>
    <ProductCard data={data}/>
    </>
    );
};

