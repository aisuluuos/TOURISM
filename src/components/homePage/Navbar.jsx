import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  Box,
  IconButton,
  Badge,
  Typography,
  Tooltip,
  MenuItem,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from "@mui/icons-material";
import logo from "../homePage/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import { getProductsCountInCart } from "../../helpers/functions";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [badgeCount, setBadgeCount] = useState(0);
  const { addProductToCart } = useCart();
  const { user, handleLogOut, authListener } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  useEffect(() => {
    authListener();
  }, [authListener]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "5px 10px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 100, height: "auto", marginRight: "10px" }}
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
                  backgroundColor: "black",
                  color: "white",
                  minWidth: "200px",
                  borderRadius: "0",
                  marginTop: "8px",
                },
              }}
            >
              <div className="drd">
                <div className="cl">
                  <div className="dcon">
                    <div className="dtit">Where to go</div>
                    <div className="drcontainer">
                      <div className="contitem">
                        <div className="legend">Top Recommendations</div>
                        <a
                          onClick={() => navigate("/countryIceland")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png"
                              alt="Iceland Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Iceland</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryKyrgyzstan")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2560px-Flag_of_Kyrgyzstan.svg.png"
                              alt="Kyrgyzstan Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Kyrgyzstan</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryJapan")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png"
                              alt="Japan Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Japan</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryItaly")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                              alt="Italy Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Italy</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryGeorgia")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"
                              alt="Georgia Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Georgia</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryThailand")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
                              alt="Thailand Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Thailand</div>
                        </a>
                        <a
                          onClick={() => navigate("/countryUkraine")}
                          className="href"
                        >
                          <div className="menuitem">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
                              alt="Ukraine Flag"
                              style={{
                                width: 30,
                                height: 20,
                                marginRight: 10,
                                opacity: 1,
                              }}
                              className="image"
                            />
                          </div>
                          <div className="menuitemmeta">Ukraine</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          {user.email === ADMIN && (
            <Link to={"/admin"} style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{ fontSize: "0.9rem", ml: 1, color: "white" }}
              >
                Admin
              </Button>
            </Link>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to={"/cart"} style={{ color: "white", marginRight: "10px" }}>
            <IconButton color="inherit">
              <Badge badgeContent={badgeCount} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          {user ? (
            <>
              <Tooltip title="Open profile menu">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  color="inherit"
                >
                  <Typography
                    sx={{ color: "white" }}
                  >{`Hello, ${user.email}!`}</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    backgroundColor: "black",
                    color: "white",
                    minWidth: "200px",
                    borderRadius: "0",
                    marginTop: "8px",
                    "& .MuiMenuItem-root": {
                      padding: "10px 20px",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#444",
                      },
                    },
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleLogOut();
                    handleCloseUserMenu();
                  }}
                  className="logout-btn"
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "white", width: "100%", textAlign: "center" }}
                  >
                    LogOut
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to={"/auth"}>
              <Button
                color="inherit"
                sx={{ fontSize: "0.9rem", ml: 1, color: "white" }}
              >
                Register
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
