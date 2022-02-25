import React, { useEffect, useState } from "react";
import PostServer from "../../../API/PostServer";
import ProductList from "../../../components/ProductList/ProductList";
import Loader from "../../../components/UL/Loader/Loader";
import "./HotDell.css";
import WOW from "wow.js"

const HotDell = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.HotDell();
    setGetProduct(getProduct);
  }


  new WOW().init()

  return (
    <div className="container bacground_home_product_main ">
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
        <div className="home_product_container wow animate__animated animate__backInUp">
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
