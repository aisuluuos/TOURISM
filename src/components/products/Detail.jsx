import React from "react";
import {
  Box,
  Modal,
  Typography,
  Paper,
  IconButton,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../../context/ProductContextProvider";

const Detail = ({ elem, open, handleClose }) => {
  const { deleteComment } = useProduct();

  const handleDeleteComment = (commentIndex) => {
    deleteComment(elem.id, commentIndex);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 1000,
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  };

  const contentStyle = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const commentsStyle = {
    width: "35%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    maxHeight: "200px",
    objectFit: "cover",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 16,
  };

  const descriptionStyle = { marginBottom: 8 };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box sx={contentStyle}>
          <Typography variant="h5" gutterBottom align="center">
            {elem.country}
          </Typography>
          <div style={imageContainerStyle}>
            <img
              src={elem.image1}
              alt={`Image of ${elem.country}`}
              style={imageStyle}
            />
            <img
              src={elem.image2}
              alt={`Image of ${elem.country}`}
              style={imageStyle}
            />
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
        <Box sx={commentsStyle}>
          <Typography variant="subtitle1" align="center">
            Comments:
          </Typography>
          {elem.comments && elem.comments.length > 0 ? (
            elem.comments.map((comment, index) => (
              <Paper
                key={index}
                sx={{
                  padding: 1,
                  marginBottom: 1,
                  border:
                    comment.name === "Author"
                      ? "1px solid blue"
                      : "1px solid gray",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  wordBreak: "break-word",
                }}
              >
                <Avatar sx={{ marginRight: 1 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2">{comment.name}</Typography>
                  <Typography variant="body2">{comment.comment}</Typography>
                </Box>
                <IconButton
                  sx={{ position: "absolute", top: 0, right: 0, p: 0.5 }}
                  onClick={() => handleDeleteComment(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Paper>
            ))
          ) : (
            <Typography variant="body2" align="center">
              No comments yet
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Detail;
