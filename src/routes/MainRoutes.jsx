import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import Auth from "../auth/Auth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
