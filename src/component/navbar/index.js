
import  'bootstrap/dist/css/bootstrap.rtl.min.css'
import '../navbar/style.css'
export const Navbar =() =>{
return <div>
    <div className='Logobar'>
        <ul>
            <img className='logo' src={require("../navbar/index.jpg")} alt='لوگو'/>
              <div>
               <button type="button" class="btn btn-outline-danger">ورود/ثبتنام</button>
               <img className='Shopping' src={require("../navbar/shopping-cart.png")} alt ='سبدخرید'/>
          </div>
        </ul>
      </div>
 

<div className='baner'>
       <img src={require('../navbar/onlineShop.jpg')}  alt='بنر'/>
</div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://www.google.com">خانه</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://www.google.com">درباره ی ما</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://www.google.com">ارتباط با ما</a>
      </li>
      </ul>
   </div>
</div>
</nav>
</div>
}