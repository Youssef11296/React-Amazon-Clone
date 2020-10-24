import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { ShoppingBasketSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { auth } from "../firebase/Config";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link
        className="header__link"
        onClick={() => setShowMenu((prevState) => false)}
        to="/"
      >
        <img
          className="header__img"
          src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav" style={{ right: showMenu ? "0" : "-100%" }}>
        <Link
          className="header__link"
          onClick={() => setShowMenu((prevState) => !prevState)}
          to={!user && "/login"}
        >
          <div
            className="header__option"
            onClick={handleAuth}
            style={{ textDecoration: "none", outline: "none" }}
          >
            <small>Hello, {user ? user.email.substring(0, 4) : "Guest"}</small>
            <strong>{!user ? "Sign In" : "Sign Out"}</strong>
          </div>
        </Link>
        <Link
          className="header__link"
          onClick={() => setShowMenu((prevState) => !prevState)}
          to="/"
        >
          <div className="header__option">
            <small>Returns</small>
            <strong>& Orders</strong>
          </div>
        </Link>
        <Link
          className="header__link"
          onClick={() => setShowMenu((prevState) => !prevState)}
          to="/"
        >
          <div className="header__option">
            <small>Your</small>
            <strong>Prime</strong>
          </div>
        </Link>
        <Link
          className="header__link"
          onClick={() => setShowMenu((prevState) => !prevState)}
          to="/checkout"
        >
          <div className="header__optionBasket">
            <ShoppingBasketSharp className="header__basket" />
            <strong className="header__counter">{basket?.length}</strong>
          </div>
        </Link>
      </div>
      <div className="header__menu">
        <IconButton onClick={() => setShowMenu((prevState) => !prevState)}>
          <MenuIcon className="header__menuIcon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
