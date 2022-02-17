import React from "react";
import "./CartPage.css";
import { connect } from "react-redux";
import { useTitle } from "../../hooks/useTitle";

const CartPage = ({ productsInCard }) => {
  useTitle("Card");
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
