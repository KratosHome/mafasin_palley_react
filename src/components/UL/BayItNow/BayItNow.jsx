import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./BayItNow.css";

const BayItNow = ({ id, count, addProductToCard }) => {
  console.log();
  return (
    <>
      <Link to="/cart">
        <button
          className="BuyItNow"
          onClick={() => addProductToCard(id, count)}
        >
          buy it now
        </button>
      </Link>
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

export default connect(null, mapDispatchToProps)(BayItNow);
