import { useEffect, useState } from "react";
import "../specialOffer/style.css";
import{CartIcon} from "../cart/cart-icon"
export const SpecialOffer = (props) => {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
   if (!data) {
    return <div>...loading</div>;
  }
  return (
    <div className="specialoffer">
      <div className="specialofferData">
        <img
          src={require("../specialOffer/image/spesial.jpg")}
          alt="پیشنهاد ویژه"
        />
        {/* <img src ={data.image} alt="پیشنهاد ویژه"/> */}
        <div className="information">
          <h2>{data.firstname}</h2>
          <h4>{data.lastName}</h4>
          <h6>
            هر {data.nationalcode} : {data.password} تومان
          </h6>
          <button type="button" className="btn btn-danger">
            حالا بخرید
          </button>
          <CartIcon/>
        </div>
      </div>
    </div>
  );
};
