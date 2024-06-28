import React from "react";
import Slider from "../components/homePage/Slider";
import Body from "../components/homePage/Body";
import ProductPage from "./ProductPage";
import Footer from "../components/homePage/Footer";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <ProductPage />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
