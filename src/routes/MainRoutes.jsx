import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import Auth from "../auth/Auth";
import CountryJapan from "../pages/CountryJapan";
import CountryKyrgyzstan from "../pages/CountryKyrgyzstan";
import CountryIceland from "../pages/CountryIceland";
import CountryUkraine from "../pages/CountryUkraine";
import CountryGeorgia from "../pages/CountryGeorgia";
import CountryThailand from "../pages/CountryThailand";

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
      <Route path="/countryJapan" element={<CountryJapan />} />
      <Route path="/countryKyrgyzstan" element={<CountryKyrgyzstan />} />
      <Route path="/countryIceland" element={<CountryIceland />} />
      <Route path="/countryUkraine" element={<CountryUkraine />} />
      <Route path="/countryGeorgia" element={<CountryGeorgia />} />
      <Route path="/countryThailand" element={<CountryThailand />} />
    </Routes>
  );
};

export default MainRoutes;
