import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/HomePage/Main";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import CartPage from "../pages/CardPage/CardPage";
import "./AppRouter.css"
import Search from "./Search/Search";

const AppRouters = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/contact_ass" element={<ContactPage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRouters;
