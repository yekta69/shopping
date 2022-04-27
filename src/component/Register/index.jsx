
import React, { useState } from 'react'
import{} from './style.css'
export const Register=(props) =>{

    const [state ,setState] = useState({data :{}, errors:{}});
  
  
    const submitHandler = event =>{
      event.preventDefault();
      console.log("state",state)
      if(formIsValid()){
          props.onRegister(state.data);
          setState({data:{} ,errors :{}})
      }
   }
   const formIsValid =() =>{
       const errors = {};
       if(!state.data.mobileNumber){
          errors.mobileNumber = " شماره تلفن نمیتواند خالی باشد" 
       }
       
       setState({...state,errors});
       return !(errors.mobileNumber);
    }
      
    const changeHandler = event=>{
    //   console.log("trtrtr",event.target.value)
    const formِِِِِData ={[event.target.name]:event.target.value};
    setState({...state,data:{...state.data,...formِِِِِData}})
    
    console.log("bbbb",formِِِِِData)
    }
    return(

       
        <form onSubmit={submitHandler}> {console.log("5555555",state)}
        <div className="mb-3 ">
               <div className='mainLogin'>
        <div className="LoginBorder">
            <h1>فروشگاه سگال</h1>
            <h4>ورود | ثبت نام</h4>
            <p>لطفا شماره موبایل خود را وارد نمایید</p>
           <input value ={state.data.mobileNumber || ""}  name='mobileNumber' onChange={changeHandler} placeholder='شماره تلفن'></input>
           <small className='form-text text-danger'>
        {state.errors.mobileNumber}
           </small>
           {/* <input placeholder='پسورد'></input> */}
          <button type='submit' className="btn btn-primary">ورود/ثبتنام</button>
        </div>
        </div>
        </div>
    </form>
    )
}