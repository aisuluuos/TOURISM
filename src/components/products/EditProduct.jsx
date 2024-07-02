import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, getOneProduct, oneProduct } = useProduct();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  const [product, setProduct] = useState({
    image1: "",
    image2: "",
    country: "",
    description: "",
    price: 0,
    category: "",
  });

  useEffect(() => {
    setProduct({
      image1: oneProduct.image1 || "",
      image2: oneProduct.image2 || "",
      country: oneProduct.country || "",
      description: oneProduct.description || "",
      price: oneProduct.price || 0,
      category: oneProduct.category || "",
    });
  }, [oneProduct]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleClick = () => {
    console.log("Product to be edited:", product);
    editProduct(id, product)
      .then((response) => {
        console.log("Product edited successfully:", response);
      })
      .catch((error) => {
        console.error("Error editing product:", error);
      });
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "80px auto", // Added top margin here
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
        Edit Product
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
            value={product.image1}
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
            value={product.image2}
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
            value={product.country}
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
            value={product.description}
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
            value={product.price}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="category"
            fullWidth
            label="Category"
            variant="outlined"
            size="small"
            onChange={handleInput}
            value={product.category}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
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
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditProduct;
