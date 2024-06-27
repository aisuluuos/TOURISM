import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search, setSearchParams]);

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <Paper
      sx={{
        p: 1,
        borderRadius: "10px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        width: "50%",
        margin: "auto",
        textAlign: "center",
        marginTop: "0.5rem",
        marginBottom: "-1.5rem",
      }}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={() => console.log("Search clicked")}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {search && (
                <IconButton onClick={handleClearSearch}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              )}
            </InputAdornment>
          ),
          placeholder: "Search...",
          sx: { fontSize: "0.9rem" },
        }}
        sx={{
          marginBottom: "0.3rem",
          "& .MuiInputBase-input": {
            textAlign: "center",
            fontSize: "0.9rem",
          },
        }}
      />
      <FormControl
        component="fieldset"
        sx={{ width: "100%", textAlign: "center" }}
      >
        <RadioGroup
          row
          aria-label="category"
          name="category"
          onChange={(e) => fetchByParams("category", e.target.value)}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FormControlLabel
            value="all"
            control={<Radio size="small" />}
            label="All categories"
            sx={{ fontSize: "0.9rem" }}
          />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              control={<Radio size="small" />}
              label={elem.name}
              sx={{ fontSize: "0.9rem" }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
