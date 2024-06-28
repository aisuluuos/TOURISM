import React from "react";
import { Box, Modal, Typography, Grid } from "@mui/material";

const Detail = ({ elem, open, handleClose }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: 700,
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 16,
  };

  const imageStyle = {
    width: "48%",
    height: "auto",
    borderRadius: 8,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const descriptionStyle = {
    marginBottom: 8,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h5" gutterBottom align="center">
          {elem.country}
        </Typography>
        <div style={imageContainerStyle}>
          <img src={elem.image1} alt="" style={imageStyle} />
          <img src={elem.image2} alt="" style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <Typography variant="body1" style={descriptionStyle}>
            {elem.description}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Price: {elem.price}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;
