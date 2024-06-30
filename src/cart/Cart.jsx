import React, { useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { cart, changeProductCount, deleteProductFromCart, getCart } =
    useCart();

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <div style={{ padding: "0 2.5%", marginTop: "0.7rem" }}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "95%", margin: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {[
                "Picture",
                "Country",
                "Category",
                "Price",
                "Count",
                "SubPrice",
                "Remove",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#f0f0f0",
                    borderBottom: "2px solid #ddd",
                    padding: "16px",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((elem) => (
              <TableRow
                key={elem.item.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  borderBottom: "1px solid #ddd",
                  "&:nth-of-type(even)": {
                    backgroundColor: "#f4f4f4",
                  },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  <img
                    src={elem.item.image1}
                    alt={elem.item.country}
                    width={120}
                    height={90}
                    style={{
                      borderRadius: "6px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {elem.item.country}
                </TableCell>
                <TableCell
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {elem.item.category}
                </TableCell>
                <TableCell
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {elem.item.price} сом
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={elem.count}
                    onChange={(e) =>
                      changeProductCount(elem.item.id, e.target.value)
                    }
                    style={{
                      width: "100px",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      boxShadow: "none",
                      textAlign: "center",
                      fontSize: "0.9rem",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {elem.subPrice} сом
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Button
                    onClick={() => deleteProductFromCart(elem.item.id)}
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#000000",
                      border: "1px solid #000000",
                      "&:hover": {
                        backgroundColor: "#d32f2f",
                        border: "1px solid #d32f2f",
                        color: "#ffffff",
                      },
                      textTransform: "none",
                      fontSize: "0.875rem",
                      padding: "8px 16px",
                      borderRadius: "4px",
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{
          mt: 1,
          mb: 1,
          display: "block",
          mx: "auto",
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#333333",
          },
          fontWeight: 600,
          padding: "12px 24px",
          textTransform: "uppercase",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      >
        BUY NOW {cart.totalPrice} сом
      </Button>
    </div>
  );
};

export default Cart;
