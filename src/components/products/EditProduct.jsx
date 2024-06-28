import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, getOneProduct, oneProduct } = useProduct();

  useEffect(() => {
    getOneProduct(id);
  }, []);

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
        value={product.image1}
      />
      <TextField
        name="image2"
        fullWidth
        label="Image2"
        variant="outlined"
        onChange={handleInput}
        value={product.image2}
      />
      <TextField
        name="country"
        fullWidth
        label="Country"
        variant="outlined"
        onChange={handleInput}
        value={product.country}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
        value={product.price}
      />
      <TextField
        name="category"
        fullWidth
        label="Category"
        variant="outlined"
        onChange={handleInput}
        value={product.category}
      />
      <Button onClick={handleClick} fullWidth variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default EditProduct;
