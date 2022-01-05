import React from "react";
import "./HomeProduct.css";
import bla from "./../../img/product/75_Headset.jpg";
import like from "./../../img/icons/like.png";
import search from "./../../img/icons/search.png";

const HomeProduct = (props) => {
  console.log(props.product.img);

  return (
    <div className="HomeProduct">
      <img src={props.product.img} />
      <div className="HomeProductName">{props.product.name}</div>
      <div className="HomeProductPrise">
        <div>${props.product.prise}</div>
        <div>${props.product.newPrise}</div>
      </div>
      <div className="HomeProductHover">
        <div className="HomeProductHoverSelectOprions">•••</div>
        <div className="HomeProductHoverSelectQuickview">
          {" "}
          <img src={search} />
        </div>
        <div className="HomeProductHoverSelectAddLikes">
          {" "}
          <img src={like} />
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
