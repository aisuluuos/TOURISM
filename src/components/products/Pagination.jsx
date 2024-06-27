import { Pagination, Stack, Typography, Box } from "@mui/material";
import React from "react";

const PaginationControlled = ({ page, countPage, handleChange }) => {
  return (
    <Box display="flex" justifyContent="center" padding={2}>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ position: "relative", left: "-10%" }}
      >
        <Typography>Page {page} :</Typography>
        <Pagination
          count={countPage}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default PaginationControlled;
