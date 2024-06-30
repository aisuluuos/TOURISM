import React from "react";
import Slider from "../components/homePage/Slider";
import Body from "../components/homePage/Body";
import ProductPage from "./ProductPage";
import Parallax from "../components/homePage/Parallax";
import Footer from "../components/homePage/Footer";

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
