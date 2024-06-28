import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";
import Detail from "./Detail";
import CommentModal from "./CommentModal";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  const [detailOpen, setDetailOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const handleDelete = () => {
    deleteProduct(elem.id);
  };

  const handleEdit = () => {
    navigate(`/edit/${elem.id}`);
  };

  const handleDetailOpen = () => {
    setDetailOpen(true);
  };

  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  const handleCommentModalOpen = () => {
    setCommentModalOpen(true);
  };

  const handleCommentModalClose = () => {
    setCommentModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: "300px" }} className="content">
      <img src={elem.image1} className="profession_image" alt="Profession" />
      <img src={elem.image2} className="profile_image" alt="Profile" />
      <Box className="profile_detail">
        <Typography component="span">{elem.country}</Typography>
        <Typography component="p">{`What is ${elem.country} like?`}</Typography>
      </Box>
      <Box className="wrapper">
        <Box className="profile_quote">
          <Typography className="desc" component="p">
            {elem.description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton color="warning" onClick={handleDetailOpen}>
            <VisibilityIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleCommentModalOpen}>
            <CommentIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Detail elem={elem} open={detailOpen} handleClose={handleDetailClose} />
        <CommentModal
          open={commentModalOpen}
          handleClose={handleCommentModalClose}
          productId={elem.id}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
