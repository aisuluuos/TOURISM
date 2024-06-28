import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box, Pagination } from "@mui/material";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products } = useProduct();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          padding: "1rem",
          paddingBottom: "0.5rem",
          overflowX: "auto",
        }}
      >
        {paginatedProducts.map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 0.5,
          marginBottom: 0.5,
        }}
      />
    </Box>
  );
};

export default ProductList;
