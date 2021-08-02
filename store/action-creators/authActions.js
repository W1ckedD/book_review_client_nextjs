import { LOGOUT, LOGIN } from "@store/action-types";
import { API_URL } from "@config/index";
import axios from "axios";
import { toast } from "react-toastify";
import Router from "next/router";

export const login =
  ({ username, password }) =>
  (dispatch) => {
    axios
      .post(`${API_URL}/api/auth/login/`, { username, password })
      .then((res) => {
        const { token } = res.data;
        console.log(token);
        axios
          .post("/api/login/", { token })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        dispatch({
          type: LOGIN,
          payload: { user: res.data.user, token: res.data.token },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

export const logout = () => (dispatch) => {
  axios
    .post("/api/logout/")
    .then((res) => {
      dispatch({ type: LOGOUT });
      Router.push("/");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    });
};

export const getUser = () => (dispatch) => {
  axios
    .get("/api/get-user/")
    .then((res) => {
      const { token } = res.data;
      if (token.length > 0) {
        axios
          .get(`${API_URL}/api/auth/get-user/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            const user = res.data;
            if (user) {
              dispatch({ type: LOGIN, payload: { token, user } });
            } else {
              dispatch({ type: LOGOUT });
              Router.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      } else {
        dispatch({ type: LOGOUT });
        Router.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.message);
    });
};
