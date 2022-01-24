import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostServer from "../../API/PostServer";
import "./ProductPage.css";
import ProductPageItems from "./ProductPageItems";

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
      <div>
        {getProductInProduct.map((product) => (
            <ProductPageItems key={product.id} product={product}/>
        ))}
      </div>
  );
};

export default ProductPage;
