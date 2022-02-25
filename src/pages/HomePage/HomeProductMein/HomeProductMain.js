import React, { useEffect, useState } from "react";
import "./HomeProductMain.css";
import PostServer from "../../../API/PostServer";
import Loader from "../../../components/UL/Loader/Loader";
import ProductList from "../../../components/ProductList/ProductList";
import WOW from "wow.js"
import 'animate.css';

const HomeProductMain = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.HomePage();
    setGetProduct(getProduct);
  }

  new WOW().init()


  return (
    <div className="container bacground_home_product_main">
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div className="home_product_container wow animate__animated animate__backInLeft">
          <h2>BEST SELLER</h2>
          <div>Best Seller Product This Week!</div>
          {getProduct.length ? (
            <div className="home_product_list">
              {getProduct.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProductMain;
