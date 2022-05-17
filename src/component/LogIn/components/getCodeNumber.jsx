
import {useEffect } from "react";


export const GetCodeNumber= (props)=>{

       var minutes;
       var seconds;
       var set_inteval;
    
    useEffect(() => {
        
      minutes = 1;
      seconds = 10;
       document.getElementById('error').innerHTML = 'زمان باقیمانده تاارسال مجدد کد';
      document.getElementById('seconds').innerHTML = seconds;
      document.getElementById('dot').innerHTML=':'
      document.getElementById('minutes').innerHTML = minutes; 
      set_inteval = setInterval( otp_timer, 1000 );
       }, []);
   
    
    const otp_timer =() =>{
      seconds -= 1;
      document.getElementById('seconds').innerHTML = seconds;
      document.getElementById('minutes').innerHTML = minutes;
     
      if (seconds == 0) {
          if (minutes > 0) {
              seconds = 10;
              minutes -= 1;
          } else {
              minutes = 0;
              document.getElementById('minutes').innerHTML = minutes;
              clearInterval(set_inteval);
              minutes = 0;
              seconds = 0;
              document.getElementById('seconds').innerHTML = '';
              document.getElementById('dot').innerHTML=''
              document.getElementById('minutes').innerHTML = '';
              document.getElementById('error').innerHTML = '';
              document.getElementById('GetCode').innerHTML="دریافت مجدد کد";
          }

      }
  }




    return <form >
    <h6>کد تایید را وارد کنید</h6>
    <p>کد تایید برای شماره موبایل {props.steps.usermobile} ارسال شد </p>
    <input   name='mobileNumber'></input>
        <div>
        <span  id ="error"> </span>
       
         <span id="minutes"></span>
         <span id ="dot" ></span>
          <span id="seconds"></span>
         </div>
         <button  id="GetCode"></button>
    <button  className="LoginButton"  type='submit'>ورود</button>
    <p className='note' >   ، پشتیبانی  09135011071 ، تمام حقوق این وب سایت متعلق به فروشگاه آنلاین کالانید است.</p>
    </form>
}