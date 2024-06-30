import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.css";
import logo from "../homePage/assets/logo.png";
import collabLogo from "../homePage/assets/logo.png";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="footer-container">
      <Box className="footer-background" />
      <Box className="footer-content">
        <Box className="footer-logos">
          <img src={logo} alt="Main Logo" className="footer-logo" />
          <div className="collab-divider">X</div>
          <img src={collabLogo} alt="Collab Logo" className="footer-logo" />
        </Box>
        <Typography variant="h6" className="footer-heading">
          Explore Destinations Around the World
        </Typography>
        <Box className="footer-links">
          <Link
            href="#"
            color="inherit"
            underline="none"
            onClick={handleSmoothScroll}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            color="inherit"
            underline="none"
          >
            About
          </Link>
        </Box>
      </Box>
      <Typography variant="body2" className="footer-copy">
        ©ExploreXperience
      </Typography>
    </Box>
  );
};

export default Footer;
