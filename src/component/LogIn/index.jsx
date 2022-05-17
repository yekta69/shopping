
import './style.css'
import {useState} from "react"
import { GetCodeNumber } from './components/getCodeNumber'
import { GetMobileNumber } from './components/getMobileNumber'
export const Login=(props) =>{
        const [steps,setSteps]=useState({steps:1 ,usermobile:''}) 
        console.log("main",props)
    return(


        // onClick={() => window.location.reload(false)}
           <div className="LoginBorder">
           {((steps.steps===2)  ||(steps.steps===3)) && <button className='BackButton' onClick={()=>window.location.reload(false)}>بازگشت</button>}
           <br/>
           <img className='image' src='/assets/images/Register/Logo.png' alt="کالانید"/>
            {
              ( steps.steps===1) && <GetMobileNumber steps={steps} setSteps={setSteps}  {...props}/>
           }            
            {  (steps.steps===2) &&  <GetCodeNumber steps={steps} setSteps={setSteps} {...props}/>}
            {steps===3&&"Register"}
           </div> 
        )
}