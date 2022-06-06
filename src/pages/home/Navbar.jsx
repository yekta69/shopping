import { useEffect, useState } from "react";
import ApiService from "../../service/apiService";
import {Navbar} from "../../component/navbar";




export const NavbarPage =() =>{

    const[data,setData] = useState({});
    useEffect(() =>{
        ApiService.getNavbarData()
        .then((res)=>{
            setData((prev)=>res);
            console.log("109",res)
        })
        .catch((err) => console.log(err));
    },[]);
    return(
      
      <Navbar data ={data}/>
    
    );
};

