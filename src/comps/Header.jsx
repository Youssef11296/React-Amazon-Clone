import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { ShoppingBasketSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__img"
          src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div
            className="header__option"
            style={{ textDecoration: "none", outline: "none" }}
          >
            <small>Hello Gest</small>
            <strong>Sign In</strong>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <small>Returns</small>
            <strong>& Orders</strong>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <small>Your</small>
            <strong>Prime</strong>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketSharp className="header__basket" />
            <strong className="header__counter">{basket?.length}</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
