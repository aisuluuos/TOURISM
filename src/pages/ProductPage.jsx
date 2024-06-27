import React from "react";
import SideBar from "../components/products/SideBar";
import ProductList from "../components/products/ProductList";

const ProductPage = () => {
  return (
    <div
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <SideBar />
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProductList
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ProductPage;
