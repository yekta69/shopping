import { useState } from "react"


export const Register =() =>{
    const [state,setstate] = useState()
return(
<form >
    <h6>ثبت نام</h6>
    <p>لطفا  اطلاعات خود را وارد نمایید:</p>
    <input className="RegisterInput" placeholder="نام"/>
    <br/>
    <input className="RegisterInput" placeholder="نام خانوادگی"/>      
    <input className="RegisterInput" placeholder="کدملی"/>       
    <input className="RegisterInput" placeholder="رمز عبور"/>   
    <button  className="LoginButton" type='submit'>ورود</button>    
    </form>
)
}