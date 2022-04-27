import { Register } from "../../component/Register"
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
   
    // useEffect(() =>{
    //     ApiService.getNavbarData()
    //     .then((res)=>{
    //         setData((prev)=>res);
    //         console.log("109",res)
    //     })
    //     .catch((err) => console.log(err));
    // },[]);
    return(
        <Register onRegister ={submitRegister.bind(this)}/>
    )
}