import { useState } from "react";

export const GetMobileNumber =(props)=>{
    const [state ,setState] = useState({data :{}, errors:{}});
    const user=true
  console.log("ms",props)
    const submitHandler = event =>{
      event.preventDefault();
      console.log("state",state)
      if(formIsValid()){
          props.onRegister(state.data);
          setState({data:{} ,errors :{}})
          if(user){
                    props.setSteps({steps:2 ,usermobile:state.data.mobileNumber})
          }else     props.setSteps({steps:3 ,usermobile:state.data.mobileNumber})

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
      // console.log("trtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",event.target.value)
    const formِِِِِData ={[event.target.name]:event.target.value};
    setState({...state,data:{...state.data,...formِِِِِData}})
    
    console.log("bbbb",formِِِِِData)
    }
    return <form onSubmit={submitHandler}>
    <h6>ورود | ثبت نام</h6>
    <p>لطفا شماره موبایل خود را وارد نمایید:</p>
    <input value ={state.data.mobileNumber || ""}  name='mobileNumber' onChange={changeHandler}></input>
    <small className='form-text text-danger'>
    {state.errors.mobileNumber}
    </small>
    <button className="LoginButton" type='submit'>ورود</button>
    <p className='note' > تمام حقوق این وب سایت متعلق به فروشگاه آنلاین کالانید است.</p>
    </form>
}