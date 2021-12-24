import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/HomePage/Main";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFound from "../pages/NotFound/NotFound";
import ProductCatalogItem from "../pages/ProductCatalog/ProductCatalogItem";

const AppRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact_ass" element={<ContactPage />} />
        <Route path="/products" element={<ProductCatalogItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRouters;
