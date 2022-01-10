import React, { useEffect, useState } from "react";
import PostServer from "../../API/PostServer";
import HomeProduct from "../ProductList/HomeProduct";
import "./HotDell.css";

const HotDell = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.HotDell();
    setGetProduct(getProduct);
  }

  const HotDell = getProduct.map((test) => test.categories.indexOf("Hot Dell"));

  return (
    <div className="container bacground_home_product_main">
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div className="home_product_container">
          <h2>HOT DEAL</h2>
          <div>Don't Miss Today's Featured Deals</div>
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

export default HotDell;
