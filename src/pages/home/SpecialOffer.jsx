import { useEffect, useState } from 'react'
import ApiService from '../../service/apiService'
import {SpecialOffer} from '../../component/specialOffer'
export const SpecialOfferPage =() =>{

  const [data,setdata] = useState({});
  useEffect(() =>{
      ApiService.getSpicialOffer()
      .then(res =>{
        setdata(perv => res);
        console.log("dataaa" ,res)
      })
     .catch((err) => console.log(err));

},[]);

console.log("888888",data)
return <>
<SpecialOffer data = {data} />

</>
}