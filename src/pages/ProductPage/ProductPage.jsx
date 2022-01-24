import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostServer from "../../API/PostServer";
import "./ProductPage.css";
import ProductPageItems from "./ProductPageItems";
import Loader from "../../components/UL/Loader/Loader";

const ProductPage=() => {
  const [getProduct, setGetProduct]=useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct=await PostServer.GetOll();
    setGetProduct(getProduct);
  }

  const pageId=useParams();
  const getProductInProduct=getProduct.filter(
      (word) => word.id === +pageId.id
  );

  return (
      <>
        {
          getProductInProduct.length ? <div>
                {getProductInProduct.map((product) => (
                    <ProductPageItems key={product.id} product={product}/>
                ))}
              </div> :
              <Loader/>
        }
      </>
  );
};

export default ProductPage;
