import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.css";
import logo from "../homePage/assets/logo.png";
import collabLogo from "../homePage/assets/logo.png";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
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
          <Link component={RouterLink} to="/" color="inherit" underline="none">
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
        <Box className="footer-countries">
          <Link
            component={RouterLink}
            to="/countryJapan"
            color="inherit"
            underline="none"
          >
            Japan
          </Link>
          <Link
            component={RouterLink}
            to="/countryKyrgyzstan"
            color="inherit"
            underline="none"
          >
            Kyrgyzstan
          </Link>
          <Link
            component={RouterLink}
            to="/countryIceland"
            color="inherit"
            underline="none"
          >
            Iceland
          </Link>
          <Link
            component={RouterLink}
            to="/countryUkraine"
            color="inherit"
            underline="none"
          >
            Ukraine
          </Link>
          <Link
            component={RouterLink}
            to="/countryGeorgia"
            color="inherit"
            underline="none"
          >
            Georgia
          </Link>
          <Link
            component={RouterLink}
            to="/countryThailand"
            color="inherit"
            underline="none"
          >
            Thailand
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
