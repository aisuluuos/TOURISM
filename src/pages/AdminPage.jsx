import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";
import { Button, Container, Typography, Grid } from "@mui/material";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      maxWidth="fullwidth"
      sx={{ py: 4, backgroundColor: "lightcyan" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Admin Page
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button onClick={handleOpen} variant="contained" color="secondary">
            Add Category
          </Button>
        </Grid>
      </Grid>
      <AddProduct />
      <AddCategory open={open} handleClose={handleClose} />
    </Container>
  );
};

export default AdminPage;

// import React, { useState } from "react";
// import AddProduct from "../components/products/AddProduct";
// import AddCategory from "../components/products/AddCategory";
// import { Button } from "@mui/material";

// const AdminPage = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <div>
//       <Button onClick={handleOpen}>Add Category</Button>
//       <AddProduct />
//       <AddCategory open={open} handleClose={handleClose} />
//     </div>
//   );
// };

// export default AdminPage;
