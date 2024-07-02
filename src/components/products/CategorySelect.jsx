import { TextField, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <TextField
      select
      fullWidth
      label="Category"
      name="category"
      onChange={handleInput}
      variant="outlined"
      size="small"
    >
      {categories.map((elem) => (
        <MenuItem key={elem.id} value={elem.name}>
          {elem.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategorySelect;
