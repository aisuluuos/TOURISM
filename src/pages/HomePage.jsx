import React from "react";
import Slider from "../components/homePage/Slider";
import Body from "../components/homePage/Body";
import ProductPage from "./ProductPage";
import Parallax from "../components/homePage/Parallax";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <ProductPage />
      <Parallax />
      <Body />
    </div>
  );
};

export default HomePage;
