import { useState } from "react";

export const GetMobileNumber =(props)=>{
    const [state ,setState] = useState({data :{}, errors:{}});
    const user=true
  
    const submitHandler = event =>{
      event.preventDefault();
      console.log("state",state)
      if(formIsValid()){
          props.onRegister(state.data);
          setState({data:{} ,errors :{}})
          if(user){
                        props.setSteps(2)

          }else     props.setSteps(3)


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
    return <form onSubmit={submitHandler}> {console.log("5555555",state)}
    <h6>ورود | ثبت نام</h6>
    <p>لطفا شماره موبایل خود را وارد نمایید:</p>
    <input value ={state.data.mobileNumber || ""}  name='mobileNumber' onChange={changeHandler}></input>
    <small className='form-text text-danger'>
    {state.errors.mobileNumber}
    </small>
    <button type='submit'>ورود</button>
    <p className='note' > تمام حقوق این وب سایت متعلق به فروشگاه آنلاین کالانید است.</p>
    </form>
}