import { useEffect, useState } from "react";
import "../specialOffer/style.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../productCard/redux";

export const SpecialOffer = (props) => {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  console.log("222", data);
  const dispatch = useDispatch();
  if (!data) {
    return <div>...loading</div>;
  }
  const AddToCartHandler = () => {
    dispatch(AddToCart(data));
    console.log("test", AddToCart);
  };

  return (
    <div className="SpecialOffer">
      <div className="SpecialOfferData">
        <img
          src={require("../specialOffer/image/Special.jpg")}
          alt="پیشنهاد ویژه"
        />
        {/* <img src ={data.image} alt="پیشنهاد ویژه"/> */}
        <div className="information">
          <h2>{data.FirstName}</h2>
          <h4>{data.lastName}</h4>
          <h6>
            هر {data.NationalCode} : {data.password} تومان
          </h6>
          <button
            onClick={AddToCartHandler}
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
