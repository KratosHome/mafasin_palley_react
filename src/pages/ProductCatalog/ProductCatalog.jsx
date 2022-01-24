import React, {useEffect, useState} from "react";
import PostServer from "../../API/PostServer";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCatalog.css";

const ProductCatalog=() => {
  const [getProduct, setGetProduct]=useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct=await PostServer.GetOll();
    setGetProduct(getProduct);
  }

  return (
      <div>
        <div>
          <div className="container bacground_home_product_main">
            <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
              <div className="home_product_container">
                <h2>Products Pag</h2>
                <div>Don't Miss Today's Featured Deals</div>
                <div className="home_product_list">
                  {getProduct.map((product) => (
                      <ProductList product={product}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCatalog;