import React from "react";
import { Box, Typography } from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ elem }) => {
  return (
    <Box className="content">
      <img src={elem.image1} className="profession_image" alt="Profession" />
      <img src={elem.image2} className="profile_image" alt="Profile" />
      <Box className="profile_detail">
        <Typography component="span">{elem.country}</Typography>
        <Typography component="p">{`What is ${elem.country} like?`}</Typography>
      </Box>
      <Box className="wrapper">
        <Box className="profile_quote">
          <Typography component="p">{elem.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
