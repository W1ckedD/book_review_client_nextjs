import { API_URL } from "@config/index";
import { GET_BOOKS, LOADING_FALSE, LOADING_TRUE } from "@store/action-types";
import { toast } from "react-toastify";
import Router from "next/router";
import axios from "axios";

export const getBooks = () => (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  axios
    .get(`${API_URL}/api/books/`)
    .then((res) => {
      dispatch({ type: GET_BOOKS, payload: res.data });
      dispatch({ type: LOADING_FALSE });
    })
    .catch((err) => {
      console.log(err);
      Router.push("/error");
    });
};
