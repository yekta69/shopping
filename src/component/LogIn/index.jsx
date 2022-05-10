
import './style.css'
import {useState} from "react"
import { GetCodeNumber } from './components/getCodeNumber'
import { GetMobileNumber } from './components/getMobileNumber'
export const Login=(props) =>{
        const [steps,setSteps]=useState(1)
    return(

           <div className="LoginBorder">
          
           {(steps===2 || steps===3) && <button className='BackButton' onClick={()=>setSteps(1)}>بازگشت</button>}
           <br/>
           <img className='image' src='/assets/images/Register/Logo.png' alt="کالانید"/>
      
           {
               steps===1 && <GetMobileNumber steps={steps} setSteps={setSteps} {...props}/>
           }            
            {  steps===2&&<GetCodeNumber {...props}/>}
            {steps===3&&"Register"}
           </div> 
           
  
    )
}