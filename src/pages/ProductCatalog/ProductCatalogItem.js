import React, { useEffect, useState } from "react";
import ProductCatalogCard from "./ProductCatalogCard";
import "./ProfuctCatalog.css";
import product_page from "../../img/baner/product_page.jpg";
import { Link } from "react-router-dom";

const ProductCatalogItem = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/177fe180-f47f-4215-a5d6-2f3d924f9931")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="imgProductPageH1">
        <h1 className="ProductPageH1">Products</h1>
        <div className="breadСrumbs">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
      </div>
      <div>
        <div className="poductCataogName">
          {product.map((products) => (
            <ProductCatalogCard key={products.id} products={products} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCatalogItem;
