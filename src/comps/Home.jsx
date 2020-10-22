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
          key="1"
          title="Product One"
          price="200.99"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img15/rcx-events/AurDikhaoStore/400x400_Vodoo_1.jpg"
        />
        <Product
          id="2"
          key="2"
          title="Product Two"
          price="280.99"
          rating={3}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550087016-white-noise-machine-best-selling-amazon-products-1550086992.jpg?crop=1xw:1xh;center,top&resize=480:*"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          key="3"
          title="product Three"
          price="120.99"
          rating={4}
          image="https://www.slickwraps.com/media/catalog/product/cache/1/image/491x491/9df78eab33525d08d6e5fb8d27136e95/e/c/eco-dot-2nd-ver_color_matte-black.jpg"
        />
        <Product
          id="4"
          key="4"
          title="product Four"
          price="300.99"
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="5"
          key="5"
          title="product Five"
          price="299.99"
          rating={5}
          image="https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          key="6"
          title="product Six"
          price="400.99"
          rating={4}
          image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
        />
      </div>
    </div>
  );
};

export default Home;
