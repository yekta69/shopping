
import {useState } from "react";


export const GetCodeNumber= (props)=>{

    const [state ,setState] = useState({data :{}, errors:{}});
    const user=true
    console.log("0914",state)
    return <form >
    <h6>کد تایید را وارد کنید</h6>
    <p>کد تایید برای شماره موبایل {"00000"} ارسال شد </p>
    <input   name='mobileNumber'></input>
    <button  className="LoginButton"  type='submit'>ورود</button>
    <p className='note' > تمام حقوق این وب سایت متعلق به فروشگاه آنلاین کالانید است.</p>
    </form>
}