import React, { useState, useEffect } from "react";
import "./HomeProductMain.css";
import HomeProduct from "../../../components/ProductList/HomeProduct";
import PostServer from "../../../components/API/PostServer";

const HomeProductMain = () => {
  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/a60c60b0-90b9-42e6-a51f-0e96aff7acc9")
      .then((res) => res.json())
      .then((data) => setGetProduct(data));
  }, []);
  return (
    <div className="container bacground_home_product_main">
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
