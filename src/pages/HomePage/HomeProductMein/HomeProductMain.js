import React, { useState, useEffect } from "react";
import "./HomeProductMain.css";
import HomeProduct from "../../../components/ProductList/HomeProduct";
import PostServer from "../../../API/PostServer";
import axios from "axios";

const HomeProductMain = ({ props }) => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.HomePage();
    setGetProduct(getProduct);
  }
  const homeProduct = getProduct.map((test) =>
    test.categories.indexOf("Home Page")
  );

  return (
    <div className="container bacground_home_product_main">
      <div>{getProduct.name}</div>
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div className="home_product_container">
          <h2>BEST SELLER</h2>
          <div>Best Seller Product This Week!</div>
          <div className="home_product_list">
            {getProduct.map((product) => (
              <HomeProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductMain;
