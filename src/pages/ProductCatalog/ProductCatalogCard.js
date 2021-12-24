import React from "react";
import { Link } from "react-router-dom";

const ProductCatalogCard = (props) => {
  return (
    <>
      <div>{props.products.name}</div>
    </>
  );
};
export default ProductCatalogCard;
