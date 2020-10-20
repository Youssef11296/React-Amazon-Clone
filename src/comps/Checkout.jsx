import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://www.adweek.com/wp-content/uploads/2020/02/coronavirus-amazon-shopping-behavior-CONTENT-2020.jpg" />
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
