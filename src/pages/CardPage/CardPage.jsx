import React from "react";
import "./CartPage.css";
import { connect } from "react-redux";

const CartPage = ({ productsInCard }) => {
  console.log(productsInCard);
  return (
    <>
      <div>Card</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCard: state.productsInCard,
});

export default connect(mapStateToProps)(CartPage);
