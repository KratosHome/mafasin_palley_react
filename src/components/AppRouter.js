import React from "react";
import { Route, Routes, useLocation, hashHistory } from "react-router-dom";
import Main from "../pages/HomePage/Main";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import CartPage from "../pages/CardPage/CardPage";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./AppRouter.css"

const AppRouters = () => {
  const location = useLocation()

  return (
    <>
      <Routes  >
        <Route path="/" element={<Main />} />
        <Route path="/contact_ass" element={<ContactPage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRouters;
