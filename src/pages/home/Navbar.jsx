import { useEffect, useState } from "react"
import { Navbar } from "../../component/navbar";
import ApiService from "../../service/apiService"



export const NavbarPage =() =>{

    const[data,setData] = useState([]);
    useEffect(() =>{
        ApiService.getNavbarData()
        .then((res)=>{
            setData((prev)=>res);
        })
        .catch((err) => console.log(err));
    },[]);
      
     return(

      <>
      <Navbar data ={data}/>
      </>



    )
}

