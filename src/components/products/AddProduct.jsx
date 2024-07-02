import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import { Category } from "@mui/icons-material";
import CategorySelect from "./CategorySelect";

const AddProduct = ({ onAddCategoryClick }) => {
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
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        fontFamily: '"Montserrat", sans-serif',
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontSize: "28px",
          fontWeight: 600,
          color: "black",
          marginBottom: "20px",
        }}
      >
        Add New Post
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="image1"
            fullWidth
            label="Image URL 1"
            variant="outlined"
            size="small"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="image2"
            fullWidth
            label="Image URL 2"
            variant="outlined"
            size="small"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="country"
            fullWidth
            label="Country"
            variant="outlined"
            size="small"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            fullWidth
            label="Description"
            variant="outlined"
            size="small"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="price"
            fullWidth
            type="number"
            label="Price"
            variant="outlined"
            size="small"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategorySelect handleInput={handleInput} />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button
          onClick={onAddCategoryClick}
          variant="contained"
          sx={{
            flexGrow: 1,
            maxWidth: "30%",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Add Category
        </Button>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            flexGrow: 1,
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Add Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
