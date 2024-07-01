import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API2 } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};

const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! create
  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };

  //! get
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  //! getOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  //! edit
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };

  //! createCategory
  const createCategory = async (newCategory) => {
    await axios.post(API2, newCategory);
    navigate("/products");
  };

  //! getCategories
  const getCategories = async () => {
    const { data } = await axios(API2);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  };

  //! addComment
  const addComment = async (productId, comment) => {
    const { data } = await axios.get(`${API}/${productId}`);
    const updatedProduct = {
      ...data,
      comments: [...(data.comments || []), comment],
    };
    await axios.patch(`${API}/${productId}`, updatedProduct);
    getProducts();
  };

  //! deleteComment
  const deleteComment = async (productId, commentIndex) => {
    const { data } = await axios.get(`${API}/${productId}`);
    const updatedComments = data.comments.filter(
      (_, index) => index !== commentIndex
    );
    const updatedProduct = {
      ...data,
      comments: updatedComments,
    };
    await axios.patch(`${API}/${productId}`, updatedProduct);
    getProducts();
  };

  //! toggleLike
  const toggleLike = async (productId) => {
    const { data } = await axios.get(`${API}/${productId}`);
    const updatedProduct = {
      ...data,
      isLiked: !data.isLiked,
    };
    await axios.patch(`${API}/${productId}`, updatedProduct);
    getProducts();
  };

  //! filter
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
    addComment,
    deleteComment,
    toggleLike,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
