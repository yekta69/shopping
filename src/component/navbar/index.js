
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import { useEffect,  useState } from 'react'
import ApiSetvice from '../../service/apiService';
import '../navbar/style.css';
import {Banner} from '../navbar/banner';


export const Navbar =() =>{
  const [data, setData] = useState({});

  useEffect(() => {
      ApiSetvice.getNavbarData()
        .then(res=>{
          setData(res);
          console.log("wwwwwwww",res.lastName)
        })
        .catch((err) => console.log(err));
  
  }, []);
  if (!data) {
    return <div>...Loading</div>;
  }
return (
<div className="main">
  <Banner url={require("../navbar/image/onlineShop.jpg")} />
 </div>
)
}