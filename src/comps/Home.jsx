import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

const Home = () => {
  return (
    <div className="home">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
      <div className="home__row">
        <Product
          id="1"
          title="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="2"
          title="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="product one"
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="4"
          title="product one"
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="5"
          title="product one"
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="product one"
          price="20"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
