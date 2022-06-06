import {Login} from "../../component/LogIn"
import ApiService from "../../service/apiService";
export const LogIn =() =>{


    const submitRegister =(mobileNumber) =>{
        ApiService.createUser(mobileNumber)
        if(Response.status ===200){
            console.log("200","ok")
        }
    }
  
    return(
    
        <Login onRegister ={submitRegister.bind(this)}/>
              
    )
}