import React from "react";
import { connect } from "react-redux";
import "./ButtonAddToCart.css";

const ButtonAddToCart = ({ id, count, addProductToCard }) => {
  return (
    <>
      <button
        className="buttonAddProductToCard"
        onClick={() => addProductToCard(id, count)}
      >
        add to cart
      </button>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProductToCard: (id, count) =>
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      id: id,
      count: count,
    }),
});

export default connect(null, mapDispatchToProps)(ButtonAddToCart);
