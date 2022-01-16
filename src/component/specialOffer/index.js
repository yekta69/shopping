import style from './style.css'
export const SpecialOffer =() =>{

return <div className="specialoffer">
    <div className='specialofferData'>
    <img src ={require("../specialOffer/image/spesial.jpg")} alt="پیشنهاد ویژه"/>
       <div className='information'>
      <h2>پیشنهاد ویژه</h2>
      <p>
      برنح درجه یک اعلا
      </p>
      <h3> هر کیلو :</h3>
     <h3>23500تومان</h3>
      <button type="button" class="btn btn-danger">حالا بخرید</button>
      </div>  
    </div>
</div>
}