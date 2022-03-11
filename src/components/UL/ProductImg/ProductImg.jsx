import React, { useState } from "react";
import "./ProductImg.css";

const ProductImg = ({ img }) => {
  const [imgCheng, setImgCheng] = useState(img[0]);
  return (
    <div className="productImgTest">
      <img src={imgCheng} className="ProductImgFirst" />
      {img.map((img, index) => (
        <img
          className="ProductImgAther"
          style={{ border: imgCheng === img ? "1px solid #2dbbf0" : "" }}
          key={index}
          src={img}
          alt={img}
          onClick={() => setImgCheng(img)}
          alt={index}
        />
      ))}
    </div>
  );
};

export default ProductImg;
