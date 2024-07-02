import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";
import Detail from "./Detail";
import CommentModal from "./CommentModal";
import { useCart } from "../../context/CartContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import "./ProductCard.css";

const ProductCard = ({ elem }) => {
  const { deleteProduct, toggleLike, toggleFavorite } = useProduct();
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();
  const [detailOpen, setDetailOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const isProductInCart = checkProductInCart(elem.id);

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
        <Box className="icon-container">
          <IconButton color="warning" onClick={() => setDetailOpen(true)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => setCommentModalOpen(true)}
          >
            <CommentIcon />
          </IconButton>
          <IconButton
            onClick={() => toggleLike(elem.id)}
            sx={{
              color: elem.isLiked ? "#ff1744" : "#ff1744",
            }}
          >
            {elem.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton
            onClick={() => toggleFavorite(elem.id)}
            sx={{
              color: elem.isFavorite ? "#FFD700" : "#FFD700",
            }}
          >
            {elem.isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton
            sx={{
              color: isProductInCart ? "#F06292" : "#4CAF50",
              "& svg": {
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCartIcon />
          </IconButton>

          {user.email === ADMIN && (
            <>
              <IconButton
                color="primary"
                onClick={() => navigate(`/edit/${elem.id}`)}
              >
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteProduct(elem.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
      <Detail
        elem={elem}
        open={detailOpen}
        handleClose={() => setDetailOpen(false)}
      />
      <CommentModal
        open={commentModalOpen}
        handleClose={() => setCommentModalOpen(false)}
        productId={elem.id}
      />
    </Box>
  );
};

export default ProductCard;
