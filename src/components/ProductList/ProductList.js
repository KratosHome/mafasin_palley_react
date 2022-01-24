import React from "react";
import "./HomeProduct.css";
import like from "./../../img/icons/like.png";
import search from "./../../img/icons/search.png";
import {Link} from "react-router-dom";

const ProductList=(props) => {
  return (
      <>
        <Link className="HomeProductLink" to={`/products/${props.product.id}`}>
          <div className="HomeProduct">
            <img src={props.product.img} alt={props.product.name}/>
            <div className="HomeProductName">{props.product.name}</div>
            <div className="HomeProductPrise">
              <div>${props.product.prise}</div>
              <div>${props.product.newPrise}</div>
            </div>
            <div className="HomeProductHover">
              <div className="HomeProductHoverSelectOprions">•••</div>
              <div className="HomeProductHoverSelectQuickview">
                {" "}
                <img alt="search" src={search}/>
              </div>
              <div className="HomeProductHoverSelectAddLikes">
                {" "}
                <img alt="like" src={like}/>
              </div>
            </div>
          </div>
        </Link>
      </>
  );
};

export default ProductList;
