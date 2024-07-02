import React, { useState, useEffect } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useProduct } from "../context/ProductContextProvider";
import ProductCard from "../components/products/ProductCard";
import Footer from "../components/homePage/Footer";

const FavoritesPage = () => {
  const { products, getProducts } = useProduct();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    getProducts();
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const favoriteProducts = Array.isArray(products)
    ? products.filter((product) => product && product.isFavorite)
    : [];

  const paginatedProducts = favoriteProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            color: "#212529",
          }}
        >
          FAVORITES
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} elem={product} />
              ))
            ) : (
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "1.125rem",
                  textAlign: "center",
                }}
              >
                У вас пока нет избранных продуктов.
              </Typography>
            )}
          </Box>
          <Pagination
            count={Math.ceil(favoriteProducts.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "auto",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default FavoritesPage;
