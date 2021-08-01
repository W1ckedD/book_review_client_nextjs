import { LOGOUT, LOGIN } from "@store/action-types";
import { API_URL } from "@config/index";
import axios from "axios";
import { toast } from "react-toastify";

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
