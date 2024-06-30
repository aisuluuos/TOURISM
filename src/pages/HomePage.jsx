import React from "react";
import Slider from "../components/homePage/Slider";
import Body from "../components/homePage/Body";
import ProductPage from "./ProductPage";
import Footer from "../components/homePage/Footer";
import Parallax from "../components/homePage/Parallax";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <ProductPage />
      <Parallax />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
