export const Register =() =>{

    const submitHandler =() =>{




    }



return

<form onSubmit={submitHandler}>
    <h6> | ثبت نام</h6>
    <p>لطفا  اطلاعات خود را وارد نمایید:</p>
    <input value ={state.data.mobileNumber || ""}  name='mobileNumber' onChange={changeHandler}></input>
    <small className='form-text text-danger'>
    {state.errors.mobileNumber}
    </small>
    <button className="LoginButton" type='submit'>ورود</button>
    <p className='note' > تمام حقوق این وب سایت متعلق به فروشگاه آنلاین کالانید است.</p>
 
</form>
}