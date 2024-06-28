import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from "@mui/icons-material";
import logo from "../homePage/assets/logo.png";
import { Link } from "react-router-dom";

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 70, height: "auto", marginRight: "10px" }}
          />
          <Link to={"/"}>
            <Button color="inherit" sx={{ fontSize: "0.9rem", color: "white" }}>
              Home
            </Button>
          </Link>
          <Box sx={{ position: "relative", marginLeft: "auto" }}>
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
                ml: 1,
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
                  backgroundColor: "#212121",
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png"
                    alt="Japan Flag"
                    style={{ width: 30, height: 20, marginRight: 10 }}
                  />
                </ListItemIcon>
                Japan
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
                    src="https://img.freepik.com/premium-photo/ukraine-national-fabric-flag-textile-background-symbol-international-world-european-country_113767-2440.jpg"
                    alt="Ukraine Flag"
                    style={{ width: 30, height: 20, marginRight: 10 }}
                  />
                </ListItemIcon>
                Ukraine
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/2560px-Flag_of_Georgia.svg.png"
                    alt="Georgia Flag"
                    style={{ width: 30, height: 20, marginRight: 10 }}
                  />
                </ListItemIcon>
                Georgia
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <img
                    src="https://img.goodfon.ru/wallpaper/big/3/64/thailand-flag-flag-of-thailand-thailand-large-flag-national.jpg"
                    alt="Thailand Flag"
                    style={{ width: 30, height: 20, marginRight: 10 }}
                  />
                </ListItemIcon>
                Thailand
              </MenuItem>
            </Menu>
          </Box>
          <Link to={"/about"}>
            <Button
              color="inherit"
              sx={{ fontSize: "0.9rem", ml: 1, color: "white" }}
            >
              About
            </Button>
          </Link>
          <Link to={"/admin"}>
            <Button
              color="inherit"
              sx={{ fontSize: "0.9rem", ml: 1, color: "white" }}
            >
              Admin
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to={"/cart"} style={{ color: "white", marginRight: "10px" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <Link to={"/auth"}>
            <Button
              color="inherit"
              sx={{ fontSize: "0.9rem", ml: 1, color: "white" }}
            >
              Register
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
