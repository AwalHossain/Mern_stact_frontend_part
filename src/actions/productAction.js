import axios from "axios";
import {
  ALL_PRODUCT_DETAILS_FAIL,
  ALL_PRODUCT_DETAILS_REQUEST,
  ALL_PRODUCT_DETAILS_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    const { data } = await axios.get("http://localhost:5000/api/allProduct");
    console.log(data, "asdfads");

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  console.log(id);
  const productId = id.id;
  try {
    dispatch({
      type: ALL_PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(
      `http://localhost:5000/api/singleProduct/${id}`
    );
    console.log(data, "productDetails");

    dispatch({
      type: ALL_PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: ALL_PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Error

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
