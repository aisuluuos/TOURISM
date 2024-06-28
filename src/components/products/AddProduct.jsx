import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import AddCategory from "./AddCategory";

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
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        borderRadius: 8,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "lightyellow",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add New Post
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="image1"
            fullWidth
            label="Image URL 1"
            variant="outlined"
            margin="normal"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="image2"
            fullWidth
            label="Image URL 2"
            variant="outlined"
            margin="normal"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="country"
            fullWidth
            label="Country"
            variant="outlined"
            margin="normal"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            fullWidth
            label="Description"
            variant="outlined"
            margin="normal"
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
            margin="normal"
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="category"
            fullWidth
            label="Category"
            variant="outlined"
            margin="normal"
            onChange={handleInput}
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Add Post
      </Button>
      <AddCategory />
    </Box>
  );
};

export default AddProduct;

// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { useProduct } from "../../context/ProductContextProvider";
// import AddCategory from "./AddCategory";

// const AddProduct = () => {
//   const { createProduct } = useProduct();
//   const [product, setProduct] = useState({
//     image1: "",
//     image2: "",
//     country: "",
//     description: "",
//     price: 0,
//     category: "",
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: name === "price" ? Number(value) : value,
//     }));
//   };

//   const handleClick = () => {
//     console.log("Product to be created:", product);
//     createProduct(product)
//       .then((response) => {
//         console.log("Product created successfully:", response);
//       })
//       .catch((error) => {
//         console.error("Error creating product:", error);
//       });
//   };

//   return (
//     <Box
//       sx={{
//         width: "50vw",
//         height: 500,
//         margin: "20px auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h4" align="center">
//         ADMIN PAGE
//       </Typography>
//       <TextField
//         name="image1"
//         fullWidth
//         label="Image1"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="image2"
//         fullWidth
//         label="Image2"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="country"
//         fullWidth
//         label="Country"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="description"
//         fullWidth
//         label="Description"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="price"
//         fullWidth
//         label="Price"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="category"
//         fullWidth
//         label="Category"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <AddCategory />
//       <Button onClick={handleClick} fullWidth variant="contained">
//         Add Post
//       </Button>
//     </Box>
//   );
// };

// export default AddProduct;
