import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://www.adweek.com/wp-content/uploads/2020/02/coronavirus-amazon-shopping-behavior-CONTENT-2020.jpg" />
        <h2 className="checkout__title">
          Your shopping basket
          {basket.length === 0 && (
            <p>
              You have no products to buy, if you wanna buy a product click the{" "}
              <br />
              "Add to basket" button which is next to the product you wanna buy
            </p>
          )}
        </h2>
        <div className="checkout__products">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
