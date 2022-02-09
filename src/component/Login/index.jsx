
import{} from './style.css'
export const Login =() =>{
    return(
        <div className='main'>
        <div className="LoginBorder">
            <h1>فروشگاه سگال</h1>
            <h4>ورود | ثبت نام</h4>
            <p>لطفا شماره موبایل و پسورد خود را وارد نمایید</p>
           <input placeholder='شماره تلفن'></input>
           <input placeholder='پسورد'></input>
           <input type="button" placeholder='پسورد'></input>
        </div>
        </div>
        
    )
}