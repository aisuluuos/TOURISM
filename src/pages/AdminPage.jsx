import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";
import { Container, Typography } from "@mui/material";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: 60,
          fontWeight: 700,
          fontFamily: "Poppins, sans-serif",
          color: "#212529",
          margin: "20px 0", // увеличил отступы сверху и снизу
          lineHeight: 1,
        }}
      >
        Admin Page
      </Typography>
      <AddProduct onAddCategoryClick={handleOpen} />
      <AddCategory open={open} handleClose={handleClose} />
    </Container>
  );
};

export default AdminPage;
