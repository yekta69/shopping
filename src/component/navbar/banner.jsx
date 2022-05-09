
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import {Link} from 'react-router-dom'
import {CartIcon} from '../Cart/cart-icon'
export const Banner=({url}) =>{
return (<div className='baner'>
     <div className="Logobar">
      <ul>
        <img className="logo" src={require("../navbar/image/index.jpg")} alt="لوگو" />
        <div className='login'>
             <div className='link'>
             <Link to="/log" href="#" className='btn btn-outline-danger'>
             ثبتنام | ورود
           </Link>
           </div>
           <Link to="/cart">
           <div className='icon'>
              <CartIcon/>
           </div>
           </Link>
        </div>
      </ul>
    </div>
    <img src={url} alt="بنر"/>
</div>
);
}
