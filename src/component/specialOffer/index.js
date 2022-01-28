
import '../specialOffer/style.css'
export const SpecialOffer =(props,{data}) =>{

  console.log("ttttt",props)
if(!data){
  return<div>...loading</div>
}

return <div className="specialoffer">
    <div className='specialofferData'>
    <img src = {require("../specialOffer/image/spesial.jpg")} alt="پیشنهاد ویژه"/>
    {/* <img src ={data.image} alt="پیشنهاد ویژه"/> */}
       <div className='information'>
      <h2>{data.firstname}</h2>
     <h4>{data.lastName}</h4>
      <h6>هر {data.nationalcode} : {data.password} تومان</h6>
      <button type="button" className="btn btn-danger">حالا بخرید</button>
      </div>  
    </div>
</div>
}