
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import {Link} from 'react-router-dom'
import {CartIcon} from '../Cart/cart-icon'
export const Banner=({url}) =>{
return (<div className='baner'>
     <div className="Logobar">
      <ul>
        <img className="logo" src={require("../navbar/image/index.jpg")} alt="لوگو" />
        <div className='login'>
          {/* <button type="button" className="btn btn-outline-danger" onclick="location.href = 'www.google.com';">
          ppppppppp
           </button> */}
           <div className='link'>
             <Link to="/log" href="#" className='btn btn-outline-danger'>
             ثبتنام/ورود
           </Link>
           </div>
           <div className='icon'>
              <CartIcon/>
           </div>
          
        </div>
      </ul>
    </div>
    <img src={url} alt="بنر"></img>
</div>
);
}
