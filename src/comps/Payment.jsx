import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../context/StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__header">
        <h2>
          Checkout
          <Link
            className="payment__link"
            to="/checkout"
          >{` ${basket?.length} items`}</Link>
        </h2>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h2>Delivery address</h2>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>{user?.address}</p>
          <p>Some text ..</p>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h2>Review items and delivery</h2>
        </div>
        <div className="payment__products">
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h2>Payment method</h2>
        </div>

        <div className="payment__info">
          <div className="payment__card">
            <div className="card__left">
              <h4>Card details</h4>
              <span>Card number</span>
            </div>
            <div className="card__right">
              <span>MM/YY CVC</span>
            </div>
          </div>
          <div className="payment__total">
            <h3>Order total $100</h3>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
