
import {Link} from 'react-router-dom'
export const Banner=({url}) =>{
return (<div className='baner'>
     <div className="Logobar">
      <ul>
        <img className="logo" src={require("../navbar/image/index.jpg")} alt="لوگو" />
        <div>
          {/* <button type="button" className="btn btn-outline-danger" onclick="location.href = 'www.google.com';">
          ppppppppp
           </button> */}

           <Link to="/log" href="#" className='btn btn primary'>
             ثبتنام/ورود
           </Link>
          <img
            className="Shopping"
            src={require("../navbar/image/shopping-cart.png")}
            alt="سبدخرید"
          />
        </div>
      </ul>
    </div>
    <img src={url} alt="بنر"></img>
</div>
);
}
