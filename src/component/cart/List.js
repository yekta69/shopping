import React from "react";
import { useDispatch } from "react-redux";
import { removefromCart } from "../productCard";
import "./style.css";

export const Cart = ({ products }) => {
  const dispatch = useDispatch();
  if (!products || !products.length) {
    return (
      <div>
        <h1> no products</h1>
      </div>
    );
  }

  const removeHandler = (product) => {
    dispatch(removefromCart(product));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">تصویر</th>
          <th scope="col">کالا</th>
          <th scope="col">عنوان</th>
          <th scope="col">قیمت</th>
          <th scope="col">تعداد</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((props, index) => (
          <tr key={index}>
            <th scope="row">1</th>
            <td>
              <img
                className="ProductImg"
                src={props.image}
                alt="props.firstname"
              />
            </td>
            <td>{props.id}</td>
            <td>
              <button
                onClick={() => removeHandler(props)}
                class="btn btn-danger"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
