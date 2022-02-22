import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import ProductList from "../../../components/ProductList/ProductList";
import Loader from "../../../components/UL/Loader/Loader";
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

  
  return (
    <div className="container bacground_home_product_main">
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div className="home_product_container">
          <h2>HOT DEAL</h2>
          <div>Don't Miss Today's Featured Deals</div>
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

export default HotDell;
