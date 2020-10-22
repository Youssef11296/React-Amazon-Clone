import { Star } from "@material-ui/icons";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{}, dispatch] = useStateValue();

  const remove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <div className="checkout__product">
      <img className="checkout__productImage" src={image} />
      <div className="checkout__ProductInfo">
        <h3 className="checkout__productTitle">{title}</h3>
        <div className="checkout__productPrice">${price}</div>
        <div className="checkout__productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star />
            ))}
        </div>
        <button onClick={remove}>Remove from the basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
