
import '../productCard/style.css'
export const ProductCard =() =>{
    return <div className="productCard">
        <div className='mainCard'>
        <div className='card'>
            <h5 className='productname'> برنج اعلا</h5>
            <img src={require("../productCard/images/product1.jpg")}/>
            <h5 className='Price'></h5>
            <button type="button" class="btn btn-danger"><img className='buy' src={require("../productCard/images/shopping-cart-Pre.png")}/></button>
        </div>
        <div className='card'>
            <h5 className='productname'> برنج اعلا</h5>
            <img src={require("../productCard/images/product2.png")}/>
            <h5 className='Price'></h5>
            <button type="button" class="btn btn-danger"><img className='buy' src={require("../productCard/images/shopping-cart-Pre.png")}/></button>
        </div>
        <div className='card'>
            <h5 className='productname'> برنج اعلا</h5>
            <img src={require("../productCard/images/product3.jpg")}/>
            <h5 className='Price'></h5>
            <button type="button" class="btn btn-danger"><img className='buy' src={require("../productCard/images/shopping-cart-Pre.png")}/></button>
        </div>
        </div>
        </div>
         }