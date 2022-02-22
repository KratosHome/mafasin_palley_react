import React, { useState } from "react";
import { BsFileArrowDownFill, BsFileArrowUpFill } from "react-icons/bs";
import "./ProductCount.css";

const ProductCount = ({
  count,
  maxCount,
  ProductIncriment,
  ProducttDecrement,
  minCount,
}) => {
  return (
    <form className="PodoctPageCounter">
      <button
        className="ProductIncriment"
        onClick={(e) => ProductIncriment(e)}
        disabled={count >= maxCount}
      >
        <BsFileArrowUpFill className="BsFileArrowUpFill" />
      </button>
      <input className="PodoctPageCounterInput" value={count} readOnly/>
      <button
        className="ProducttDecrement"
        onClick={(e) => ProducttDecrement(e)}
        disabled={count <= minCount}
      >
        <BsFileArrowDownFill className="BsFileArrowDownFill" />
      </button>
    </form>
  );
};

export default ProductCount;
