import React from "react";
import "./Subtotal.css";
import CurrencyFoemat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getTotalBasket } from "../context/reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFoemat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalBasket(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix="$"
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
