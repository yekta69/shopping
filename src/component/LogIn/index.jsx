
import './style.css'
import {useState} from "react"
import { GetCodeNumber } from './components/getCodeNumber'
import { GetMobileNumber } from './components/getMobileNumber'
import { Register } from './components/register'
export const Login=(props) =>{
        const [steps,setSteps]=useState({steps:3 ,UserMobile:''}) 
        console.log("main",props)
    return(


        // onClick={() => window.location.reload(false)}
           <div className="LoginBorder">
           {((steps.steps===2)  ||(steps.steps===3)) && <button className='BackButton' onClick={() =>setSteps({steps:1 ,UserMobile:''})}>بازگشت</button>}
           <br/>
           <img className='image' src='/assets/images/Register/Logo.png' alt="کالانید"/>
            {
              (steps.steps===1) && <GetMobileNumber steps={steps} setSteps={setSteps}  {...props}/>
            }            
            {  (steps.steps===2) &&  <GetCodeNumber steps={steps} setSteps={setSteps} {...props}/>}
            {(steps.steps===3 ||  steps===3) && <Register  steps={steps} setSteps={setSteps} {...props}/>}
           </div> 
        )
}