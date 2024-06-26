import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Box,
  ListItemIcon,
} from "@mui/material";
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";
import logo from "../homePage/assets/logo.png"; // Импортируем логотип изображения

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  marginRight: "auto",
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "50ch", // Увеличиваем ширину поисковой строки на более широких экранах
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "5px 10px" }}>
        {/* Лого */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: 70, height: "auto", marginRight: "10px" }}
        />

        {/* Главная */}
        <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
          Home
        </Button>

        {/* Страны с выпадающим списком */}
        <Box sx={{ position: "relative" }}>
          <Button
            color="inherit"
            aria-controls="countries-menu"
            aria-haspopup="true"
            aria-expanded={anchorEl ? "true" : undefined}
            onClick={handleMenuOpen}
            sx={{
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
              fontSize: "0.9rem",
            }}
          >
            WHERE TO GO <ExpandMoreIcon />
          </Button>
          <Menu
            id="countries-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor: "#212121", // dark background color
                color: "white",
                minWidth: "200px",
                borderRadius: "0",
                marginTop: "8px",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png"
                  alt="Iceland Flag"
                  style={{ width: 30, height: 20, marginRight: 10 }}
                />
              </ListItemIcon>
              Iceland
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2560px-Flag_of_Kyrgyzstan.svg.png"
                  alt="Kyrgyzstan Flag"
                  style={{ width: 30, height: 20, marginRight: 10 }}
                />
              </ListItemIcon>
              Kyrgyzstan
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png"
                  alt="Japan Flag"
                  style={{ width: 30, height: 20, marginRight: 10 }}
                />
              </ListItemIcon>
              Japan
            </MenuItem>
          </Menu>
        </Box>

        {/* О нас */}
        <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
          About
        </Button>

        {/* Админ */}
        <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
          Admin
        </Button>

        {/* Поиск по центру */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
