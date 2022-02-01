import React from "react";
import "./CartHeader.css";
import { Link } from "react-router-dom";
import cart from "./../../img/icons/cart.png";
import { connect } from "react-redux";
import { keys } from "lodash";

const CartHeader = ({ productsInCard }) => {
  return (
    <>
      <div className="cart">
        <Link to="/cart">
          <img src={cart} alt="cart" />
          {keys(productsInCard).length >= 1 ? (
            <div className="AddProductToHeaderCard"></div>
          ) : null}
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCard: state.productsInCard,
});

export default connect(mapStateToProps)(CartHeader);
