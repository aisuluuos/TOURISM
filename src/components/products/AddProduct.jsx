import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { createProduct } = useProduct();
  const [product, setProduct] = useState({
    image1: "",
    image2: "",
    country: "",
    description: "",
    price: 0,
    category: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleClick = () => {
    console.log("Product to be created:", product);
    createProduct(product)
      .then((response) => {
        console.log("Product created successfully:", response);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        name="image1"
        fullWidth
        label="Image1"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="image2"
        fullWidth
        label="Image2"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="country"
        fullWidth
        label="Country"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="category"
        fullWidth
        label="Category"
        variant="outlined"
        onChange={handleInput}
      />
      <Button onClick={handleClick} fullWidth variant="contained">
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
