import { useEffect, useState } from "react";
import "../specialOffer/style.css";
import { useDispatch } from "react-redux";
// import{CartIcon} from "../Cart/cart-icon"
import { addtoCart, cartstore } from "../productCard/redux";
// import {Link} from 'react-router-dom'

export const SpecialOffer = (props) => {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);

    // cartstore.subscribe(() => {
    //   console.log("log", cartstore.getState());
    // });
  }, [props.data]);

  const dispach = useDispatch();
  if (!data) {
    return <div>...loading</div>;
  }
  const addtocartHandler = () => {
    dispach(addtoCart(data));
    console.log("test", addtoCart);
  };

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
          <button
            onClick={addtocartHandler}
            type="button"
            className="btn btn-danger"
          >
            حالا بخرید
          </button>
        </div>
      </div>
    </div>
  );
};
