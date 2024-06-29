import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";

const CommentModal = ({ open, handleClose, productId }) => {
  const { addComment } = useProduct();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    addComment(productId, { name, comment });
    setName(""); // Очистка поля имени
    setComment(""); // Очистка поля комментария
    handleClose(); // Закрыть модальное окно
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2, // Закругленные углы
        }}
      >
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined" // Рамка инпутов
        />
        <TextField
          fullWidth
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          variant="outlined" // Рамка инпутов
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;
