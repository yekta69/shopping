import style from './style.css'
export const SpecialOffer =() =>{

return <div className="specialoffer">
    <div className='specialofferData'>
    <img src ={require("../specialOffer/image/spesial.jpg")} alt="پیشنهاد ویژه"/>
       <div className='information'>
      <h2>پیشنهاد ویژه</h2>
     <h4>برنج اعلا</h4>
      <h6>هر کیلو : 23500 تومان</h6>
      <button type="button" class="btn btn-danger">حالا بخرید</button>
      </div>  
    </div>
</div>
}