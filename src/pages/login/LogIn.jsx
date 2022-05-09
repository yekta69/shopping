import {Login} from "../../component/LogIn"
import ApiService from "../../service/apiService";
export const LogIn =() =>{

//  const[data,setData] = useState({});

    const submitRegister =(mobilenumber) =>{
  console.log("dataaaaaa",mobilenumber)
        ApiService.createUser(mobilenumber)
        if(Response.statuse ===200){
            console.log("200","ok")
        }
    }
  
    return(
        <Login onRegister ={submitRegister.bind(this)}/>
    )
}