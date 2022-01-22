
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import ApiSetvice from '../../service/apiService';
import '../navbar/style.css';
import react from 'react';
import {Banner} from '../navbar/banner';
const baseURL = "https://localhost:44342/api/User/Getuser?id=1";

export const Navbar =() =>{
  const [data, setData] = useState({});

  useEffect(() => {
      ApiSetvice.getNavbarData()
        .then(res=>{
          setData(res);
          console.log(res)
        })
        .catch((err) => console.log(err));
  
  }, []);
  if (!data) {
    return <div>...Loading</div>;
  }
  // const [data, setData] = useState({});
  // useLayoutEffect(() => {
  //   try {
  //     ApiSetvice.getNavarData()
  //       .then(setData)
  //       .catch((err) => console.log("22222222" , data));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },[]);
  // if (!data) {
  //   return <div>...Loading</div>;



return (
<div className="main">
<Banner url={data.lastName} />
</div>
)
}