import { API_URL } from "@config/index";
import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from "@store/action-types";
import { toast } from "react-toastify";
import Router from "next/router";
import axios from "axios";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  try {
    const { data } = await axios.get(`${API_URL}/api/books/`);
    dispatch({ type: GET_BOOKS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    Router.push('/');
    dispatch({ type: GET_BOOKS_ERROR, payload: err.message });
    toast.error(err.message);
  }
};
