
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import { useEffect,  useState } from 'react'
import ApiSetvice from '../../service/apiService';
import '../navbar/style.css';
import {Banner} from '../navbar/banner';


export const Navbar =(props) =>{

  const [data, setData] = useState(props.data);

  useEffect(() => {
          setData(props.data);
          console.log("wwwwwwww",data)
        }, [props.data]);
  if (!data) {
    return <div>...Loading</div>;
  }
return (
<div className="main">
  <Banner url={require("../navbar/image/onlineShop.jpg")} />
 </div>
)
}




